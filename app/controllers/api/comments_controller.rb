class Api::CommentsController < ApplicationController

  def create
    card = Card.find(params[:card_id])
    @comment = Comment.new(comment_params.merge({card: card}))

    if @comment.save
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end
end
