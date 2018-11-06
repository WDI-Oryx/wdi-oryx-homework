class PersonsController < ApplicationController
  def index
    @persons = Person.all
  end

  def show
    @person = Person.find_by(id: params[:id])
  end

  def edit
    @person = Person.find_by(id: params[:id])
  end

  def update
    person = Person.find_by(id: params[:id])
    person.update(person_params)
    redirect_to person_path(person)
  end
end
