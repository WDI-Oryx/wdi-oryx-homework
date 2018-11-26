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

  def edit
  end
  def create 
     # input (JS) ->
    # const params (JS) ->
    # JSON.stringify (JS) ->
    # "Content-Type" (JS) ->
    # the body will be added to params in Ruby (Ruby)
    # params["content"] (Ruby)
    message = Message.create(content: params["content"])
    render json: message
  end
end
