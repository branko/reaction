class Api::ListsController < ApplicationController

  def create
    board_id = params[:board_id]
    board = Board.find(board_id)
    @list = List.new(list_params.merge({board: board}))

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActionController::ParameterMissing
    @error = "Invalid list data provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end


# ## 1.9. POST /api/lists

# Creates a list.

# ### 1.9.1. Controller#Action

# `api/lists#create`

# ### 1.9.2. Expected Payload

# NOTE: The `board_id` where the list will reside is required.

# ```json
# {
#   "board_id": 1,
#   "list": { 
#     "title": "My list"
#   }
# }
# ```

# ### 1.9.3. Successful Response

# The list is returned in JSON form with a 201 status code.

# #### 1.9.3.1. Example Response

# ```json
# {
#   "id": 10,
#   "title": "My list",
#   "board_id": 1,
#   "created_at": "2017-10-06T23:40:26.606Z",
#   "updated_at": "2017-10-06T23:40:26.606Z",
#   "position": 65535.0
# }
# ```

# ### 1.9.4. Error Response

# If a board with the provided `board_id` doesn’t exist, an error will be returned with a 404 status code. If no title is provided, an error is returned with a 422 “Unprocessable Entity” status code.