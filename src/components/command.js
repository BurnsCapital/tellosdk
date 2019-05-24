import React from 'react';
import socketIOClient from "socket.io-client";

class Cmd extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          response: false,
          endpoint: "http://localhost:4001"
        };
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
      const { endpoint } = this.state;
      this.socket = socketIOClient(endpoint);
      this.socket.on("FromAPI", (data) => {
        this.setState({ response: data })
      });
         
    }
    
    handleClick(){
      console.log("emitting")
      this.socket.emit("control", this.props.command);
    }

    render() {
      const { response } = this.state;
      return (
          <div style={{ textAlign: "center" }}>
            <button onClick={this.handleClick}>
             {this.props.command}
            </button>
          </div>
      );
    }
  }

  export default Cmd;