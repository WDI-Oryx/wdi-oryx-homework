class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create
    cheese = Cheese.create(cheese_params)
    redirect_to cheeses_path
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def update
    cheese = Cheese.find_by(id: params[:id])
    cheese.update(cheese_params)
    redirect_to cheese_path(cheese)
  end

  def destroy
    cheese = Cheese.find_by(id: params[:id])
    cheese.destroy
    redirect_to cheeses_path
  end

  private

  def cheese_params
    params.require(:cheese).permit(:name, :milk_type, :image_url, :description)
  end
end
