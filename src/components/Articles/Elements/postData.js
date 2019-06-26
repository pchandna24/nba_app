import React from 'react';


const PostData = (props) =>{
    return(
        <div style={{
            border:'1px solid #c5c5c5',
            borderBottom:'0px',
            background:'#fff',
            margin:'5px 5px 0 5px',
            padding:'10px',
            fontSize:'13px',
            fontWeight:'300'

        }}>
            <div>
                Date:
                <span style={{
                    fontWeight:'500'
                }}>{props.data.date}</span>
            </div>
            <div>
                Author:
                <span style={{
                    fontWeight:'500'
                }}>{props.data.author}</span>
            </div>
        </div>
    )
}


export default PostData;