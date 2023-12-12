import Nav from "./Components/Nav";
// import "../src/home";
import Footer from "./Components/Footer";
import "./Assets/Css/nav.css";
// import "./Assets/Css/home.css";
import Img1 from "./Assets/img/bg2.jpg";

function App() {
  return (
    <>
      <Nav />
      {/* <p>shyamDaw</p> */}
      <Footer />

      <img src={Img1} className="img1"></img>
      <div className="abt">
        <p>
          In a vintage Chinese house painting, the artist masterfully captures
          the essence of traditional architecture and landscapes. The canvas
          reveals intricate courtyards adorned with plum blossoms and bamboo,
          while pagodas and pavilions gracefully stand as symbols of spiritual
          tranquility. Mountains and rivers intertwine, portraying the timeless
          harmony found in nature. Arched bridges span gentle streams, creating
          a scene of serene transitions. Employing the ink wash technique, the
          artist uses varying shades of gray, infusing the artwork with an
          antique aura. Calligraphy delicately inscribes poetic verses, adding a
          layer of depth to the composition. The bird's eye view emphasizes
          symmetry and balance in the landscape. Symbolic flowers such as
          orchids and chrysanthemums speak of virtues, creating a nostalgic
          journey through time where history and aesthetics converge in each
          stroke.
        </p>
      </div>
      <home />
    </>
  );
}

export default App;
