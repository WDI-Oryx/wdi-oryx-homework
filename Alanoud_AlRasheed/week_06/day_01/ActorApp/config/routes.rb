Rails.application.routes.draw do
  get 'movies/index'
  get 'movies/show'
  get 'movies/new'
  get 'movies/edit'
  get 'actors/index'
  get 'actors/show'
  get 'actors/new'
  get 'actors/edit'

  resources :movies, :actors
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
