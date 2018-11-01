Rails.application.routes.draw do
  get 'games', to: 'games#index'

  get 'games/rps', to: 'games#rps'
  get 'games/rps/rock', to: 'games#rock'
  
  root 'games#index'
end
