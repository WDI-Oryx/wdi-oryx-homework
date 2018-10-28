Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/home", to: "pages#home"   #to:"Controller#Action"
  get "/contact", to: "pages#contact"
  get "/about/:username", to: "pages#about"

  get "/users", to: "users#index"
end
