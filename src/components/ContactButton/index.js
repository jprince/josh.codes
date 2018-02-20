import React from 'react'
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import { FormControl } from 'material-ui/Form';
import Grid from 'material-ui/Grid';
import Icon from 'material-ui/Icon';
import Input, { InputLabel } from 'material-ui/Input';
import TextField from 'material-ui/TextField';
import Tooltip from 'material-ui/Tooltip';

import './index.scss'

class ContactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      formOpen: false,
      fullName: '',
      message: ''
    };
  }

  handleClose = () => {
    this.setState({ formOpen: false });
  };

  handleOpen = () => {
    this.setState({ formOpen: true });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value});
  }

  handleFullNameChange = (event) => {
    this.setState({ fullName: event.target.value});
  }

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value});
  }

  render() {
    return (
      <div>
        <Tooltip
          classes={{ popper: 'tooltip-text' }}
          enterDelay={50}
          title="Contact Me"
        >
          <Button
            aria-label="contact"
            className="contact-button"
            onClick={this.handleOpen}
            variant="fab"
          >
            <Icon>chat</Icon>
          </Button>
        </Tooltip>
        <Dialog
          classes={{ paper: 'dialog' }}
          maxWidth='md'
          onClose={this.handleClose}
          open={this.state.formOpen}
        >
          <form action="https://formspree.io/josh@jprince.codes" method="POST">
            <DialogTitle>Contact Me</DialogTitle>
            <DialogContent classes={{ root: 'dialog-content' }}>
              <DialogContentText classes={{ root: 'dialog-content-text' }}>
                If you have a project or a role that you think I could help with, please don&apos;t hesitate to reach out.
              </DialogContentText>
              <Grid container>
                <Grid item xs={3} className="contact-info">
                  <div>Josh Prince</div>
                  <div><a href="mailto:josh@jprince.codes">josh@jprince.codes</a></div>
                  <div>978.331.0801</div>
                </Grid>
                <Grid item xs={9}>
                  <Grid container>
                    <Grid item xs={6}>
                      <FormControl className="form-control">
                        <InputLabel>Full Name</InputLabel>
                        <Input
                          classes={{ inkbar: 'inkbar' }}
                          fullWidth
                          name="fullName"
                          onChange={this.handleFullNameChange}
                          value={this.state.fullName}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <FormControl className="form-control">
                        <InputLabel>Email Address</InputLabel>
                        <Input
                          classes={{ inkbar: 'inkbar' }}
                          fullWidth
                          name="email"
                          onChange={this.handleEmailChange}
                          type="email"
                          value={this.state.email}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl className="form-control">
                        <InputLabel>Message</InputLabel>
                        <Input
                          classes={{ inkbar: 'inkbar' }}
                          fullWidth
                          multiline
                          name="message"
                          onChange={this.handleMessageChange}
                          rows="3"
                          type="text"
                          value={this.state.message}
                        />
                      </FormControl>
                    </Grid>
                    <Button
                      disabled={!(this.state.fullName && this.state.email && this.state.message)}
                      onClick={this.handleClose}
                      type="submit"
                      variant="raised"
                    >
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className="dialog-buttons">
              <Button onClick={this.handleClose}>Cancel</Button>
            </DialogActions>
            <input type="hidden" name="_subject" value="jprince.codes | New contact form" />
            <input type="hidden" name="_next" value={window.location.href} />
          </form>
        </Dialog>
      </div>
    )
  }
}

export default ContactButton
