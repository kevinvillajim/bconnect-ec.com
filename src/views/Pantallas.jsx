import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Footer from "../components/Footer";
import Rotulo from "../components/Rotulo";
import Card from "../components/Card";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Pantallas() {
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
        <div className="w-[100%] h-[100%] px-[15%] py-[2rem] flex items-center justify-evenly">
          <img
            className="w-[30%]"
            src="pantallas-img.png"
          />
          <div className="w-[50%]">
            <p className="font-righteous text-3xl text-[#bf9000]">
              PANTALLAS INTERACTIVAS
            </p>
            <p className="font-times text-xl">
              Nuestra tecnología{" "}
              <span className="text-[#073763] font-times text-xl bold">
                ha cambiado
              </span>{" "}
              la forma de colaborar y comunicarse de miles de empresas{" "}
              <span className="text-[#073763] font-times text-xl bold">
                alrededor del mundo
              </span>
              , La pantallas interactivas optimizan el trabajo, aumenta la
              productividad y reduce los problemas de comunicación.
            </p>
          </div>
        </div>
        <Rotulo text="¿Qué podemos hacer por nuestros clientes?" />
        <div className="flex gap-2 justify-center my-[2rem]">
          <Card
            img="pantallas1.jpg"
            title="Las aulas interactivas"
            content="Traen directo a la clase herramientas que impulsan la creatividad y el aprendizaje significativo, junto con la mejor tecnología colaborativa, un tablero interactivo, software para control de asistencia automático y mucho más, en un solo dispositivo."
            boton="Ver video"
            url="https://www.youtube.com/watch?v=vklrYdbxsN8"
          />
          <Card
            img="pantallas2.jpg"
            title="Soluciones para salas de juntas y reuniones."
            content="Capacitaciones, presentaciones y reuniones sin precedentes, incluyen herramientas que permiten interactuar con todos los dispositivos y miembros presentes en una reunión, de forma fácil y sin retrasos. "
            boton="Ver video"
            url="https://www.youtube.com/watch?v=F0JefYSgxf8"
          />
          <Card
            img="pantallas3.jpg"
            title="Las soluciones de videoconferencia "
            content="Permiten una conexión instantánea con cualquier miembro del equipo, desde cualquier lugar, en cualquier momento, con una gran calidad de audio y video, herramientas que permiten la interacción con cualquier tipo de documento y mucho más. "
            boton="Ver video"
            url="https://www.youtube.com/watch?v=QhiWqTxCJx0"
          />
          <Card
            img="pantallas4.jpg"
            title="Soluciones de cartelería digital"
            content="Cree espacios de comunicación interactivos con cartelería digital avanzada; el sistema de cartelería digital basado en la nube de OneScreen, permite administrar de forma completa todas sus carteleras digitales y el todo el tipo de contenido que desee, desde un solo lugar."
            boton="Ver video"
            url="https://www.youtube.com/watch?v=KCHIpidIvhc"
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
          <div className="flex justify-center items-center gap-5 px-[5rem]">
            <div className="w-[35%]">
              <img src="OneScreen.png" />
            </div>
            <div className="w-[40%] h-auto">
              <img
                className=""
                src="caracteristicas-one.png"
              />
              <img
                className=""
                src="caracteristicas-one0.png"
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-5 px-[5rem]">
            <div className="w-[35%]">
              <img src="caracteristicas-one1.png" />
            </div>
            <div className="w-[40%] h-auto">
              <img
                className=""
                src="OneScreen2.png"
              />
            </div>
          </div>
        </div>
        <div className="mt-[50%]">
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