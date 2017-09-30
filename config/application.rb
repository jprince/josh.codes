# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module JprinceCodes
  class Application < Rails::Application
    config.action_mailer.perform_deliveries = true
    config.action_mailer.perform_caching = false
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.smtp_settings = {
      address: 'email-smtp.us-east-1.amazonaws.com',
      port: 587,
      user_name: Rails.application.secrets.smtp_user,
      password: Rails.application.secrets.smtp_password,
      authentication: :login,
      enable_starttls_auto: true
    }
  end
end
