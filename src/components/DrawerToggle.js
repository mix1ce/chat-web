import React from 'react'
import { Drawer, Icon, Avatar } from 'rsuite'
import { Menu } from './DrawerToggle.styled'

const DrawerToggle = ({ isShow, close }) => (
  <Drawer
    // size="30%"
    className="drawer"
    placement="left"
    show={isShow}
    onHide={close}
    backdrop
    keyboard
  >
    <Menu>
      <div className="menu-header">
        <Avatar circle size="lg" />
        <Icon icon="close" onClick={close} />
      </div>
    </Menu>
  </Drawer>
)

export default DrawerToggle
