# frozen_string_literal: true

class ProjectSeeder
  class << self
    def seed
      projects.each do |project|
        Project.find_or_initialize_by(name: project[:name]).update_attributes!(project)
      end
    end

    private

    def photo_attributes_for_file(file_name)
      existing_photo_id = Photo.find_by(asset_file_name: file_name).try(:id)
      { id: existing_photo_id, asset: File.new(File.join(PHOTO_PATH, file_name)) }
    end

    # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    def projects
      @projects ||=
        [
          {
            name: 'Arcadia Analytics',
            problem: 'A patient\'s healthcare information is typically fragmented across several different systems. Primary care physicians, hospitals, and specialists each have their own record management system and these systems rarely exchange data with one another. This makes it difficult for healthcare providers to have a comprehensive picture of a patient and their overall wellness.',
            solution: 'Arcadia Analytics aggregates data from these disparate source systems and provides clients with a single system of record. The tool is used for measuring quality of care provided, prioritizing patient outreach, coordinating care, and analyzing utilization and cost of services.',
            technology: 'Ruby on Rails, AngularJS, Redis, D3, Docker',
            photos_attributes: [
              photo_attributes_for_file('arcadia-analytics-home.png'),
              photo_attributes_for_file('arcadia-analytics-patient-search.gif'),
              photo_attributes_for_file('arcadia-analytics-initiative.png'),
              photo_attributes_for_file('arcadia-analytics-medical-expense-management.png'),
              photo_attributes_for_file('arcadia-analytics-group-cost-analyzer.gif'),
              photo_attributes_for_file('arcadia-analytics-geography-analysis.png'),
              photo_attributes_for_file('arcadia-analytics-risk-opportunities.gif'),
              photo_attributes_for_file('arcadia-analytics-patient-registry.gif'),
              photo_attributes_for_file('arcadia-analytics-bulk-outreach.png'),
              photo_attributes_for_file('arcadia-analytics-patient-summary-chart.gif'),
              photo_attributes_for_file('arcadia-analytics-patient-summary-tasks.png')
            ]
          },
          {
            name: 'Kanburn',
            problem: 'Despite using an agile software development methodology for planning an executing on releases, I was often asked by stakeholders (product managers, implementation teams, account managers, etc.) to provide an estimate as to when a particular release will be completed. Determining this was done manually and often had to be recalculated several times throughout a release.',
            solution: 'Kanburn provides a burndown for projects that utilize a Kanban or continuous flow planning process. It takes inputs for team size, velocity, and PTO and uses them, along with estimates on open tickets pulled from the JIRA API, to provide a real-time estimate of the release\'s completion date. Though this was developed as a side-project it was adopted by all three of Arcadia\'s development teams',
            technology: 'Meteor',
            photos_attributes: [
              photo_attributes_for_file('kanburn-pane-1.png'),
              photo_attributes_for_file('kanburn-pane-2.png'),
              photo_attributes_for_file('kanburn-pane-3.png'),
              photo_attributes_for_file('kanburn-loading.gif'),
              photo_attributes_for_file('kanburn-admin-1.png'),
              photo_attributes_for_file('kanburn-admin-2.png')
            ]
          },
          {
            name: 'Sleepers and Keepers',
            problem: 'For the past 16 years I\'ve run fantasy football and baseball leagues with friends and family. Each year we look forward to getting together for our live draft. While each of the major fantasy sports websites offers live draft software, none of them have adequately met our needs, so I built my own',
            solution: 'Sleepers and Keepers allows a Commissioner to register a league and configure teams, draft order, keepers, and traded draft picks. During the draft each team owner logs into the application and participates in the draft in real-time.',
            technology: 'Ruby on Rails, ActionCable, React',
            photos_attributes: [
              photo_attributes_for_file('sleepers-and-keepers-league-home.png'),
              photo_attributes_for_file('sleepers-and-keepers-new-league.png'),
              photo_attributes_for_file('sleepers-and-keepers-teams.png'),
              photo_attributes_for_file('sleepers-and-keepers-draft-order.png'),
              photo_attributes_for_file('sleepers-and-keepers-trade-picks.png'),
              photo_attributes_for_file('sleepers-and-keepers-keepers.png'),
              photo_attributes_for_file('sleepers-and-keepers-draft-results.gif')
            ]
          },
          {
            name: 'King\'s Corner Barbershop',
            problem: 'When my brother decided to open his own high-end barbershop he approached me for help with his branding and website. His requirements were something that reflects the hip character of the shop and allows him to make frequent updates.',
            solution: 'With the requirement that he be able to make edits to his website (for barber profiles and gallery photos) I knew that a CMS a better choice than something written from scratch. Wix provided us with nice template options without restricting our ability to customize it for his shop. He\'s since opened a second location and the CMS made it an easy job to extend the website accordingly.',
            technology: 'Wix.com CMS',
            photos_attributes: [
              photo_attributes_for_file('kings-corner-splash.png'),
              photo_attributes_for_file('kings-corner-entry.png'),
              photo_attributes_for_file('kings-corner-tagline.png'),
              photo_attributes_for_file('kings-corner-services.png'),
              photo_attributes_for_file('kings-corner-gallery.png'),
              photo_attributes_for_file('kings-corner-contact.png'),
              photo_attributes_for_file('kings-corner-map.png')
            ]
          }
        ]
    end
    # rubocop:enable Metrics/AbcSize, Metrics/MethodLength

    PHOTO_PATH = File.join(Rails.root, 'app', 'assets', 'images', 'portfolio').freeze
  end
end
