import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div>
            <main className="row">
                <article className="col-md-12 col-lg-6 about-main-content">
                    <p>
                        <span>Why Planet Ferret?</span>
                        <br />Ferrets require lots of patience, knowledge, and money.
                        <br />
                        Continuing to educate yourself throughout their lives will make for a happier and healthier home.
                        <br />
                        We wish to help guide you whether you are deciding to have these furry critters in your life or have already made that decision.
                        <br />
                        <span>We just want best for you and your family.</span>
                    </p>
                </article>

                <aside className="col-md-12 col-lg-6  smallferret-container">
                    <img src="images/ferretingrass.jpg" width="500" className="smallferret flt_rgt hide-ad" id="ferretgrass" alt="Ferret in grass" onMouseOver="MM_swapImage('ferretgrass','','images/babyferrets.jpg',1)" onMouseOut="MM_swapImgRestore()" />
                </aside>

                <section className="col-sm-12 about-block-text">
                    <p>Considering getting a ferret or already have one and want to learn more? 
                    <br />Head over to our <Link to="/resources">Resources Page!</Link></p>
                </section>
            </main>
        </div>
    )
}

export default About