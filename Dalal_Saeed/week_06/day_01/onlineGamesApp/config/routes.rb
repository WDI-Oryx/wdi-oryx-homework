Rails.application.routes.draw do
  get 'genres/index'
  get 'genres/show'
  resources :developers, :games
  resources :genres, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
