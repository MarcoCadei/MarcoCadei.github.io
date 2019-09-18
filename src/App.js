import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';

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
              <Box fontWeight="fontWeightBold" fontSize={100} fontFamily="Monospace">Marco Cadei</Box>
              <Box fontSize={15} fontFamily="Monospace">
                Computer Science & Engineering Master's Student @ University of Brescia
              </Box>
              <Box fontSize={15} fontFamily="Monospace">
                Software Engineer Intern @ Zucchetti
              </Box>
            </div>
          </Fade>
          
        </header>
      </div>
    );
  }

}

export default App;
