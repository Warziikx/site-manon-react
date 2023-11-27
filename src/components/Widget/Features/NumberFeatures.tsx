import { NumberFeature } from "@/data/Homepage";

interface NumberFeaturesPropos {
  title: string;
  featuresList: NumberFeature[];
}

export const NumberFeatures: React.FC<NumberFeaturesPropos> = ({ title, featuresList }) => {
  return (
    <div className="space-y-16 bg-primary px-4 py-16 sm:px-8 md:px-16 xl:px-32">
      <h3 className="text-center font-title text-4xl font-semibold text-white">{title}</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {featuresList.map((feature: NumberFeature, index: number) => (
          <div key={index} className="flex flex-col items-center space-y-8 text-white">
            <div className="relative">
              <img src={feature.image} className="h-48 w-48	" />
              <p className={`absolute left-[42%] top-[40%] font-title text-6xl font-black`}>{index + 1}</p>
            </div>
            <p className="whitespace-pre-line px-4 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
