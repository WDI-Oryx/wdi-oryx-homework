class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # 422 Unprocessable

  def index
    @messages = Message.all
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @messages }
    # end
    render json: @messages
  end

  def new
  end

  def show
    @message = Message.find_by(id: params[:id])
    # respond_to do |format|
    #   format.html
    #   format.json { render json: @message }
    # end
    render json: @message
  end

  def create
    message = Message.create(content: params["content"])
    render json: message
  end

  def edit
  end
end
