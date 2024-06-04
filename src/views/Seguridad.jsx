import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Footer from "../components/Footer";
import Rotulo from "../components/Rotulo";
import Card from "../components/Card";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Seguridad() {
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
        <BannerS img="seguridad.jpg" />
        <div className="w-[100%] h-[100%] px-[15%] py-[2rem] flex items-center justify-evenly">
          <img
            className="w-[30%]"
            src="seguridad-img.jpg"
          />
          <div className="w-[50%]">
            <p className="font-righteous text-3xl text-[#bf9000]">
              SEGURIDAD ELECTRÓNICA
            </p>
            <p className="font-times text-xl">
              Nuestras cámaras de seguridad ofrecen una{" "}
              <span className="text-[#073763] font-times text-xl bold">
                solución confiable y avanzada
              </span>{" "}
              para proteger tu hogar, negocio o propiedad. Diseñadas con
              tecnología de vanguardia. Garantizan una vigilancia continua y una
              tranquilidad inquebrantable.
            </p>
          </div>
        </div>
        <Rotulo text="¿Qué podemos hacer por nuestros clientes?" />
        <div className="flex gap-2 justify-center my-[2rem]">
          <Card
            img="camaras.jpg"
            title="Cámaras de seguridad"
            content="Amplia gama de cámaras seguridad con inteligencia artificial, reconocimiento facial, cámaras infrarrojas de ultima generación."
            boton="Ver video"
            url="https://www.youtube.com/watch?v=vklrYdbxsN8"
          />
          <Card
            img="videop.jpg"
            title="Video porteros"
            content="Diseñados para brindar una experiencia de acceso segura cono reconocimiento facial, tarjeta y clave."
            boton="Ver video"
            url="https://www.youtube.com/watch?v=F0JefYSgxf8"
          />
          <Card
            img="alarma.jpg"
            title="Alarmas"
            content="Diseñadas para detectar, disuadir intrusos y alertarte ante cualquier situación de emergencia. Son la primera línea de defensa en tu sistema de seguridad."
            boton="Ver video"
            url="https://www.youtube.com/watch?v=KCHIpidIvhc"
          />
          <Card
            img="domotica.png"
            title="Domótica"
            content="Para el hogar empresa y negocios: control total sobre tu entorno, un espacio inteligente y personalizado."
            boton="Ver video"
            url="https://www.youtube.com/watch?v=QhiWqTxCJx0"
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
