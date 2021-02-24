import React from 'react'
import {addPost} from '../actions/postAction'
import {connect} from 'react-redux'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:"",
            body:""
        }
    }
   
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
   
    handleChangeEditor=( event, editor ) => {
                        const body= editor.getData()
                        //console.log({ event, editor, body })
                        this.setState({body})
                    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            title:this.state.title,
            body:this.state.body
        }
        console.log("formData", formData)
        this.props.dispatch(addPost(formData))
       // this.props.history.push('/List')
            this.setState({
                title:"",
                body:""
            })
    }
    render(){
        
        return(
            <div>
            <div className="main">
            <div  className="post-container" style={{marginTop:"6px"}}>
            <form onSubmit={this.handleSubmit}>
            <input 
            type="text"
            name="title"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder= "TITLE"
            style={{width: "40%"}}
           // className="form" required
            
            />
           
            
           
          
             <CKEditor
             editor={ClassicEditor}
             data={this.state.body}
             onChange={this.handleChangeEditor}
             
             />
           
           <input type="submit" value="PUBLISH" style={{width: "20%"}}/>
            </form>
           
            </div> 
            </div>
            </div>
          
            
             
        )
    }
}
export default connect()(Form)