import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class Jump extends Component {
    render() {
        return (
            
            <div>
                <Link to={this.props.to} children={(props)=>{
                    
                   
                }}>{this.props.children }</Link>
            </div>
        );
    }
}

export default Jump;