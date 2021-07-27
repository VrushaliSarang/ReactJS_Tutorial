import React,{Component} from 'react'

class CustomDate extends Component{

  render(){
    return(
      <div>
      Current date is {this.props.datenow} and time is {this.props.timenow}
      </div>

    )

  }

}


export default CustomDate
