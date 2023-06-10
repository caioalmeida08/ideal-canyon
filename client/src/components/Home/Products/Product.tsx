import { isError, useQuery } from "@tanstack/react-query";
import axios from "axios";

import IScooter from "@/lib/types/IScooter";
import { useState } from "react";
import ProductDumb from "./ProductDumb";
import ProductDumbSkeleton from "./ProductDumbSkeleton";
import handleReactQueryError from "@/lib/errors/handleReactQueryError";

const Product = ({modelShortProp}: {modelShortProp: string}) => {
    const [modelShort, setModelShort] = useState(modelShortProp)

    const {isLoading, data, error, isError} = useQuery({
        queryKey: [modelShort],
        queryFn: async () => {
            try {
                const {data} = await axios.get(`/api/scooter/${modelShort}`)
                return (data as IScooter)
            } catch (error: any) {
                handleReactQueryError(error)
            }   
        }
    })

    if (isLoading){
        return (<ProductDumbSkeleton/>)
    }

    if (isError){
        return (<>{JSON.stringify(error)}</>)
    }

    return (
    <>
        <ProductDumb data={data as IScooter} setModelShort={setModelShort}  />
    </>)
}
 
export default Product;
