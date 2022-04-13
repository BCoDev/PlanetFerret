import Ferret from '../assets/images/backgroundferret.jpg'
import Daria from '../assets/images/DariaGif.gif'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <div>
            <main className="main-content">
                <p>
                    <span>Welcome to Planet Ferret!</span>
                    <br />We meet all your ferret needs here.
                    <br />Learn *almost* everything you need to know here.
                </p>

                <img src={Ferret} width="634" className="mainferret" alt="Sable Ferret on White background" />
            </main>

            <Container>
                <Row>
                    <Col className='dariagif'>
                        <img src={Daria} alt="Animated Gif of cartoon character Daria saying No, but she'll have to watch out for ferrets building a nest in her head" />
                    </Col>
                    <Col className="home-block-text">
                        <p>Myths about ferrets are very common.
                            <br />She doesn't actually have to worry about ferrets building a nest in her head.
                            <br />Ferrets are domesticated animals. They have been bred from the European Polecat which are wild ferrets and they are burrowers that build nests underground.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Home 