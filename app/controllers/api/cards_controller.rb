class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    render :show
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  def create
    list = List.find(params[:list_id])
    board = Board.find(list.board_id)
    @card = Card.new(card_params.merge({list: list}).merge(board: board))

    if @card.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
    
  rescue ActionController::ParameterMissing
    @error = "Invalid card data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :update
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  
  rescue ActionController::ParameterMissing
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def card_params
    params.require(:card).permit(:title)
  end
end



# ## 1.11. POST /api/cards

# Creates a card. This also generates a card action describing that the card was added to the given list.

# ### 1.11.1. Controller#Action

# `api/cards#create`

# ### 1.11.2. Expected Payload

# NOTE: The `list_id` where the card will reside is required.

# ```json
# {
#   "list_id": 13,
#   "card": {
#     "title": "My new card"
#   }
# }
# ```

# ### 1.11.3. Successful Response

# The new card is returned in JSON format with a 201 response status code.

# #### 1.11.3.1. Example Response

# ```json
# {
#   "id": 9,
#   "title": "My new card",
#   "description": "",
#   "labels": [],
#   "list_id": 13,
#   "position": 65535.0,
#   "archived": false,
#   "created_at": "2017-10-08T17:54:55.285Z",
#   "updated_at": "2017-10-08T17:54:55.285Z",
#   "due_date": null,
#   "completed": false,
#   "board_id": 1,
#   "comments_count": 0
# }
# ```

# ### 1.11.4. Error Response

# If an invalid (or no) `list_id` is provided, an error will be returned with a 404 response status code. The only required field is the title. If no title (or a blank one) is provided, a 422 “Unprocessable Entity” status code will be returned along with an error describing the problem.