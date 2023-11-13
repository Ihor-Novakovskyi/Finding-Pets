import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import eng from "./circle-flags_eng.png";
import ukr from "./circle-flags_ua.png";
import logo from "./Logo.png";
import heart from "./Heart.png";
import search from "./Search.png"
export default function Navigation() {
    const clazzActive = 'active';
    let [dataAtrActiveElem, setDataAtrActiveElem] = useState('');

    const selectedNavButton = (e) => {
        let dataAtrActiveElem = e.target.getAttribute('data-action');
        setDataAtrActiveElem(dataAtrActiveElem)
    }
    return (
        <header className="header-page">
            <div className="menu-wrapper">
                <nav className="menu">
                    <img className="logo-small" src={ logo } alt="logo" />
                    <div className="navigation-wrapper">
                        <div className="menu__upper-wrapper">
                            <input className="menu__search" type="text" placeholder="Пошук" aria-label="Шукати" />
                            <Link className="menu__registration-link" aria-label="увійти в акаунт go to your acaunt" to="/Finding-pets">
                                <button
                                    data-action="enter"
                                    className={`menu__registration-button ${dataAtrActiveElem === 'enter' ? clazzActive : ''}`}
                                    onClick={ selectedNavButton }>
                                    Увійти
                                </button>
                            </Link>
                            <Link className="menu__add-to-favorites" to="Finding-pets">
                                <img
                                    className="menu__heart-image"
                                    src={ heart } alt="heart" />
                            </Link>
                            <button
                                className="menu__change-language"
                                aria-label="змінити мову на українську  change language app to ukranian" name="ukr">
                                <img src={ ukr } alt="UKR" />
                                Укр
                            </button>
                            <button
                                className="menu__change-language"
                                name="eng"
                                aria-label="Змінити мову сайту change language app to english ">
                                <img src={ eng } alt="ENG" />
                                Eng
                            </button>

                        </div>
                        <div className="menu__lower-wrapper" onClick={ selectedNavButton }>
                            <Link
                                data-action="go-to-about-us"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === "go-to-about-us" ? clazzActive : ''}` }
                                aria-label="перейти до інформації про нас"
                                to="/Finding-pets"
                            >
                                Про нас
                            </Link>
                            <Link
                                data-action="create-ad"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === "create-ad" ? clazzActive : ''}` }
                                aria-label="перейти до подати оголошення"
                                to="/Finding-pets"
                            >
                                Подати оголошення
                            </Link>
                            <Link
                                data-action="go-to-lost"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === 'go-to-lost' ? clazzActive : ''}` }
                                aria-label="перейти до загублені"
                                to="/"
                            >
                                Загублені
                            </Link>
                            <Link
                                data-action="go-to-found"
                                aria-label="перейти до знайдені go to found"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === "go-to-found" ? clazzActive : ''}` }
                                to="/Finding-pets"
                            >
                                Знайдені
                            </Link>
                            <Link
                                data-action="feed-animal"
                                aria-label="перейти до знайдені go to found"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === "feed-animal" ? clazzActive : ''}` }
                                to="/Finding-pets"
                            >
                                Погодуй тваринку
                            </Link>
                            <Link
                                data-action="go-to-questions"
                                aria-label="перейти до знайдені go to found"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === "go-to-questions" ? clazzActive : ''}` }
                                to="/Finding-pets"
                            >
                                Питання
                            </Link>
                            <Link
                                data-action="go-to"
                                aria-label="перейти до знайдені go to found"
                                className={ `menu__navigaton-link ${dataAtrActiveElem === "go-to" ? clazzActive : ''}` }
                                to="/Finding-pets"
                            >
                                Блог
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>

        </header>

    )
}

