class MsgsController < ApplicationController
  def index
    @msgs = Msg.all
    render json: @msgs
  end

  def new
  end

  def create
  end

  def chat
  end
end
