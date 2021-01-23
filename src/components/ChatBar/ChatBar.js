/* eslint-disable react/display-name */
import { FiMenu } from 'react-icons/fi'
import React, { useState } from 'react'
import { Avatar, FlexboxGrid, Input, InputGroup } from 'rsuite'
import DrawerToggle from '../DrawerToggle'
import { NavBar, RoomsList, Room } from './ChatBar.styled'

const ChatBar = () => {
  const [isShow, setIsShow] = useState(false)
  const [search, setSearch] = useState('')

  const close = () => setIsShow(false)

  const toggleDrawer = () => setIsShow(prev => !prev)

  const rooms = [5, 25, 355, 78999]

  return (
    <>
      <NavBar>
        <InputGroup inside>
          <FiMenu onClick={toggleDrawer} className="nav-icon" />
          <Input
            className="search-input"
            placeholder="Поиск"
            value={search}
            onChange={value => setSearch(value)}
          />
        </InputGroup>
        <RoomsList>
          {rooms.map((room, i) => (
            <Room key={i}>
              <div className="room">
                <img
                  className="room__img"
                  src="https://via.placeholder.com/50"
                  alt=""
                />
                <div className="room-info">
                  <div className="room-info__name">Dolor sit amet</div>
                  <div className="room-info__last-message">
                    Lorem ipsum dolorLorem ipsum dolorLorem ipsum dolor
                  </div>
                </div>
              </div>
              <div className="room-status">
                <span className="room-status__time">14:40</span>
                <span className="room-status__count-messages">{room}</span>
              </div>
            </Room>
          ))}
        </RoomsList>
      </NavBar>
      {/* <DrawerToggle isShow={isShow} close={close} /> */}
    </>
  )
}

export default ChatBar
