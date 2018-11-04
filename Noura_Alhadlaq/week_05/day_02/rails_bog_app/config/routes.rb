
Rails.application.routes.draw do
  get "creatures/index"
  get "creatures/show"
  get "creatures/edit"
  get "creatures/new"
  root "creatures#index"
  resources :creatures
end
