import IScooter from "@/lib/types/IScooter";
import { FunctionComponent } from "react";

interface ProductDumbProps {
    data: IScooter,
    setModelShort: any   
}
 
const ProductDumb: FunctionComponent<ProductDumbProps> = ({data, setModelShort}) => {
    return ( 
        <>
            {data.scooter_model}
        </>
     );
}
 
export default ProductDumb;