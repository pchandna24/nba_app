import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from '../CardInfo/cardinfo';
import styles from '../VideosList/video.css'

const VideosListTemplate = (props) =>{
    
    return props.data.map((item,i)=>(
         <Link to={`/videos/${item.id}`} key={i}>
            <div style={{
                    display:'flex',
                    borderBottom:'2px solid #d5d5d5',
                    background:'#fff'
            }}>
                <div style={{
                    background:`url(/images/videos/${item.image})`,
                    backgroundSize:'cover !important',
                    width:'90px',
                    backgroundSize:'40px !important',
                    backgroundRepeat:'no-repeat !important',
                    backgroundPosition:'center center !important',
                    background:`url('/images/play.png')`

                }}>

                </div>
                <div style={{
                    flexGrow:'1',
                    padding:'10px'

                }}>
                    <h2 style={{
                       fontSize:'30px',
                       color:'#525252'

                    }}>{item.title}</h2>

                </div>

            </div>
        </Link>
    ))
}

export default VideosListTemplate;



