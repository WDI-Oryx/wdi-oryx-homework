Rails.application.routes.draw do
  get "cheeses/index"
  get "cheeses/show"
  get "cheeses/edit"
  get "cheeses/new"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "cheeses#index"

  # use the resources method to have Rails make an index route for creatures
  resources :cheeses
end
