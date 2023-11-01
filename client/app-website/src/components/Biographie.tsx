import react from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import img from '../assets/img/espace.jpg';
import smokeBackground from '../assets/img/smoke-background.png';
import smoke from '../assets/img/smok.png';


function Biographie(props){
    return(

            <div className="h-screen bg-black flex flex-col">

                <div className="flex flex-[4]">
                    <section className="flex-1 my-auto">
                        <div>
                            <h1 className="font-sans text-white font-semibold text-2xl">Bonjour, je m'appelle <span className="text-4xl text-gold">Stephen</span></h1>
                            <p className="text-gray">Un développeur back-end qui s'intéresse au frontend.</p>
                            {/*<p className="font-sans font-extralight text-sm">
                                Développeur WPF depuis 3 ans, j'ai appris le frontend en xaml tout comme le backend en suivant la méthode de conception MVVM.
                                J'ai aussi travaillé sur une architecture micro-service API, ce qui m'a donné un avant gout de ce qu'est le Web.
                                Ayant une attirance pour le celui-ci j'ai décidé d'apprendre en developpant différent projets que je vous laisse les décourvir ici.
                            </p>*/}
                        </div>
                    </section>
                    <section className="flex-1 my-auto">
                        <img/>
                    </section>

                </div>
                <Link className="flex-1 m-auto"
                    to="main"
                    smooth="true">
                    <button onClick={props.handleScroll} className="bg-black cursor-pointer rounded-full text-white p-5">
                        Me découvrir
                        <span className="relative ml-2">
                            <FontAwesomeIcon className="absolute animate-bounce" icon="fa-caret-down" />
                            <FontAwesomeIcon className="absolute animate-bounce-delay" icon="fa-caret-down" />
                        </span>
                    </button>
                </Link>
            </div>
    )
}

export default Biographie;