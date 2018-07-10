class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :text, default: ''
      t.references :card
      
      t.timestamps
    end
  end
end
