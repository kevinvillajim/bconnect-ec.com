import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Footer from "../components/Footer";
import Rotulo from "../components/Rotulo";
import Card from "../components/Card";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Tecnologia() {
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
        <BannerS
          img="tecnologia-banner.jpg"
          position="bottom"
        />
        <div className="w-[100%] h-[100%] px-[15%] py-[2rem] flex items-center justify-evenly">
          <img
            className="w-[40%]"
            src="tecnologia-img.png"
          />
          <div className="w-[50%]">
            <p className="font-righteous text-3xl text-[#bf9000]">
              Soluciones Tecnológicas
            </p>
            <p className="font-times text-xl">
              Descubre nuestras soluciones tecnológicas diseñadas para facilitar
              tu vida. Ofrecemos una amplia gama de productos de informática,
              Además de gadgets innovadores para
              <span className="text-[#073763] font-times text-xl bold">
                {" "}
                facilitar tu vida.
              </span>{" "}
              Confía en nosotros para proporcionarte la tecnología que necesitas
              con{" "}
              <span className="text-[#073763] font-times text-xl bold">
                la calidad y el servicio que mereces.
              </span>{" "}
              ¡Actualiza tu mundo con nuestras soluciones tecnológicas hoy
              mismo!{" "}
            </p>
          </div>
        </div>
        <Rotulo text="Informática" />
        <div className="flex my-[2rem] flex-wrap justify-center">
          <Card
            img="compu.jpg"
            title="Computadoras"
            content="Computadoras y laptops de todo presupuesto y generación"
            boton="Cotizar"
            url=""
          />
          <Card
            img="tablet.png"
            title="Tablets"
            content="Tablets de ultima generación y tecnología"
            boton="Cotizar"
            url=""
          />
          <Card
            img="tv.webp"
            title="Pantallas"
            content="Videowalls, Monitores, TVs y Soportes moviles y fijos para todo tipo de pantallas y tamaños"
            boton="Cotizar"
            url=""
          />
          <Card
            img="impresora.jpg"
            title="Impresoras"
            content="Impresoras a tinta, tinta continua, laser y de impacto"
            boton="Cotizar"
            url=""
          />
          <Card
            img="regulador.png"
            title="Reguladores de voltaje"
            content="Protectores de voltaje y reguladores de voltaje"
            boton="Cotizar"
            url=""
          />
          <Card
            img="ups.png"
            title="UPS"
            content="Protección para tus equipos y reserva de energía en apagones"
            boton="Cotizar"
            url=""
          />
          <Card
            img="webcam.jpg"
            title="Webcams"
            content="Camaras web de alta calidad y resolución para computadoras y salas de reuniones."
            boton="Cotizar"
            url=""
          />
          <Card
            img="perifericos.png"
            title="Perifericos"
            content="Mouse teclados y parlantes"
            boton="Cotizar"
            url=""
          />
        </div>
        <Rotulo text="Gadgets" />
        <div className="flex my-[2rem] flex-wrap justify-center">
          <Card
            img="powebank.jpg"
            title="Power Banks"
            content="Power Banks de alta calidad y duración para todo tipo de dispositivos USB"
            boton="Cotizar"
            url=""
          />
          <Card
            img="audifonos.jpg"
            title="Audifonos"
            content="Audifonos de alta calidad de sonido."
            boton="Cotizar"
            url=""
          />
          <Card
            img="parlante.jpg"
            title="Parlantes"
            content="Parlante inalambricos bluetooth para uso doméstico y empresarial para salas de reuniones"
            boton="Cotizar"
            url=""
          />
          <Card
            img="cargador.png"
            title="Cargadores USB"
            content="Todo tipo de cargadores de carga rápida para telefonos celulares y tablets"
            boton="Cotizar"
            url=""
          />
        </div>
        <div className="w-[screen]">
          <div className="flex justify-center">
            <a
              className="flex justify-center"
              href="https://api.whatsapp.com/message/ZMUMPHX37PTZK1?autoload=1&app_absent=0"
              target="_blank"
            >
              <img
                className="w-[35%]"
                src="contacto-btn.jpg"
              />
            </a>
          </div>
        </div>
        <div className="mt-[40%]">
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
      </div>
    </>
  );
}
