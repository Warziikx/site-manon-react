import { INumberFeatures, INumberFeature } from "@/contentrain/Widget";

interface NumberFeaturesPropos {
  data: INumberFeatures;
}

export const NumberFeatures: React.FC<NumberFeaturesPropos> = ({ data }) => {
  return (
    <div className="space-y-16 bg-primary px-4 py-16 sm:px-8 md:px-16 xl:px-32">
      <h3 className="text-center font-title text-4xl font-semibold text-white">{data.title}</h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {data.list
          .sort((a: INumberFeature, b: INumberFeature) => a.ordre - b.ordre)
          .map((feature: INumberFeature, index: number) => (
            <div key={index} className="flex flex-col items-center space-y-8 text-white">
              <div className="relative">
                <img src={"/" + feature.image} className="h-48 w-48	" />
                <p className={`absolute left-[42%] top-[37%] font-title text-6xl font-black`}>{index + 1}</p>
              </div>
              <div
                className="whitespace-pre-line px-4 text-center text-white"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
};
