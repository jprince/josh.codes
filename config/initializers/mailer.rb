Rails.application.config.action_mailer.perform_caching = false
Rails.application.config.action_mailer.delivery_method = :smtp
Rails.application.config.action_mailer.smtp_settings = {
  :address => "email-smtp.us-east-1.amazonaws.com",
  :port => 587,
  :user_name => Rails.application.secrets.smtp_user,
  :password => Rails.application.secrets.smtp_password,
  :authentication => :login,
  :enable_starttls_auto => true
}
