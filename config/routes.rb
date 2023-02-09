Rails.application.routes.draw do
  
  resources :users, only: [:index, :show, :create]
  resources :messages
  resources :events
  resources :rsvps
  resources :interest_groups
  resources :memberships
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
