# Load the Rails application.
require_relative 'application'

# Load helper.rb as global helper file
Dir[Rails.root.join('app/helpers/global', "*.rb")].each {|file| require file }

Rails.application.configure do
  config.hosts << ENV.fetch('APP_URL', '').gsub(/(http:\/\/|https:\/\/)(.*)(\/$)/, '\2')
end

# Initialize the Rails application.
Rails.application.initialize!
