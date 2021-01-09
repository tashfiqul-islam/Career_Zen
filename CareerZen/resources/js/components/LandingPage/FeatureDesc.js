import React from "react";
import { Element } from "react-scroll";
import { Container} from "reactstrap";
import "../../../css/login.css";

function FeatureDesc() {
    return (
        <React.Fragment>
            <Container className="themed-container" fluid="md">
                <Element id="desc" name="desc">
                    <section className="content">
                        <h1>Feature and description</h1>
                        <div className="container">
                            <div className="lefthalf">
                                <img
                                    src="/Images/Aboutus.jpeg"
                                    alt="I am a Image"
                                />
                            </div>
                            <div className="righthalf">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Quisquam fuga odio
                                    accusamus eaque alias corporis est enim
                                    harum error similique inventore illum
                                    suscipit et provident dolorum mollitia ut,
                                    explicabo accusantium. Eaque saepe
                                    distinctio accusamus, provident laudantium,
                                    deserunt asperiores itaque sit minima rem
                                    quod blanditiis nostrum recusandae quam
                                    ipsa, ratione pariatur veritatis repudiandae
                                    quasi tenetur tempore impedit? Laboriosam
                                    debitis quae quaerat. Nisi ea dolor,
                                    obcaecati illum soluta quis id harum
                                    aspernatur eius iusto alias vero, facilis
                                    suscipit ad aut fugiat, libero doloremque
                                    voluptate? Commodi, iusto excepturi omnis id
                                    ullam debitis consequuntur? Veritatis
                                    dolorem obcaecati impedit. Accusamus vel
                                    provident iure animi iste, modi odit id
                                    nesciunt? Cumque distinctio, perspiciatis
                                    veniam nihil tenetur nisi nesciunt dolorum
                                    magnam excepturi dignissimos, vitae velit,
                                    cum nam? 
                                </p>
                            </div>
                        </div>
                    </section>
                </Element>
            </Container>
        </React.Fragment>
    );
}

export default FeatureDesc;