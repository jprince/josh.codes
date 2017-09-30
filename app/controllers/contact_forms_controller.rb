# frozen_string_literal: true

class ContactFormsController < ApplicationController
  def new
    initialize_contact_form
  end

  def create
    contact_form = ContactForm.new(contact_form_params)
    contact_form.request = request
    respond_to do |format|
      if contact_form.deliver
        format.js { @status = 'success' }
      else
        format.js { @status = 'error' }
      end
      format.html { render 'new' }
    end
  end

  private

  def contact_form_params
    params.require('contact_form').permit(
      email: Parameters.string,
      full_name: Parameters.string,
      message: Parameters.string
    )
  end
end
