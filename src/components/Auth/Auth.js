import React, { useState, useEffect, useRef } from 'react'
import { useCookies } from 'react-cookie'
import { Alert, Form, FormGroup, Button, Schema, FormControl } from 'rsuite'
import InputMask from 'react-input-mask'
import { API } from '../../services/apiService'
import { AuthWrap } from './Auth.styled'

const MaskInput = ({ onChange, ...rest }) => (
  <InputMask
    mask="8 (999) 999-99-99"
    maskChar="_"
    {...rest}
    className="rs-input auth__form-control"
    onChange={event => onChange(event.target.value)}
  />
)

const asyncCheckRepeat = (value, index) =>
  API.getUsers().then(res => !res.filter(user => user[index] === value).length)

function Auth() {
  const form = useRef(null)
  const [token, setToken] = useCookies(['chat-token'])
  const [isLoginView, setIsLoginView] = useState(true)

  const loginState = {
    phone_number: '',
    password: '',
  }
  const [formData, setFormData] = useState(
    isLoginView
      ? loginState
      : {
          ...loginState,
          verifyPassword: '',
          username: '',
          email: '',
          first_name: '',
          last_name: '',
        }
  )

  const { StringType } = Schema.Types
  const shema = {
    phone_number: StringType().isRequired('Это поле обязательное.'),
    password: StringType().isRequired('Это поле обязательное.'),
  }
  const model = Schema.Model(
    isLoginView
      ? shema
      : {
          ...shema,
          verifyPassword: StringType()
            .addRule(
              (value, data) => value === data.password,
              'Пароли не совпадают'
            )
            .isRequired('Это поле обязательное.'),
          username: StringType().addRule(
            value => asyncCheckRepeat(value, 'username'),
            'Данное имя уже занято'
          ),
          email: StringType()
            .isEmail('Пожалуйста, введите правильный адрес электронной почты.')
            .addRule(
              value => asyncCheckRepeat(value, 'email'),
              'Данный email уже занят'
            ),
          fistname: StringType(),
          lastname: StringType(),
        }
  )

  const [, setFormError] = useState({})

  useEffect(() => {
    if (token['chat-token']) window.location.href = '/'
  }, [token])

  const cutNumbers = string => string.replace(/\D+/g, '')
  const modifyFormData = data => {
    const newData = data
    // eslint-disable-next-line no-restricted-syntax
    for (const key in newData) {
      if (Object.hasOwnProperty.call(newData, key)) {
        if (key === 'phone_number') {
          newData[key] = cutNumbers(newData[key])
        } else {
          newData[key] = newData[key].trim()
        }
      }
    }

    return newData
  }

  const loginClicked = async () => {
    API.loginUser({
      phone_number: cutNumbers(formData.phone_number),
      password: formData.password,
    })
      .then(({ ok, result }) => {
        if (ok) {
          setToken('chat-token', result.token)
        } else {
          Object.keys(result).forEach(key => Alert.error(result[key], 4000))
        }
      })
      .catch(error => Alert.error(error, 4000))
  }

  const registerClicked = () => {
    form.current.checkAsync().then(({ hasError, formError }) => {
      if (!hasError) {
        API.registerUser(modifyFormData(formData))
          .then(({ ok, result }) => {
            if (ok) {
              loginClicked()
            } else {
              Object.keys(result).forEach(key => Alert.error(result[key], 4000))
            }
          })
          .catch(error => Alert.error(error, 4000))
      } else {
        Object.keys(formError).forEach(key => Alert.error(formError[key], 4000))
      }
    })
  }

  return (
    <AuthWrap login={isLoginView}>
      <h1 className="auth__title">{isLoginView ? 'Войти' : 'Регистрация'}</h1>

      <Form
        className="auth"
        ref={form}
        onChange={value => setFormData(value)}
        onCheck={error => setFormError(error)}
        formValue={formData}
        model={model}
      >
        <FormGroup className="auth__form-group">
          <FormControl
            checkAsync
            errorPlacement="rightStart"
            className="auth__form-control"
            name="phone_number"
            type="text"
            placeholder=" Номер телефона"
            accepter={MaskInput}
          />

          <FormControl
            errorPlacement="rightStart"
            className="auth__form-control"
            name="password"
            type="password"
            placeholder=" Пароль"
          />

          {isLoginView ? null : (
            <FormControl
              errorPlacement="rightStart"
              className="auth__form-control"
              name="verifyPassword"
              type="password"
              placeholder=" Повторите пароль"
            />
          )}
        </FormGroup>

        <FormGroup className="auth__form-group">
          {isLoginView ? null : (
            <>
              <FormControl
                checkAsync
                errorPlacement="rightStart"
                className="auth__form-control"
                name="username"
                placeholder=" Имя пользователя"
              />
              <FormControl
                checkAsync
                errorPlacement="rightStart"
                className="auth__form-control"
                name="email"
                placeholder=" Email"
              />
              <FormControl
                errorPlacement="rightStart"
                className="auth__form-control"
                name="first_name"
                placeholder=" Имя"
              />
              <FormControl
                errorPlacement="rightStart"
                className="auth__form-control"
                name="last_name"
                placeholder=" Фамилия"
              />
            </>
          )}
        </FormGroup>

        <FormGroup className="auth__form-group">
          {isLoginView ? (
            <Button
              className="auth__btn"
              appearance="primary"
              onClick={loginClicked}
            >
              Войти
            </Button>
          ) : (
            <Button
              className="auth__btn"
              appearance="primary"
              onClick={registerClicked}
            >
              Регистрация
            </Button>
          )}
        </FormGroup>
      </Form>

      <FormGroup className="auth__form-group">
        {isLoginView ? (
          <p
            className="auth__footer-text"
            onClick={() => setIsLoginView(false)}
            role="presentation"
          >
            У вас нет аккаунта? Зарегистрируйтесь здесь!
          </p>
        ) : (
          <p
            className="auth__footer-text"
            onClick={() => setIsLoginView(true)}
            role="presentation"
          >
            У вас уже есть аккаунт? Войти здесь!
          </p>
        )}
      </FormGroup>
    </AuthWrap>
  )
}

export default Auth
