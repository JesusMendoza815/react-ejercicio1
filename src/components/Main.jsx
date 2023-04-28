import hero from "../../public/images/image-hero-mobile.png";
import heroDesktop from "../../public/images/image-hero-desktop.png";
import "../styles/Main.css";
import Button from "react-bootstrap/Button";
import Clients from "./Clients";

function Main() {
  return (
    <>
      <main className="d-md-flex flex-md-row-reverse justify-content-md-center align-items-md-center align-self-center">
        <aside className="mb-4 col-md-4 offset-md-1">
          <picture className="hero-container">
            <source
              className="hero-img"
              srcSet={heroDesktop}
              media="(min-width: 768px)"
            />
            <img className="hero-img" src={hero} alt="hero" />
          </picture>
        </aside>

        <section className="d-flex flex-column align-items-center align-items-md-start mx-2 col-md-5 ps-md-2 text-center text-md-start">
          <h1 className="fw-bold title">Make remote work</h1>
          <p className="text-black-50 mt-3 mb-4 principal-info">
            Get your team sync. No matter your location. Streamline process,
            create team rituals, and wath productivity soar.
          </p>

          <Button variant="dark" size="lg" className="mb-3">
            Learn More
          </Button>

          <Clients />
          
        </section>
      </main>
    </>
  );
}

export default Main;
