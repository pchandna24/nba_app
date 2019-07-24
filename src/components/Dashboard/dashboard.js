import React , { Component } from 'react';
import './dashboard.css';



class Dashboard extends Component {

    state={

    }

    submitForm =()=>{

    }

    render(){
        return(
            <div className="postContainer">
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>

                    dashboard

                </form>
            </div>
        )
    }


}

export default Dashboard;