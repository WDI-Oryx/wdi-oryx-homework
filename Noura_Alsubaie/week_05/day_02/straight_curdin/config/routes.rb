Rails.application.routes.draw do
  
 root 'cheeses#index'
resources :cheeses
resources :products
end
