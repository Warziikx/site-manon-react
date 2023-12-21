import { IMansonery, IMansoneryObj } from "@/contentrain/Widget";

interface MansoneryProps {
  data: IMansonery[];
}

export const Mansonery: React.FC<MansoneryProps> = ({ data }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${data.length} gap-4 py-8 px-16 md:px-32 lg:px-32`}>
      {data.map((mans: IMansonery) => (
        <div className="grid gap-4">
          {mans.images
            .sort((a: IMansoneryObj, b: IMansoneryObj) => a.ordre - b.ordre)
            .map((item: IMansoneryObj) => {
              return (
                <div>
                  <img className="w-full h-auto rounded-lg" src={"/" + item.image} alt="" />
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};
