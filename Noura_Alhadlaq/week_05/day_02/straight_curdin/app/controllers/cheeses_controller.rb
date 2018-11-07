class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
    @cheese = Cheese.find_by_id(params[:id])
  end

  def new
    @cheese = Cheese.new
  end

  def create
    @cheese = Cheese.create(creature_params)
    redirect_to cheeses_url
  end

  def edit
    @cheese = Cheese.find_by_id(params[:id])
  end

  def update
    @cheese = Cheese.find_by_id(params[:id])
    @cheese.update(creature_params)
    redirect_to @cheese
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to cheeses_path
  end

  private

  def creature_params
    params.require(:cheese).permit(:name, :milk_type, :description, :image_url)
  end
end
