import logo from "../images/cupCakes/logo.jpg"
export default function Header(){
    return(
        <header className="introduction">
        <div className="center">
            <img className="avatar" src={logo} alt="brand-logo"/>
            </div>
      </header>
    );
}