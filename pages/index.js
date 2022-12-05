import Head from "next/head";
import { useState } from "react";
import { useWindupString, Pace, Pause, WindupChildren } from "windups";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';




export default function Home() {

  // initial input set null 
  const [questionInput, setquestionInput] = useState("");
  const [heading, setHeadingInput] = useState("The response from AI will be showing here 🔮");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState();

  // API calls sends here
  async function onSubmit(event) {
    setIsLoading(true);

    event.preventDefault();
    const response = await fetch("/api/roast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ what: questionInput }),
    });

    // Response from api stores here and update state
    const data = await response.json();
    setResult(data.result);
    setquestionInput("");
    setHeadingInput(`Here is your response from AI..... 🔮`);
    setIsLoading(false);
    console.log(data.result);
    console.log(data.heading);


  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Roast My Ex 🤣
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            use AI to roast your ex-girlfriends ✌️
          </Text>
        </Stack>


        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>




              <FormControl isRequired>
                <FormLabel>What's you're ex twitter account?</FormLabel>
                <Input
                  name="what"
                  type="text"
                  placeholder="@nirajsheladiya"
                  value={questionInput} onChange={(e) => setquestionInput(e.target.value)} />
              </FormControl>




              {/* <Box> side ma joiye to ahiya
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}


            </HStack>

            <FormControl >
              <FormLabel>Cringe Level</FormLabel>

              <Slider aria-label='slider-ex-4' defaultValue={30}>
                <SliderTrack bg='red.100'>
                  <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color='tomato' />
                </SliderThumb>
              </Slider>
            </FormControl>

            <Stack spacing={10} pt={2}>

              <Button
                onClick={onSubmit}
                variant="primary"
                disabled={isLoading}
                type='submit'
                size="lg"
                spinnerPlacement='start'
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>

                {isLoading ? 'Generating...' : 'Roast Now 🔥'}
              </Button>


            </Stack>



            <Stack pt={6}>

              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
              <div> <h5>{heading}</h5></div>

              <div> {result}</div>

            </Stack>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
}
  // your bootstrap code starts here
//   return (
//     <div>
//       <Head>
//         <title>Roast Me</title>
//         {/* <link rel="icon" href="/dog.png" /> */}
//       </Head>
//       {/* <img src="/dog.png" className={styles.icon} /> */}

//       <Container className="m-5">

//         <Form className={"m-3"}
//           onSubmit={onSubmit}>
//           <h1 className="text-center">💔Roast My Ex✌️</h1>
//           <small className='text-muted'>
//             Use AI to Roast you're self #NOHATE.
//           </small>

//           <Form.Group className="mb-2" controlId="forBasicEmail">
//             {/* <Form.Label>What ad would you like to genrate?</Form.Label> */}
//             <h5>Add something about your Ex</h5>
//             <Form.Control onChange={(e) => setquestionInput(e.target.value)}

//               type="text"
//               name="what"
//               value={questionInput}
//               maxLength={40}
//               placeholder="Example: eating burger"
//             />
//             <h5>Inspirational advice?</h5>
//             <Form.Control onChange={(e) => setquestionInput(e.target.value)}

//               type="text"
//               name="what"
//               value={questionInput}
//               maxLength={40}
//               placeholder="Example: useState()"
//             />
//             <Form.Label>Roast Level</Form.Label>
//             <Form.Range />
//           </Form.Group>
//           <Button
//             variant="primary"
//             disabled={isLoading}
//             className="my-button"
//             type='submit'
//           >
//             {isLoading ? 'Generating...' : 'Click to load'}
//           </Button>

//         </Form>




//         {/* animated text here  */}
//         <WindupChildren>

//           <br />
//           <Card className="body-result">
//             <Card.Body>
//               <Card.Title> <h1>{heading}</h1>
//                 <Pause ms={2000} />
//               </Card.Title>
//               <hr />
//               <br />
//               <Card.Text>
//                 <div class="body">
//                   <b>Hi Niraj,👋</b>
//                   {"Didn't you hear me the first time? "}
//                   <Pace getPace={(char) => (char === " " ? 700 : 40)}>
//                     {"I'm thinking ... really hard."}

//                   </Pace>
//                   <br />
//                   <div> <h5>{result}</h5></div>


//                 </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </WindupChildren>

//       </Container>
//       <br />
//     </div >
//   );
// }

