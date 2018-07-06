class Api::ListsController < ApplicationController

  def create
    board = Board.find(params[:board_id])
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

  def update
    @list = List.find(params[:id])

    if @list.update(list_params)
      render :update
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActionController::ParameterMissing
    @error = "Invalid list id provided"
    render 'api/shared/error', status: :unprocessable_entity
  end

  private

  def list_params
    params.require(:list).permit(:title)
  end
end


# ## 1.10. PUT/PATCH /api/lists/:id

# Update a list.

# ### 1.10.1. Controller#Action

# `api/lists#update`

# ### 1.10.2. Expected Payload

# Any combination of `title` and `position` can be provided. The only requirement is that at least one must be provided.

# ```json
# {
#   "title": "Updated title",
#   "position": 137882
# }
# ```

# ### 1.10.3. Successful Response

# The list is returned in JSON form with a 200 status code.

# #### 1.10.3.1. Example Response

# ```json
# {
#   "id": 1,
#   "title": "Updated title",
#   "position": 137882.0,
#   "board_id": 1,
#   "created_at": "2017-10-04T05:57:07.222Z",
#   "updated_at": "2017-10-06T23:48:44.540Z"
# }
# ```

# ### 1.10.4. Error Response

# If a list with the provided `id` doesn’t exist, an error will be returned with a 404 status code. If no title or position is provided, an error is returned with a 422 “Unprocessable Entity” status code.
