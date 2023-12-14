import { portfolioDetailRoute } from "@/Router";
import { CallToAction } from "@/components/Widget/CTA/CallToAction";
import { IProjet, getBySlug } from "@/contentrain/Projet";
import { Navigate, useParams } from "@tanstack/react-router";

export const PortfolioDetailPage: React.FC = () => {
  const { portfolioSlug } = useParams({ from: portfolioDetailRoute.id });
  const portfolio: IProjet | undefined = getBySlug(portfolioSlug);
  if (portfolio === undefined) return <Navigate to="/portfolio" />;

  return (
    <div className="mt-0 md:mt-16 ">
      <div className="py-16 space-y-16">
        <div className="text-center">
          <p className="text-sm text-ternary">{portfolio.type}</p>
          <h1 className="font-title text-6xl font-semibold">{portfolio.libelle}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 md:px-16">
          <img className="rounded-lg" src={`/${portfolio.imageList}`} />
        </div>
        <div className="px-8 md:px-16 lg:px-32 xl:px-64 text-center space-y-4">
          <h4 className="text-3xl font-title">{portfolio.brief.title}</h4>
          <p className="text-xl" dangerouslySetInnerHTML={{ __html: portfolio.brief.content }}></p>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};
