import Header from "../components/Header";
import BannerS from "../components/BannerS";
import Footer from "../components/Footer";
import Rotulo from "../components/Rotulo";
import Card from "../components/Card";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Ciberseguridad() {
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
        <BannerS img="cibersecurity-banner.jpg" />
        <div className="w-[100%] h-[100%] px-[15%] py-[2rem] flex items-center justify-evenly">
          <img
            className="w-[40%]"
            src="cibersecurity-img.png"
          />
          <div className="w-[50%]">
            <p className="font-righteous text-3xl text-[#bf9000]">
              CIBERSEGURIDAD
            </p>
            <p className="font-times text-xl">
              <span className="text-[#073763] font-times text-xl bold">
                Protegemos
              </span>{" "}
              los datos confidenciales y la infraestructura digital de nuestros
              clientes contra amenazas cibernéticas. Ofrecemos{" "}
              <span className="text-[#073763] font-times text-xl bold">
                soluciones integrales y personalizadas
              </span>{" "}
              para garantizar la integridad, confidencialidad y disponibilidad
              de la información. Con estrategias proactivas y tecnología
              avanzada para{" "}
              <span className="text-[#073763] font-times text-xl bold">
                anticipar riesgos y minimizar incidentes
              </span>
              , asegurando el cumplimiento de normativas y estándares de
              seguridad. la forma de colaborar y comunicarse de miles de
              empresas
            </p>
          </div>
        </div>
        <Rotulo text="Blue Team - Seguridad Defensiva" />
        <div className="flex my-[2rem] flex-wrap justify-center">
          <Card
            img="SOC.jpeg"
            title="SOC"
            content="Centro de operaciones de seguridad gestionada de correlacionador de eventos (SIEM) y (SOAR)"
            boton="Cotizar"
            url=""
          />
          <Card
            img="dlp.webp"
            title="DLP"
            content="Prevención de fuga de documentos y archivos"
            boton="Cotizar"
            url=""
          />
          <Card
            img="network.jpg"
            title="Seguridad de red"
            content="Firewalls, IPS, IDS."
            boton="Cotizar"
            url=""
          />
          <Card
            img="waf.png"
            title="WAF "
            content="Firewall de aplicaciones web que supervisa, filtra o bloquea el tráfico HTTP hacia y desde una aplicación web."
            boton="Cotizar"
            url=""
          />
          <Card
            img="pam.png"
            title="PAM"
            content="Gestión de acceso y sesión privilegiada. (Monitorea, audita y protege a los usuarios administradores y privilegiados)"
            boton="Cotizar"
            url=""
          />
          <Card
            img="antivirus.webp"
            title="Seguridad de endpoints:"
            content="Seguridad antivirus, antimalware con XDR y EDR."
            boton="Cotizar"
            url=""
          />
          <Card
            img="irm.png"
            title="IRM"
            content="Gestión de permisos de acceso a información, permite mantener el control de documentos sensibles aún fuera de la institución, cifra documentos y controla el acceso."
            boton="Cotizar"
            url=""
          />
        </div>
        <Rotulo text="Red Team: Seguridad Ofensiva" />
        <div className="flex my-[2rem] flex-wrap justify-center">
          <Card
            img="EH.jpeg"
            title="Ethical Hacking"
            content=""
            boton="Cotizar"
            url=""
          />
          <Card
            img="vulnerability.jpg"
            title="Escaneo de vulnerabilidades "
            content=""
            boton="Cotizar"
            url=""
          />
          <Card
            img="pen.jpg"
            title="Pen testing"
            content=""
            boton="Cotizar"
            url=""
          />
          <Card
            img="lopdp.jpeg"
            title="Consultoría de cumplimiento de la LOPDP."
            content=""
            boton="Cotizar"
            url=""
          />
          <Card
            img="theat.webp"
            title="Cazeria de amenazas"
            content=""
            boton="Cotizar"
            url=""
          />
          <Card
            img="ransom.png"
            title="Remediación y respuesta a incidentes.
"
            content=""
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
