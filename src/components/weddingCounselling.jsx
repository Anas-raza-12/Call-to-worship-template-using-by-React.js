
import React, { Component } from 'react'

export class weddingCounselling extends Component {
  render() {
    return (
      <div className='container weddingCounselling'>
        <h1 className='grayColor'>WELCOME TO</h1>
        <h1 style={{color:'#8F6325'}}>WEDDING COUNSELLING</h1>
        <div className="row">
          <div style={{borderRadius:'20px',overflow:'hidden'}} className="col-lg-5 col-md-10 col-sm-10"><img style={{margin:'0vh auto'}} width={'100%'} src="/src/assets/image/sdasd.webp" alt="" /></div>
          <div className="col-lg-6 col-md-10 col-sm-10">
             <h2 className='grayColor'>MARRIAGE PREPARATION & COUNSELLING MINISTRY</h2>
             <p>The Marriage counseling is based on Christian principles for all couples.<br/>
             ​Are you a young adult getting ready to say, “I do”? Don’t miss to seek for premarital guidance from our pastors and leaders and that will be arranged just for you, to help you prepare for one of the biggest decision of your life!
             <br/>
             The Marriage Counseling is also for couples who are seeking to strengthen their relationship. Some couples invest into their relationships, others are looking to address more specific challenges. Either way, Call To Worship offers essential counseling tools and practical ideas to help you build a relationship that lasts a lifetime.
            </p>
           </div>
        </div>

      </div>
    )
  }
}

export default weddingCounselling
