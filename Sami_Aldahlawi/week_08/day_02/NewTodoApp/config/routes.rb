Rails.application.routes.draw do
  # get 'books/index'
  # get 'books/show'
  # get 'books/edit'
  # get 'books/new'
  resources :books
  root "pages#app"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
