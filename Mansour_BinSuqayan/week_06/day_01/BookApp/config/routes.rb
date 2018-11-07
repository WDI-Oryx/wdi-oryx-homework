Rails.application.routes.draw do
  get 'genres/index'
  get 'genres/show'
  # get 'books/index'
  # get 'books/show'
  # get 'books/new'
  # get 'books/edit'
  resources :books
  #get "/authors", to: "authors#index"
  resources :authors

  resources :genres, only: [:index, :show]
  # get 'authors/index'
  # get 'authors/show'
  # get 'authors/new'
  # get 'authors/edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
