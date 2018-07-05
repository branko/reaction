class AddDueDateToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :due_date, :date, default: nil
  end
end
