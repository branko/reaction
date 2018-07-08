json.(@board, :id, :title, :created_at, :updated_at)

json.lists @board.lists do |l|
  json.(l, :id, :title, :created_at, :updated_at)
  json.board_id @board.id
  json.cards l.cards
end