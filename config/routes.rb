Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :series, param: :slug
      resources :characters, only: [:create, :update, :destroy]
    end
  end

  get '*path', to:'home#index', via: :all
end
