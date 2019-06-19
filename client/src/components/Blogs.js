import React, { useState, useEffect} from 'react'
import axios from 'axios'
import BlogForm from './BlogForm'
import {AuthContext} from '../providers/AuthProvider'
import { List, Header, Segment, Button } from 'semantic-ui-react'

const Blogs = (props) =>{
  const [blogs, setBlogs] = useState([])
  // data type of state in a class component is an object
  const [showForm, setShowForm] = useState(false)


  useEffect(()=>{
    axios.get('/api/blogs')
    .then(res=> setBlogs(res.data))
  },[])

  const renderBlogs = () =>{
    return blogs.map(blog =>
      <Segment key={blog.id}>
        <List.Header as = 'h3'>{ blog.title }</List.Header>
        <List.Description>
          { blog.body }
        </List.Description>
      </Segment>
    )
  }
    return(
      <>
      <br/>
      <Header as = 'h1'>My Blogs</Header>
      <br/>
      <Button onClick={()=>setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Show Form"}
      </Button>
      <br/>
      { showForm && <BlogForm/>}
      <List>
        { renderBlogs() }
      </List>
      </>
    )
}


export default Blogs