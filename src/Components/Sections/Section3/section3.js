import React from 'react';

export default function section3() {
    return (
        <div>
            <section className="section">
                <div className="container">
                    <h1 className="has-text-centered is-size-1 has-text-secondary">Our Services</h1>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <img src="https://www.rejoinwebsolution.com/images/home/digital-marketing.png" data-aos="fade-bottom" />
                        </div>
                        <div className="column">
                            <h1 className="is-size-1" style={{ paddingLeft: "40px", paddingTop: "50px" }} data-aos="fade-left">Effective More Web Development</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                        </p>
                            <div className="button has-text-centered has-text-white is-large" data-aos="fade-up" style={{ background: "orangered" }}>
                                Click More Info
                        </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <h1 className="is-size-1" data-aos="fade-right">Effective REsponsive Web Design </h1>
                            <p data-aos="fade-top">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </p>
                            <button className="button is-large">See More Your Information</button>
                            <hr />
                        </div>
                        <div className="column">
                            <img src="https://unsplash.it/3000/3000/?random" data-aos="fade-left" style={{ borderRadius: "50%" }} />
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <img src="https://domaincer.com/wp-content/uploads/2019/01/portal-development-01.png" data-aos="fade-left" />
                        </div>
                        <div className="column">
                            <h1 className="is-size-1 has-text-weight-bold" data-aos="fade-right">We Effective Professional Web Developer</h1>
                            <p data-aos="fade-up">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
