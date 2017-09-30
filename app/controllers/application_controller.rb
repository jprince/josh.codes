# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :initialize_contact_form

  private

  def initialize_contact_form
    @contact_form = ContactForm.new
  end
end
