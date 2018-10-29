Rails.application.routes.draw do
  # get "games/rps/:random"
  get "/games/rps/:random", to:"games#rps"

  # get "/api/*path", to: "api#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
