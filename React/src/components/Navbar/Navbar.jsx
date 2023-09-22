import React from 'react'
import { CarritoContainerStyled, ContactoContainerStyled, InicioContainerStyled, LinkContainerStyled, LinksContainerStyled, MenuContainerStyled, NavbarContainerStyled, ProductosContainerStyled, SobreNosotrosContainerStyled, SpanStyled } from './NavbarStyles'
import {ImHome} from "react-icons/im"
import {HiUserGroup} from "react-icons/hi"
import {BsFillStarFill} from "react-icons/bs"
import {HiMail} from "react-icons/hi"
import {HiShoppingCart} from "react-icons/hi"
import{ImMenu} from "react-icons/im"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <div>
            <a href="/#">
                <img src="./img/logo.png.png"></img>
            </a>
        </div>
        <LinksContainerStyled>
            <InicioContainerStyled>
                <motion.div whileHover={{scale: 1.05}}>
                    <a href='/#'>
                        <LinkContainerStyled>
                            <ImHome/>
                            <SpanStyled>Inicio</SpanStyled>
                        </LinkContainerStyled>
                        
                    </a>
                </motion.div>
            </InicioContainerStyled>

            <SobreNosotrosContainerStyled>
                <motion.div whileHover={{scale: 1.05}}>
                    <a href='/Sobre-nosotros'>
                        <LinkContainerStyled>
                            <HiUserGroup/>
                            <SpanStyled>Sobre nosotros</SpanStyled>
                        </LinkContainerStyled>
                    </a>
                </motion.div>
            </SobreNosotrosContainerStyled>

            <ProductosContainerStyled>
                <motion.div whileHover={{scale: 1.05}}>
                    <a href='/Productos'>
                        <LinkContainerStyled>
                            <BsFillStarFill/>
                            <SpanStyled>Productos</SpanStyled>
                        </LinkContainerStyled>
                    </a>
                </motion.div>
            </ProductosContainerStyled>

            <ContactoContainerStyled>
                <motion.div whileHover={{scale: 1.05}}>
                    <a href='/Contacto'>
                        <LinkContainerStyled>
                            <HiMail/>
                            <SpanStyled>Contacto</SpanStyled>
                        </LinkContainerStyled>
                    </a>   
                </motion.div>
            </ContactoContainerStyled>

            <CarritoContainerStyled>
                <motion.div whileHover={{scale: 1.05}}>
                    <a href='/#'>
                        <LinkContainerStyled>
                            <HiShoppingCart/>
                        </LinkContainerStyled>
                    </a>
                </motion.div>   
            </CarritoContainerStyled>

            <motion.div whileHover={{scale: 1.05}}>
                <MenuContainerStyled>
                    <ImMenu/>
                </MenuContainerStyled>   
            </motion.div>    

        </LinksContainerStyled>
    </NavbarContainerStyled>
    
  )
}

export default Navbar