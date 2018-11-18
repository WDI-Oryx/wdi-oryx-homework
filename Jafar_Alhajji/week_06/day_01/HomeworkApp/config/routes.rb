Rails.application.routes.draw do
  # get 'employees/index'
  # get 'employees/show'
  # get 'employees/new'
  # get 'employees/edit'
  # get 'companies/show'
  # get 'companies/index'
  # get 'companies/new'
  # get 'companies/edit'

  resources :companies,:employees
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
