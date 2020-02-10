import React, { Component } from 'react';
import {Table} from 'antd';
// import './Student.css';
import Mock from './../Mock/mock';
import axios from 'axios'
// const dataSource = [
//     {
//       key: '1',
//       name: '胡彦斌',
//       age: 32,
//       address: '西湖区湖底公园1号',
//     },
//     {
//       key: '2',
//       name: '胡彦祖',
//       age: 42,
//       address: '西湖区湖底公园1号',
//     },
//     {
//         key: '3',
//         name: '胡彦祖',
//         age: 42,
//         address: '西湖区湖底公园1号',
//       },

//   ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '学校',
      dataIndex: 'school',
      key: 'school',
    },
  ];
class Student extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentWillMount(){
        axios.get('https://easy-mock.com/mock/5dc9d54413bff958057d85d6/antd-demo/alldata').then((res)=>{
            console.log(res);
            this.setState({
                list:res.data.data
            })
        })
    }
    render() {
        return (
            <div className="student-list">
                学生列表
                <Table dataSource={this.state.list} columns={columns} />;
            </div>
        );
    }
}

export default Student;