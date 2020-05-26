import Head from 'next/head';
import Link from 'next/link';

function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="nav-bar">
          <h1>ZHU</h1>
          <p>FASHION & PET STORE</p>
        </div>

        <hr />
        <div className="header">
          <h2>
            <Link href="/about">ABOUT</Link>
          </h2>
          <h2>
            <Link href="/contact">CONTACT</Link>
          </h2>
          <h2>
            <Link href="/store">FASHION-STORE</Link>
          </h2>
          <h2>
            <Link href="/store">PET-STORE</Link>
          </h2>
        </div>
      </nav>

      <style jsx>{`
        h1 {
          font-size: 3.5em;
          margin-bottom: 1em;
          padding-top:0.5em;
          position: relative;
          text-align: center;
          color: rgb(33, 24, 155);
          text-shadow: 1px 3px 4px rgb(218, 147, 17);
          letter-spacing: 4px;
          text-decoration-line:underline;
        }
        .nav-bar p {
          color: gray;
          text-align: center;
          font-size: 1.8em;
          font-family: Georgia, 'Times New Roman', Times, serif;
          padding-bottom:1em;
        }
        .nav-bar {
          justify-content: space-around;
          align-items: center;
          background-image: url('/4drink.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          background-repeat: no - repeat;
          background-attachment: fixed;
          background-size: cover;
        }

        .header {
          display: flex;
          margin: 0 auto;
          width: 750px;
          height: 30px;
          justify-content: space-around;
          font-size: 10px;
          font-family: fantasy;
          font-weight: 800;
          position: relative;
          top: 10px;
        }
        .nav {
          margin-bottom: 2em;
        }
      `}</style>
    </>
  );
}
export default Nav;
