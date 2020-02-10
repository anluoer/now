import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.css';
import menuList from './../../config/menuconfig.js';
import {Link} from "react-router-dom";

const { SubMenu } = Menu;
class index extends Component {
    //将已给定的数组映射出来存在一个新数组中，constructor中只能定义数组，要在方法中修改数组
    //
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    //为什么要map映射数组而不是forEach循环数组？因为想从已给定的数组按需求循环出新的数组，并且map循环
    //有返回值
    createMenu=(menue)=>{
        let list=menue.map((obj,index)=>{
            if(obj.children){
                return (
                  <SubMenu key={obj.path} title={obj.title}>
                      {this.createMenu(obj.children)}
                  </SubMenu>  
                )  
            }
            return(
                <Menu.Item key={obj.path}>
                    <Link to={obj.path}>{obj.title}</Link>
                    
                    </Menu.Item>
            ) ;     
        } ) ;
        return list 
        }
        //在render调用之前修改值
        componentWillMount(){
            this.setState({
                list:this.createMenu(menuList)
            });
        }
        
    
    render() {
        return (
            <div>
                <Menu mode="inline">
                    {this.state.list}

                </Menu>
            </div>
        );
    }
}

export default index;