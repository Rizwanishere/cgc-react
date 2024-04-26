import { Component } from "react";
import axios from 'axios';
import UserItem from './UserItem';
import Error from '../util/Error';

class UserList extends Component{

    state = {
        users:[],
        hasError: false
    };

    constructor(){
        super();
        
        axios.get('https://api.github.com/users')
        .then(res => this.setState({ users: res.data }))
        .catch(() => this.setState({ hasError: true }));
    };
    
    render(){
        return(
            <div>
                {this.state.hasError && <Error/>}
                {/* {this.state.hasError && <Error msg="This is a customized error"/>} */}
                <h1 className="mt-2 ml-9 text-3xl font-semibold text-gray-500">Users</h1>
                {this.state.users.map(user => <UserItem user={user}/>)}
            </div>
        );
    };
};

export default UserList;
