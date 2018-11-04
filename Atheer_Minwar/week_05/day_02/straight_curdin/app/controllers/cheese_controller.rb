class CheeseController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def show
    @cheeses = Cheese.find(params[:id])
  end

  def new
    @cheeses = Cheese.new
  end

  def create
    cheeses_params = params.require(:cheese).permit(:name, :milk_type, :description, :image_url)
    @cheeses = Cheese.create(cheeses_params)
    redirect_to @cheeses
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def destroy
    @cheeses = Cheese.find(params[:id])
    @cheeses.destroy
    redirect_to "/cheese"
  end

  def update
    @cheeses = Cheese.find_by_id(params[:id])
    @cheeses.update(cheeses_params)
    redirect_to "/cheeses"
  end
end
