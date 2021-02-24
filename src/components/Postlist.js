import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import parse from 'html-react-parser'
import {FaSearch} from 'react-icons/fa'
 

class List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:""
        }
    }
 
    handleChange=(e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    }
    render(){
        //console.log("posts", this.props.posts)
        return(
            <div style={{marginLeft:"10px"}}>
              <form className="form-group has-search">
                <span className="form-control-feedback" style={{paddingRight:"4px"}}><FaSearch/></span>
                <input 
                type="search"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="Search By Title"
                className="form-control mr-sm-2"
                aria-label="Search"
                style={{width:"450px", height:"20px"}}
                />
                 
              </form>

              {
                  this.props.posts.filter(ele=>ele.title.includes(this.state.search)).map((ele,i)=>{
                      return(
                          <div key={i} className='card'>
                           <div className="container"  >
                          <h1>{ele.title}</h1>
                          <p>{parse(ele.body)}</p>
                          </div>
                          </div>
                      )
                  })
              }
            </div>
        )
    }
}


const mapStateToProps=(state)=>{
  return {
      posts:state.posts
  }
}

export default connect (mapStateToProps)(List)