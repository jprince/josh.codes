# frozen_string_literal: true

class Photo < ActiveRecord::Base
  belongs_to :project

  has_attached_file :asset
  do_not_validate_attachment_file_type :asset
end
