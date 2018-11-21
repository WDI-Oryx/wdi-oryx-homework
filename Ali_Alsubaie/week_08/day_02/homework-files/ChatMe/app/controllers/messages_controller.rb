class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.all
    render json: @messages
  end

  def show
  end

  def new
  end

  def create
    newMsg = Message.create(message_params)
    render json: newMsg
  end

  def destroy
    msg = Message.find_by(id: params[:id])
    msg.destroy
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
