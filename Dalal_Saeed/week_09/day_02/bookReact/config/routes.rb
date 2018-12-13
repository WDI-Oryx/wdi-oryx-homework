Rails.application.routes.draw do
  get 'pages/app'
  get "pages/app"
  root "pages#app"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
