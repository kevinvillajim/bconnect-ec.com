import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer({ text }) {
  return (
    <>
      <div className="relative z-[1000]">
        <img
          src="logo2.png"
          alt="logo-eco-plagas-fondo-negro"
          className="absolute left-[32%] bottom-[23rem] z-[1000] w-[500px]"
        />
        <footer className="bg-[#fff] shadow-md box-border w-full text-left font-bold text-[16px] p-[55px_50px] absolute bottom-0 border-y-[1px]">
          <div className="inline-block align-top w-[40%]">
            <div className="my-[20px_0_12px] p-0 text-black">{text}</div>
            <p
              id="footer-company"
              className="mt-[3rem] text-[#bf9000] text-[16px] font-normal m-0"
            >
              Business Connect © 2023
            </p>
          </div>
          <div className="inline-block align-top w-[35%]">
            <div>
              <p className="inline-block text-black font-[400] align-middle m-0">
                Gil R. Dávalos y Av. Amazonas - Edificio Centro Amazonas - #402
                <br />
                Quito, Ecuador
              </p>
            </div>
            <div>
              <p className="inline-block text-black font-[400] align-middle m-0">
                +593 96 296 6301
              </p>
            </div>
            <div>
              <p className="inline-block text-black font-[400] align-middle m-0">
                <a
                  id="contact-mail"
                  href="mailto:info@eco-plagas.net"
                  className="text-[#18acd1] no-underline"
                >
                  administracion@bconnect-ec.com
                </a>
              </p>
            </div>
          </div>
          <div className="inline-block align-top w-[20%]">
            <div className="flex items-center mt-[25px]">
              <a
                target="_blank"
                href="https://www.facebook.com/bconnect.ec?mibextid=ZbWKwL"
                className="inline-block w-[35px] h-[35px] cursor-pointer bg-[#e9ecef] rounded-[2px] text-[20px] text-black text-center leading-[35px] mr-[3px] mb-[5px] flex justify-center items-center"
              >
                <i className="fa fa-facebook">
                  <img
                    className="w-[15px]"
                    src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoFacebook.png"
                    alt="Facebook"
                  />
                </i>
              </a>
              <a
                target="_blank"
                href="https://instagram.com/bconnect_ec?igshid=MzNlNGNkZWQ4Mg=="
                className="inline-block w-[35px] h-[35px] cursor-pointer bg-[#e9ecef] rounded-[2px] text-[20px] text-black text-center leading-[35px] mr-[3px] mb-[5px] flex justify-center items-center"
              >
                <i className="fa fa-github">
                  <img
                    className="w-[15px]"
                    src="https://raw.githubusercontent.com/kevinvillajim/EcoPlagas/main/img/iconoInstagram.png"
                    alt="Instagram"
                  />
                </i>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/businessconnect.s.a.s/"
                className="inline-block w-[35px] h-[35px] cursor-pointer bg-[#e9ecef] rounded-[2px] text-[20px] text-black text-center leading-[35px] mr-[3px] mb-[5px] flex justify-center items-center"
              >
                <i className="fa fa-github">
                  <LinkedInIcon style={{ width: "15px", display: "flex" }} />
                </i>
              </a>
              <a
                target="_blank"
                href="https://www.tiktok.com/@bconnect_ec?_op=1&_r=1&_t=8d5xNuhFo7K"
                className="inline-block w-[35px] h-[35px] cursor-pointer bg-[#e9ecef] rounded-[2px] text-[20px] text-black text-center leading-[35px] mr-[3px] mb-[5px] flex justify-center items-center"
              >
                <i className="fa fa-github">
                  <img
                    className="w-[15px]"
                    src="tiktok.svg"
                    alt="WhatsApp"
                  />
                </i>
              </a>
            </div>
          </div>
          <div className="text-black flex justify-center mt-[2rem] font-bold text-[18px]">
            Website by{" "}
            <a
              target="_blank"
              href="https://kevinvillajim.github.io/Portfolio/"
              className="text-[#18acd1] ml-[0.5rem]"
            >
              kevinvillajim
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
