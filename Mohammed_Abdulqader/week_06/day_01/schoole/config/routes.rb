Rails.application.routes.draw do
  # get 'studens/index'
  # get 'studens/show'
  # get 'studens/new'
  # get 'studens/edit'
  resources :teachers, :students
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
