
class BooksController < ApplicationController
  def index
    @books = [
      "In Search of Lost Time",
      "War and Peace",
      "Hamlet",
      "Anna Karenina",
      "Madame Bovary",
      "Don Quixote",
      "Ulysses",
      "The Odyssey",
    ]
  end
end
