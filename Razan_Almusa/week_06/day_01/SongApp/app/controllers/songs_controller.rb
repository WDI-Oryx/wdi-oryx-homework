class SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def show
    @song = Song.find_by(id: params[:id])
  end

  def new
    @song = Song.new
  end

  def create
    song = Song.create song_params
    redirect_to song_path(song)
  end

  def edit
  end

  private

  def song_params
    params.require(:book).permit(:name, :year, :album, :singer_id)
  end
end
