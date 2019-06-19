import React, { useState, useEffect} from 'react'
import axios from 'axios'
import BlogForm from './BlogForm'
import {AuthContext} from '../providers/AuthProvider'
import { List, Header, Segment, Button, Form } from 'semantic-ui-react'

const Blogs = (props) =>{
  const [blogs, setBlogs] = useState([])
  // data type of state in a class component is an object
  const [showForm, setShowForm] = useState(false)


  useEffect(()=>{
    axios.get('/api/blogs')
    .then(res=> setBlogs(res.data))
  },[])

  // const addBlog = (blog) => setBlogs([...blogs, blog])

  const renderBlogs = () =>{
    return blogs.map(blog =>
      <Segment className="eachBlog" key={blog.id}>
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
      <div className="top_page" style={{
        // backgroundColor: "blue",
        display:"flex",
        justifyContent:"space-around"

      }}>

      <Header as = 'h1'>My Blogs</Header>
      <br/>
      <Button onClick={()=>setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Show Form"}
      </Button>
      </div>
      <br/>
      { showForm && <BlogForm toggleForm={setShowForm} add ={(blog)=>setBlogs([...blogs, blog])}/>}
      <List>
        { renderBlogs() }
      </List>
      </>
    )
}


export default Blogs