class MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @messages = Message.all
    respond_to do |format|
      format.html
      format.json { render json: @messages }
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
    message = Message.create(content: params[:content])
    respond_to do |format|
      format.html
      format.json { render json: message }
    end
  end

  def new
  end

  def edit
  end
end
