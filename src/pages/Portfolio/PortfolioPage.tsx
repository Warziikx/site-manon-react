import { CallToAction } from "@/components/Widget/CallToAction";
import { IProjet } from "@/contentrain/Projet";
import { portfolioPage } from "@/contentrain/Portfoliopage";
import { Link } from "@tanstack/react-router";

export const PortfolioPage: React.FC = () => {
  return (
    <div className="mt-0 md:mt-16">
      <div className="py-16 flex flex-col items-center mx-auto">
        <h1 className="text-center font-title text-4xl">{portfolioPage.title}</h1>
        <p className="text-center">{portfolioPage.subtitle}</p>

        <p className="text-center mt-8 max-w-xl" dangerouslySetInnerHTML={{ __html: portfolioPage.description }}></p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16 mx-8">
        {portfolioPage.projetListObj &&
          portfolioPage.projetListObj.length > 0 &&
          portfolioPage.projetListObj.map((projet: IProjet) => {
            return (
              <Link to={`/portfolio/${projet.slug}`} key={projet.ID}>
                <p className="text-sm text-ternary">{projet.type}</p>
                <h1 className="font-title text-3xl font-semibold">{projet.libelle}</h1>
                <img className="rounded-lg" src={`/${projet.img}`} />
              </Link>
            );
          })}
      </div>
      <CallToAction />
    </div>
  );
};
