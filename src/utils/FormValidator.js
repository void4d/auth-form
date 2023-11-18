import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const customErrorMessages = {
      email: 'Введите email формата mail@mail.ru',
      password: 'Должно быть минимум 6 символов',
      passwordConfirm: 'Должно быть минимум 6 символов',
    };

    if (values >= 1) {
      setIsValid(false);
    }

    if (name === 'email') {
      if (e.target.validity.patternMismatch) {
        setErrors({ ...errors, [name]: customErrorMessages[name] });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }

    if (name === 'password') {
      if (e.target.validity.patternMismatch) {
        setErrors({ ...errors, [name]: customErrorMessages[name] });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }

    if (name === 'passwordConfirm') {
      if (e.target.validity.patternMismatch) {
        setErrors({ ...errors, [name]: customErrorMessages[name] });
      } else {
        setErrors({ ...errors, [name]: '' });
      }
    }

    setValues({ ...values, [name]: value });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = true) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}
