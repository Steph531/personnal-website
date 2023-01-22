import react from 'react';

function Biographie(props){
    return(
        <div className="h-screen flex snap-start">
            <section className="flex-1">
                <img/>
            </section>
            <section className="flex-1 my-auto">
                <div>
                    <h2 className="font-sans font-extrabold text-4xl">Développeur Full Stack</h2>
                    <p className="font-sans font-extralight text-sm">
                        Développeur WPF depuis 3 ans, j'ai appris le frontend en xaml tout comme le backend en suivant la méthode de conception MVVM.
                        J'ai aussi travaillé sur une architecture micro-service API, ce qui m'a donné un avant gout de ce qu'est le Web.
                        Ayant une attirance pour le celui-ci j'ai décidé d'apprendre en developpant différent projets que je vous laisse les décourvir ici.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Biographie;