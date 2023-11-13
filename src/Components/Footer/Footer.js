import logo from './assets/footer-logo.png'
import inst from './assets/inst.png';
import twit from './assets/twit.png';
import face from './assets/face.png'
import './Footer.scss';
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="footer-page">
            <div className="footer-page__content">
                <div className="logo-wrapper">
                    <img src={ logo } alt="" className="logo-big" />
                </div>
                <div className="footer-page__actions-block-1">
                    <Link className="footer-page__action-item">
                        Про нас
                    </Link>
                    <Link className="footer-page__action-item">
                        Загублені
                    </Link>
                    <Link className="footer-page__action-item">
                        Знайдені
                    </Link>
                </div>
                <div className="footer-page__actions-block-2">
                    <Link className="footer-page__action-item">
                        Погодуй тваринку
                    </Link>
                    <Link className="footer-page__action-item">
                        Питання
                    </Link>
                    <Link className="footer-page__action-item">
                        Блог
                    </Link>
                </div>
                <div className="footer-page__actions-block-3">
                    <Link className="footer-page__action-item">
                        Співпраця
                    </Link>
                    <Link className="footer-page__action-item">
                        Гаряча лінія
                    </Link>
                    <Link className="footer-page__action-item">
                        Стати членом команди
                    </Link>
                </div>
                <div className="footer-page__social-block">
                    <p className="footer-page__social-slogan">
                        Ми у соціальних мережах
                    </p>
                    <div className="footer-page__icons-wrapper">
                        <Link className="footer-page__icon footer-page__inst icons">
                            <img src={ inst } alt="insta" />
                        </Link>
                        <Link className="footer-page__icon footer-page__face icons">
                            <img src={ face } alt="insta"/>
                        </Link>
                        <Link className="footer-page__icon footer-page__twit icons">
                        <img src={ twit } alt="insta" className='icons'/>
                        </Link>
                    </div>
                </div>
            </div>

        </div>

    )
}

