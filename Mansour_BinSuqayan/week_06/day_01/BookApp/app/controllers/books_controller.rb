class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find_by(id: params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create book_params
    redirect_to book_path(book)
  end

  def edit
  end

  private

  def book_params
    params.require(:book).permit(:title, :image, :blurb, :author_id, genre_ids: [])
  end
end

#Book.create (..., author_id:)