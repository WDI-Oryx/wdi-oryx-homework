Rails.application.routes.draw do
  # get 'cheeses/index'
  # get 'cheeses/create'
  # get 'cheeses/new'
  # get 'cheeses/edit'
  # get 'cheeses/show'
  # get 'cheeses/update'
  # get 'cheeses/destroy'
  root "cheeses#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :cheeses #do
  #   post "edit"
  # end
end
