Rails.application.routes.draw do
  devise_for :users
  # get 'pages/home'
  root "pages#home"
  # if you go to localhost 3001, load the pages controller's home view
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
