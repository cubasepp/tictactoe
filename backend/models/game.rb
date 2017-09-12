class Game < ActiveRecord::Base
  serialize :moves, Array

  has_many :players
  has_one :player

  accepts_nested_attributes_for :players
  after_create :default_value
  before_save :switch_player

  private
  WINS = [0, 1, 2],
         [3, 4, 5],
         [6, 7, 8],
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [0, 4, 8],
         [2, 4, 6]

  def default_value
    self.moves = Array.new(9)
    self.player_id = self.players.first.id
    self.save()
  end

  def switch_player
    if WINS.any? { |a, b, c| (self.moves[a] && self.moves[a] === self.moves[b] && self.moves[a] === self.moves[c]) } or 
       self.moves.all? { |move| not move.nil? }
      return
    end

    if has_changes_to_save?
      self.player_id = self.players.first.id == self.player_id ? self.players.second.id : self.players.first.id
    end
  end
end
