class PaintingsController < ApplicationController
  def index
    @paintings = Painting.all
  end

  def show
    @painting = Painting.find_by_id(params[:id])
  end

  def new
    @painting = Painting.new
  end

  def edit
  end

  def create
    painting = Painting.create(painting_params)
    redirect_to paintings_path
  end

  private

  def painting_params
    params.require(:painting).permit(:name, :description, :artist_id)
  end
end
