class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.references :list
      t.references :board
      t.timestamps
    end
  end
end
