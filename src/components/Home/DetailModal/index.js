import React from 'react'
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Modal from 'material-ui/Modal';

import './index.scss'

class DetailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
  }

  handleClose = () => {
    this.setState({ modalOpen: false });
  };

  handleOpen = () => {
    this.setState({ modalOpen: true });
  };

  render() {
    const modalDescription = this.props.modalDescription ? (
      <div className="modal-description">
        {this.props.modalDescription}
      </div>
    ) : null;

    return (
      <div className={this.props.class}>
        <img src={this.props.logo} />
        <Button variant="fab" aria-label="open" onClick={this.handleOpen}>
          <Icon>add_icon</Icon>
        </Button>
        <Modal open={this.state.modalOpen} onClose={this.handleClose}>
          <div className={`modal ${this.props.class}-modal`}>
            <div className="modal-content">
              <h4>{this.props.modalTitle}</h4>
              {modalDescription}
              <div className="modal-body">
                {this.props.children}
              </div>
            </div>
            <div className="modal-footer">
              <Button aria-label="dismiss" onClick={this.handleClose}>
                Dismiss
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default DetailModal
