class CreaturesController < ApplicationController
  def index
    @creatures = Creature.all
  end

  def show
    @creature = Creature.find_by_id(params[:id])
  end

  def edit
  end

  def new
    @creature = Creature.new
    # binding.pry
  end
  def create 
    @creature = Creature.create(creature_params)
    redirect_to @creature

  end
  def creature_params 

    params.require(:creature).permit(:name, :description)
  end
end
