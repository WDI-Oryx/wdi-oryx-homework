Rails.application.routes.draw do
  root "pages#app"
  # get 'todos/index'
  # get 'todos/show'
  # get 'todos/new'
  # get 'todos/edit'

  #REST - Representational State Transfer
  resources :todos
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
