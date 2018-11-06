class BooksController < ApplicationController
    def index
      @books = [
        "In Search of Lost Time",
        "War and Peace",
        "Hamlet",
        "Anna Karenina",
        "Madame Bovary",
      ]
    end

    def show
        @title = params
    end
  end