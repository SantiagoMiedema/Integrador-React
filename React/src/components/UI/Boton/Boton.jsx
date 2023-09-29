import React from 'react'
import { BotonStyled } from './BotonStyled'

const Boton = ({
  children,
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <BotonStyled
      disabled={disabled}
      onClick={onClick}
      whileHover={{scale: 1.05}}
    >{children}</BotonStyled>
  )
}

export default Boton