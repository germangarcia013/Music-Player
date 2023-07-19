import "../Header/style.css"
import Logo from "../../assets/logo.svg"
import Profile from "../../assets/profile.jpg"

export default function Header() {

    const name = "German"

    return (
        <header className="container-main">
            <img src={Logo} alt="logo Cubos-player" />

            <div className="container-user">
                <img
                    src={Profile}
                    alt="Profile"
                />
                <h2>Bem vindo, {name}.</h2>
            </div>
        </header>
    )
}