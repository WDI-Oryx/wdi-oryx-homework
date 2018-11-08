Rails.application.routes.draw do
  get 'classes/index'
  get 'classes/new'
  get 'classes/show'
  get 'classes/edit'
  get 'students/index'
  get 'students/new'
  get 'students/show'
  get 'students/edit'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
