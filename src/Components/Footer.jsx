import React from 'react'
import InstagramIcon  from '@mui/icons-material/Instagram';
import  Twitter  from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import  LinkedIn  from '@mui/icons-material/LinkedIn';
import  '../Styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia '>
        <InstagramIcon/>
        <Twitter/>
        <Facebook/>
        <LinkedIn/>
        </div>
      <p>&copy; 2023 pedrotechpizza.com</p>
    </div>
  );
}

export default Footer;
