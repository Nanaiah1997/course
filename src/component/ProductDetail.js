import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
//import { selectedProduct } from '../redux/action/productAction';
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import ProductAbout from "./ProductAbout";
import { selectedProduct } from "../redux/action/productAction";
import Model from "./Model";

export const ProductDetail = () => {
  const product = useSelector((state) => state.product);

  const { description, overview } = product;
  const { productID } = useParams();
  const dispatch = useDispatch();
  const [cor, updateCor] = useState([]);

  let [tab, setTab] = useState({ ab: true, over: false, time: false });

  console.log(productID);

  const [model, setModel] = useState(false);

  /*const fetchProductDetail = async() =>{
  const response =await axios.get(`"https://qaoeapi.analyttica.com/marketplace-courses/tenant/cd2466f4-c40f-4a8e-ab92-617a1dac54ac/code/${productID}"`)
  .catch((err)=> {
      console.log("Err",err);
  });
  dispatch(selectedProduct(response.data));
  console.log(response.data)
  //.get(`https://qaoeapi.analyttica.com/marketplace-courses/tenant/cd2466f4-c40f-4a8e-ab92-617a1dac54ac/code/${productID}`)

}

 useEffect(()=>{
  fetchProductDetail();
 },[productID]);*/

  const getCor = () => {
    fetch(
      `https://enterpriseapi.rolai.com/marketplace-courses/tenant/cd2466f4-c40f-4a8e-ab92-617a1dac54ac/code/${productID}`
    )
      .then((res) => res.json())
      .then((carArray) => {
        updateCor(carArray);
      });

    dispatch(selectedProduct(getCor.data));
  };
  useEffect(() => {
    getCor();
  }, [1]);

  return (
    /* <div>
      {Object.keys(product).length===0? (
        <div>loading</div>
      ):(
        <div>
          <h2>{description}</h2>
        </div>
      )
      
    }
        
    </div>*/

    <div className="main-detail">
      {model && <Model closeModel={setModel} />}
      <div className="detail-row">
        <div className="detail-col-1">
          <div className="detail-text">
            <h6>
              <span>course</span> {cor.code}
            </h6>
          </div>
          <div className="detail-code">
            <h3>{cor.code}</h3>
          </div>
          <div className="detail-description">
            <p>{cor.description}</p>
          </div>
        </div>
        <div className="detail-col-2">
          <div className="detail-bg1">
            <img src={cor.background_image} />
          </div>
          <div className="detail-content1">
            <div className="deatail-module">
              <div className="mod1">
                <h6>3 Modules</h6>
              </div>
              <div className="mod2">
                <h6>13 Data Cases</h6>
              </div>
            </div>

            <div className="detail-module2">
              <div className="mod1">
                <h6>12 Quizzes</h6>
              </div>
              <div className="mod2">
                <h6>Certificate</h6>
              </div>
            </div>
          </div>
          <div className="detail-btn">
            <button onClick={() => setModel(true)}> learn for free</button>
          </div>
          {/* {model && <Model closeModel={setModel}/>} */}
        </div>
        <ul className="course-nav">
          <li onClick={() => setTab({ ab: true, over: false, time: false })}>
            About the course
          </li>
          <li onClick={() => setTab({ ab: false, over: true, time: false })}>
            Timeline
          </li>
          <li onClick={() => setTab({ ab: false, over: false, time: true })}>
            Assessment Criteria
          </li>
        </ul>
      </div>
      {tab.ab && (
        <div className="over-main">
          <h1>Overview</h1>
          <div className="over-content">
            <p>
              Data Analytics is rapidly becoming one of the most critical
              drivers for any decision-making, at an individual and a business
              level. To jump-start this journey of data analytics one must
              thoroughly understand the fundamentals of analytics.
            </p>

            <div className="over-main">
              <h4>
                Through an experiential learning approach, the course will take
                you through the following fundamental analytical concepts -
              </h4>
              <ol>
                <li>Collection of Data: Population and Sampling</li>
                <li>Classification and Representation of Data</li>
                <li>Measures of Location and Variability</li>
                <li>Basic Bi-variate Analysis</li>
                <li>Probability Distribution (s)</li>
                <li>
                  Statistical Inference – Estimation and Hypothesis Testing
                </li>
              </ol>
            </div>
          </div>

          <div className="course-about">
            <h1>Course Structure</h1>
            <h4>The course is divided into 3 modules containing - </h4>
            <ol>
              <li>
                Total of 13 Practice Data Cases to apply the knowledge gained to
                solve business problems leveraging real data-sets
              </li>
              <li>
                Total 12 Quizzes that will help you validate your knowledge
              </li>
            </ol>
          </div>
        </div>
      )}

      {tab.over && (
        <div className="over-main">
          <div className="over-content">certificate awarded</div>
        </div>
      )}
      {tab.time && (
        <div className="over-main">
          <div className="over-content">
            <p>
              Your performance in this applied course drives your grading and
              eligibility to get a certificate, up on your successful completion
              of the course. To increase your chances to get a certificate, make
              sure to attempt all Data Cases and Quizzes, post completing the
              content collateral that cover the explained concepts.
            </p>
            <p>
              Unlike other assessment frameworks, LEAPS takes into account your
              understanding of the covered concepts, their successful
              application on the contextual Data Cases and attempt of the
              quizzes. The algorithm driven assessment engine takes into account
              your learning journey throughout the course, your approach to
              apply covered concepts on Data Cases and the quiz attempts, to
              calculate your score and decide on the certificate eligibility.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
