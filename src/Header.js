import React,{Component} from 'react'
import NavLink from './NavLink.js'

class Header extends Component{
  state = {
    title: "This is state title-updated",
    links : [{
      name:"HTML",
      url: "/css/"
    },
    {
      name:"JavaScript",
      url: "/js/"
    },
    {
      name:"Python",
      url: "/python/"
    },]
  }
  render(){
    return(
      <header>
        <h1>{this.state.title}</h1>
        <nav>{
          this.state.links.map((link)=>{
           return   <NavLink url={link.url}>{link.name}</NavLink>
          })
        }

        </nav>
      </header>
    )
  }
}


export default Header
