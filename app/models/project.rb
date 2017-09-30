# frozen_string_literal: true

class Project < ActiveRecord::Base
  has_many :photos, dependent: :destroy

  accepts_nested_attributes_for :photos
end
