import React from 'react';

function Footer() {
  return (
    <>
      <div className="background">
        <h2>Join our mailing list</h2>
        <button type="button">subscribe</button>

        <p>© 2023 by Zhu</p>
      </div>

      <style jsx>{`
      .background {
          background-image: url('/cool6.jpg');
          background-position:10px
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 100% 100%;
          padding-bottom: 1em;
          padding-top: 0.6em;
          text-align: center;
        }
        .dogge .background {
          background-image: url('/bgcCool.jpg');
        }
        h2 {
          font-family:monospace;
          text-align: center;
          color: white;
          font-size: 40px;
        }
       
       p {
          text-align: center;
          font-weight: bold;
          font-family:monospace;
          color:#fff;

        }
        button {
          width:10%;
          font-weight:bold;
          cursor:pointer;

        }
        @media (max-width: 450px) {
        .background{
          position: fixed;
          bottom:10px;
          left: 0;
          width: 100%;
          height:10em;
        }
       
        
      }
      `}</style>
    </>
  );
}
export default Footer;
