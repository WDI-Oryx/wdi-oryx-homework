class MessagesController < ApplicationController
  def index
    @messages = Message.all
    render json:@messages
  end

  def show
  end

  def new
  end

  def edit
  end
end
