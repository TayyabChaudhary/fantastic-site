import React from 'react';
import './section2.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

export default function section2() {
    AOS.init();

    return (
        <div>
            <div className="background-image">
                <div className="columns">
                    <div className="column">
                        <h1 className="is-size-1 has-text-white has-text-weight-bold" data-aos='fade-up' style={{ paddingTop: "150px", paddingLeft: "30px",borderBottom:"5px dotted orangered" }}>WE<span style={{ color: "orangered",textTransform:"uppercase" }}><i> Effective Digital</i></span> Egency For <span className="has-text-success"><em> Web Development</em></span>.....!</h1>
                        <div className="buttons">
                            <button className="button has-text-white is-large" style={{ marginLeft: "50px", marginTop: "40px", background: "orangered", border: "none", width: "200px" }} data-aos='fade-right'>See More</button>
                        </div>
                    </div>
                    <div className="column">
                        <img src="https://www.technewsguy.com/wp-content/uploads/2019/09/web-development.png" data-aos="fade-down" />
                    </div>
                </div>
            </div>
        </div>
    )
}
