import React from 'react'
import { 
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Products from '../pages/Products/Products'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/Contact/Contact'
import PageNotFound from '../pages/PageNotFound/PageNotFound'

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRoutes>
                <Route path ="/" element={<Home/>} />
                <Route path ="/Productos" element={<Products/>} />
                <Route path ="/Sobre-Nosotros" element={<AboutUs/>}/>
                <Route path ="/Contacto" element={<Contact/>} />
                <Route path ='*' element={<PageNotFound/>}/>
            </ReactDomRoutes>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes