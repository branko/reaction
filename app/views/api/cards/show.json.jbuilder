json.merge! @card.attributes #(@card, :id, :title, :created_at, :updated_at, :list_id, :board_id, :labels, :due_date, :actions, :description, :archived)
json.comments @card.comments
