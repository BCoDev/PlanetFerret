import { Link } from 'react-router-dom'
import BabyFerrets from '../assets/images/babyferrets.jpg'
import { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <section className='section-about' >
                <aside className='about-main-content'>
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
                </aside>

                <aside className="grassferret-container">
                    <img src={BabyFerrets} className="grassferret flt_rgt" alt="Baby Ferrets" />
                </aside>
            </section>
            <section className="about-block-text">
            <p>Considering getting a ferret or already have one and want to learn more? 
                <br />Head over to our 
                <Link to="/resources"> Resources Page! </Link>
            </p>
        </section>
    </Fragment>
    )
}

export default About