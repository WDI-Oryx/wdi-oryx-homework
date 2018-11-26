Rails.application.routes.draw do
  get "pages/app"
  # get 'messages/index'
  # get 'messages/show'
  # get 'messages/new'
  # get 'messages/edit'
  resources :messages
  put "/messages/:id/toggle", to: "messages#toggle"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
