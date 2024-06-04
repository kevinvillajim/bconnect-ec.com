function Header() {
  return (
    <>
      <div className="w-full h-[3.5rem] bg-white flex justify-between px-[1rem] fixed border-y-[1px]">
        <div className="h-[2rem]">
          <img
            className="h-[3rem] flex align-center p-[0.2rem]"
            src="logo.png"
          />
        </div>
        <div className="flex items-center">
          <ul className="flex items-center gap-[1rem]">
            <a href="home">
              <li className="text-[rgba(106,106,106,1)] cursor-pointer">
                Inicio
              </li>
            </a>
            <li className="text-[rgba(106,106,106,1)]">•</li>
            <a href="nosotros">
              <li className="text-[rgba(106,106,106,1)] cursor-pointer">
                ¿Quiénes somos?
              </li>
            </a>
            <li className="text-[rgba(106,106,106,1)]">•</li>
            <a href="contacto">
              <li className="text-[rgba(106,106,106,1)] cursor-pointer">
                Contáctanos
              </li>
            </a>
            <li className="text-[rgba(106,106,106,1)]">•</li>
            <a href="trabajo">
              <li className="text-[rgba(106,106,106,1)] cursor-pointer">
                Trabaja con nosotros
              </li>
            </a>
            <li></li>
          </ul>
          <span className="material-symbols-outlined text-[rgba(106,106,106,1)] cursor-pointer">
            search
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
