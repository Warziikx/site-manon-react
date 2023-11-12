import { IllustrationFeature } from "@/data/Homepage";

interface NumberFeaturesPropos {
	title: string;
	featuresList: IllustrationFeature[];
}

export const IllustrationFeatures: React.FC<NumberFeaturesPropos> = ({ title, featuresList }) => {
	return (
		<div className="space-y-16 py-16 lg:px-32">
			<h3 className="text-center font-title text-4xl font-semibold text-ternary">{title}</h3>
			<div className="grid grid-cols-1 gap-16 md:grid-cols-2">
				{featuresList.map((feature: IllustrationFeature) => (
					<div className="flex flex-col items-center justify-center">
						<img className="max-w-md" src={feature.image} />
						<h4 className="whitespace-pre-line px-16 text-center text-xl text-ternary">{feature.title}</h4>
						<ul className="mt-4">
							{feature.list.map((liItem: string) => (
								<li className="flex flex-row items-center space-x-2">
									<div className="h-4 w-4 rounded-full bg-ternary" />
									<p className="font-semibold">{liItem}</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
};
