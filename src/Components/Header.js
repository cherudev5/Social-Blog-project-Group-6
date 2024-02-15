import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{marginLeft:"10px",width: 1300, height: 55, borderRadius: 30,background: '#BCD2F2',marginTop:"10px",marginBottom:"10px",boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '1px black solid'}}>
      <nav>
        <Link to="/"style={{marginLeft:"320px",marginRight:"10px",width: 189, height: 25, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Home</Link>
        <Link to="/articles"style={{marginLeft:"50px",marginRight:"10px",width: 189, height: 25, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Articles</Link>
        <Link to="/signup"style={{marginLeft:"50px",marginRight:"10px",width: 189, height: 25, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Join Us</Link> 
        <Link to="/writers"style={{marginLeft:"50px",marginRight:"10px",width: 189, height: 25, color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Writers</Link>       
      </nav>
      
    </header>
  );
};

export default Header;
