class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.all
    render json: @messages
  end

  def show
  end

  def create
    message = Message.create(content: params["content"])
    render json: message
  end

  def edit
  end
end
