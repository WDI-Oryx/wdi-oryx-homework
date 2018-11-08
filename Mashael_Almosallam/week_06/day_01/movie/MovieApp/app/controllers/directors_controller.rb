class DirectorsController < ApplicationController
  def index
    @directors = Director.all
  end

  def show
    @director = Director.find(params[:id])
  end

  def new
    @director = Director.new
  end

  def create
    @director = Director.create(director_params)
    redirect_to directors_path
  end

  def edit
    @director = Director.find(params[:id])
  end

  def update
    director = Director.find_by(id: params[:id])
    director.update(director_params)
    redirect_to director_path(director)
  end

  def destroy
    director = Director.find(params[:id])
    director.destroy
    redirect_to directors_path
  end

  private # any method after private word it CONNOT be called anywhere else

  def director_params
    params.require(:director).permit(:name, :dob, :country, :image) # put it here to make it secure
  end
end
