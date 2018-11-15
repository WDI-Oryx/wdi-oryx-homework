Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/home", to: "pages#home"
  get "/contact", to: "pages#contact"
  get "/about", to: "pages#about"
  get "/colors/:color", to: "pages#color"

  get "/users", to: "users#index"
  get "/users/trv", to: "users#show"
  get "/posts", to: "posts#index"
  # /posts/thirdpost
  get "/posts/:title", to: "posts#show"
  # pramams
end
