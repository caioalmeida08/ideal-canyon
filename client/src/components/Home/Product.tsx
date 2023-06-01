import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useSwipeable } from "react-swipeable";

import ProductDumb from "./ProductDumb";

import style from "./Product.module.scss";

interface IScooter {
    scooter_model_short: string;
    scooter_model: string;
    scooter_year: number;
    scooter_color: string;
    scooter_max_speed: number;
    scooter_max_load: number;
    scooter_weight: number;
    scooter_dim_h: number;
    scooter_dim_w: number;
    scooter_dim_l: number;
    scooter_battery_type: string;
    scooter_battery_capacity: number;
    scooter_battery_range: number;
    scooter_charging_time: number;
    scooter_charging_power: number;
    scooter_charging_voltage: string;
    scooter_charging_output: number;
    scooter_description: string;
    scooter_price: number;
    scooter_all_colors: string[];
    other_scooter_models_short: string[];
    other_scooter_models: string[];
    scooter_imgs: string[];
}
  

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

    if (data){
        return <>{JSON.stringify(data)}</>
    }
}
 
export default Product;
