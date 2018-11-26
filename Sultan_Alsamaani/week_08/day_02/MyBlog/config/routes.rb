Rails.application.routes.draw do
  root 'pages#app'
  resources :blogs
end
