Rails.application.routes.draw do
  # get 'donuts', to: 'donuts#index'
  resources :donuts, only: [:index, :new,:show, :create, :edit]
  ##get "donuts/:id", to:"donuts#show"
  # get 'donuts/show'
  # get 'donuts/edit'
  # get 'donuts/new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
