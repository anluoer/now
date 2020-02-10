import React, { Component } from 'react';
import store from './store';
import Add from './action';
import {connect} from 'react-redux';
/*
触发action需要使用store.dispatch(action)
*/
class App extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.num}</h1>
                hahah 
                {/* store.dispatch(Add())触发action */}
                <button onClick={()=>{
                    store.dispatch(Add());
                }
                }>click+1</button>
            </div>
        );
    }
}
let mapStateToProps = (state) =>({
        num:state.num
    })

export default connect(mapStateToProps)(App);