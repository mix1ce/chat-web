import styled from 'styled-components'

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.mainColors.main};

  & > div,
  & > header {
    margin: 0 auto;
  }

  & > header {
    margin-bottom: 20px;

    font-size: 46px;
  }

  & > .login-container {
    width: 270px;
    Input {
      color: #fff;

      background-color: transparent;
      border: 0;
      border-bottom: 1px solid #fff;
      border-radius: 0;
    }
    Button {
      padding: 10px 22px;
    }

    .rs-form-group:nth-child(3) {
      text-align: center;
    }
    p {
      cursor: pointer;
    }
  }
`
