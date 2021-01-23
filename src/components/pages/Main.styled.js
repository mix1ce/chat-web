import styled from 'styled-components'

export const MainWrap = styled.main`
  width: 100%;
  .chat {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;

    /* .chat-header */
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px;

      background-color: ${({ theme }) => theme.mainColors.active};
      border: 1px solid ${({ theme }) => theme.mainColors.darkBlue};
      border-top: 0;

      /* .chat-info */
      .chat-info {
        display: flex;
        flex-direction: column;

        /* .chat-info__name */
        &__name {
          font-size: 1.1em;
        }

        /* .chat-info__status */
        &__status {
          color: ${({ theme }) => theme.mainColors.lightGray};
          font-size: 0.8em;
        }
      }

      /* .chat-actions */
      .chat-actions {
        &__icon {
          width: 1.5em;
          height: 1.5em;

          color: ${({ theme }) => theme.mainColors.lightGray};

          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.mainColors.lightBlue};
          }

          /* .chat-actions__icon-search */
          &-search {
            margin-right: 11px;
          }

          /* .chat-actions__icon-sidebar */
          &-sidebar {
            transform: rotate(180deg);
          }

          /* .chat-actions__icon-settings */
          &-settings {
            margin-left: 4px;
          }
        }
      }
    }

    &-body {
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      width: 100%;
      height: 87%;
      padding: 5px 15px 5px 10px;
      overflow-y: scroll;

      border: 1px solid ${({ theme }) => theme.mainColors.darkBlue};
      border-top: 0;
      border-bottom: 0;

      .message {
        display: flex;
        width: fit-content;
        max-width: 70%;
        margin-bottom: 5px;
        padding: 5px;

        border-radius: 0.5em;

        &::after {
          position: absolute;
          bottom: 0;

          width: 0;
          height: 0;

          border-style: solid;

          content: '';
        }

        &-my {
          position: relative;

          align-self: flex-end;

          background-color: ${({ theme }) => theme.mainColors.darkBlue20};

          border-bottom-right-radius: 0;

          &::after {
            right: -8px;

            border-color: transparent transparent transparent
              ${({ theme }) => theme.mainColors.darkBlue20};
            border-width: 5px 0 0 8px;
          }
        }

        &-another {
          position: relative;

          background-color: ${({ theme }) => theme.mainColors.lightGray10};
          border-bottom-left-radius: 0;

          &::after {
            left: -8px;

            border-color: transparent transparent
              ${({ theme }) => theme.mainColors.lightGray10} transparent;
            border-width: 0 0 5px 8px;
          }
        }

        /* .message__content */
        &__content {
          padding: 3px;
        }

        /* .message__status */
        &__status {
          display: flex;
          align-items: end;
          align-self: flex-end;

          /* min-width: fit-content; */

          margin-left: 10px;

          color: ${({ theme }) => theme.mainColors.lightGray60};

          &-check {
            /* vertical-align: text-top; */
          }
          &-time {
            margin-left: 3px;

            font-size: 0.8em;
          }
        }
      }
    }

    /* .chat-footer */
    &-footer {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px;

      background-color: ${({ theme }) => theme.mainColors.active};
      border: 1px solid ${({ theme }) => theme.mainColors.darkBlue};
      border-bottom: 0;

      /* .chat-footer__input */
      &__input {
        color: #fff;

        background-color: transparent;
        border: 0;

        &::placeholder {
          color: ${({ theme }) => theme.mainColors.placeholderColor};
        }
      }

      /* .chat-footer__icon */
      &__icon {
        width: auto;
        height: 1.5em;
        margin: 5px;

        color: ${({ theme }) => theme.mainColors.lightGray};

        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.mainColors.lightBlue};
        }

        &-microphone,
        &-send,
        &-smile {
          height: 1.7em;
        }

        &-paperclip {
          margin-left: 0;
        }

        &-microphone,
        &-send {
          margin-right: 0;
        }

        &-send {
          color: ${({ theme }) => theme.mainColors.blue};

          &:hover {
            color: ${({ theme }) => theme.mainColors.lightBlue};
          }
        }
      }
    }
  }
`
