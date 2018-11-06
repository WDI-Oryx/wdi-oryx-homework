class CheeseController < ApplicationController
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
    cheese_params = params.require(:cheese).permit(:name, :milk_type, :stank_level, :description, :image_url)
    @cheese = Cheese.create(cheese_params)
    redirect_to @cheese
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy
    redirect_to "/cheese"
  end

  def update
  end
end
