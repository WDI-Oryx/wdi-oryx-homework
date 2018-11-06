Rails.application.routes.draw do
  get 'creatures/index'
  get 'creatures/show'
  get 'creatures/edit'
  get 'creatures/new'
  root "creatures#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :creatures
end
