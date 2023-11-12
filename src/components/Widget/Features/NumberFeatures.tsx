import { NumberFeature } from "@/data/Homepage";

interface NumberFeaturesPropos {
	title: string;
	featuresList: NumberFeature[];
}

export const NumberFeatures: React.FC<NumberFeaturesPropos> = ({ title, featuresList }) => {
	return (
		<div className="space-y-16 bg-primary py-16 lg:px-32">
			<h3 className="text-center font-title text-4xl font-semibold text-white">{title}</h3>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{featuresList.map((feature: NumberFeature, index: number) => (
					<div className="flex flex-col items-center space-y-8 text-white">
						<p
							className={`font-title text-6xl ${feature.backgroundColor} rounded-full p-16 px-24 font-black`}
						>
							{index + 1}
						</p>
						<p className="whitespace-pre-line px-16 text-center">{feature.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};
