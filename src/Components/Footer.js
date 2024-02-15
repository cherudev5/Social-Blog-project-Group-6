import React from 'react';

function Footer(){
  return (
    <footer style={{marginTop:"10px",marginBottom:"10px",width: 1300, height: 113, background: '#BCCCF4', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 20, border: '1px black solid'}}>
      <p>Copyright © 2024 Your Blog</p>
      <div>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
       
      </div>
    </footer>
  );
};

export default Footer;
