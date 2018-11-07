Rails.application.routes.draw do
  resources :cheese
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get 'cheese/new'
  get "cheese/show"
  # get 'cheese/index'
  # get 'cheese/create'
  # get 'cheese/edit'
  # get 'cheese/destroy'
  # get 'cheese/update'
end
