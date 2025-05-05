import {useEffect, useState} from "react"
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar  from "./NavBar";




function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false)
  const palleteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: (palleteType == 'light') ? '#eaeaea' : '#121212'
      }
    }
  })

  useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data));

    return () => {}
  }, [])

  const addProduct = () => {
    setProducts(prevState => [...prevState, 
      {
      id: prevState.length + 1,
      name: 'product' + (prevState.length + 1),
      price: 300.00,
      quantityInStock: 100,
      description: 'test',
      pictureUrl: 'https://picsum.photo/200',
      type: 'test',
      brand: 'test'
    
    }])
  }

//   <Box display='flex' justifyContent='center' gap={3} marginY={3}>
//   <Typography variant='h4'>Re-store</Typography>
//   <Button variant='contained' onClick={addProduct}>Add Product</Button>
// </Box>

  return (

    <ThemeProvider theme={theme}>
      <CssBaseline/>
   
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
    <Box sx={{
      minHeight: '100vh',
      py: 6 ,
      background: darkMode 
        ? 'radial-gradient(circle, #1e3aBa, #111B27)' 
        : 'radial-gradient(circle,rgb(171, 227, 240), #f0f9ff',
      
      }}
    
    >
    <Container maxWidth='xl' sx={{mt: 8}} >
      <Catalog products={products} addProduct={addProduct} />
    </Container>

    </Box>
    </ThemeProvider>
  )
}

export default App
