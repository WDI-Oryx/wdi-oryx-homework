Rails.application.routes.draw do
  resources :donuts
  # same as  resources :donuts, only: [:index, :show, :new, :create, :edit, :update, :destroy]

end
