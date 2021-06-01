import React from 'react'
import Button from '../../../Components/UI/Button/Button'
import SideAuxs from '../../../HOC/SideAuxs/SideAuxs'
import './SideSliders.css'


function SideSliders() {
    return (
      <SideAuxs className="SideSliders">
          <Button backgroundColor="blue" right="0px" position="absolute"/>

      </SideAuxs>
    )
}

export default SideSliders
