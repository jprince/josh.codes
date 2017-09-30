# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'jprince@jprince.codes'
  layout 'mailer'
end
