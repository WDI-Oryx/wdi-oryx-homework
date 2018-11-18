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
  album = Album.create album_params 
  redirect_to album_path(album)
end

private

def album_params 
params.require(:album).permit(:title, :album_art, :released, :artist_id)
end

end
