import React,{Component} from 'react'
import CustomDate from './CustomDate'
class Main extends Component{
  constructor() {

    const today = new Date();

    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    super()

    this.state = {

      currentDate: date,
      currentTime: time

    }

    // This binding is necessary to make `this` work in the callback
   this.updateInfo = this.updateInfo.bind(this);

  }
  updateInfo(event){
    this.setState(()=>{
      const today = new Date();

      const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

      const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

      return {currentDate:date,currentTime:time}
    });
  }
  render(){
    return(
      <main>

        <p>This is the main content element</p>

        <CustomDate  datenow={this.state.currentDate} timenow={this.state.currentTime}/>

        <button onClick={this.updateInfo}>Refresh</button>
      </main>

    )

  }

}


export default Main
