class BooksController < ApplicationController
  def index
    @all_books = [
      "IN Search of Lost Time",
      "War and peace",
      "Hamlet",
      "thinking fast and slow",
    ]
  end

  def show
    @title = params[:title]
  end
end
