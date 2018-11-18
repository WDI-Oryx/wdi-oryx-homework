Rails.application.routes.draw do
  
  get 'categories/index'
  get 'categories/show'
  root "sellers#index"
  resources :sellers, :products
  resources :categories, only: [:index, :show] 
end
