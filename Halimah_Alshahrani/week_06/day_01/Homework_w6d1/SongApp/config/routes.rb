Rails.application.routes.draw do

  # get 'songs/index'
  # get 'songs/show'
  # get 'songs/new'
  # get 'songs/edit'
  # get 'artists/index'
  # get 'artists/show'
  # get 'artists/new'
  # get 'artists/edit'
  resources :artists , :songs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
