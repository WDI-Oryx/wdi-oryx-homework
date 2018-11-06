class SongTypesController < ApplicationController
  def index
    @song_types = SongType.all
  end

  def show
    @song_type = SongType.find_by(id: params[:id])
  end
end

