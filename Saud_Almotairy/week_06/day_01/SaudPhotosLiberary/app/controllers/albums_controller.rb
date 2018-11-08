class AlbumsController < ApplicationController
  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by(id: params[:id])
  end

  def new
    @album = Album.new
  end

  def create
    album = Album.create(@album)
    redirect_to albums_path
  end

  def edit
  end
end
