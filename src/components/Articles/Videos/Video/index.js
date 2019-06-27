import React ,{ Component } from 'react';
import axios from 'axios';
import { URL } from '../../../../config';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/VideosRelated/videosRelated';

class VideoArticle extends Component{
    state= {
        article:[],
        team:[],
        teams:[],
        related:[]
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
                    });
                    this.getRelated();
                })
            }

         

        })
     
    }


    getRelated = () => {
        axios.get(`${URL}/teams`)
        .then( response =>{
            let teams = response.data

            axios.get(`${URL}/videos?q=${this.state.team[0].city}`)
            .then(response =>{
                this.setState({
                    teams,
                    related:response.data
                })

            })


        })
    }


    render(){
        const article=this.state.article;
        const team = this.state.team;


        return(
            <div>
                <Header teamData={team[0]}/>
                 <div style={{
                     background:'#fff',
                     margin:'0 5px',
                     border:'1px solid #c5c5c5',

                 }}>
                     <h1 style={{
                         fontSize:'25px',
                         fontWeight:'400',
                         color:'#4d4d4d',
                         margin:'15px 0',
                         padding:'0 10px'

                     }}>{article.title}</h1>
                     <iframe style={{
                         border:'0'
                     }}
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://www.youtube.com/embed/${article.url}`}
                     >

                     </iframe>
                 </div>
                 <VideosRelated
                    data={this.state.related}
                    teams={this.state.teams}
                 />
            </div>
        )
    }
}

export default VideoArticle;