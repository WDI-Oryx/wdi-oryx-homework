Rails.application.routes.draw do
  get 'creatures/index'
  get 'creatures/edit'
  get 'creatures/show'
  get 'creatures/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "creatures#index"

  # use the resources method to have Rails make an index route for creatures
  resources :creatures
end
