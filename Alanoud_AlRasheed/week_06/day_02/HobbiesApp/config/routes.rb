Rails.application.routes.draw do
  get 'users/index'
  get 'users/new'
  get 'users/show'
  get 'users/edit'
  get 'hobbies/index'
  get 'hobbies/new'
  get 'hobbies/show'
  get 'hobbies/edit'

  resources :hobbies
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
