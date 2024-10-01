import React, { Component } from 'react'

export class YouthMinistry extends Component {
  render() {
    return (
      <div className='YouthMinistry container'>
        <h1 className="grayColor">WELLCOM TO</h1>
        <h1 className='goldenColor'>YOUTH MINISTRY</h1>
        <div className="row">
            <div className="col-lg-12">
                <img width={'100%'} src="/src/assets/image/Youth-meeting-final.jpeg.webp" alt="" />
            </div>
            <div className="col-lg-12"><p>
            ​We invite young adults to Join our Young Group, in order to learn and seek the word of God. It also includes baptism classes, fellowship ministry for young adults. We believe this will be an incredible, life-changing ministry for new spiritual leaders.<br/>
            ​This will be an awesome opportunity to get away from the norm for a weekend and build a new relationship and encounter God.
                </p></div>
        </div>
      </div>
    )
  }
}

export default YouthMinistry
