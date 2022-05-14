import Daria from '../assets/images/DariaGif.gif'
// import FerretInGrass from '../assets/images/ferretingrass.jpg'

// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col' 
// <div className="mainferret"></div>
// <br />We meet all your ferret needs here.
// <br />Learn *almost* everything you need to know here.


const Home = () => {
    return (
        <main>
            <section className="main-content">

                <h1>Welcome to <span>Planet Ferret!</span></h1>
                <p>
                    <span id='where-business'>Where Ferrets are our Business</span>

                </p>
                
            </section>

            <section className="home-block">
                <aside className="home-aside-one">
                    <img src={Daria} className='dariagif' alt="Animated Gif of cartoon character Daria saying No, but she'll have to watch out for ferrets building a nest in her head" />
                </aside>
                <aside className="home-aside-two">
                    <article className='home-block-text'>
                        <h2>Myths about ferrets are very common.</h2>

                        <p>She doesn't actually have to worry about ferrets building a nest in her head.
                        <br />Ferrets are domesticated animals. They have been bred from the European Polecat 
                        which are wild ferrets and they are burrowers that build nests underground.
                        </p>
                    </article>
                </aside>
            </section>
        </main>
    )
}
export default Home 