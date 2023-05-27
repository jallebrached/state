import './App.css';
import React, { Component } from 'react';

class App extends Component {
  
  state = {
    show: false,
    person: {
      fullName: 'Jalleb Rached',
      bio: 'hi there !',
      imgSrc: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nameslook.com%2Frachad&psig=AOvVaw2karUONcPFhBaD-szV-jGy&ust=1685307266431000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjhmPqwlv8CFQAAAAAdAAAAABAE',
      profession: 'Students',
    },
    time: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { show, person, time } = this.state;

    return (
      <div className="App">
      <header className="App-header">
        <button  onClick={this.toggleShow} style={{
                    backgroundColor: '#7286D3',
                    border:'none',
                    color: 'white',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginTop:'20px',
                    cursor: 'pointer',
                }}>Show Profile</button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <img src={person.imgSrc} alt={person.fullName} style={{width:350,height:350,borderRadius:'50%', border:" 2px solid #2980B9",boxShadow: "0px 0px 10px 0px #2980B9"}}/>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since component mounted: {time}s</p>
        </header>
      </div>
    );
  }
}

export default App;
