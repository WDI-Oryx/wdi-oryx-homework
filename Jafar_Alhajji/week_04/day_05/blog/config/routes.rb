Rails.application.routes.draw do
  get 'welcome/index'

  resources :articles
  
  root 'welcome#index'

  
  get "/games/rps/:user_chose" ,to: "games#rps"
end
