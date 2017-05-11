# frozen_string_literal: true

# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require_relative 'config/application'

Rails.application.load_tasks

if Rails.env.test? || Rails.env.development?
  require 'rubocop/rake_task'
  require 'scss_lint/rake_task'
  RuboCop::RakeTask.new
  SCSSLint::RakeTask.new
end

task checks: %i[rubocop scss_lint whitespace]

task(:default).clear
task default: %i[checks spec]
