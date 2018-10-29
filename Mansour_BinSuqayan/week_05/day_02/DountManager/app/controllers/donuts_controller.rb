class DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end

  def show
    @id_donut = Donut.find(params[:id])
  end

  def edit
     @donut =  Donut.find(params[:id])
    #  binding.pry
  end

  def new
    @donut = Donut.new
  end
  def create 
   
    @donut_params = params.require(:donut).permit(:name,:size,:frosting_type)
    # binding.pry
    @donut = Donut.create(@donut_params)
    redirect_to @donut
  end
  def update
    @donut_params = params.require(:donut).permit(:name,:size,:frosting_type)
    @donut = Donut.find(params[:id])
    @donut.update(@donut_params)
    redirect_to @donut
  end
end
