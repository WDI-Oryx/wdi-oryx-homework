Rails.application.routes.draw do
  # get 'albums/index'
  # get 'albums/show'
  # get 'albums/new'
  # get 'artists/index'
  # get 'artists/show'
  # get 'artists/edit'
  # get 'artists/new'

  resources :artists, :albums
end
