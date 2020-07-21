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
        }
        .dogge .background {
          background-image: url('/bgcCool.jpg');
        }
        .background h2 {
          font-family:Didot, serif;
          text-align: center;
          color: white;
          font-size: 40px;
        }
        .background form {
          text-align: center;
        }
       p {
          text-align: center;
          font-weight: bold;
          font-family:Didot, serif;
          color:#fff;

        }

        input {
          margin-left: 1em;
        }
        button {
          height:2em;
          width:10%;
          font-weight:bold;
          cursor:pointer;
        }
        @media only screen and (max-width: 450px) {
        .background{
          position: fixed;
          bottom:10px;
          left: 0;
          width: 100%;
          height:10em;
        }
       
        button {
          color:#fff;
        }
      }
      `}</style>
    </>
  );
}
export default Footer;
