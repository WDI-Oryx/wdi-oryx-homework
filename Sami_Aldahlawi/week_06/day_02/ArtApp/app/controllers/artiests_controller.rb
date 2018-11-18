class ArtiestsController < ApplicationController
  def index
    @artiests = Artiest.all
  end

  def show
    @artiest = Artiest.find(params[:id])
  end

  def edit
    @artiest = Artiest.find_by(id: params[:id])
  end

  def update
    @artiest = Artiest.find(params[:id])
    @artiest.update(artiest_params)
    redirect_to artiest_path
  end

  def new
    @artiest = Artiest.new
  end

  def create
    @artiest = Artiest.create(artiest_params)
    redirect_to @artiest
  end

  def destroy
    artiest = Artiest.find(params[:id])
    artiest.destroy
    redirect_to artiests_path
  end

  private

  def artiest_params
    params.require(:artiest).permit(:name, :nationality, :birth_day)
  end
end
