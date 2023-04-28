import clientAudiophile from "../../public/images/client-audiophile.svg";
import clientDatabiz from "../../public/images/client-databiz.svg";
import clientMaker from "../../public/images/client-maker.svg";
import clientMeet from "../../public/images/client-meet.svg";
import "../styles/Clients.css";

function Clients() {
  return (
    <>
      <article className="clients d-flex mt-5 justify-content-around">
        <img src={clientDatabiz} alt="client databiz" />
        <img src={clientAudiophile} alt="client audiophile" />
        <img src={clientMeet} alt="client meet" />
        <img src={clientMaker} alt="client maker" />
      </article>
    </>
  );
}

export default Clients;
