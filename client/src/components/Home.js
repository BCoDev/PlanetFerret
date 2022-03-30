import Ferret from '../assets/images/backgroundferret.jpg'
import Daria from '../assets/images/DariaGif.gif'

const Home = () => {
    return (
        <div>
            <p>
                <span>Welcome to Planet Ferret!</span>
                <br />We meet all your ferret needs here.
                <br />Learn *almost* everything you need to know here.
            </p>
            <img src={Ferret} width="634" className="mainferret" alt="" />
            <img src={Daria} alt="Animated Gif of cartoon character Daria saying No, but she'll have to watch out for ferrets building a nest in her head" />
        </div>
    )
}
export default Home 