# Load the Rails application.
require_relative 'application'

Rails.application.configure do
  config.hosts << ENV.fetch('APP_URL', '').gsub(/(http:\/\/|https:\/\/)(.*)(\/$)/, '\2')
end

APP_URL = ENV.fetch('APP_URL', 'http://localhost:3000').chomp('/')

if(!APP_URL.start_with?('http'))
  if (APP_URL.start-with?('localhost'))
    APP_URL = 'http://' + APP_URL
  elsif
    APP_URL = 'https://' + APP_URL
  end
end

# Initialize the Rails application.
Rails.application.initialize!
