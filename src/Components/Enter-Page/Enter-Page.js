import "./Enter-Page.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function EnterPage() {
    const clazzActive = 'active';
    const [checked, setChecked] = useState('');
    const [typeEntering, setTypeEntering] = useState({ name: 'email' });
      const selectedTypeEntering = (e) => {
        setTypeEntering({
            name: e.target.getAttribute('name') === 'email' ? 'email' : 'tel',
        })
    }
    const onCheked = (e) => {
        setChecked((checked) => checked !== 'checked' ? 'checked' : '')
    }
    const formSubmit = (e) => {
        e.preventDefault();
    }
  
    return (
        <div className="form-page">
            <div className="form-page__container">
                <div className="form-enter">
                    <form action="submit" className="form-enter__form" onSubmit={ formSubmit }>
                        <h2 className="form-enter__header">
                            Вхід
                        </h2>
                        <p className="form-enter__information">
                            Зареєструйтесь за допомогою електронної <br />
                            пошти або телефону
                        </p>
                        <div className="form-enter__actions" >
                            <div
                                name="email"
                                onClick={ selectedTypeEntering }
                                className={`form-enter__select-type-input ${typeEntering.name === 'email' ? clazzActive : ''}`} tabIndex={ 1 }>
                                E-mail
                            </div>
                            <div
                                name="telephone"
                                onClick={ selectedTypeEntering }
                                className={ `form-enter__select-type-input ${typeEntering.name === 'tel' ? clazzActive : ''}` } tabIndex={ 1 }
                            >
                                Телефон
                            </div>
                        </div>
                        <TypeSelectedform typeEntering={ typeEntering.name } />
                        <div className="form-enter__actions-with-password">
                            <label
                                className={ `form-enter__label-remember-password ${checked ? 'active' : ''}` }
                                tabIndex={ 1 }
                            >
                                <input
                                    checked={ checked }
                                    onChange={ onCheked }
                                    type="checkbox"
                                    className="form-enter__remember-password"
                                />
                                Запам'ятати пароль
                            </label>
                            <Link className="form-enter__forgot-password">
                                Забули пароль?
                            </Link>
                        </div>
                        <Link className="form-enter__wrapper-open-authorised">
                            <button className="form-enter__open-autorised-user">
                                Увійти
                            </button>
                        </Link>
                        <h2 className="form-enter__slogan-to-use-help">
                            Або увійти за допомогою
                        </h2>
                        <div className="form-enter__authorisation-by-goog-fac">
                            <div className="form-enter__facebook">
                                Facebook
                                <div className="form-enter__logo-facebook" />
                            </div>
                            <div className="form-enter__google">
                                Google
                                <div className="form-enter__logo-google" />
                            </div>
                        </div>
                        <div className="form-enter__devider" />
                        <div className="form-enter__propose-to-registration">
                            <span>
                                Ще не маєте акаунту?
                            </span>
                            <Link className="form-enter__propose-to-registration-action">
                                Зареєструватися
                            </Link>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )

}
function TypeSelectedform(props) {
    const nameLabel = props.typeEntering === 'email' ? 'E-mail' : 'Телефон';
    const type = props.typeEntering === 'email' ? 'email' : 'tel';
    const placeHolder = props.typeEntering === 'email' ?
        'exampl@gmail.com'
        :
        '+380992375586';
    return (
        <>
            <div>
                <label className="form-enter__label">
                    <span className="form-enter__label-item">
                        { nameLabel }
                    </span>
                    <input
                        type={ type }
                        className="form-enter__form-entering-field "
                        placeholder={ placeHolder }
                    />
                </label>
                <label className="form-enter__label">
                    <span className="form-enter__label-item">
                        Пароль
                    </span>
                    <input
                        placeholder="*******"
                        type="password"
                        className="form-enter__form-entering-field password"
                    />
                </label>
            </div>
        </>
    )
}
