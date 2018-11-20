class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.all
    render json: @messages
  end

  def show
    @message = Message.find_by(id: params[:id])
    render json: @message
  end

  def create
    message = Message.create(content: params["content"])
    render json: message
  end

  def new
  end

  def toggle
    message = Message.find_by id: params[:id]
    message.read = !message.read
    message.save
    render json: message
  end

  def edit
  end
end
