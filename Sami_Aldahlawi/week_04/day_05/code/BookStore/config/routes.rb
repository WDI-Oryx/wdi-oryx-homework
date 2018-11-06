Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/home", to: "pages#home"

  #Literal Routes
  get "/book", to: "books#index"
  #Dynamic Routes
  get "/book/:title", to: "books#show"
end
