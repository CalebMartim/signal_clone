import "./Home.css";
import iphoneSS from "./Iphone_Screenshot.png";
import pixelSS from "./Pixel_Screenshot.png";

function Home() {
  return (
    <>
      <main>
        <section className="intro">
          <div className="intro_content">
            <h1>Speak Freely</h1>
            <p>
              Say "hello" to a different messaging experience. An unexpected
              focus on privacy, combined with all of the features you expect.
            </p>
            <button className="getSignalBtn">Get Signal</button>
          </div>
          <div className="intro_images">
            <img src={iphoneSS} alt="Screenshot of the app from an Iphone" />
            <img src={pixelSS} alt="Screenshot of the app from a Pixel phone" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
