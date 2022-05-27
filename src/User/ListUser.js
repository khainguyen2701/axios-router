import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function ListUser() {

    const [users, setUsers] = useState([]);
    const getAllUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(err => { console.error(err) })
    }
    useEffect(() => {
        getAllUsers();
    }, []);
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text, record)=>(
              <Link to={`/user/${record.id}`}>{text}</Link>
          )
        },
        {
          title: 'Username',
          dataIndex: 'username',
          key: 'username',
          render: (text, record)=>(
            <Link to={`/user/${record.id}`}>{text}</Link>
        )
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          render: (text, record)=>(
            <Link to={`/user/${record.id}`}>{text}</Link>
        )
        },
      ];
    return (
        <div className="list-user">
           <Table dataSource={users} columns={columns} pagination={false} />
        </div>
    )
}

export default ListUser;