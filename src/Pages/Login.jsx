import { Center, Input, VStack, Image, Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { useState,useContext} from 'react'
import axios from 'axios'
import { Authcontext } from '../Context/AuthcontextProvider'

function Login() {
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")

     // cunsume Auth context value 

     const {login}=useContext(Authcontext)

     async function handleClick() {

          try {
               let res = await axios({
                    method: "post",
                    url: "https://reqres.in/api/login",
                    data: {
                         email, password
                    }
               })

             login(res.data.token)
             console.log(res.data.token)

          } catch (error) {
               console.log(error);
          }
     }

     return (
          <div>

               <Container padding={6} width={450}>
                    <VStack spacing={4}>

                         <Center>
                              <Box boxSize='180'>
                                   <Image src='https://gifdb.com/images/high/are-you-ready-man-with-eye-patch-ahhwvvheb8ll3egh.gif' alt='Dan Abramov' />
                              </Box>
                         </Center>
                         <Center fontSize='50'>Login Page</Center>
                         <Input variant='outline' type='text' placeholder='email' value={email} onChange={(e) => {
                              setEmail(e.target.value)
                         }} />
                         <Input variant='outline' type='password' placeholder='password' value={password} onChange={(e) => {
                              setPassword(e.target.value)
                         }} />
                         <Button colorScheme='red' variant='outline' onClick={handleClick}>
                              Login
                         </Button>
                    </VStack>

               </Container>
          </div>
     )
}

export default Login