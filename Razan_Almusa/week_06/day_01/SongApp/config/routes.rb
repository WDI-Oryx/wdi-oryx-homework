Rails.application.routes.draw do
 
  resources :singers, :songs
  resources :genres, only: [:index, :show]
end
