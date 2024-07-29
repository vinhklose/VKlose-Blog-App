import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from './Items';
import slider from "./slider.json";

export default function Example()
{
    return (
        <Carousel>
            {
                slider.map( (item) => <Item key={item.id} item={item} /> )
            }
        </Carousel>
    )
}

