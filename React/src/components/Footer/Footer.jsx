import React from 'react'
import { CopyrightContainerStyled, FooterContainerStyled, LogoContainerStyled, RedesContainerStyled } from './FooterStyles'
import {BiLogoFacebookSquare} from "react-icons/bi"
import {BsTwitter} from "react-icons/bs"
import {ImInstagram} from "react-icons/im"

const Footer = () => {
  return (
    <FooterContainerStyled>

        <RedesContainerStyled>
            <a>
                <BiLogoFacebookSquare/>
            </a>
            <a>
                <BsTwitter/>
            </a>
            <a>
              <ImInstagram/>
            </a>
        </RedesContainerStyled>

        <LogoContainerStyled>
          <a href='#'>
            <img src="./img/logo.png.png" height="80px"></img>
          </a>
        </LogoContainerStyled>

        <CopyrightContainerStyled>
          <p>Copyright © 2023 Alaska. All Rights Reserved</p>
        </CopyrightContainerStyled>

    </FooterContainerStyled>
    
  )
}

export default Footer