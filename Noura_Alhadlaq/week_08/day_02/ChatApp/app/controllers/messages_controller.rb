class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # respond_to :json

  def index
    render json: Message.all
    # @messages = Message.all
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @messages }
    # end
  end

  def show
  end

  def new
  end

  def create
    render json: Message.create(content: params["content"])
  end

  def edit
  end
end
