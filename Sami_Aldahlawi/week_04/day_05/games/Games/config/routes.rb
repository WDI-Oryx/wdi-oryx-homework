Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/games/rps/:play", to: "games#rps"
  get "/games/magic/:question", to: "games#magic"

  get "/games/secret", to: "games#secret"
  get "/games/secret/:number", to: "games#secret"
end
