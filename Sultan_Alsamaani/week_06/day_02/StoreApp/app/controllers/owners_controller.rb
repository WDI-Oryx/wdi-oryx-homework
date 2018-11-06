class OwnersController < ApplicationController
  def index
    @owners = Owner.all
  end

  def show
    @owner = Owner.find(params[:id])
  end

  def edit
    @owner = Owner.find(params[:id])

  end

  def update
  end

  def new
    @owner = Owner.new
  end

  def create
  end

  def delte
  end

  def destroy
  end
end
