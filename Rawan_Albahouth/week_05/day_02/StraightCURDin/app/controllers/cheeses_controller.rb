class CheesesController < ApplicationController
  def index
    @cheese = Cheese.all
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create
    cheese_new = params.require(:cheese).permit(:name, :milk_type, :description, :image_url)
    @cheese = Cheese.create(cheese_new)
    redirect_to cheeses_path
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_path
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def update
    cheese_edit = params.require(:cheese).permit(:name, :milk_type, :description, :image_url)
    @cheese = Cheese.find(params[:id])
    @cheese.update(cheese_edit)
    redirect_to @cheese
  end
end
