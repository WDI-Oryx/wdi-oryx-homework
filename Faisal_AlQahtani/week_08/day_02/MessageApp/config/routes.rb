Rails.application.routes.draw do
  get 'pages/app'
  root "pages#app"
  resources :messages
end
