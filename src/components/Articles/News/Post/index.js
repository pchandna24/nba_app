import React , { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';

class NewsArticles extends Component {

    state={
        article:[],
        team:[]
    }

    componentWillMount(){

        axios.get(`${URL}/articles?id=${this.props.match.params.id}`)
        .then( response => {
            let article=response.data[0];

            axios.get(`${URL}/teams?id=${article.team}`)
            .then( response =>{
                this.setState({
                    article,
                    team:response.data
                })

            })
            


        })
    }

    
    render(){
        return(
            <div>
                article view
            </div>
        )

    }
}

export default NewsArticles;
