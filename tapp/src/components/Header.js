import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <div>
                <button onClick={
                    ()=>{
                        this.props.history.go(-1)
                    }
                }>&lt;</button>
                头头
                
            </div>
        );
    }
}

export default withRouter(Header);