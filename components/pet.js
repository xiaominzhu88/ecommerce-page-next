function Pet() {
  return (
    <>
      <div className="drinkingdog">
        <img src="/4loladrink.jpg" width="200px" height="100px" />
        <h3>Make your pet smile</h3>
        <hr />
        <p>
          Your Pet might not be able to tell you what they want to wear, but you
          should keep their comfort in mind when shopping or drinking.
        </p>
      </div>
      <hr />
      <div className="dog">
        <img src="/4dog.jpg" width="150px" height="300px" />
        <h3>To have the pat with you</h3>
        <hr />
        <p>Frenchy fever: who wear it best?</p>
      </div>

      <style jsx>{`
        .dog h3 {
          font-style: italic;
          text-align: center;
          padding: 5px;
        }
        .dog p {
          font-size: 15px;
          color: blue;
          text-decoration-line: underline overline;
          text-align: center;
          padding: 5px;
        }
        .dog {
          text-align: right;
          border: 1px solid gray;
          box-shadow: 0px 2px 3px 1px;
          margin-bottom: 20px;
          margin-left: 40px;
          margin-top: 50px;
        }
        .dog img {
          box-shadow: 1px 2px 2px 0px;
          margin-top: 20px;
          margin-left: 10px;
          margin-right: 20px;
          width: auto;
        }
      `}</style>
    </>
  );
}

export default Pet;
