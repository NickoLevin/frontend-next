import { CircularProgress} from '@chakra-ui/react'
import React from 'react';

function Loader() {
  return( <div  style={{
    display: "flex",
    justifyContent: "center",
    minHeight: "200px",
    alignItems: "center",
}}
>
      <CircularProgress isIndeterminate color="black"
  display= 'flex'
  align-items= 'center'
  justify-content= 'center'/>
  </div>
  );
}

export default Loader;
