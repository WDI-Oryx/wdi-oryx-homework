class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create(book_params)
    redirect_to books_path
    # raise "an error"
  end

  def edit
  end

  def show
    @book = Book.find_by(id: params[:id])
  end

  private

  def book_params
    params.require(:book).permit(:title, :image, :blurb, :author_id)
  end
end
