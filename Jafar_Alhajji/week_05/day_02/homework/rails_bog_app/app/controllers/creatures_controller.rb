class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all 
  end

  def edit
    @creature = Creature.find_by_id(params[:id])
  end

  def show
    @creature = Creature.find_by_id(params[:id])
  end

  def new
    @creature = Creature.new
  end
   def create

    @creature = Creature.create(creature_params)
    redirect_to @creature
  end

  
  def destroy
    @creature = Creature.find(params[:id])
    @creature.destroy
    redirect_to creatures_url
  end
  private

  def creature_params 
    params.require(:creature).permit(:name, :description)
  end


end
