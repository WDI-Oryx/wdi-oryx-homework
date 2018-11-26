Rails.application.routes.draw do
  # get 'pages/app'
  # get 'messages/new'
  # get 'messages/edit'
  # get 'messages/index'
  # get 'messages/show'
  resources :messages 
  root "pages#app"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
