class MassgesController < ApplicationController
  def index
    @massges = Massge.all
    render json: @massges
  end

  def show
    @massge = Massge.find_by(id: params[:id])
    render json: @massges
  end

  def new
  end

  def edit
  end
end
