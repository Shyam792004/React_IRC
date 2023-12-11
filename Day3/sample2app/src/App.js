import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import "./Assets/Css/nav.css";
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
          In the heart of ancient Japan, shadows come alive in a mesmerizing
          dance of steel and stealth. "Whispers of the Silent Blade" unfolds as
          a riveting ninja saga, where a lone warrior, masterfully trained in
          the art of concealment, battles the forces of darkness threatening his
          homeland. Amidst moonlit landscapes and cherry blossom-filled nights,
          our enigmatic hero navigates a web of intrigue, espionage, and deadly
          duels. The film blends martial arts prowess with breathtaking
          acrobatics, as the ninja glides through moonlit rooftops and executes
          precise strikes against formidable foes. Tensions rise as ancient
          secrets resurface, and a looming threat tests the limits of our
          protagonist's cunning and combat skills. With an atmospheric
          soundtrack and visually stunning choreography, "Whispers of the Silent
          Blade" immerses viewers in a world where honor, deception, and
          razor-sharp precision collide. As the night unfolds, the ninja's
          destiny intertwines with a fate that will shape the future of the
          realm, leaving audiences on the edge of their seats until the final,
          silent strike.
        </p>
      </div>
    </>
  );
}

export default App;
