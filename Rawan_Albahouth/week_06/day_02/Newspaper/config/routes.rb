Rails.application.routes.draw do
  resources :journalists, :articles

  resources :fields, only: [:index, :show]
end
