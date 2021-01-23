import React from 'react'
import styled from 'styled-components'
import ChatBar from './ChatBar/ChatBar'

const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  color: #fff;

  background: ${({ theme }) => theme.mainColors.main} url('./pattern-bg.png');

  /* background-size: 25%; */
`

const MainPageLayout = ({ children }) => (
  <Layout>
    <ChatBar />
    {children}
  </Layout>
)

export default MainPageLayout
