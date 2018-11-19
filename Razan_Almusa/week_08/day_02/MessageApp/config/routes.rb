Rails.application.routes.draw do
  root "pages#app"
resources :messages
end
