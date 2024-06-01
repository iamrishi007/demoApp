
import { VStack, Input, Container, Center } from "@chakra-ui/react"
import { Card, CardHeader, Stack, CardBody, CardFooter, Image, Heading, Text, Button, ButtonGroup, Divider } from '@chakra-ui/react'
import { useEffect, useState } from "react"
import axios from "axios"

import '../App.css'

function Product() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")

  async function fetchData() {

    try {
      let res = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      })
      setData(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const result = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
      <div>
        <Container>
          <VStack p={4}>

            <Input variant='filled' placeholder='Search Product' value={search} onChange={handleSearch} />

          </VStack>
        </Container>
      </div>

      <div id="card">
        {result.map((elm) => (
          <Center key={elm.id}>
            <Card maxW='sm' key={elm.id}>
              <CardBody>
                <Image
                  src={elm.image}
                  alt={elm.title}
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{elm.title}</Heading>
                  <Text>
                    {elm.category}
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    {elm.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Center>
        ))}
      </div>

    </>
  )



}
export default Product
