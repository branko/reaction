class CreateActions < ActiveRecord::Migration[5.1]
  def change
    create_table :actions do |t|
      t.string :description, nil: false, default: ''
      t.references :card
      
      t.timestamps
    end
  end
end
