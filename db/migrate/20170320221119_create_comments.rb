class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string "summary"
      t.integer "player_id"
      t.timestamps
    end
  end
end
