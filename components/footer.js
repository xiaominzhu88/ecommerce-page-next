function Footer() {
  return (
    <>
      <div className="background">
        <h2>Join our mailing list</h2>
        <form>
          <button type="subscribe" name="subscribe" value="subscribe">
            subscribe now
          </button>
          <input type="email" name="email" required />
        </form>
      </div>
      <div className="back">
        <p>© 2023 by Zhu</p>
      </div>

      <style jsx>{`
        .background{
          background-image: url('/4workadog.jpg');
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: 100% 100%;
          padding-bottom:2em;
          padding-top:2em;
        }
        .background h2 {
          text-align: center;
          color: white;
          font-size: 40px;
        }
        .background form {
          text-align: center;
        }
        .back p {
          text-align: center;
          font-weight: bold;
        }
        
        input {
          margin-left:1em;
        }
      `}</style>
    </>
  );
}
export default Footer;
