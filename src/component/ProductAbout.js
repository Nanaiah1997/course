import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ProductAbout = () => {
 const About = useSelector((state)=>state.product)

  return (
    <div>ProductAbou</div>
  )
}

export default ProductAbout