import CanyonEliteScooter1 from "@/assets/img/scooters/canyon_elite_scooter1.png";
import CanyonEliteScooter2 from "@/assets/img/scooters/canyon_elite_scooter2.jpg";
import CanyonEliteScooter3 from "@/assets/img/scooters/canyon_elite_scooter3.jpg";
import CanyonEliteScooter4 from "@/assets/img/scooters/canyon_elite_scooter4.jpg";
import CanyonComfortScooter1 from "@/assets/img/scooters/canyon_comfort_scooter1.png";
import CanyonMasterScooter1 from "@/assets/img/scooters/canyon_master_scooter1.png";
import { ButtonPrimary, ButtonSecondary } from "@/components/Utils/Buttons";
import style from "./Products.module.scss";

const Products = () => {
    return (
        <section
            className={`${style.products} side-bleed section-margin-top max-width-tablet-500 max-width-desktop-unset`}
        >
            <div className={style.product_images}>
                <img
                    src={CanyonEliteScooter1.src}
                    alt="Imagem da Canyon Elite Scooter em fundo transparente"
                    className={style.main_image}
                />
                <div className={style.left_images}>
                    <img src={CanyonEliteScooter2.src} aria-hidden="true" />
                    <img src={CanyonEliteScooter3.src} aria-hidden="true" />
                    <img src={CanyonEliteScooter4.src} aria-hidden="true" />
                </div>
                <div className={style.right_images}>
                    <img src={CanyonEliteScooter4.src} aria-hidden="true" />
                    <img src={CanyonEliteScooter3.src} aria-hidden="true" />
                    <img src={CanyonEliteScooter2.src} aria-hidden="true" />
                </div>
                <div className={style.image_slider}>
                    <div className={style.slider}></div>
                    <div className={style.slider}></div>
                    <div className={style.slider} data-active="true"></div>
                    <div className={style.slider}></div>
                    <div className={style.slider}></div>
                </div>
            </div>
            <div className={style.product_informations}>
                <h2 className={`${style.product_name} text-h2 text-center`}>
                    Canyon Elite Scooter
                </h2>
                <div className={style.product_highlights}>
                    <div className={style.product_highlight}>
                        <h3 className="text-bold text-h1">25</h3>
                        <span>km/h</span>
                        <p>velocidade máxima</p>
                    </div>
                    <div className={style.product_highlight}>
                        <h3 className="text-bold text-h1">40</h3>
                        <span>km</span>
                        <p>autonomia</p>
                    </div>
                    <div className={style.product_highlight}>
                        <h3 className="text-bold text-h1">6</h3>
                        <span>hr</span>
                        <p>recarga completa</p>
                    </div>
                </div>
            </div>
            <div className={style.product_description}>
                A Canyon Elite Scooter é uma opção excepcional para aqueles
                que procuram uma scooter elétrica de alta qualidade. Com uma
                velocidade máxima de 25km/h, esta scooter oferece uma
                condução suave e rápida, permitindo que os usuários se movam
                pela cidade com facilidade. Além disso, a bateria da Canyon
                Elite oferece uma autonomia de até 40 km por carga, o que é
                uma ótima opção para aqueles que precisam se deslocar por
                longas distâncias. E com um tempo de recarga de apenas 6
                horas, você pode rapidamente recarregar sua bateria e estar
                pronto para outra jornada.
            </div>
            <div className={style.price_cta_wrapper}>
                <div className={style.product_price}>
                    <h3>R$3.200,00</h3>
                    <p>até 24x de R$160,00</p>
                </div>
                <div
                    className={style.product_cta}
                    data-scooterModel="canyon-elite-scooter"
                >
                    <ButtonPrimary url="/comprar" text="Comprar agora" />
                    <ButtonSecondary
                        url="#modal-open"
                        text="Mais detalhes"
                        id="botao"
                    />
                </div>
            </div>
            <div className={style.other_product}>
                <img src={CanyonComfortScooter1.src} aria-hidden="true" />
                <h2>Canyon Comfort</h2>
                <a
                    href=""
                    aria-label="Ver informações da Canyon Comfort Scooter"
                ></a>
            </div>
            <div className={style.other_product}>
                <img src={CanyonMasterScooter1.src} aria-hidden="true" />
                <h2>Canyon Master</h2>
                <a
                    href=""
                    aria-label="Ver informações da Canyon Comfort Scooter"
                ></a>
            </div>
        </section>
    )
}

export default Products