json.(@board, :id, :title, :created_at, :updated_at)

json.lists @board.lists do |l|
  json.(l, :id, :title, :created_at, :updated_at)
  json.board_id @board.id
  json.cards l.cards do |card|
    json.(card, :id, :title, :list_id, :board_id, :created_at, :updated_at, :labels, :due_date, :completed, :description, :archived)
    json.comments_count card.comments_count
  end
end
