import React, { Component } from 'react'

export class sundayprayer extends Component {
  render() {
    return (
      <div className='container  sundayprayer '>
        <h1 style={{color:'#8e98a8',marginTop:'10vh'}}>WELCOME TO</h1>
        <h1 style={{color:'#8F6325' ,marginBottom:'10vh'}}>SUNDAY PRAYER</h1>
        <div style={{overflow:'hidden', borderRadius:'60px',padding:'0'}} className="container p-0">
            <img width={'100%'} src="https://www.call2worship.com/wp-content/uploads/2024/02/Sunday-Service.jpeg.jpg" alt="" />
        </div>
        <h2>​Weekly meeting at 6 : 30 pm  <span style={{color:'#3899e6'}}>( Watch online every Sunday on same time )</span></h2>
        <p>Welcome to our Weekly Sunday Church Prayer! We are delighted to extend an invitation to you, your family, and friends to join us every Sunday for a meaningful worship experience. At CALL TO CHURCH, our services are a celebration of faith, unity, and the transforming power of God’s love. Whether you are a longtime member or a first-time visitor, our doors are open to everyone seeking a place of spiritual growth, community, and genuine connection. Expect uplifting music, inspiring messages, and a warm welcoming atmosphere.</p>
        <p>Join us as we come together to encounter the presence of God and share in the joy of worship. We look forward to meeting you and journeying together in faith each and every Sunday.</p>
      </div>
    )
  }
}

export default sundayprayer
