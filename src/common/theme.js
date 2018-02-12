import { createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      raised: {
        backgroundColor: '#ff9e38',
        color: '#fff',

        '&:hover': {
          backgroundColor: '#ff8300'
        },
      }
    }
  }
});

export default theme
