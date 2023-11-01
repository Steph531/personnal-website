import CardPortfolio from "./card-portfolio.tsx";

function Portfolio(props){
    return(
        <div className="h-screen">
            <h1 className="text-white text-center text-4xl">Portfolio</h1>
            <CardPortfolio/>
        </div>
    );
}

export default Portfolio;