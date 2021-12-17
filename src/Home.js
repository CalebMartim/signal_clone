import "./Home.css";
import iphoneSS from "./Iphone_Screenshot.png";
import pixelSS from "./Pixel_Screenshot.png";
import Bruce from "./People/Bruce.jpg";

function Home() {
  return (
    <>
      <main>
        <section className="intro">
          <div className="intro_content">
            <div>
              <h1 className="spaced">Speak Freely</h1>
              <p className="spaced">
                Say "hello" to a different messaging experience. An unexpected
                focus on privacy, combined with all of the features you expect.
              </p>
              <div className="spaced">
                <button className="getSignalBtn">Get Signal</button>
              </div>
            </div>
          </div>
          <div className="intro_images">
            <img src={iphoneSS} alt="Screenshot of the app from an Iphone" />
            <img src={pixelSS} alt="Screenshot of the app from a Pixel phone" />
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonial">
            <img src="" alt="" />
            <p></p>
            <p>
              <span></span>
            </p>
          </div>
          <div className="testimonial">
            <img src={Bruce} alt="" />
            <p></p>
            <p>
              <span></span>
            </p>
          </div>
          <div className="testimonial">
            <img src="" alt="" />
            <p></p>
            <p>
              <span></span>
            </p>
          </div>
          <div className="testimonial">
            <img src="" alt="" />
            <p></p>
            <p>
              <span></span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
