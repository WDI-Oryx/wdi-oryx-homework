class JournalistsController < ApplicationController
  def index
    @journalist = Journalist.all
  end

  def show
    @journalist = Journalist.find_by(id: params[:id])
  end

  def new
    @journalist = Journalist.new
  end

  def create
    journalist = Journalist.create(journalist_params)
    redirect_to journalists_path
  end

  def edit
    @journalist = Journalist.find_by(id: params[:id])
  end

  def update
    journalist = Journalist.find_by(id: params[:id])
    journalist.update(journalist_params)
    redirect_to journalist_path(journalist)
  end

  def destroy
    journalist = Journalist.find_by(id: params[:id])
    journalist.destroy
    redirect_to journalists_path
  end

  private

  def journalist_params
    params.require(:journalist).permit(:name, :age, :article_field)
  end
end
