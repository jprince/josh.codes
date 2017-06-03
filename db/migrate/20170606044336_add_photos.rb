# frozen_string_literal: true

class AddPhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.attachment :asset, null: false
      t.belongs_to :project, null: false, foreign_key: true
      t.timestamps
    end
  end
end
