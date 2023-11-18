import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../utils/FormValidator';
import { useState } from 'react';
import { signup } from '../../utils/Api';

function Register() {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();
  const [generalError, setGeneralError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password, passwordConfirm } = values;

    if (password === passwordConfirm) {
      signup()
        .then((data) => {
          console.log(data);
          setGeneralError('');
        })
        .catch(() => {
          setGeneralError('При отправке запроса произошла ошибка');
        });
    } else {
      setGeneralError('Пароли не совпадают');
    }
  }

  return (
    <form className="register-form" onSubmit={handleSubmit} noValidate>
      <h1 className="register-form__heading">РЕГИСТРАЦИЯ</h1>
      <div className="register-form__inputs">
        <div className="register-form__input-container">
          <span className="register-form__label">Email</span>
          <input
            placeholder="Введите Email"
            className="register-form__input"
            type="email"
            minLength={2}
            required
            name="email"
            value={values.email || ''}
            pattern="^.+@.+\..+$"
            onChange={handleChange}
          ></input>
          <span className="register-form__input-error">{errors.email}</span>
        </div>
        <div className="register-form__input-container">
          <span className="register-form__label">Пароль</span>
          <input
            placeholder="Введите пароль"
            className="register-form__input"
            type="password"
            minLength={6}
            required
            name="password"
            value={values.password || ''}
            pattern=".{6,}"
            onChange={handleChange}
          ></input>
          <span className="register-form__input-error">{errors.password}</span>
        </div>
        <div className="register-form__input-container">
          <span className="register-form__label">Подтверждение пароля</span>
          <input
            placeholder="Введите пароль повторно"
            className="register-form__input"
            type="password"
            minLength={6}
            required
            name="passwordConfirm"
            value={values.passwordConfirm || ''}
            pattern=".{6,}"
            onChange={handleChange}
          ></input>
          <span className="register-form__input-error">{errors.passwordConfirm}</span>
        </div>
        <span className="register-form__general-error">{generalError}</span>
      </div>
      <button
        type="submit"
        className={`register-form__button ${!isValid && 'register-form__button_disabled'}`}
        disabled={!isValid}
      >
        Зарегистрироваться
      </button>
      <span className="register-form__not-registered">
        Зарегистрированы?{' '}
        <Link to="/signin">
          <span className="highlited">Вход</span>
        </Link>
      </span>
    </form>
  );
}

export default Register;
