Rails.application.routes.draw do
  # get "creatures/index"
  # get "creatures/show"
  # get "creatures/edit"
  # get "creatures/new"
  #root>>first page will show when user enter http://localhost:3000/creatures URL
  # root "creatures#index"

  # use the resources method to have Rails make an index route for creatures
  resources :creatures
end
