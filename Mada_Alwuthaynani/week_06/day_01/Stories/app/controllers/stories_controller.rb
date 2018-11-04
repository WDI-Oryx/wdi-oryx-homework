class StoriesController < ApplicationController
  def index
    @stories=Story.all
  end

  def show
    @story=Story.find_by(id: params[:id])
  end
end
