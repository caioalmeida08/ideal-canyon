import style from "./Faq.module.scss";

const Faq = () => {
    return (
        <>
            <section className="side-bleed section-margin-top gap-h-32">
                <h2 className="text-h2 text-center text-main">
                    Dúvidas frequentes
                </h2>
                <div className={`${style.faq} grid-col-8-4`}>
                    <ul className="gap-h-32">
                        <li className="gap-h-16">
                            <h3 className="text-h3">
                                Qual é o prazo de entrega para os scooters da
                                Ideal Canyon?
                            </h3>
                            <p>
                                O prazo de entrega para nossas scooters pode
                                variar dependendo da sua localização e da
                                disponibilidade de estoque. Geralmente, leva-se
                                em torno de 7 a 15 dias.
                            </p>
                        </li>
                        <li className="gap-h-16">
                            <h3 className="text-h3">
                                A Ideal Canyon oferece garantia em seus
                                produtos?
                            </h3>
                            <p>
                                Sim, oferecemos garantia em todos os nossos
                                produtos. A duração da garantia varia de acordo
                                com o modelo do scooter, mas garantimos que
                                todos os produtos da Ideal Canyon são fabricados
                                com materiais de alta qualidade e construídos
                                para durar.
                            </p>
                        </li>
                        <li className="gap-h-16">
                            <h3 className="text-h3">
                                As scooters da Ideal Canyon são fáceis de
                                montar?
                            </h3>
                            <p>
                                Sim! Nossas scooters são projetadas para serem
                                fáceis de montar. Incluímos instruções
                                detalhadas para ajudá-lo a montar seu scooter
                                rapidamente e sem complicações. Caso tenha
                                alguma dúvida, nossa equipe de suporte está
                                sempre disponível para ajudá-lo.
                            </p>
                        </li>
                    </ul>
                    <ul className="gap-h-32">
                        <li className="text-demi faq-dynamic" tabIndex="0" data-active="false">
                            <h3>
                                Posso devolver meu scooter se não estiver
                                satisfeito?
                            </h3>
                            <p className="text-p line-height-125 text-justify">
                                Sim, oferecemos uma política de devolução de 30 dias para nossos clientes que não estiverem satisfeitos com o seu scooter.
                            </p>
                        </li>
                        <li className="text-demi faq-dynamic" tabIndex="0" data-active="false">
                            <h3>
                                Como faço para manter meu scooter da Ideal
                                Canyon?
                            </h3>
                            <p className="text-p line-height-125 text-justify">
                                Para manter o seu scooter em boas condições, recomendamos a realização de manutenções regulares e seguir as instruções de cuidado e uso contidas no manual do proprietário.
                            </p>
                        </li>
                        <li className="text-demi faq-dynamic" tabIndex="0" data-active="false">
                            <h3>
                                Qual é a diferença entre os modelos de scooters
                                da Ideal Canyon?
                            </h3>
                            <p className="text-p line-height-125 text-justify">
                                Nossos modelos de scooters diferem principalmente em termos de potência, alcance, capacidade de carga e recursos adicionais, como suspensão e luzes LED. Nós temos uma variedade de modelos disponíveis para atender às diferentes necessidades dos nossos clientes.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )

}

export default Faq;