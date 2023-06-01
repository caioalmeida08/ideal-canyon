import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useSwipeable } from "react-swipeable";

import ProductDumb from "./ProductDumb";

import style from "./Product.module.scss";
import IScooter from "types/IScooter";

const Product = ({modelShortProp}: {modelShortProp: string}) => {
    const {isLoading, data, error} = useQuery({
        queryKey: [modelShortProp],
        queryFn: async () => {
            try {
                const {data} = await axios.get(`/api/scooter/${modelShortProp}`)
                return (data as IScooter)
            } catch (error: any) {
                let errorMessage = error.response.data.message as string
                return errorMessage.toString()
            }   
        }
    })

    if (isLoading){
        return (<>
        esqueleto
        </>)
    }

    if (error){
        return (<>erro {JSON.stringify(error)}</>)
    }

    return (
    <>
        <ProductDumb scooterData={data as IScooter} />
    </>)
}
 
export default Product;
