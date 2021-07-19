import React, { Component } from 'react'

export class NewComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Subscribe to Mr.Fahad",
             sub: "Subscribe",
             imgURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_103837.png&f=1&nofb=1"
        };
    }

styles = {
    fontStyle : "italic",
    color: "purple"
  }
  
buttonChange = ()=> {
      this.setState({
          message: "Hit the bell icon to never miss an update",
          sub: "Subscribed",
      });
  }

imgChange=()=>{
    this.setState({
    message: "Thank you! Enjoy!!",
    imgURL: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwebstockreview.net%2Fimages%2Fbell-icon-png-1.png&f=1&nofb=1"
    });
}
    render() {
        return (
            <div className="App">
                <h2 style={this.styles}> {this.state.message} </h2>
                <p><button onClick={this.buttonChange}>{this.state.sub}</button></p>
                <img style={{width: "60px", height: "60px"}} src={this.state.imgURL} onClick={this.imgChange} alt="not" />
            </div>
        );
    }
}

export default NewComp;
