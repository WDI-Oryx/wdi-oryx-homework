Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #Rock, Paper, Scissors game
  get "games/rps/:input", to: "games#rps"
  get "games/magic/:question", to: "games#question"
  # resources :secrets
  # get "games/secret/:num", to: "games#secret"
end
