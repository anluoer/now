import React, { Component } from 'react';

class A extends Component {
    render() {
        return (
            <div>
                a内容
                <button onClick={
                    ()=>{
                        this.props.history.push('/')
                    }
                }>跳转</button>
            </div>
        );
    }
}

export default A;