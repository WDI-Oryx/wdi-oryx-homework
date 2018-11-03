Rails.application.routes.draw do
  resources :cheese
  root 'cheese#index'
  # get 'cheese/index'
  # get 'cheese/show'
  # get 'cheese/new'
  # get 'cheese/create'
  # get 'cheese/edit'
  # get 'cheese/destroy'
  # get 'cheese/update'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
