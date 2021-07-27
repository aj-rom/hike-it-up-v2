Rails.application.routes.draw do
  post 'sign_up', to: 'user#create'
  post 'sign_in', to: 'user#authenticate'
  resources :trails
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
