class ClassesController < ApplicationController
  def index
    @classes=Classe.all 

  end

  def new
  end

  def show
    @classe=Classe.find_by(id: params[:id])

  end

  def edit
  end
end
