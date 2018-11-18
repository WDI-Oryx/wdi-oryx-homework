Rails.application.routes.draw do
  get "/games", to: "games#index"
  get "/games/rps", to: "games#rps"
  get "/games/rps/:choise", to: "games#rps"
  get "/games/mb", to: "games#mb"
  get "/games/mb/:quistion", to: "games#mb"
  get "/games/secret", to: "games#secret"
  get "/games/secret/:number", to: "games#secret"
end
