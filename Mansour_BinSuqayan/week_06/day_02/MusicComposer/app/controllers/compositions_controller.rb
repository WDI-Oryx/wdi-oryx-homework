class CompositionsController < ApplicationController
  def index
    @compositions = Composition.all
  end

  def show
    @composition = Composition.find_by(id: params[:id])
  end

  def new
    @composition = Composition.new
  end

  def create
    composition = Composition.create(composition_params)
    redirect_to composition_path(composition)
  end

  def edit
    @composition = Composition.find_by(id: params[:id])
  end

  def update
    composition = Composition.find_by(id: params[:id])
    composition.update(composition_params)
    redirect_to composition_path(composition)
  end

  def destroy
    composition = Composition.find_by(id: params[:id])
    composition.destroy
    redirect_to compositions_path()
  end

  private

  def composition_params
    params.require(:composition).permit(:title, :description, :music_type, :composer_id, tag_ids: [])
  end
end
