import React, { useEffect } from 'react'
import './article.css'
import Footer from './footer';
import AOS from "aos";
import 'aos/dist/aos.css'

function Article() {
  useEffect(()=>{
    AOS.init();
  },[ ])

  return (
    <>
      <div className="main-section">
        <div className="leftDiv" data-aos="slide-up" data-aos-duration="1000">
            <h1>Articles</h1>
            <p className="content1">Your Entry Point to AI, Web Development, and Blockchain
            Discover the latest trends and insights that are defining the future of technology.</p>
        </div>
        <div className="rightDiv">
            <img src="/assets/article.png" alt="" />
        </div>
      </div>
      <div className="cardSection2" >
        <div className="card" data-aos="slide-up" data-aos-duration="2000" data-aos-offset="200">
          <img className='cimage' src="https://kodeinkgp.in/article/gemini.jpg" alt="" />
          <p className='date'>Oct 7, 2024</p>
          <p className='desc'>From Foundations to Gemini 1.5 Flash : A deep dive into the technical backbone and latest enhancements</p>
        </div>
        <div className="card" data-aos="slide-up" data-aos-duration="2000" data-aos-offset="200">
          <img className='cimage' src="https://openledger.info/insights/wp-content/uploads/2019/01/consensus-blockchain-948x640.png" alt="" />
          <p className='date'>Aug 26, 2024</p>
          <p className='desc'>Demystifying Consensus Mechanisms</p>
        </div>
        <div className="card"data-aos="slide-up" data-aos-duration="2000" data-aos-offset="200">
          <img className='cimage' src="https://miro.medium.com/v2/resize:fit:4918/1*Y0TDuXNyywjqqr5l5GkMQQ.png" alt="" />
          <p className='date'>Aug 7, 2024</p>
          <p className='desc'>Mastering Reinforcement Learning: A Guide for Students</p>
        </div>
        <div className="card" data-aos="slide-up" data-aos-duration="2000" data-aos-offset="200">
          <img className='cimage' src="https://assets.eweek.com/uploads/2024/04/ew_20240426-openai-sora-overview-696x447.png" alt="" />
          <p className='date'>Mar 23, 2024</p>
          <p className='desc'>Unraveling Sora: OpenAI’s Quirky Genius</p>
        </div>
        <div className="card" data-aos="slide-up" data-aos-duration="2000" data-aos-offset="150">
          <img className='cimage' src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image_variant/da615a681b8d_w240.webp" alt="" />
          <p className='date'>Jan 22, 2024</p>
          <p className='desc'>Exploring Machine Learning with Scikit-Learn: A Comprehensive Overview</p>
        </div>
        <div className="card" data-aos="slide-up" data-aos-duration="2000" data-aos-offset="150">
          <img className='cimage' src="https://images.prismic.io/encord/4fda620b-ac6c-45dc-ba17-f0d68bc7888f_What+is+Ensemble+Learning_.png?auto=compress%2Cformat&fit=max" alt="" />
          <p className='date'>Jan 10, 2024</p>
          <p className='desc'>Deep Dive series: Article on Ensemble Learning</p>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Article
