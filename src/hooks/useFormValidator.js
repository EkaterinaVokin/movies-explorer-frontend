import React, { useState, useCallback } from 'react';

export function useFormValidator({defaultIsValid = true} = {}) {
  const [values, setValues] = useState({}); // пер.состония полей инпуты
  const [errors, setErrors] = useState({}); // пер.состояния ошибок
  const [errorMessage, setErrorMessage] = useState(''); // текст ошибки приходит с сервера
  const [successMessage, setSuccessMessage] = useState(''); // текст успешно приходит с сервера
  const [isValid, setIsValid] = useState(defaultIsValid); // пер.состояния валидное поле или нет

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const eventTarget = event.target; // инпут

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: eventTarget.validationMessage }); // у инпут есть свойство validationMessage
    setIsValid(eventTarget.closest('form').checkValidity()); // валидация возвращает true или false
  }

  // функция очищает поля
  const resetForm = useCallback(
    (emptyValue = {}, emptyError = {}, defaultValid = false, errorMessage = '', successMessage = '') => {
      setValues(emptyValue);
      setErrors(emptyError);
      setIsValid(defaultValid);
      setErrorMessage(errorMessage);
      setSuccessMessage(successMessage);
    },
    [setValues, setErrors, setIsValid, setErrorMessage, setSuccessMessage]
  );

  return { values, errors, isValid, handleInputChange, resetForm, setValues, errorMessage, successMessage, setErrorMessage, setSuccessMessage};
}