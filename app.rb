# app.rb
require "sinatra"
require "sinatra/activerecord"
require "./models/game.rb"
require "./models/player.rb"

set :database, "sqlite3:tictactoe.sqlite3"

before do
  content_type 'application/json'
end

get "/" do
  JSON games: Game.all.as_json(include: :players)
end

get "/game/:id" do
  JSON Game.find_by_id(params[:id]).as_json(include: :players) || halt(404)
end

post "/game" do
  game = Game.new.from_json(request.body.read)
  if game.save
     JSON game.as_json(include: :players)
  else
    halt(422)
  end
end

post "/game/:id" do
  game = Game.find_by_id(params[:id]) || halt(404)
  if game.update(moves: JSON.parse(request.body.read))
    JSON game.as_json(include: :players)
  else
    halt(422)
  end
end
