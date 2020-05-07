import React, { Fragment } from 'react';
import './Restaurants.css';

const RestaurantsDisplay = (props) => {
    console.log("Props is>>>>>",props)

    const renderList = ({datalist}) => {
        if(datalist){
            return datalist.map((item,index) => {
                return(
                    <div class="card col-md-2">
                            <div class="row">
                            <img class="card-img-top" src={item.thumb} alt="thumb"/>
                            <span class="topTemp">{item.name}</span>
                            </div>
                            <div class="card-body">
                            <span class="max">{item.city}</span>   /
                                      <span class="min">{item.locality}</span>
                                <h4 class="card-title">2 Person = ₹{item.min_price}</h4>
                                
                            </div>
                        </div>
                )
            })
        }else{
            return(
                <div>
                    <center>
                    <img src="/loading.gif"/>
                    </center>
                </div>
               
            )
        }
        

    }


    return(
        <Fragment>
          {renderList(props)}
        </Fragment>
    )
}

export default RestaurantsDisplay;