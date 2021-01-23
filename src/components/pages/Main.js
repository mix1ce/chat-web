import React, { useEffect, useRef, useState } from 'react'
import { useCookies } from 'react-cookie'
import { FiSidebar, FiPaperclip } from 'react-icons/fi'
import {
  IoEllipsisVertical,
  IoSearch,
  IoSendSharp,
  IoCheckmark,
} from 'react-icons/io5'
import { BiSmile, BiMicrophone } from 'react-icons/bi'
import { Input } from 'rsuite'
import MainPageLayout from '../MainPageLayout'
import { MainWrap } from './Main.styled'

function Main() {
  const [token, setToken, deleteToken] = useCookies(['chat-token'])
  const [messageInput, setMessageInput] = useState('')

  const chatBody = useRef(null)

  useEffect(() => {
    chatBody.current.scrollTo(0, chatBody.current.scrollHeight)
  }, [])

  useEffect(() => {
    if (!token['chat-token']) window.location.href = '/auth'
  }, [token])

  const logoutUser = () => {
    deleteToken(['chat-token'])
  }

  const messages = [
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      isMy: false,
      content: 'Lorem, ipsum dolor.',
    },
    {
      isMy: true,
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      isMy: false,
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus.',
    },
  ]

  return (
    <MainPageLayout>
      {/* <FontAwesomeIcon icon={faSignOutAlt} onClick={logoutUser} /> */}
      <MainWrap>
        <div className="chat">
          <div className="chat-header">
            <div className="chat-info">
              <span className="chat-info__name">Some chat</span>
              <span className="chat-info__status">Online</span>
            </div>
            <div className="chat-actions">
              <IoSearch
                className="chat-actions__icon chat-actions__icon-search"
                onClick={() => {}}
              />
              <FiSidebar
                className="chat-actions__icon chat-actions__icon-sidebar"
                onClick={() => {}}
              />
              <IoEllipsisVertical
                className="chat-actions__icon chat-actions__icon-settings"
                onClick={() => {}}
              />
            </div>
          </div>
          <div className="chat-body" ref={chatBody}>
            {messages.map((message, i) => (
              <div
                key={i}
                className={`message ${
                  message.isMy ? 'message-my' : 'message-another '
                }`}
              >
                <div className="message__content">{message.content}</div>
                <div className="message__status">
                  {message.isMy ? (
                    <IoCheckmark className="message__status-check" />
                  ) : null}

                  <span className="message__status-time">14:40</span>
                </div>
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <FiPaperclip className="chat-footer__icon chat-footer__icon-paperclip" />
            <Input
              className="chat-footer__input"
              placeholder=" Написать сообщение..."
              value={messageInput}
              onChange={value => setMessageInput(value)}
            />
            <BiSmile className="chat-footer__icon chat-footer__icon-smile" />

            <IoSendSharp className="chat-footer__icon chat-footer__icon-send" />
            {/* {!messageInput ? (
              <BiMicrophone className="chat-footer__icon chat-footer__icon-microphone" />
            ) : (
              <IoSendSharp className="chat-footer__icon chat-footer__icon-send" />
            )} */}
          </div>
        </div>
      </MainWrap>
    </MainPageLayout>
  )
}

export default Main
