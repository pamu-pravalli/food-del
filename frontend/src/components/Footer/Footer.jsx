import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.quick} alt=""/>
            <p> Get your favorite meals delivered in under 30 minutes!.💰 Enjoy 50% OFF on your first order! 🎁 Get free delivery on orders above ₹199! 📍 Live order tracking available</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt=""/>
                <img src={assets.twitter_icon} alt=""/>
                <img src={assets.linkedin_icon} alt=""/>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 9998887776</li>
                <li>contact@quickdelivery.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 © QuickDelivery.com -All Right Reserved.</p>
    </div>
  )
}

export default Footer
