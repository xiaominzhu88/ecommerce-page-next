function Content() {
  return (
    <div className="content">
      <div className="dress">
        <img src="/4dress.jpg" width="150px" height="300px" />
        <h3>Why your closet needs at least one yellow dress</h3>
        <hr />
        <p>“Be original, show off your style, and tell your story.”</p>
      </div>

      <div className="ways">
        <img src="/4ort.jpg" width="150px" height="300px" />
        <h3>8 fun ways to accessorize your outfit</h3>
        <hr />
        <p>
          If you have no idea how to to make the combination with them, just
          turn on the music.
        </p>
      </div>

      <div className="flowerprint">
        <img src="/4huaqun.jpg" width="150px" height="300px" />
        <h3>Why not try something more fun?</h3>
        <hr />
        <p>
          Flowerprint is a perfect look for spring and summer, but the most
          crative among us cas surely find ways to work them into winter
          wardrobes, as well.
        </p>
      </div>

      <div>
        <div className="jumpsuit">
          <img src="/4jumpsuit.jpg" width="250px" height="100px" />
          <h3>Jumpsuit</h3>
          <hr />
          <p>
            Jumpsuit is great for everything from traveling or casual weekend
            brunch.
          </p>
        </div>

        <hr />

        <div className="accessoires">
          <img src="/4toushi.jpg" width="250px" height="100px" />
          <h3>Keep clothes simple</h3>
          <hr />
          <p>
            I love accessoires, if you want to have different looks with similar
            clothes, always use powerful accessoires to make it becomes true.
          </p>
        </div>

        <div className="tatoo">
          <img src="/4tatto.jpg" width="250px" height="100px" />
          <h3>
            My next goal is to have a <strong>TATOO</strong>!
          </h3>
          <hr />
          <p>Love it change it or leave it, I am ready</p>
        </div>
      </div>

      <style jsx>{`
    .dress p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: center;
        padding:5px;
        
    }
    .dress h3{
        font-style: italic;
        text-align: center;
        padding:5px;
        
    }
    .dress img{
        box-shadow: 1px 2px 2px 0px;
        margin-top:20px;
        margin-left:10px;
        margin-right: 10px;
        width:auto;
        
    }
    .dress{
        text-align: center;
        border:1px solid gray;
        box-shadow: 0px 2px 3px 1px;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-top: 50px;
        
    }
    .ways p{
        text-align: center;
        padding:5px;
    }
    .ways h3{
        font-style: italic;
        text-align: center;
        padding:5px;
    }
    .ways p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: center;
        padding:5px;
    }
    .ways{
        text-align: right;
        border:1px solid gray;
        box-shadow: 0px 2px 3px 1px;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-top: 50px;
        
    }
    .ways img{
        box-shadow: 1px 2px 2px 0px;
        margin-top:20px;
        margin-left:10px;
        margin-right: 20px;
        width:auto;
    }
    
    
    
    .flowerprint{
        text-align: right;
        border:1px solid gray;
        box-shadow: 0px 2px 3px 1px;
        margin-bottom: 20px;
        margin-left: 40px;
        margin-top: 50px;
        
    }
    .flowerprint h3{
        font-style: italic;
        text-align: center;
        padding:5px;
    }
    .flowerprint p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: center;
        padding:5px;
    }
    .flowerprint img{
        box-shadow: 1px 2px 2px 0px;
        margin-top:20px;
        margin-left:10px;
        margin-right: 10px;
        width:auto;
    }
    .drinkingdog{
        text-align: right;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-top: 50px;
        
    }
    .drinkingdog h3{
        text-align: center;
        padding:5px;
    }
    .drinkingdog p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: center;
    }
    .drinkingdog img{
        box-shadow: 1px 2px 2px 0px;
        margin-top:20px;
        margin-left:10px;
        margin-right: 10px;
        position: relative;
        top:5px;
        right:200px;
        width:auto;
        
    }
    .jumpsuit{
        text-align: left;
        margin-bottom: 20px;
        margin-left: 10px;
        margin-top: 50px;
        align-items: end;
        
    }
    .jumpsuit h3{
        text-align: center;
        padding:5px;
    }
    .jumpsuit p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: center;
        padding:5px;
    }
    .jumpsuit img{
        box-shadow: 1px 2px 2px 0px;
        margin-top:20px;
        margin-left:10px;
        margin-right: 10px;
        position: relative;
        top:5px;
        left:200px;
        width:auto;
    }
    .drinkingdog,.jumpsuit{
        background-color: rgba(197, 182, 233, 0.507);
    }
    .content{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        align-content: center;
        justify-content: center;
        grid-column-gap: 20px;
        background-color:gainsboro;
    }
    
    
    .accessoires h3{
        text-align: left;
        padding:5px;
        
    }
    .accessoires p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: left;
        padding:5px;
    }
    .tatoo h3{
        text-align: right;
        padding:5px;
        
    }
    .else{
        display:flex;
    }
    .tatoo p{
        font-size: 15px;
        color:blue;
        text-decoration-line: underline overline;
        text-align: right;
        padding:5px;
        `}</style>
    </div>
  );
}
export default Content;
