import { IPrestation, IPrestationObj } from "@/contentrain/Homepage";
import { getById } from "@/contentrain/Service";
import { Link } from "@tanstack/react-router";

interface NumberFeaturesPropos {
  data: IPrestation;
}

export const IllustrationFeatures: React.FC<NumberFeaturesPropos> = ({ data }) => {
  return (
    <div className="space-y-16 py-16 lg:px-32">
      <h3 className="text-center font-title text-4xl font-semibold text-ternary">{data.title}</h3>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {data.list.map((feature: IPrestationObj, index: number) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <img className="max-w-md" src={feature.image} />
            <Link to={feature.link} className="whitespace-pre-line px-16 text-center text-xl text-ternary">
              {feature.title}
            </Link>
            <ul className="mt-4">
              {feature.list.map((liItem: string, i: number) => {
                let prestation = getById(liItem);
                return (
                  <li key={`feat-${i}`} className="flex flex-row items-center space-x-2">
                    <div className="h-4 w-4 rounded-full bg-ternary" />
                    <p className="font-semibold">{prestation?.title}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
