import React from 'react';
import { Header } from './components/templates/Header';
import { Footer } from './components/templates/Footer';
import { Grid2 } from '@mui/material';
import { Content } from './components/organisms/Contetn';

function App() {
  return (
    <>
      <Grid2 container direction="column" style={{ height: "100%" }}>
        <Grid2>
          <Header />
        </Grid2>
        <Grid2 container>
          <Grid2 size={{ sm: 2, md: 3 }}>
            
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 8, md: 6 }} > 
            <Content />
          </Grid2>
          <Grid2 size={{ sm: 2 , md: 3 }}>
            
          </Grid2>
        </Grid2>
        <Grid2>
          <Footer />
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
