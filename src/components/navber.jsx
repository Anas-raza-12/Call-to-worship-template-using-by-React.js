import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <>
    <div className="top-line ">
      <div className="container-fluid p-0">
        <div className="news-container">
          <ul>
            <li>(Meetings Schedule)</li>
            <li>Thursday Prayers at 7:00 PM sharp</li>
            <li>-------</li>
            <li>Friday Ladies Prayer at 9:00 PM sharp</li>
            <li>-------</li>
            <li>Sunday Prayer at 6:30 PM sharp</li>
            <li>-------</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="loges container d-flex justify-content-between align-items-center py-2">
      <div className="main-logo" style={{ width: '7%' }}>
        <img style={{ width: '100%' }} src="/src/assets/logo.png" alt="call-to-worship logo" />
      </div>
      <div className="name d-flex justify-content-center" style={{ width: '100%' }}>
        <img style={{ width: '100%', maxWidth: '250px' }} src="/src/assets/image/sami-logo.png" alt="sami-logo" />
      </div>
    </div>
    <div className="menu-container">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center " id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">{props.home}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">{props.about}</Link></li>
              <li className="nav-item dropdown nav-link" to="/services">{props.service}
              <ul className='dropdown_ul'>
                <li><Link className='dropdown_option' to='/Sunday_prayer'>Sunday Prayer</Link></li>
                <li><hr/></li>
                <li><Link className='dropdown_option' to='/Thursday_prayer'>Thursday Prayer</Link></li>
                <li><hr/></li>
                <li><Link className='dropdown_option' to='/ladies-Meeting'>Laides Prayer</Link></li>
               
              </ul>
              </li>
              <li className="nav-item dropdown  nav-link" to="/ministries">{props.ministries} 
              <ul className="dropdown_ul">
              <li><Link className='dropdown_option' to='/WeddingCounselling'>Wedding Counselling</Link></li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/KidsMinistry'>Kid's Ministry</Link></li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/MensMinistry'>Men's Ministry</Link></li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/ladies-Meeting'>Ladies Meeting</Link></li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/Music-Ministry'>Music Ministry </Link></li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/Youth-ministry'>Youth Ministry </Link></li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/Prayer-Group'>Prayer group </Link></li>   
              <li><hr/></li>  
              <li className='dropdown_option dropdown-2' >Teaching  <i className="fa-solid fa-arrow-right"></i>
              <ul className="dropdown_ul-2">
                <li className="dropdown_option-2"><Link to='/Resources'> Resources</Link></li>
              </ul>
              </li>   
              <li><hr/></li>  
              <li><Link className='dropdown_option' to='/Outreach'>Outreach</Link></li>   

              </ul>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/pastors">{props.pastors}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sermons">{props.sermons}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/events">{props.event}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/live">{props.live}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/Blogs">{props.Blog}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/gallery">{props.gallery}</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/shop">{props.shop}</Link></li>
              <li className="nav-item"><Link style={{ backgroundColor: '#ab8a5d', color:'white !important' }} className="nav-link" to="/give">{props.give}</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </>
);

export default Navbar;
