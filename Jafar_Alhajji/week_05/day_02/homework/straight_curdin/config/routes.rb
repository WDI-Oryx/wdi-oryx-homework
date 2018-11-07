Rails.application.routes.draw do
  get 'cheeses/index'
  get 'cheeses/edit'
  get 'cheeses/new'
  get 'cheeses/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "cheeses#index"
  resources :cheeses
end
