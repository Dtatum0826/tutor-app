import React from 'react'

function Tabs({children, buttons,  ButtonsContainer ='menu'}) {
 
  return (
   <>
   <ButtonsContainer>{buttons}</ButtonsContainer>
   {children}
   </>
  )
}

export default Tabs
