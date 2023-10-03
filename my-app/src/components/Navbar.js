import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverBody,
    Button,
    Table,
    Td,
    Th,
    Tr,
    Image,
    Stack,
    Flex,
    Box,
    Text,
    Badge,
  } from "@chakra-ui/react";
  
  import { useSelector } from "react-redux";
  
  export const NavbarComp = () => {
    const data = useSelector((state) => state.cart.value);
    console.log(data);
    return (
      <Flex w="100vw" h="100px" bgColor="black" alignItems="center">
        <Box p="30">
          <Image src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg" />
        </Box>
        <Popover borderTopRadius="100%">
          <PopoverTrigger>
            <Button>
              <Text fontSize="xxl" fontWeight="bold">
                  Keranjang
                <Badge ml="1" fontSize="0.8em" colorScheme="red">
                  {data.length}
                </Badge>
              </Text>
            </Button>
          </PopoverTrigger>
          <PopoverContent w='fit-content'>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Table>
                <Tr>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Image</Th>
                </Tr>
                {data.map((item) => {
                  return (
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.price}</Td>
                      <Td>
                        <Stack>
                          <Image
                            boxSize="35px"
                            objectFit="cover"
                            src={item.img}
                            alt={item.name}
                          />
                        </Stack>
                      </Td>
                      <Td></Td>
                    </Tr>
                  );
                })}
              </Table>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  };
