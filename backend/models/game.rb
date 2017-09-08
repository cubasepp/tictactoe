class Game < ActiveRecord::Base
  serialize :moves, Array

  has_many :players
  has_one :player

  accepts_nested_attributes_for :players
  after_create :default_value
  before_update :switch_player

  private
  def default_value
    self.moves = Array.new(9)
    self.player_id = self.players.first.id
    self.save()
  end

  def switch_player
    if self.moves_changed?
      self.player_id = self.players.first.id == self.player_id ? self.players.second.id : self.players.first.id
    end
  end
end
