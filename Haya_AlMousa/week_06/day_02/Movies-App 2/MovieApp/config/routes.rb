Rails.application.routes.draw do
  resources :directors, :movies

  resources :genres, only: [:index, :show]
end
