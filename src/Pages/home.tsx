import { Box, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Home = () =>{
    return(
        <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          
          
          
        </VStack>
      </Grid>
    </Box>
    );
}

export default Home;