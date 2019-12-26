Rails.application.routes.draw do
  scope :shopify do
    get '/', :to => 'home#index'
    # get '/login' => 'admin#show_login', as: :login_form
    # post '/login' => 'admin#login', as: :login_admin

    get 'install_cart', to: 'shopify#modify_theme'
    get 'cart', to: 'shopify#cart'
    post '/product_added', to: 'application#product_added'
    match "*any", to: "application#index", via: :all
  end
end
