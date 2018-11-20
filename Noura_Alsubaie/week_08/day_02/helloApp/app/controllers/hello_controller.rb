class HelloController < ApplicationController
      skip_before_action :verify_authenticity_token

  def index
      @msgs = Hello.all
      respond_to do |format| 
        format.html
        format.json {render json: @msgs}
      end
  
  end


  def show
      @msg = Hello.find_by(id: params[:id])
      respond_to do |format| 
        format.html
        format.json {render json: @msg}
      end
    end

  def create
          msg = Hello.create(content: params["content"])
    render json: msg
  end

  def new
  end
end
