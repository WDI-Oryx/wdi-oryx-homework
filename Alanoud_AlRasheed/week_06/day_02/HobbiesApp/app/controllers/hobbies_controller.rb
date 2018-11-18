class HobbiesController < ApplicationController
  def index
    @hobbies = Hobby.all
  end

  def show
    @hobby = Hobby.find(params[:id])
  end

  def new
    @hobby = Hobby.new
  end

  def create
    hobby = Hobby.create hobby_params
    redirect_to hobby
  end

  def edit
    @hobby = Hobby.find(params[:id])
  end

  def update
    hobby = Hobby.find(params[:id])
    hobby.update(hobby_params)
    redirect_to hobby
  end

  def destroy
    @hobby = Hobby.find(params[:id])
    @hobby.destroy
    redirect_to hobbies_path
  end

  private

  def hobby_params
    params.require(:hobby).permit(:name, :category, :image)
  end
end
