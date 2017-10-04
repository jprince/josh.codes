# frozen_string_literal: true

class PortfoliosController < ApplicationController
  def show
    @projects = Project.all.order(:id)
  end
end
