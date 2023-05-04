import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts, loadProduct } from '../redux/action/productAction'
import LoadingCmp from './LoadingCmp'

const ProductListing = () => {
    const products = useSelector((state)=>state)
    //const [cor, getCor] = useState([]);
    const dispatch = useDispatch();
    const load = useSelector((state)=>state.load)

  /*  const fetchProduct = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>res.json())
        .then(carArray=> getCor(carArray))

    }

    useEffect(()=>{
        fetchProduct()
    },[1]);

    console.log(cor)*/
   const fetchProduct = async() =>{
        const response =await axios
        .get("https://qascholarapi.analyttica.com/marketplace-courses")
        .catch((err)=> {
            console.log("Err",err);
        });
        dispatch(setProducts(response.data));
        dispatch(loadProduct(false));
        console.log(response.data)

       
    }
    useEffect(()=> {
        fetchProduct();
    },[1]);
    console.log(products)
  return (
    <>
    {
        load?<LoadingCmp/>:
        <ProductComponent />
    }
        
    </>
  )
}

export default ProductListing;