class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.all
    render json: @messages
  end
end

def show
  @message = Message.find_by(id: params[:id])
  respond_to do |format|
    format.html
    format.json { render json: @message }
  end
end

def create
  message = Message.create(content: params["content"])
  render json: message
end

def new
end

def edit
end

def toggle
  message = Message.find_by id: params[:id]
  message.completed = !message.completed
  message.save
  render json: message
end
