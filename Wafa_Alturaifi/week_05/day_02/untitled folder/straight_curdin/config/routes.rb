Rails.application.routes.draw do
  get 'cheeses/index'
  get 'cheeses/new'
  get 'cheeses/edit'
  get 'cheeses/update'
  get 'cheeses/show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cheeses
end
