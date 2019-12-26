Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '/test-slack', to: 'application#product_added'
  mount ShopifyApp::Engine, at: 'shopify'
  root to: 'application#index'
end
