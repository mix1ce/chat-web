/* eslint-disable no-prototype-builtins */

import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { Alert, Form, FormGroup, Button, Input } from 'rsuite'
import { API } from '../../services/apiService'
import { AuthWrap } from './Auth.styled'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [isLoginView, setIsLoginView] = useState(true)

  const [token, setToken] = useCookies(['chat-token'])

  useEffect(() => {
    if (token['chat-token']) window.location.href = '/'
  }, [token])

  const loginClicked = () => {
    API.loginUser({ email, password })
      .then(({ ok, result }) => {
        if (ok) {
          setToken('chat-token', result.token)
        } else {
          Object.entries(result).forEach(([key, value]) =>
            Alert.error(`${key}: ${value}`, 4000)
          )
        }
      })
      .catch(error => Alert.error(error, 4000))
  }
  const registerClicked = () => {
    if (password === passwordRepeat)
      API.registerUser({ email, password })
        .then(({ ok, result }) => {
          if (ok) {
            loginClicked()
          } else {
            Object.entries(result).forEach(([key, value]) =>
              Alert.error(`${key}: ${value}`, 4000)
            )
          }
        })
        .catch(error => Alert.error(error, 4000))
  }

  return (
    <AuthWrap>
      <header>{isLoginView ? <h1>Login</h1> : <h1>Register</h1>}</header>
      <div className="login-container">
        <Form>
          <FormGroup>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={value => setEmail(value)}
            />
          </FormGroup>

          <FormGroup>
            <Input
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={value => setPassword(value)}
            />
          </FormGroup>

          {isLoginView ? null : (
            <FormGroup>
              <Input
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={value => setPasswordRepeat(value)}
              />
            </FormGroup>
          )}

          <FormGroup>
            {isLoginView ? (
              <Button appearance="primary" onClick={loginClicked}>
                Login
              </Button>
            ) : (
              <Button appearance="primary" onClick={registerClicked}>
                Register
              </Button>
            )}
          </FormGroup>

          <FormGroup>
            {isLoginView ? (
              <p onClick={() => setIsLoginView(false)} role="presentation">
                You don &#39; t have an account? Register here!
              </p>
            ) : (
              <p onClick={() => setIsLoginView(true)} role="presentation">
                You already have an account? Login here
              </p>
            )}
          </FormGroup>
        </Form>
      </div>
    </AuthWrap>
  )
}

export default Auth
