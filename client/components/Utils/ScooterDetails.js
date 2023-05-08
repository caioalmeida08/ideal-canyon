import { useState, useEffect } from 'react';

import { IconClose } from '../Utils/Icons';

import style from "./ScooterDetails.module.scss"

const ScooterDetails = ({ btnOpenId }) => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    // Fetch data from API
    useEffect(() => {
        const scooterModel = document.querySelector(`#${btnOpenId}`).parentElement.dataset.scootermodel;

        const fetchData = async () => {
            const res = await fetch(`http://localhost:3000/scooter/details?scooterModel=${scooterModel}`);
            const json = await res.json();
            setData(...json);
            setLoading(false);
        };
        fetchData();
    }, []);


    // Client-side script for modal
    useEffect(() => {
        const btnOpen = document.querySelector(`#${btnOpenId}`)
        const modal = document.getElementById(`modal_${btnOpenId}`)

        btnOpen.addEventListener('click', () => {
            if (!modal.attributes.open) {
                modal.showModal()
            }
        })

    }, [])

    return (
        <>
            <dialog id={`modal_${btnOpenId}`} className={`${style.modal} gap-h-48`}>
                {isLoading && <p>Loading...</p>}
                {data && (
                    <>
                        <IconClose />
                        <div className='gap-h-48 text-center'>
                            <div className="scooter-model gap-h-16 text-capitalize">
                                <h4 className="text-h3 text-main text-transform-none">Modelo e cor</h4>

                                <div className="field">
                                    <h5 className='text-demi'>Modelo</h5>
                                    <p>{data.scooter_model}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Ano</h5>
                                    <p>{data.scooter_year}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Cores disponíveis</h5>
                                    <p>{data.allColors.join(", ")}</p>
                                </div>

                            </div>

                            <div className="technicalities gap-h-16">
                                <h4 className='text-h3 text-main'>Tecnicalidades</h4>

                                <div className="field">
                                    <h5 className='text-demi'>Velocidade máxima</h5>
                                    <p>{`${data.scooter_max_speed}km/h`}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Capacidade de carga</h5>
                                    <p>{`${data.scooter_max_load}kg`}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Peso da scooter</h5>
                                    <p>{`${data.scooter_weight}kg`}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Dimensões</h5>
                                    <p>{`${data.scooter_dim_h}m (A), ${data.scooter_dim_w}m (L), ${data.scooter_dim_l}m (C)`}</p>
                                </div>

                            </div>

                            <div className="battery gap-h-16">
                                <h4 className='text-h3 text-main'>Bateria</h4>

                                <div className="field">
                                    <h5 className='text-demi'>Tipo de bateria</h5>
                                    <p>{data.scooter_battery_type}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Capacidade</h5>
                                    <p>{`${data.scooter_battery_capacity}Ah`}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Autonomia</h5>
                                    <p>{`${data.scooter_battery_range} quilômetros`}</p>
                                </div>

                                <div className="field">
                                    <h5 className='text-demi'>Potência e tempo de recarga</h5>
                                    <p>{`${data.scooter_charger_power}W, ${data.scooter_charging_time}h`}</p>
                                </div>

                            </div>

                            <div className="items gap-h-16">
                                <h4 className='text-h3 text-main'>Incluso</h4>

                                <div className="field">
                                    <h5 className='text-demi'>Carregador</h5>
                                    <p>Potência: {data.scooter_charger_power}W</p>
                                    <p>Entrada: {data.scooter_charger_voltage}V</p>
                                    <p>Saída: {data.scooter_charger_power / data.scooter_charger_output}V,{data.scooter_charger_output}A</p>
                                </div>

                            </div>

                            <div className="description gap-h-16">
                                <h4 className='text-h3 text-main'>Descrição completa</h4>
                                <p>{data.scooter_description}</p>
                            </div>

                        </div>
                    </>
                )}
            </dialog>
        </>
    )
}

export default ScooterDetails