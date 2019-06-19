import React, { useState} from 'react'
import {Form, } from 'semantic-ui-react'
import axios from 'axios'
import { useFormInput, } from '../Hooks/useFormInput'

const BlogForm =(props) =>{
  const emptyForm = {
    title: "",
    body: "", 
   }
  const [form, setForm] = useState(emptyForm)

  const handleChange = (name) => (e)=> {
    setForm({...form, [name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post("/api/blogs", {...form,})
    .then(res=>{
      props.add(res.data)
      props.toggleForm()
    })
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input 
        label= 'Title'
        placeholder = 'Title'
        name="title"
        required
        onChange={handleChange("title")}
        value={form.title}
        />
        <Form.Input 
        label= 'Body'
        placeholder = 'Body'
        name="body"
        required
        onChange={handleChange("body")}
        value={form.body}
        />
      </Form.Group>
      <Form.Button>
        Submit
      </Form.Button>
    </Form>
  )

}


// class BlogForm extends React.Component{

//   state = {title: "", body: "", }

//   handleSubmit = (e) =>{
//     e.preventDefault()
//     axios.post("/api/blogs", {...this.state,})
//     .then(res=>{
//       this.props.add(res.data)
//       this.props.toggleForm()
//     })
//   }

//   handleChange = (e, {name, value, }) =>{
//     this.setState({ [name]: value,})
//   }

  
//   render(){
//     return(
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group widths='equal'>
//           <Form.Input 
//           label= 'title'
//           placeholder = 'Title'
//           name="title"
//           required
//           onChange={this.handleChange}
//           value={this.state.title}
//           />
//           <Form.Input 
//           label= 'body'
//           placeholder = 'Body'
//           name="body"
//           required
//           onChange={this.handleChange}
//           value={this.state.title}
//           />
//         </Form.Group>
//         <Form.Button>
//           Submit
//         </Form.Button>
//       </Form>
//     )
//   }
// }


// const BlogForm = (props) =>{

//   return(
//     <>
//     <Form>

//     </Form>
//     </>
//   )
// }

export default BlogForm