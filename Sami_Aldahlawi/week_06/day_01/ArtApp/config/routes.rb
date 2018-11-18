Rails.application.routes.draw do
  # get "paintings/index"
  # get "paintings/show"
  # get "paintings/edit"
  # get "paintings/new"
  # get "artiests/index"
  # get "artiests/show"
  # get "artiests/edit"
  # get "artiests/new"

  resources :paintings
  resources :artiests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
