import React from 'react';
import { Link } from 'react-router-dom';

import Slick from 'react-slick';

import styles from './slider.css'





  const SliderTemplates =(props) =>{

    let template=null;

    const settings = {
        dots:true,
        infinite:true,
        arrows:false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        ...props.settings
    }

    switch(props.type){
        case('featured'):
            template = props.data.map((item,i) =>{
                return(
                    <div key={i}>
                        <div className style={{
                            position: 'relative',
                            width:'100%',
                            bottom:'0',
                            textDecoration:'none',
                            right:'0px'
                        }}>
                            <div className={styles.featured_image}
                            style={{
                                background:`url(../images/articles/${item.image})`,
                                height:'330px',
                                backgroundSize:'Cover',
                                backgroundRepeat: 'no-repeat'
                            }}></div>

                            <Link to={`./articles/${item.id}`}>
                                <div className style={{
                                    color:'white',
                                    top:'0px',
                                    width:'100%',
                                    padding:'20px',
                                    fontWeight:'300',
                                    fontSize:'28px',
                                    boxSizing:'border-box',
                                    position:'absolute',
                                    marginTop:'200px',
                                    marginLeft:'10px'



                                }}>
                                    {item.title}
                                </div>


                            </Link>
                        </div>
                    </div>
                )

            })


            break;
        default:
            template = null;
    


    }


      return(
          <Slick {...settings}>
            {template}
          </Slick>
      )
  }

  export default SliderTemplates;