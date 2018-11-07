class DevelopersController < ApplicationController
  def index
    @developers = Developer.all
  end

  def show
    @developer = Developer.find_by(id: params[:id])
  end

  def new
    @developer = Developer.new
  end

  def create
    developer = Developer.create(developer_params)
    redirect_to developers_path
  end

  def edit
    @developer = Developer.find_by(id: params[:id])
  end

  def update
    developer = Developer.find_by(id: params[:id])
    developer.update(developer_params)
    redirect_to developer_path(developer)
  end

  def destroy
    developer = Developer.find_by(id: params[:id])
    developer.destroy
    redirect_to developers_path
  end

  private

  def developer_params
    params.require(:developer).permit(:name, :country, :image)
  end
end
