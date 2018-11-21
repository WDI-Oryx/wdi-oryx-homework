class MessagesController < ApplicationController
    # 422 Unprocessable Entity error
  skip_before_action :verify_authenticity_token
  def show
  end

  def index
    @messages = Message.all 
    # render json: @messages
 respond_to do |format|
      format.json {render json: @messages}
    end
  end

  def create 
# binding.pry
message = Message.create(content: params[:content])
# render json: message
respond_to do |format|
format.json {render json: message}
  end
  end
end
