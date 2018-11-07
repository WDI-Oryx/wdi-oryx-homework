Rails.application.routes.draw do
  get 'ingredients/index'
  get 'ingredients/show'
  get 'ingredients/new'
  resources :developers, :recipes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
