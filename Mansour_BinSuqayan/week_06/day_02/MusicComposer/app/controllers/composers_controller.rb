class ComposersController < ApplicationController
  def index
    @composers = Composer.all
  end

  def show
    @composer = Composer.find_by(id: params[:id])
  end

  def new
    @composer = Composer.new
  end

  def create
    composer = Composer.create(composer_params)
    redirect_to composer_path(composer)
  end

  def edit
    @composer = Composer.find_by(id: params[:id])
  end

  def update
    composer = Composer.find_by(id: params[:id])
    composer.update(composer_params)
    redirect_to composer_path(composer)
  end

  def destroy
    composer = Composer.find_by(id: params[:id])
    composer.destroy
    redirect_to composers_path
  end

  private

  def composer_params
    return params.require(:composer).permit(:name, :nationality, :birthday)
  end
end
