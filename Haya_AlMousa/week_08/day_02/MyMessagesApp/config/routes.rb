Rails.application.routes.draw do
  get 'pages/app'
  get 'messages/index'
  get 'messages/show'
  get 'messages/new'
  get 'messages/edit'
root "pages#app"
  resources :messages
end
