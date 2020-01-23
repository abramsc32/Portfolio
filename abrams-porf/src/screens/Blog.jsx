import React, {Component} from 'react'
import NavBlog from '../components/NavBlog'

class Blog extends Component {
    state = {};
    render(){
        return(
            <>
            <NavBlog/>
        <div className='blog' id='blog'/>
        <p>blogggggssssss</p>
        </>
        )
    }
}
export default Blog
