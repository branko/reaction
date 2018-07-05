class AddLabelsToCard < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :labels, :text, array:true, default: []
  end
end
