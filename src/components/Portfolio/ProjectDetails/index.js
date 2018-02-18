import React from 'react'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails } from 'material-ui/ExpansionPanel';
import Icon from 'material-ui/Icon';

import './index.scss'

const baseState = {
  problemPanelExpanded: false,
  solutionPanelExpanded: false,
  technologyPanelExpanded: false
}

class ProjectDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = baseState
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedProject !== this.state.selectedProject) {
      this.setState(baseState)
    }
  }

  handleProblemPanelChange = () => {
    this.setState({
      problemPanelExpanded: !this.state.problemPanelExpanded,
      solutionPanelExpanded: false,
      technologyPanelExpanded: false
    });
  };

  handleSolutionPanelChange = () => {
    this.setState({
      problemPanelExpanded: false,
      solutionPanelExpanded: !this.state.solutionPanelExpanded,
      technologyPanelExpanded: false
    });
  };

  handleTechnologyPanelChange = () => {
    this.setState({
      problemPanelExpanded: false,
      solutionPanelExpanded: false,
      technologyPanelExpanded: !this.state.technologyPanelExpanded
    });
  };

  render() {
    return (
      <div className="project-details">
        <h2>{this.props.selectedProject.name}</h2>
        <div className="expansion-panel">
          <ExpansionPanel
            className={`problem-panel ${(this.state.problemPanelExpanded ? 'active' : '')}`}
            expanded={this.state.problemPanelExpanded}
            onChange={this.handleProblemPanelChange}
          >
            <ExpansionPanelSummary
              className="expansion-panel-header"
              expandIcon={<Icon>expand_more</Icon>}
            >
              <Icon className="indicator-icon">error</Icon>
              <span className="header-label">Problem</span>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-panel-details">
              {this.props.selectedProject.problem}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            className={`solution-panel ${(this.state.solutionPanelExpanded ? 'active' : '')}`}
            expanded={this.state.solutionPanelExpanded}
            onChange={this.handleSolutionPanelChange}
          >
            <ExpansionPanelSummary
              className="expansion-panel-header"
              expandIcon={<Icon>expand_more</Icon>}
            >
              <Icon className="indicator-icon">lightbulb_outline</Icon>
              <span className="header-label">Solution</span>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-panel-details">
              {this.props.selectedProject.solution}
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            className={`technology-panel ${(this.state.technologyPanelExpanded ? 'active' : '')}`}
            expanded={this.state.technologyPanelExpanded}
            onChange={this.handleTechnologyPanelChange}
          >
            <ExpansionPanelSummary
              className="expansion-panel-header"
              expandIcon={<Icon>expand_more</Icon>}
            >
              <Icon className="indicator-icon">desktop_mac</Icon>
              <span className="header-label">Technology</span>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="expansion-panel-details">
              {this.props.selectedProject.technology}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    )
  }
}

export default ProjectDetails
