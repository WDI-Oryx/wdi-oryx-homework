Rails.application.routes.draw do
  resources :directors, :films
  resources :genres, only: [:index, :show]
end
