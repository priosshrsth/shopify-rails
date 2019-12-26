# Load the Rails application.
require_relative 'application'

Rails.application.configure do
  config.hosts << ENV.fetch('APP_URL', '').gsub(/(http:\/\/|https:\/\/)(.*)(\/$)/, '\2')
end

# Initialize the Rails application.
Rails.application.initialize!
