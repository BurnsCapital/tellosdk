import React from 'react';
import socketIOClient from "socket.io-client";

class AnyInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          response: false,
          endpoint: "http://localhost:4001",
          value: ''
        };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      const { endpoint } = this.state;
      this.socket = socketIOClient(endpoint);
      this.socket.on("FromAPI", (data) => {
        this.setState({ response: data })
      });
         
    }
    
    handleChange(event){
        this.setState({value : event.target.value});
        event.preventDefault();
    }

    handleSubmit(event){
      this.socket.emit("control", this.state.value);
    }

    render() {
      const { response } = this.state;
      return (
          <form onSubmit={this.handleSubmit}>
            <label>
                Command:
                <input 
                    type="text" 
                    value={this.state.value} 
                    onChange={this.handleChange} />
            </label>
            <input 
                type="submit"
                value="Submit" />
          </form>

      );
    }
  }

  export default AnyInput;