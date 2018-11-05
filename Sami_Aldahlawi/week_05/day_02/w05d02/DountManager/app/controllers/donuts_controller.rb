class DonutsController < ApplicationController
  def index
    @donuts = Donut.all
    @arr = []
    @donuts.each do |i|
      @arr.push(i)
    end
  end

  def show
    @donuts = Donut.all
    @id = params[:id].to_i
    @oneDonut = @donuts[@id]
  end

  def edit
  end

  def new
    @donut = Donut.new
  end

  def create
    @donut_params = params.require(:donut).permit(:name, :size, :frosting_type)
    @donut = Donut.create(@donut_params)
    redirect_to @donut
  end
end
