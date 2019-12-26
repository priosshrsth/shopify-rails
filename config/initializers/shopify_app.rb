ShopifyApp.configure do |config|
  config.application_name = ENV['APP_NAME']
  config.api_key = ENV['SHOPIFY_API_KEY']
  config.secret = ENV['SHOPIFY_API_SECRET']
  config.old_secret = ""
  config.root_url = '/shopify'
  config.scope = "read_products, read_orders, write_products, read_content, write_content, read_product_listings" # Consult this page for more scope options:
  # https://help.shopify.com/en/api/getting-started/authentication/oauth/scopes
  config.embedded_app = true
  config.after_authenticate_job = false
  config.api_version = "2019-10"
  config.session_repository = Shop

  config.webhooks = [
    {topic: 'app/uninstalled', address: "#{ENV.fetch('APP_URL', '')}shopify/webhooks/app_uninstalled", format: 'json'},
    {topic: 'products/create', address: "#{ENV.fetch('APP_URL', '')}shopify/webhooks/products_create", format: 'json'},
    {topic: 'products/update', address: "#{ENV.fetch('APP_URL', '')}shopify/webhooks/products_update", format: 'json'},
  ]
end

# ShopifyApp::Utils.fetch_known_api_versions                        # Uncomment to fetch known api versions from shopify servers on boot
# ShopifyAPI::ApiVersion.version_lookup_mode = :raise_on_unknown    # Uncomment to raise an error if attempting to use an api version that was not previously known
