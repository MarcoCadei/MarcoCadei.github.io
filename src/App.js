import React from 'react';
import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import DescriptionIcon from '@material-ui/icons/Description';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Link from '@material-ui/core/Link';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount(){
    this.setState({loaded: true});
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
            <Fade in={this.state.loaded} timeout={2000}>
              <div>
                <ThemeProvider theme={theme}>
                  <Typography variant="h1">Marco Cadei</Typography>
                  <Typography variant="body2">
                    Software Engineer @ Bending Spoons  
                  </Typography>
                  <Typography variant="body2">
                    Computer Science & Engineering Master's Student @ University of Brescia
                  </Typography>
                  {/* <IconButton color="primary" size="medium" style={{color: "white"}} aria-label="Resume (CV)">
                    <Link href="https://www.linkedin.com/in/marcocadei/" color="inherit" target="_blank">
                      <DescriptionIcon fontSize="large" />
                    </Link>
                  </IconButton> */}
                  <IconButton color="primary" size="medium" style={{color: "white"}} aria-label="Linkedin">
                    <Link href="https://www.linkedin.com/in/marcocadei/" color="inherit" target="_blank">
                      <LinkedInIcon fontSize="large" />
                    </Link>
                  </IconButton>
                  <IconButton color="primary" size="medium" style={{color: "white"}} aria-label="Instagram">
                    <Link href="https://www.instagram.com/marco_cadei/" color="inherit" target="_blank">
                      <InstagramIcon fontSize="large" />
                    </Link>
                  </IconButton>
                </ThemeProvider>
              </div>
            </Fade>
        </header>
      </div>
    );
  }

}

export default App;
