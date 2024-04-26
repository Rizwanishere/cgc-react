import { Component } from "react";
import axios from 'axios';
import UserItem from './UserItem';
import Error from '../util/Error';
import ShouldRender from '../util/ShouldRender';

class UserList extends Component{

    state = {
        users:[],
        hasError: false
    };

    constructor(){
        super();
        
        axios.get('https://api.github.com/users1') //Forced-Error
        .then(res => this.setState({ users: res.data }))
        .catch(() => this.setState({ hasError: true }));
    };
    
    render(){
        return(
            <div>
                {/* {this.state.hasError && <Error/>} */}
                <ShouldRender when={this.state.hasError}>
                    <Error msg="Customized Message"/>
                </ShouldRender>
                <h1 className="mt-2 ml-9 text-3xl font-semibold text-gray-500">Users</h1>
                {this.state.users.map(user => <UserItem user={user}/>)}
            </div>
        );
    };
};

export default UserList;
