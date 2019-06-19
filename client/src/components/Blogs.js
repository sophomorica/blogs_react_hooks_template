import React, {Component, useState, useEffect} from 'react'
import axios from 'axios'
import { List, Header, Segment, } from 'semantic-ui-react'


class Blogs extends Component{
  render(){
    return(
      <>
      <Header as = 'h1'>My Blogs</Header>
      <br/>
      <List>
        
      </List>
      </>
    )
  }
}

export default Blogs