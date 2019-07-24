import React , { Component } from 'react';
import FormFields from '../widgets/FormFields/formFields';
import './dashboard.css';



class Dashboard extends Component {

    state={
        postError:'',
        loading:false,
        formdata:{
            author:{
                element:'input',
                value:'',
                config:{
                    name:'author_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true,
                    
                },
                valid:false,
                touched:false,
                validationMessage:''

            },
            title:{
                element:'input',
                value:'',
                config:{
                    name:'title_input',
                    type:'text',
                    placeholder:'Enter the title'
                },
                validation:{
                    required:true,
                    
                },
                valid:false,
                touched:false,
                validationMessage:''

            },

        }

    }

    submitForm =()=>{

    }

    render(){
        return(
            <div className="postContainer">
                <form onSubmit={this.submitForm}>
                    <h2>Add Post</h2>

                    <FormFields
                        id={'author'}
                        formdata={this.state.formdata.author}
                        change={(element)=>this.updateForm(element)}
                    />

                </form>
            </div>
        )
    }


}

export default Dashboard;