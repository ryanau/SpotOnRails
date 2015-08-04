Rails.application.routes.draw do
  ACCEPTS_JSON = lambda { |request| 
    request.accepts.include?(:json)
  }

  scope constraints: ACCEPTS_JSON do
    resources :pins
    resources :users 
    
    post '/login', to: 'sessions#login'

    post '/signup', to: 'users#create'

    get '/logout', to: 'sessions#logout'

    get '/session', to: 'sessions#check'
  end

  get '*path', to: 'app#show'
  root to: 'app#show'

end
