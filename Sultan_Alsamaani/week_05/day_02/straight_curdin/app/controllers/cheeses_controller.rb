class CheesesController < ApplicationController
  def index
    @cheeses = Cheese.all
  end

  def create
    @cheese = Cheese.new(cheese_params)

    if @cheese.save
      redirect_to "/cheeses"
    else
      render "new"
    end
  end

  #  t.string "name"
  #     t.string "milk_type"
  #     t.string "description"
  #     t.string "image_url"
  def new
    @cheese = Cheese.new
  end

  def edit
    @cheese = Cheese.find(params[:id])
  end

  def show
    @cheese = Cheese.find(params[:id])
  end

  def update
    @cheese = Cheese.find(params[:id])

    if @cheese.update(cheese_params)
      redirect_to @cheese
      # else
      #   render 'edit'
    end
  end

  def destroy
    @cheese = Cheese.find(params[:id])
    @cheese.destroy

    redirect_to cheeses_path
  end

  private

  def cheese_params
    params.require(:cheese).permit(:name, :milk_type, :description, :image_url, :stank_level)
  end
end
