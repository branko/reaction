json.(@board, :id, :title, :created_at, :updated_at)

json.lists @board.lists do |l|
  json.(l, :id, :title, :created_at, :updated_at)
  json.cards l.cards
end

# {"board":{"id":1,"title":"Test Board","created_at":"2018-07-02T21:21:35.544Z","updated_at":"2018-07-02T21:21:35.544Z"}}

# json.id @board.id
# json.title @board.title
# json.created_at @board.created_at
# json.updated_at @board.updated_at
#
# ### 1.8.3. Successful Response
#
# The board is returned with the following nested data:
#
# - board -\>
#   - lists -\>
#     - list -\>
#       - cards -\>
#         - card
#
# Cards do not include all of the card data. This response includes only the following data for cards: `id`, `title`, `due_date`, `labels`, `description`, `list_id`, `board_id`, `position`, `comments_count`.
#
# The response status code is 200.
#
# #### 1.8.3.1. Example Response
#
# ```json
# {
#   "id": 1,
#   "title": "Web dev",
#   "created_at": "2017-10-04T05:57:02.777Z",
#   "updated_at": "2017-10-04T05:57:02.777Z",
#   "lists": [
#     {
#       "id": 3,
#       "title": "CSS",
#       "board_id": 1,
#       "created_at": "2017-10-04T06:53:39.302Z",
#       "updated_at": "2017-10-04T06:53:39.302Z",
#       "position": 65535.0,
#       "cards": [
#         {
#           "id": 7,
#           "title": "1",
#           "due_date": null,
#           "labels": [
#             "red",
#             "purple"
#           ],
#           "description": "Selectors",
#           "list_id": 3,
#           "board_id": 1,
#           "position": 65535.0,
#           "comments_count": 0
#         }
#       ]
#     }
#   ]
# }
# ```
#
# ### 1.8.4. Error Response
#
# If the board doesn’t exist an error will be returned with a 404 status code.
