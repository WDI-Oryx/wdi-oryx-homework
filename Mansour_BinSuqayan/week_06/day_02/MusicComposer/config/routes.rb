Rails.application.routes.draw do
  # get 'compositions/index'
  # get 'compositions/show'
  # get 'compositions/new'
  # get 'compositions/edit'
  resources:compositions
  # get 'composers/index'
  # get 'composers/show'
  # get 'composers/new'
  # get 'composers/edit'
  resources:composers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
