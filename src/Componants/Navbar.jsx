import { Link } from "react-router-dom"
import { Button, Flex } from '@chakra-ui/react'
import { useContext } from "react"
import { Authcontext } from "../Context/AuthcontextProvider"
const links = [

     {
          to: "/",
          label: "Home"
     },
     {
          to: "/about",
          label: "About"
     },
     {
          to: "/contact",
          label: "Contact"
     },
     {
          to: "/product",
          label: "Product"
     },
     {
          to: "/login",
          label: "Login"
     },
]

function Navbar() {

     const {logout}=useContext(Authcontext)

     return (
          <>

               <Flex align="center" justifyContent='space-around' backgroundColor='#E2E8F0' padding={6}>
                    {links?.map((link) => (
                         <Link key={link.to} to={link.to}>
                              {link.label}
                         </Link>
                    ))}

                    <Button colorScheme='red' variant='outline' onClick={logout}>
                         Logout
                    </Button>
               </Flex>

          </>
     )
}

export default Navbar
