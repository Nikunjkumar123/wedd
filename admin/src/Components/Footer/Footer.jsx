import React from 'react';


const Footer = () => {
  return (
    <footer className="py-4 bg-light mt-auto fixed-bottom">
      {/* <div style={{position:"absolute" ,right:10 ,bottom:100 ,cursor:"pointer"}}>
      <img src="./image/whatsapp-fill.png" alt="" style={{height:50}} />
      </div> */}
      <div className="container-fluid px-4">
        <div className="text-muted" style={{ textAlign: "center" }}>
        digiindiasolutions &copy;  2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;

