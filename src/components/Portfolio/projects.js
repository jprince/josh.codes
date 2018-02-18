// Slider Images
import analyticsPreview from './images/arcadia-analytics/home.png'
import kanburnPreview from './images/kanburn/pane-1.png'
import kingsCornerPreview from './images/kings-corner/entry.png'
import sleepersAndKeepersPreview from './images/sleepers-and-keepers/league-home.png'
import weddingWebsitePreview from './images/wedding-website/home.png'

// Arcadia Analytics Images
import analyticsPatientSearch from './images/arcadia-analytics/patient-search.gif'
import analyticsInitiative from './images/arcadia-analytics/initiative.png'
import analyticsMedicalExpenseManagement from './images/arcadia-analytics/medical-expense-management.png'
import analyticsGroupCostAnalyzer from './images/arcadia-analytics/group-cost-analyzer.gif'
import analyticsGeographyAnalysis from './images/arcadia-analytics/geography-analysis.png'
import analyticsRiskOpportunities from './images/arcadia-analytics/risk-opportunities.gif'
import analyticsPatientRegistry from './images/arcadia-analytics/patient-registry.gif'
import analyticsBulkOutreach from './images/arcadia-analytics/bulk-outreach.png'
import analyticsPatientSummaryChart from './images/arcadia-analytics/patient-summary-chart.gif'
import analyticsPatientSummaryTasks from './images/arcadia-analytics/patient-summary-tasks.png'

// Kanburn
import kanburnPaneTwo from './images/kanburn/pane-2.png'
import kanburnPaneThree from './images/kanburn/pane-3.png'
import kanburnLoading from './images/kanburn/loading.gif'
import kanburnAdminOne from './images/kanburn/admin-1.png'
import kanburnAdminTwo from './images/kanburn/admin-2.png'

// Sleepers and Keepers
import sleepersAndKeepersNewLeague from './images/sleepers-and-keepers/new-league.png'
import sleepersAndKeepersTeams from './images/sleepers-and-keepers/teams.png'
import sleepersAndKeepersDraftOrder from './images/sleepers-and-keepers/draft-order.png'
import sleepersAndKeepersTradePicks from './images/sleepers-and-keepers/trade-picks.png'
import sleepersAndKeepersKeepers from './images/sleepers-and-keepers/keepers.png'
import sleepersAndKeepersDraftResults from './images/sleepers-and-keepers/draft-results.gif'

// Kings Corner
import kingsCornerSplash from './images/kings-corner/splash.png'
import kingsCornerTagline from './images/kings-corner/tagline.png'
import kingsCornerServices from './images/kings-corner/services.png'
import kingsCornerGallery from './images/kings-corner/gallery.png'
import kingsCornerContact from './images/kings-corner/contact.png'
import kingsCornerMap from './images/kings-corner/map.png'
import kingsCornerLogo from './images/kings-corner/logo.jpg'

// Wedding Website
import weddingWebsiteSchedule from './images/wedding-website/schedule.png'
import weddingWebsiteAccommodations from './images/wedding-website/accommodations.png'
import weddingWebsiteRegistry from './images/wedding-website/registry.png'

