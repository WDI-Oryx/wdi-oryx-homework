class AuthorsController < ApplicationController
  def index
    @authors = Author.all
  end

  def show
    params_id = params[:id]
    @author = Author.find(params_id)
  end

  def new
    @author = Author.new
  end

  def create
    @author = Author.create(author_params)
    redirect_to @author
    # redirect_to authors_path(@author)
  end

  def edit
    @author = Author.find(params[:id])
  end

  def update
    author = Author.find_by(id: params[:id])
    author.update(author_params)
    redirect_to author_path(author)
  end

  def destroy
    author = Author.find(params[:id])
    author.destroy
    redirect_to authors_path
  end

  private

  def author_params
    params.require(:author).permit(:name, :location, :dob, :image, :description)
  end
end
