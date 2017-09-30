# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#show'
  resources :contact_forms, only: :create
  resource :portfolio, only: :show
end
