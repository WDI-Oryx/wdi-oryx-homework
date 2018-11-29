class MessagesController < ApplicationController
    skip_before_action :verify_authenticity_token
  
    def index
      @messages = Message.all
      render json: @todos
    end
  
    def show
      @message = Message.find_by(id: params[:id])
      render json: @message
    end
  
    def new
    end
  
    def create
      message = Message.create(content: params["content"])
      render json: message
    end
  
    def edit
    end
  end
  