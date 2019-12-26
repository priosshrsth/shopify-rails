# Load the Rails application.
require_relative 'application'

# Load helper.rb as global helper file
Dir[Rails.root.join('app/helpers/global', "*.rb")].each {|file| require file }
# Initialize the Rails application.
Rails.application.initialize!
