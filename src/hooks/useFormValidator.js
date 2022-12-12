import React, { useCallback, useState } from 'react';

export function useFormValidator() {
  const [values, setValues] = useState({}); // пер.состония полей инпуты
  const [errors, setErrors] = useState({}); // пер.состояния ошибок
  const [isValid, setIsValid] = useState(true); // пер.состояния валидное поле или нет

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
    (emptyValue = {}, emptyError = {}, defaultValid = false) => {
      setValues(emptyValue);
      setErrors(emptyError);
      setIsValid(defaultValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleInputChange, resetForm };
}