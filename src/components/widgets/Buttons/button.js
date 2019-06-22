import React from 'react';
import { Link } from 'react-router-dom';


const buttons = (props) => {
    let template = null;

    switch(props.type){
        case 'loadmore':
            template = (
                <div style={{
                    textAlign:'center',
                    background:'#2196f3',
                    borderBottom:'1px solid #d7dd7d7',
                    fontWeight:'500',
                    color:'#eeeeee',
                    padding:'9px',
                    cursor:'pointer',
                    fontSize:'15px'


                

                }}
                onClick={props.loadMore}>
                    {props.cta}

                </div>

            );
            break;
        default:
            template = null
    }
    return template;
}


export default buttons;