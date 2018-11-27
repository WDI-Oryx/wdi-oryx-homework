Rails.application.routes.draw do
  # get 'msgs/index'
  # get 'msgs/new'
  # get 'msgs/create'

  resources :msgs
  root "msgs#chat"
end
