# app.rb
require 'sinatra'
require "sinatra/activerecord"

set :database, "sqlite3:tictactoe.sqlite3"

get '/' do
  "Hello World!"
end
