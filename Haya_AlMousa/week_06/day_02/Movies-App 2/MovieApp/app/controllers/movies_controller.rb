class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find_by(id: params[:id])
  end

  def new
    @movie = Movie.new
  end

  def create
    movie = Movie.create(movie_params)
    redirect_to movies_path
  end

  def edit
    @movie = Movie.find_by(id: params[:id])
  end

  def update
    movie = Movie.find_by(id: params[:id])
    movie.update(movie_params)
    redirect_to movie_path(movie)
  end

  def destroy
    movie = Movie.find_by(id: params[:id])
    movie.destroy
    redirect_to movies_path
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :leading_actor, :director_id)
  end
end
