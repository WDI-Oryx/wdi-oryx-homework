class CreaturesController < ApplicationController
  # display all creatures
  def index
    # get all creatures from db and save to instance variable
    @creatures = Creature.all
  end

  # display a specific creature
  def show
    # get the creature id from the url params, then use the Creature model to return that id and save it to the instance variable @creature

    @creature = Creature.find_by_id(params[:id])
  end

  # show the edit creature form
  def edit

    # use `creature_id` (taken from the params[:id]) to find the creature in the database
    # using ActiveRecord
    @creature = Creature.find_by_id(params[:id])
  end

  # show the new creature form
  def new
    @creature = Creature.new
  end

  # create a new creature in the database
  def create

    # create a new creature from `creature_params`
    @creature = Creature.create(creature_params)
    # redirect to route that displays all creatures
    redirect_to @creature
    # redirect_to @creature is equivalent to:
    # redirect_to "/creatures/#{creature.id}"
  end

  # update a creature in the database
  def update

    # use `creature_id` (tkane the params[:id]) to find the creature in the database
    # and save it to an instance variable
    @creature = Creature.find_by_id(params[:id])

    # update the creature using the whitelisted params in the private method `creature params`
    @creature.update(creature_params)

    # redirect to show page for the updated creature
    # redirect_to @creature
    # redirect_to @creature is equivalent to:
    # redirect_to "/creatures/#{creature.id}"
  end

  # delete a creature from the database
  def destroy

    # the parameter in the url again represents the same id of the creature we want to remove.  Let's find this creature and save it to an instance variable.

    @creature = Creature.find(params[:id])

    # destroy the creature
    @creature.destroy

    # redirect to creatures index
    redirect_to creatures_url
    # redirect_to creatures_url is equivalent to:
    # redirect_to "/creatures"
  end

  private

  # whitelist params and return them in a method:
  def creature_params
    params.require(:creature).permit(:name, :description)
  end
end
