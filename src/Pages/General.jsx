import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const General = () => {
  const [dta, setdata] = useState("");
  const dat = async () => {
      await axios
          .get(
              'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=017dc3c45fbe497386ce51ba29865072',
              // configuration
          )
          .then(res => {
              console.log(res.data.articles);
              setdata(res.data.articles)
          })
  }
  useEffect(() => {
      dat();
  }, []);
  return (
      <div className='container my-4'>
          <h3><u>TOP HEADLINES</u></h3>
          <div className='container d-flex justify-content-center align-items-center flex-column'>
              {dta ? dta.map((items, index) =>
                  <div className='container my-3 p-3 '
                      style={{
                          width: "500px",
                          borderRadius: "10px",
                          boxShadow: "2px 2px 10px Silver"
                      }}>
                      <h1>{items.title}</h1>
                      <div className='container d-flex justify-content-center align-items-center flex-column'>
                          <img src={items.urlToImage} alt="/" className='img-fluid'
                              style={{
                                  width: "auto",
                                  height: "300px",
                                  objectFit: "cover"
                              }} />

                      </div>
                      <p>{items.description}</p>
                      <a href={items.url} target="blank">view more..</a>
                  </div>
              )
                  : "Loading..."}
          </div>
      </div>
  )
}

export default General
