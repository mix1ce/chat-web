import styled from 'styled-components'

export const AuthWrap = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  width: 100vw;

  height: 100vh;

  background-color: ${({ theme }) => theme.mainColors.main};

  /* width: 350px; */

  /* Input {
    color: #fff;

    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #fff;
    border-radius: 0;
  }
  Button {
    padding: 10px 22px;
  } */

  .auth {
    /* .auth-title */
    &__title {
      margin-bottom: 10px;

      color: ${({ theme }) => theme.mainColors.darkBlue20};

      font-size: 43px;
    }

    /* .auth__form-group */
    &__form-group {
      margin-bottom: 15px !important;
    }

    .rs-form-control-wrapper {
      display: block;
      .rs-error-message {
        color: ${({ theme }) => theme.mainColors.white};

        background-color: red;
        border-color: red;
        &-arrow {
          &::after,
          &::before {
            border-right-color: red;
          }
        }
      }
    }

    /* .auth__form-control */
    &__form-control {
      width: ${({ login }) => (login ? '270px' : '350px')};
      margin-bottom: 10px;
      padding: 10px 0 5px;

      /* color: ${({ theme }) => theme.mainColors.white}; */

      color: ${({ theme }) => theme.mainColors.white};

      background-color: transparent;
      border: 0;
      border-bottom: 1px solid ${({ theme }) => theme.mainColors.white};
      border-radius: 0;

      &::placeholder {
        color: ${({ theme }) => theme.mainColors.placeholderColor};
      }

      &:focus {
        border-color: ${({ theme }) => theme.mainColors.lightBlue};
      }
    }

    /* .auth__btn */
    &__btn {
      display: block;
      margin: 20px auto 0;
      padding: 10px 22px;

      background-color: ${({ theme }) => theme.mainColors.darkBlue20};

      border-radius: 6px;

      &:hover {
        background-color: ${({ theme }) => theme.mainColors.blue};
      }
    }

    /* .auth__footer-text */
    &__footer-text {
      margin-top: 5px;

      color: ${({ theme }) => theme.mainColors.lightGray};

      cursor: pointer;
    }
  }
`
