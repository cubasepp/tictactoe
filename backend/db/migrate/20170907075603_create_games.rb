class CreateGames < ActiveRecord::Migration[5.1]
  def change
      create_table :games do |t|
        t.text :moves
        t.integer :player_id
    end
  end
end
