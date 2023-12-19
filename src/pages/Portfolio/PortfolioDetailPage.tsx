import { portfolioDetailRoute } from "@/Router";
import { CallToAction } from "@/components/Widget/CTA/CallToAction";
import { Mansonery } from "@/components/Widget/Mansonery/Mansonery";
import { IProjet, IProjetImg, getBySlug } from "@/contentrain/Projet";
import { Navigate, useParams } from "@tanstack/react-router";

export const PortfolioDetailPage: React.FC = () => {
	const { portfolioSlug } = useParams({ from: portfolioDetailRoute.id });
	const portfolio: IProjet | undefined = getBySlug(portfolioSlug);
	if (portfolio === undefined) return <Navigate to="/portfolio" />;

	return (
		<div className="mt-0 md:mt-16 space-y-16">
			<div className="space-y-16 py-16">
				<div className="text-center">
					<p className="text-sm text-ternary">{portfolio.type}</p>
					<h1 className="font-title text-6xl font-semibold">{portfolio.libelle}</h1>
				</div>
				<div className="grid grid-cols-1 gap-4 px-8 sm:grid-cols-3 md:px-16 lg:px-72">
					{portfolio.imageList
						.sort((a: IProjetImg, b: IProjetImg) => a.order - b.order)
						.map((imgObj: IProjetImg) => (
							<div className="flex justify-center">
								<img className="max-h-auto rounded-lg md:max-h-96" src={`/${imgObj.img}`} />
							</div>
						))}
				</div>
				<div className="space-y-4 px-8 text-center md:px-16 lg:px-32 xl:px-64">
					<h4 className="font-title text-3xl">{portfolio.brief.title}</h4>
					<p className="text-lg" dangerouslySetInnerHTML={{ __html: portfolio.brief.content }}></p>
				</div>
			</div>
			<div>
				<div className="space-y-4 px-8 text-center md:px-16 lg:px-32 xl:px-64">
					<h4 className="font-title text-3xl">{portfolio.other.title}</h4>
					<div className="grid grid-cols-1 gap-4 px-8 sm:grid-cols-3 md:px-16 lg:px-72">
						{portfolio.other.imageList
							.sort((a: IProjetImg, b: IProjetImg) => a.order - b.order)
							.map((imgObj: IProjetImg) => (
								<div className="flex justify-center">
									<img className="max-h-auto rounded-lg md:max-h-96" src={`/${imgObj.img}`} />
								</div>
							))}
					</div>
					<p className="text-lg" dangerouslySetInnerHTML={{ __html: portfolio.other.description }}></p>
				</div>
			</div>
			<div className="px-8 md:px-16 lg:px-32">
				<Mansonery />
			</div>
			<CallToAction />
		</div>
	);
};
