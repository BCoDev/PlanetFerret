import { Link } from 'react-router-dom'
import FerretInGrass from '../assets/images/ferretingrass.jpg'

const About = () => {
    return (
        <div>
            <article className='about-main-content'>
                <p>
                    <span>Why Planet Ferret?</span>
                    <br />Ferrets require lots of patience, knowledge, and money.
                    <br />
                    Continuing to educate yourself throughout their lives will make for a happier and healthier home.
                    <br />
                    We wish to help guide you whether you are deciding to have these furry critters in your life or have already made that decision.
                    <br />
                    <span>We just want the best for you and your family.</span>
                </p>
            </article>

            <aside className="grassferret-container">
                <img src={FerretInGrass} width="500" className="grassferret flt_rgt" alt="Ferret in grass" />
            </aside>

            <section className="about-block-text">
                <p>Considering getting a ferret or already have one and want to learn more? 
                    <br />Head over to our 
                    <Link to="/resources"> Resources Page! </Link>
                </p>
            </section>
        </div>
    )
}

export default About