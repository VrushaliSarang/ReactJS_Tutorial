import React,{Component} from 'react'
import NavLink from './NavLink.js'

class Header extends Component{

  render(){
    return(
      <header>
        <h1>This is the header</h1>
        <nav>
          <NavLink>HTML</NavLink>
          <a href="/css/">CSS</a> |
          <a href="/js/">JavaScript</a> |
          <a href="/python/">Python</a>
        </nav>
      </header>
    )
  }
}


export default Header
