import { useState } from 'react'
import styled from 'styled-components'
import * as yup from 'yup'

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
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  //handle prevent default
  const handlePreventDefault = (e) => {
    e.preventDefault()
  }
  const check = async () => {
    await schema
      .isValid({
        username: userName,
        password: userPassword,
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
        <div>
          <label htmlFor="">User Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="text"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={check}>Submit</button>
        </div>
      </StyledForm>
    </div>
  )
}

export default App
