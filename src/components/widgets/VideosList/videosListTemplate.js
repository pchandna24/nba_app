import React from 'react';
import styles from './video.css';

import { Link } from 'react-router-dom';
import CardInfo from '../CardInfo/cardinfo';

const VideosListTemplate = (props) => {
    return props.data.map( (item,i)=>(
        <Link to={`/videos/${item.id}`}key={i}>
            <div style={{
                  display:'flex',
                  borderBottom:'2px solid #d5d5d5',
                  background: '#fff',
            }}>
                <div className={styles.left}
                    style={{
                        background:`url(/images/videos/${item.image})`,
                        backgroundSize:'cover' 
                    }}
                
                >

                    <div style={{
                        width:'90px',
                        height:'90px',
                        backgroundSize:'40px !important',
                        backgroundRepeat:'no-repeat !important',
                        backgroundPosition:'center center !important',
                       // background:`url(/images/play.png)`
                        
                    }}>

                    </div>

                </div>
                <div className={styles.right}>
                    <h2 style={{
                        fontSize:'13px',
                        color:'#525252'
                    }}>{item.title}</h2>
                </div>
            </div>
        </Link>
    ) )


}

export default VideosListTemplate;