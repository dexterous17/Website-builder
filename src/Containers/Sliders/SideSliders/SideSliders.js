import React from 'react'
import Button from '../../../Components/UI/Button/Button'
import Hr from '../../../Components/UI/HR/Hr'
import SideAuxs from '../../../HOC/SideAuxs/SideAuxs'
import ControlsToAddHTMLPage from '../../Controls To Add HTML Page/ControlsToAddHTMLPage'
import './SideSliders.css'


function SideSliders(props) {
    return (
      <SideAuxs className="SideSliders">
          <Button backgroundColor="blue" right="0px" position="absolute">+</Button>
          <Hr/>
          <ControlsToAddHTMLPage />
      </SideAuxs>
    )
}

export default SideSliders
