class ResturntsController < ApplicationController
  def index
    @resturnts=Resturnt.all
  end

  def show
    @resturnt=Resturnt.find_by(id:params[:id])
  end
end
