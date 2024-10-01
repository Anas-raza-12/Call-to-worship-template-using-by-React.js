import React, { Component } from 'react'

export class MensMinistry extends Component {
  render() {
    return (
      <div className='MensMinistry container'>
        <h1 className='grayColor'><i>WELCOME TO</i></h1>
        <h1 className="goldenColor">MEN’S MINISTRY</h1> 
        <div className="row">
            <div className="col-lg-12 col-md-11 col-sm-10">
                <img width={'100%'} src="/src/assets/image/Mens-Ministry.jpeg.webp" alt="" />
            </div>
            <div className="col-lg-12 col-md-11 col-sm-10">
                <p>
                The Men’s Ministry campaign is a movement of men pressing forward in our journey of faith.We all have obstacles to overcome, obstacles of addiction, fear, shame, or doubt In the face of such opposition even the idea of stepping out in faith can seem overwhelming. The good news is we don’t have to do it alone, God is with us and our men’s ministry is here to encourage and stand with you.
                <br />
                ​We’ve seen time and time again, lives changing, and triumph over tragedy.Let these powerful testimonies encourage you, so that you can witness God doing amazing things in your life as you step in faith.
                </p>
            </div>
        </div>
      </div>
    )
  };
};

export default MensMinistry
