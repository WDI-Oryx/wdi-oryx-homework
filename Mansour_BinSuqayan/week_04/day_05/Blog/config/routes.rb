Rails.application.routes.draw do
  # get "games/rps/:random"
  get "/games/rps/:random", to: "games#rps"
  get "/games/magic/:question", to: "games#magicEight"
  get "/games/secret/:number", to: "games#secret"
  get "/games/secret", to: "games#secret"

  # get "/api/*path", to: "api#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
