import { useCallback, useRef } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'
import Input from './components/common/Input/Input'

const schema = yup.object().shape({
  username: yup.string().required().matches(/^\S*$/),
  password: yup.string().required().matches(/^\S*$/),
})

const StyledForm = styled.form`
  width: 30%;
  margin: auto;
  padding: 15px;
  background-color: tomato;
  border-radius: 5px;
  div {
    display: flex;
    justify-content: center;
    margin-top: 15px;
    label {
      min-width: 100px;
    }
    input {
      flex: 1;
    }
  }
`

function App() {
  console.log('re-render Form')
  const login = useRef({
    userName: '',
    userPassword: '',
  })
  console.log(login)
  const checkValue = useCallback((value, type) => {
    login.current = {
      ...login.current,
      [type]: value,
    }
    console.log(login)
  }, [])
  const handlePreventDefault = (e) => {
    e.preventDefault()
  }
  const check = async () => {
    await schema
      .isValid({
        username: login.current.userName,
        password: login.current.userPassword,
      })
      .then((valid) => {
        if (valid) {
          alert('OK')
        } else {
          alert('Invalid username or password')
        }
      })
  }
  return (
    <div className="App">
      <StyledForm onSubmit={handlePreventDefault}>
        <Input
          label="User name"
          value={login}
          checkValue={checkValue}
          type="userName"
        />
        <Input
          label="Password"
          value={login}
          checkValue={checkValue}
          type="userPassword"
        />
        <div>
          <button onClick={check}>Submit</button>
        </div>
      </StyledForm>
    </div>
  )
}

export default App
