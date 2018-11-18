class CheesesController < ApplicationController
  def index
    @cheese_element = Cheese.all
  end

  def new
    @ch = Cheese.new
  end

  def edit
    @ch = Cheese.find(params[:id])
  end

  def create
    create = params.require(:cheese).permit(:name, :milk_type, :description, :stank_level)
    @create_cheese = Cheese.create(create)
    redirect_to @create_cheese
  end

  def show
    params_id = params[:id].to_i
    @input = Cheese.find_by(id: params_id)
  end

  def update
    cheese = Cheese.find(params[:id])
    cheese.update(cheese_params)
    redirect_to cheese_path(cheese)
  end

  def destroy
    cheese = Cheese.find(params[:id])
    cheese.destroy
    redirect_to cheeses_index_path
  end

  def cheese_params
    params.require(:cheese).permit(:name, :description, :milk_type, :stank_level)
  end
end
