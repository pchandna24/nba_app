import React ,{ Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import Header from './header';

class VideoArticle extends Component{
    state= {
        article:[],
        team:[],
    }
    
    componentWillMount(){
        

        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(
            response => {
            
            let article = response.data[0];
            console.log(response);
            if(article){
                axios.get(`${URL}/teams?id=${article.team}`)
                .then( response => {
                    this.setState({
                        article,
                        team:response.data
                    })
                })
            }

         

        })
     
    }


    render(){
        const article=this.state.article;
        const team = this.state.team;


        return(
            <div>
                <Header teamData={team[0]}/>
                video article
            </div>
        )
    }
}

export default VideoArticle;