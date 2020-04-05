import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "@bit/plaborderie.react.ui.header";
import Button from '@bit/mui-org.material-ui.button';
import Project from './Projects.js';
import Grid from '@bit/jakeprins.react-milkshake.grid';
import Footer from './Footer';



class Page extends React.Component {
  //creates state for btn
  constructor() {
    super();
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  //handles event and sets state 
  showMenu(event) {
    event.preventDefault();
    if (this.state.showMenu === false) {
      this.setState({
        showMenu: true,
      });
    } else {
      this.setState({
        showMenu: false,
      });
    }
      
    
    
  }
render () {

  return (
  
  <>

    <App />
      
   <Header
  title="Clintronix"
  links={[
    { href: "./App.js", name: "Home" },
    { href: "#", name: "This project" },
    { href: "#", name: "About" }
  ]}
  showMenu={this.state.showMenu}
  onClick={this.showMenu}
 />
 <body><Project></Project>
<Grid>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
  <p>
    Hello paragraph
  </p>
</Grid>
<Button>Hello I am button</Button></body>
<Footer></Footer>
  </>
  );
}
}


ReactDOM.render( <Page />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
