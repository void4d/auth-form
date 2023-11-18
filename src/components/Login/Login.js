import { Link } from 'react-router-dom';
import { useFormAndValidation } from '../../utils/FormValidator';
import { useState } from 'react';
import { signin } from '../../utils/Api';

function Login() {
  const { values, handleChange, errors, isValid, setValues, setIsValid } = useFormAndValidation();
  const [generalError, setGeneralError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = values;

    signin()
      .then((data) => {
        console.log(data);
        setGeneralError('');
      })
      .catch(() => {
        setGeneralError('При отправке запроса произошла ошибка');
      });
  }

  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <h1 className="login-form__heading">ВХОД</h1>
      <div className="login-form__inputs">
        <div className="login-form__input-container">
          <span className="login-form__label">Email</span>
          <input
            placeholder="Введите Email"
            className="login-form__input"
            type="email"
            minLength={2}
            required
            name="email"
            pattern="^.+@.+\..+$"
            value={values.email || ''}
            onChange={handleChange}
          ></input>
          <span className="login-form__input-error">{errors.email}</span>
        </div>
        <div className="login-form__input-container">
          <span className="login-form__label">Пароль</span>
          <input
            placeholder="Введите пароль"
            className="login-form__input"
            type="password"
            minLength={6}
            required
            name="password"
            value={values.password || ''}
            pattern=".{6,}"
            onChange={handleChange}
          ></input>
          <span className="login-form__input-error">{errors.password}</span>
        </div>
        <span className="login-form__general-error">{generalError}</span>
      </div>
      <button
        type="submit"
        className={`login-form__button ${!isValid && 'login-form__button_disabled'}`}
        disabled={!isValid}
      >
        Войти
      </button>
      <span className="login-form__not-registered">
        Не зарегистрированы?{' '}
        <Link to="/">
          <span className="highlited">Регистрация</span>
        </Link>
      </span>
    </form>
  );
}

export default Login;
