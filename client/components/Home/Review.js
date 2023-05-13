import { IconHeart, IconStar } from "@/components/Utils/Icons";

import style from "./Review.module.scss";

const Review = () => {
    return (
        <section
            className={`${style.reviews} grid-col-6 side-bleed section-margin-top text-center text-desktop-left`}
        >
            <img
                alt="Vídeo com opiniões de clientes sobre a marca"
                src={"api/img/review_video.jpg"}
                className={`${style.video} max-width-500 max-width-desktop-unset`}
            />
            <div className={`${style.reviews_content} gap-h-32`}>
                <h2 className="text-h2">
                    O que nossos clientes dizem sobre nós
                </h2>
                <div className={`${style.star_rating} grid-col-6`}>
                    <div className={style.title}>Qualidade do produto</div>
                    <div className="stars">
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                    </div>
                </div>
                <div className={`${style.star_rating} grid-col-6`}>
                    <div className={style.title}>
                        Atendimento ao cliente
                    </div>
                    <div className="stars">
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                    </div>
                </div>
                <div className={`${style.star_rating} grid-col-6`}>
                    <div className={style.title}>
                        Preço e valor do produto
                    </div>
                    <div className="stars">
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                    </div>
                </div>
                <div className={`${style.star_rating} grid-col-6`}>
                    <div className={style.title}>Tempo de entrega</div>
                    <div className="stars">
                        <IconStar />
                        <IconStar />
                        <IconStar />
                        <IconStar />
                    </div>
                </div>
                <div className={`${style.heart_rating} gap-h-32`}>
                    <IconHeart />
                    <p className="text-demi">Recomendaria a marca</p>
                    <p className="text-main text-bold text-h2">95%</p>
                </div>
            </div>
        </section>
    )
};

export default Review;