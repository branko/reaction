class Api::CardsController < ApplicationController

  def show
    @card = Card.find(params[:id])
    render :show, status: :ok
  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  def create
    list = List.find(params[:list_id])
    board = Board.find(list.board_id)
    @card = Card.new(card_params.merge({list: list}).merge(board: board))

    if @card.save
      create_actions(@card, { new: true })
      render :create, status: :created
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid list id provided"
    render 'api/shared/error', status: :not_found
  end

  def update
    @card = Card.find(params[:id])

    if @card.update(card_params)
      render :update
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

  rescue ActiveRecord::RecordNotFound
    @error = "Invalid card id provided"
    render 'api/shared/error', status: :not_found
  end

  private

  def card_params
    params.require(:card).permit(:title, :description, :due_date, :labels)
  end

  def create_actions(card, options = {})
    card.actions.create!(description: "added this card to #{card.list.title}") if options[:new]

    if card.completed_changed?
      #status =
      card.actions.create(description: "#{card.list.title} was marked as ....")
    end
  end
end
