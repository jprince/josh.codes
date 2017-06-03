# frozen_string_literal: true

class AddProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.string :problem, null: false
      t.string :solution, null: false
      t.string :technology, null: false
      t.timestamps
    end
  end
end
