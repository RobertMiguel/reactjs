import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Inicio" />
        <SidebarItem Icon={FaChartBar} Text="Jogos Gratis" />
        <SidebarItem Icon={FaIdCardAlt} Text="Moderação" />
        <SidebarItem Icon={FaRegFileAlt} Text="Ajuda" />
      </Content>
    </Container>
  )
  
}

export default Sidebar
