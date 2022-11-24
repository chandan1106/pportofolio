import data from  '../data';
import  {Link} from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { effect } from 'vue';
removeEventListener
function HomeScreen(props){
    const [products, setproduct]=useState, useEffect{[]};

    useEffect{}=>{
    const fetchdata= async() =>{
        const {data} = await.axiosget("/api/products");
        setproduct()
    }
    fetchdata();
return () =>{
//
};
    }, ([])
    return <ul classname="products">
    {
      data.products.map(product => 
        
        <li>
        <div classname="product">
            <img classname="product-image" src={product.image} alt="product1"/>
            <div classname="product-name">
                <Link to={'./product/+product._id'}>{product.name}</a>
                </div>
            <div classname="product-brand">Slim</div>
            <div classname="product-price">60 ruppee</div>
            <div classname="rating">4.5 stars</div>
        </div>
        </li>
           )
    }
       
    </ul>

}
export default HomeScreen;