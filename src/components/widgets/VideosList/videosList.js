import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/button';

export default class VideosList extends Component {
    state={
        teams:[],
        videos:[],
        start: this.props.start,
        end: this.props.start+ this.props.amount,
        amount: this.props.amount

    }

    loadMore = () =>{
        
    }


    renderButton = () =>{
        return this.props.linkTo ?
             <Button
                type="loadmore"
                loadMore={()=>this.loadMore()}
                cta="Load More Videos"
             />
             :
            <Button type="linkTo" cta="More Videos" linkTo="/videos/"/>
    }

    renderTitle = () =>{
        return this.props.title ? <h3 style={{
            textAlign:'center',
            margin:'20px',
            color:'#353535',
            fontWeight:'300',
            fontSize:'21px',
            display:'block',
            textDecoration:'none'
        }}><strong>NBA</strong> Videos</h3>: null
    }



    render() {
        return (
            <div style={{
            
            }}>
                { this.renderTitle() }
                { this.renderButton() }
            </div>
        )
    }
}
