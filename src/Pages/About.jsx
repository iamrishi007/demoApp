import { Box, Center, Image } from "@chakra-ui/react"


function About() {
  return (
     <div>
     <Center p={10}>
          <Box boxSize='sm'>
               <Image src='https://media.tenor.com/QaXBO4lTvHUAAAAj/what-about-you-jane.gif' alt='Dan Abramov' />
          </Box>
     </Center>
</div>
  )
}

export default About