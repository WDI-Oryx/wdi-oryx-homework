Rails.application.routes.draw do
  resources :donuts, only: [:index, :show, :new, :edit, :create]
  resources :donuts, only: [:new]
  # get "donuts/index", to: "dounts#index"
  get "donuts/show/:id", to: "donuts#show"
  # get "donuts/edit"
  # get "donuts/new"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
