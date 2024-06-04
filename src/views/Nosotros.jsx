import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Footer from "../components/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Nosotros() {
  return (
    <>
      <div>
        <a
          id="whatsapp-link"
          href="https://api.whatsapp.com/send?phone=593962966301&text=Buenas%20tardes."
          target="_blank"
        >
          <div id="whatsapp-btn">
            <WhatsAppIcon
              sx={{ width: "45px", height: "45px", color: "#fff" }}
            />
          </div>
        </a>
        <Header />
        <BannerS img="nosotros.jpg" />
        <div className="w-[100%] h-[100%] px-[15%] py-[2rem] mb-[40%]">
          <img
            className=""
            src="1.png"
          />
          <img
            className=""
            src="2.png"
          />
        </div>
        <Footer
          text={
            <div className="space-x-3">
              <a
                className="link-1 elementosFooter"
                href="inicio"
              >
                Inicio
              </a>
              <a
                className="elementosFooter"
                href="nosotros"
              >
                ¿Quiénes somos?
              </a>
              <a
                className="elementosFooter"
                href="contacto"
              >
                Contáctanos
              </a>
              <a
                className="elementosFooter"
                href="trabajo"
              >
                Trabaja con nosotros
              </a>
            </div>
          }
        />
      </div>
    </>
  );
}