export const projects = [
  {
    name: 'Arcadia Analytics',
    problem: 'A patient\'s healthcare information is typically fragmented across several different systems. Primary care physicians, hospitals, and specialists each have their own record management system and these systems rarely exchange data with one another. This makes it difficult for healthcare providers to have a comprehensive picture of a patient and their overall wellness.',
    solution: 'Arcadia Analytics aggregates data from these disparate source systems and provides clients with a single system of record. The tool is used for measuring quality of care provided, prioritizing patient outreach, coordinating care, and analyzing utilization and cost of services.',
    technology: 'Ruby on Rails, AngularJS, Redis, D3, Docker',
    galleryHeight: 360,
    images: [
      {
        img: analyticsPreview,
        title: 'Arcadia Analytics homepage',
        cols: 2,
      },
      {
        img: analyticsPatientSearch,
        title: 'Demo of Arcadia Analytics patient search',
        cols: 2,
      },
      {
        img: analyticsInitiative,
        title: 'Arcadia Analytics initiative page',
        cols: 2,
      },
      {
        img: analyticsMedicalExpenseManagement,
        title: 'Arcadia Analytics medical expense management dashboard',
        cols: 2,
      },
      {
        img: analyticsGroupCostAnalyzer,
        title: 'Demo of Arcadia Analytics group cost analyzer',
        cols: 2,
      },
      {
        img: analyticsGeographyAnalysis,
        title: 'Arcadia Analytics geography analysis card',
        cols: 2,
      },
      {
        img: analyticsRiskOpportunities,
        title: 'Demo of Arcadia Analytics risk opportunities chart',
        cols: 2,
      },
      {
        img: analyticsPatientRegistry,
        title: 'Demo of Arcadia Analytics patient registry report',
        cols: 2,
      },
      {
        img: analyticsBulkOutreach,
        title: 'Arcadia Analytics bulk outreach interface',
        cols: 2,
      },
      {
        img: analyticsPatientSummaryChart,
        title: 'Demo of Arcadia Analytics longitudinal patient summary',
        cols: 2,
      },
      {
        img: analyticsPatientSummaryTasks,
        title: 'Arcadia Analytics care management task pane',
        cols: 2,
      }
    ]
  },
  {
    name: 'Kanburn',
    problem: 'Despite using an agile software development methodology for planning and executing releases, I was often asked by stakeholders (product managers, implementation teams, account managers, etc.) to provide an estimate as to when a particular release would be completed. Determining this was done manually and often had to be recalculated several times throughout a release.',
    solution: 'Kanburn provides a burndown for projects that utilize a Kanban or continuous flow planning process. It takes inputs for team size, velocity, and PTO and uses them, along with estimates on open tickets pulled from the JIRA API, to provide a real-time estimate of the release\'s completion date. Though this was developed as a side-project it was adopted by all three of Arcadia\'s development teams',
    technology: 'Meteor',
    galleryHeight: 290,
    images: [
      {
        img: kanburnPreview,
        title: 'Kanburn summary pane',
        cols: 2,
      },
      {
        img: kanburnPaneTwo,
        title: 'Kanburn defects pane',
        cols: 2,
      },
      {
        img: kanburnPaneThree,
        title: 'Kanburn tickets without estimates pane',
        cols: 2,
      },
      {
        img: kanburnLoading,
        title: 'Kanburn loading overlay',
        cols: 2,
      },
      {
        img: kanburnAdminOne,
        title: 'Kanburn release configuration',
        cols: 2,
      },
      {
        img: kanburnAdminTwo,
        title: 'Kanburn team configuration',
        cols: 2,
      }
    ]
  },
  {
    name: 'Sleepers and Keepers',
    problem: 'For the past 16 years I\'ve run fantasy football and baseball leagues with friends and family. Each year we look forward to getting together for our live draft. While each of the major fantasy sports websites offers live draft software, none of them have adequately met our needs, so I built my own',
    solution: 'Sleepers and Keepers allows a Commissioner to register a league and configure teams, draft order, keepers, and traded draft picks. During the draft each team owner logs into the application and participates in the draft in real-time.',
    technology: 'Ruby on Rails, ActionCable, React',
    galleryHeight: 250,
    images: [
      {
        img: sleepersAndKeepersPreview,
        title: 'Sleepers and Keepers league homepage',
        cols: 2,
      },
      {
        img: sleepersAndKeepersTeams,
        title: 'Sleepers and Keepers teams page',
        cols: 2,
      },
      {
        img: sleepersAndKeepersNewLeague,
        title: 'Sleepers and Keepers new league page',
        cols: 2,
      },
      {
        img: sleepersAndKeepersDraftOrder,
        title: 'Sleepers and Keepers draft order configuration page',
        cols: 2,
      },
      {
        img: sleepersAndKeepersTradePicks,
        title: 'Sleepers and Keepers trade draft pick page',
        cols: 2,
      },
      {
        img: sleepersAndKeepersKeepers,
        title: 'Sleepers and Keepers keeper entry page',
        cols: 2,
      },
      {
        img: sleepersAndKeepersDraftResults,
        title: 'Demo of Sleepers and Keepers draft results',
        cols: 2,
      }
    ]
  },
  {
    name: 'Kings Corner Barbershop',
    problem: 'When my brother decided to open his own high-end barbershop he approached me for help with his branding and website. His requirements were something that reflects the hip character of the shop and allows him to make frequent updates.',
    solution: 'With the requirement that he be able to make edits to his website (for barber profiles and gallery photos) I knew that a CMS would be a better choice than something written from scratch. Wix provided us with nice template options without restricting our ability to customize it for his shop. He\'s since opened a second location and the CMS made it easy to extend the website accordingly.',
    technology: 'Wix.com CMS',
    galleryHeight: 270,
    images: [
      {
        img: kingsCornerPreview,
        title: 'Kings Corner Barbershop location selection page',
        cols: 2,
      },
      {
        img: kingsCornerSplash,
        title: 'Kings Corner Barbershop splash pane',
        cols: 2,
      },
      {
        img: kingsCornerTagline,
        title: 'Kings Corner Barbershop tagline pane',
        cols: 2,
      },
      {
        img: kingsCornerServices,
        title: 'Kings Corner Barbershop services pane',
        cols: 2,
      },
      {
        img: kingsCornerGallery,
        title: 'Kings Corner Barbershop gallery pane',
        cols: 2,
      },
      {
        img: kingsCornerContact,
        title: 'Kings Corner Barbershop contact pane',
        cols: 2,
      },
      {
        img: kingsCornerMap,
        title: 'Kings Corner Barbershop google map pane',
        cols: 2,
      },
      {
        img: kingsCornerLogo,
        title: 'Kings Corner Barbershop logo',
        cols: 2,
      }
    ]
  },
  {
    name: 'My Wedding Website',
    problem: 'My fiancé and I wanted a simple wedding website that would allow us to share important logistical details with our guests prior to sending out invitations.',
    solution: 'Given the straightforwardness of our requirements, and the desire to be able to get something stood up with minimal effort, I decided that working off of a CMS template made more sense than building something from scratch. Ultimately that meant that the majority of the effort was design-related, which I had a lot of fun with.',
    technology: 'Squarespace.com CMS',
    galleryHeight: 270,
    images: [
      {
        img: weddingWebsitePreview,
        title: 'Wedding website homepage',
        cols: 2,
      },
      {
        img: weddingWebsiteSchedule,
        title: 'Wedding website schedule page',
        cols: 2,
      },
      {
        img: weddingWebsiteAccommodations,
        title: 'Wedding website accommodations page',
        cols: 2,
      },
      {
        img: weddingWebsiteRegistry,
        title: 'Wedding website registry page',
        cols: 2,
      }
    ]
  }
]
