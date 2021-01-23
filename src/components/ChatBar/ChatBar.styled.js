import styled from 'styled-components'

export const NavBar = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 30%;
  padding: 10px;

  background-color: ${({ theme }) => theme.mainColors.active};

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .nav-icon {
    margin-right: 10px;
  }

  .nav-icon {
    width: 1.5em;
    height: 1.5em;

    color: #595980;
  }

  input {
    color: #fff;

    background-color: ${({ theme }) => theme.mainColors.gray};
    border: 0;
  }

  input::placeholder {
    color: ${({ theme }) => theme.mainColors.placeholderColor};
  }
`

export const RoomsList = styled.div``
export const Room = styled.div`
  display: flex;

  .room {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 15px;

    &__img {
      margin-right: 5px;

      border-radius: 100%;
    }

    &-info {
      margin-right: 5px;
      margin-left: 5px;

      &__name,
      &__last-message {
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      &__name {
        margin-bottom: 5px;
      }
      &__last-message {
        color: ${({ theme }) => theme.mainColors.lightGray};
      }
    }

    &-status {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 3px;

      &__time {
        margin-bottom: 2px;

        color: ${({ theme }) => theme.mainColors.lightGray};
        text-align: right;
      }
      &__count-messages {
        padding: 1px 7px 0;

        text-align: center;

        background-color: ${({ theme }) => theme.mainColors.blue};
        border-radius: 10px;
      }
    }
  }
`
