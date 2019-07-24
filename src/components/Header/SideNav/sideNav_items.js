import React from 'react';
import {Link} from 'react-router-dom';

import FontAwesome from 'react-fontawesome';
import './sideNav.css'


const SideNavItems = (props) => {

    const items=[
        {
            type: 'option',
            icon:'home',
            text:'Home',
            link:'/',
            login:''
        },
        {
            type: 'option',
            icon:'file-text-o',
            text:'News',
            link:'/news',
            login:''
        },
        {
            type: 'option',
            icon:'play',
            text:'Videos',
            link:'/videos',
            login:''
        },
        {
            type: 'option',
            icon:'sign-in',
            text:'Sign in',
            link:'/sign-in',
            login:false
        },
        {
            type: 'option',
            icon:'sign-out',
            text:'Sign out',
            link:'/sign-out',
            login:true
        }

    ]

    const element = (item,i) =>(
        <div key={i} className={item.type}>
        <Link to={item.link}>
            <FontAwesome name={item.icon}/>
            {item.text}
        </Link>
    </div>

    )

    const showItems = () =>{
        return items.map((item,i)=>{
            return item.login !== '' ?
                ''
            :
                element(item,i)
       

            
        })
    }




    

    
    return(
        <div>
            {showItems()}
        </div>
    )
}


export default SideNavItems;
