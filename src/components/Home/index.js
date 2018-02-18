import React from 'react'
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Link from 'gatsby-link'

import DetailModal from './DetailModal';

import analyticsPreview from '../Portfolio/images/arcadia-analytics/home.png'
import kanburnPreview from '../Portfolio/images/kanburn/loading.gif'
import kingsCornerPreview from '../Portfolio/images/kings-corner/entry.png'
import ahpLogo from './images/ahp-logo.png'
import arcadiaLogo from './images/arcadia-logo.png'
import buLogo from './images/bu-logo.png'
import skillsChart from './images/skills-chart.png'

import './index.scss'

const Home = () => (
  <Grid container className="home">
    <Grid item xs={12}>
      <h1>I &nbsp; solve &nbsp; problems</h1>
    </Grid>
    <Grid item xs={12}>
      <h2>with an emphasis on:</h2>
    </Grid>

    <Grid container spacing={24}>
      <Grid item xs={4}>
        <Card className="maintainability-card">
          <Icon fontSize={true}>build</Icon>
          <div>Maintainability</div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="scalability-card">
          <Icon fontSize={true}>trending_up</Icon>
          <div>Scalability</div>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className="testability-card">
          <Icon fontSize={true}>done</Icon>
          <div>Testability</div>
        </Card>
      </Grid>
    </Grid>

    <Grid container className="portfolio">
      <Grid item xs={12}>
        <Link to="/portfolio">
          <h3>Portfolio</h3>
        </Link>
      </Grid>
      <Link to="/portfolio">
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <img src={analyticsPreview} />
          </Grid>
          <Grid item xs={4}>
            <img src={kanburnPreview} />
          </Grid>
          <Grid item xs={4}>
            <img src={kingsCornerPreview} />
          </Grid>
        </Grid>
      </Link>
    </Grid>

    <Grid container className="professional-experience">
      <Grid item xs={12}>
        <h3>Professional Experience</h3>
      </Grid>
      <Grid item xs={6}>
        <DetailModal
          class="experience-arcadia"
          logo={arcadiaLogo}
          modalDescription="Healthcare data aggregator and analytics company that enables clients to improve efficiency, profitability, and, most importantly, patient outcomes."
          modalTitle="Arcadia"
        >
          <div>
            <div className="role-description">Lead Engineer &nbsp;|&nbsp; March 2013 - Present</div>
            <ul>
              <li>Lead a team of seven FTEs and as many as 17 contractors in the development and maintenance of Arcadia’s web applications, including our flagship Analytics product.</li>
              <li>Conduct bi-weekly 1-on-1’s with team members, evaluating their engagement and satisfaction, sharing feedback, discussing issues or concerns, and looking for opportunities to align their strengths, interests, and goals with their role.</li>
              <li>Actively contribute to team code reviews, emphasizing consistent standards and patterns, and maximization of maintainability, quality, and learning.</li>
              <li>Personally responsible for candidate sourcing and screening (responsibility for subsequent interviewing is shared amongst the team).  Since development of Arcadia Analytics began in late 2013, the team has tripled in size.</li>
              <li>Work closely with product management to review and clarify user stories and ensure that developed work is consistent with the product vision.</li>
              <li>Maintain a backlog of “technical debt” tasks and refactorings.  The backlog is reviewed, groomed, and reprioritized monthly, as a team, so that the highest priority tasks can be advocated for inclusion in upcoming releases.</li>
              <li>Plan and facilitate Engineering-wide retrospectives at the conclusion of releases.  Feedback and proposed improvements have since been incorporated into departmental processes and policies.</li>
              <li>Developed processes and identified tools to facilitate collaboration amongst distributed team members (necessitated by my relocation to Austin).  Within six months of doing so we’ve successfully onboarded 16 additional remote resources.</li>
              <li>Championed the adoption of “innovation day,” a once-monthly opportunity for individuals to step away from their day-to-day responsibilities and collaboratively address technical and process issues.  The success of this program within our Engineering department has led to its adoption company-wide.</li>
              <li>Advocated for and subsequently planned/orchestrated two internal hackathons.  Datathon is an annual event focused on identifying and visualizing thought-provoking stories found in our Benchmark Database.  Many of the concepts ideated during these hackathons were incubated and eventually developed into “pieces” in <a href="http://datagallery.arcadiasolutions.com/" target="_blank">Arcadia’s data gallery</a>.</li>
              <li>Nominated by executive leadership to serve on a cross-functional Leadership committee, comprised of mid to executive level leaders, tasked with evaluating and improving organizational culture and policies.</li>
            </ul>
            <hr />
            <div className="role-description">Technical Consultant &nbsp;|&nbsp; September 2011 - February 2013</div>
            <ul>
              <li>Designed and developed a claims data warehouse and ETL process to load and store health plan claims.  Claims data was then integrated with clinical EMR data in reports used by the health plan and member clinics to reduce costs and improve the quality of care provided.</li>
              <li>Developed clinical reports that quantify both EMR utilization and quality of care for payer and provider clients.  Reports can be executed on demand and encompass a range of clinical quality measures, including Meaningful Use, ACO, PCMH, HEDIS, and NQF.  Client is using these reports to evaluate provider and organization performance.</li>
              <li>Upgraded pediatric practice EHR systems; discussed upgrade logistics with staff, configured and customized the system based on client workflows, tested core functionality and customizations, resolved issues, and supported the practices post-go-live.</li>
            </ul>
          </div>
        </DetailModal>
      </Grid>
      <Grid item xs={6}>
        <DetailModal
          class="experience-ahp"
          logo={ahpLogo}
          modalDescription="Healthcare consulting firm specializing in mental health, substance use, criminal justice, employment and housing issues.  AHP contracts primarily with state and federal agencies."
          modalTitle="Advocates for Human Potential"
        >
          <div>
            <div className="role-description">Business Analyst &nbsp;|&nbsp; May 2009 - September 2011</div>
            <ul>
              <li>Managed development of a social networking community website for professionals in the behavioral health field.  Ensured that scheduled tasks were accomplished on time and within budget, supervising subcontracted staff as they programmed requested features.  Designed training curricula on the use and management of the community and delivered remote and face-to-face training to stakeholders and client staff, later developing the curricula into eLearning courses.</li>
              <li>Managed the redesign of the company website.</li>
              <li>Documented business and technical requirements for several government web sites.</li>
              <li>Developed a corporate SOP for web design and development projects.  In addition to ensuring quality and standardization, the SOP is used to educate non-technical stakeholders on the individuals and processes that comprise a web development project.</li>
            </ul>
            <hr />
            <div className="role-description">Student Intern Business Analyst &nbsp;|&nbsp; June 2008 - May 2009</div>
            <ul>
              <li>Conducted market research on electronic health records, health information exchange, patient-centered medical homes, and business process management.  Results and recommendations were presented to Executive Leadership.</li>
            </ul>
          </div>
        </DetailModal>
      </Grid>
    </Grid>

    <Grid container className="education">
      <Grid item xs={12}>
        <h3>Education</h3>
        <DetailModal
          class="education-bu"
          logo={buLogo}
          modalTitle="Boston University"
        >
          <div className="role-description">Bachelor of Arts in Economics and Mathematics | May 2009</div>
        </DetailModal>
      </Grid>
    </Grid>

    <Grid container className="technical-skills">
      <Grid item xs={12}>
        <h3>Technical Skills</h3>
        {/* To create new versions of this image, select all elements on the ppt slide and click 'save as picture' */}
        <DetailModal
          class="skills-chart"
          logo={skillsChart}
          modalTitle="Technical Skills"
        >
          <Grid container>
            <Grid item xs={4}>
              <div className="role-description">Languages</div>
              <p>
                Ruby<br/>
                Javascript<br/>
                SQL<br/>
                HTML<br/>
                CSS<br/>
                Elixir*
              </p>
            </Grid>
            <Grid item xs={4}>
              <div className="role-description">Frameworks</div>
              <p>
                Rails<br/>
                AngularJS (1.x)<br/>
                Angular (2+)<br/>
                React<br/>
                Meteor<br/>
              </p>
            </Grid>
            <Grid item xs={4}>
              <div className="role-description">Notable Libraries</div>
              <p>
                jQuery<br/>
                D3.js<br/>
                Docker<br/>
                Redis<br/>
                GraphQL*
              </p>
            </Grid>
          </Grid>
        </DetailModal>
      </Grid>
    </Grid>
  </Grid>
)

export default Home
