class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def edit
    @cheese = Cheese.find_by_id(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create 
    @cheese = Cheese.create(cheese_params)
    redirect_to "/cheeses"
  end

  def show
    @cheese = Cheese.find_by_id(params[:id])
  end

  def cheese_params 
    params.require(:cheese).permit(:name,:milk_type,:image_url,:description)
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_url
  end

  def update
    @cheese = Cheese.find(params[:id])
    @cheese.update(cheese_params)
    redirect_to @cheese
  end

end
