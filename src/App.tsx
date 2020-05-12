import React, { Component } from 'react'
import logo from './tide.jpg';
import './App.css';
import moment from 'moment';
import { Tile } from './components/tile/tile'
import './tailwind.generated.css';

class App extends Component {
  state = {
    time: '',
    tides: []
  }

url = 'https://www.worldtides.info/api/v2?extremes&date=' + moment().format('YYYY-MM-DD') + '&lat=53.960660&lon=-6.365030&key=ce0ae41b-2717-4655-87b3-c2892010f7a1'
componentDidMount() {
  fetch(this.url)
  .then(res => res.json())
  .then((data) => {
    
    const allHighTides = data.extremes as any[];
    const upcomingHighTides = allHighTides.filter(x => x.type==='High').map(y => y.date);
    let nextTimeSet = false;
    let allTideTimes = [];
    for(var i = 0; i < upcomingHighTides.length; i++){
      const current = upcomingHighTides[i];
      const next = moment(current);
      var now = moment();

      if(next > now){
        allTideTimes.push(next.format('DD MMM  HH:mm'));
      }

      if(!nextTimeSet && now < next){
        const minutes = next.diff(now, 'minutes');
        const hours = minutes/60;
        
        this.setState({ time: next.fromNow() + ' at ' + next.format('HH:mm')});
        nextTimeSet = true;    
      }
    }

    this.setState({ tides: allTideTimes});
  
    
  })
  .catch(console.log)
}

 render() {
    return (
      <Tile time={this.state.time} tides={this.state.tides}></Tile>
    );
 }
}

export default App;
