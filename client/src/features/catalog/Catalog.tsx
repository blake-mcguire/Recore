import { Fragment } from "react/jsx-runtime"
import { Product } from "../../App/models/product";
// import { Button } from "@mui/material";
import ProductList from "./ProductList";
type Props = {
    products: Product[];
    addProduct: () => void; 
};


export default function Catalog({products}: Props) {
    return (
      <Fragment> 

        <ProductList products={products}/>
      
      </Fragment>
    )
}