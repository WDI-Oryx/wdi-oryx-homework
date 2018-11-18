Rails.application.routes.draw do
  get 'cheeses/index'
  get 'cheeses/show'
  get 'cheeses/create'
  resources :cheeses
end
