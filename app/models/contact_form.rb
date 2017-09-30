# frozen_string_literal: true

class ContactForm < MailForm::Base
  append :remote_ip, :user_agent
  attribute :email,      validate: /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :full_name,  validate: true
  attribute :message,    validate: true

  def headers
    {
      from: 'jprince.codes <josh@jprince.codes>',
      subject: 'jprince.codes | New contact form',
      to: 'josh@jprince.codes'
    }
  end
end
