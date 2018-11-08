class CreaturesController < ApplicationController
  def index
    #get all creatures from db and save to instance variable
    @creature = Creature.all
  end

  def show
    @id_params = params[:id]
    @creature = Creature.find_by_id(@id_params)
  end

  def edit
  end

  def new
    @creature = Creature.new
  end

  def create
    creature_params = params.require(:creature).permit(:name, :description)
    @creature = Creature.create(creature_params)
    # # @creature =

    redirect_to @creature
    # binding.pry
  end
end
