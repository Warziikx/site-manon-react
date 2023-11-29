import { Navigate, useParams } from "@tanstack/react-router";
import { serviceGroupeRoute } from "@/Router";

import { IPrestation, getByGroup } from "@/contentrain/Service";
import { CallToAction } from "@/components/Widget/CallToAction";
import { Prestation } from "@/components/Service/Prestation";

export const ServiceGroupePage: React.FC = () => {
  const { serviceGroupeSlug } = useParams({ from: serviceGroupeRoute.id });

  const prestationList = getByGroup(serviceGroupeSlug);
  if (prestationList === undefined) return <Navigate to="/service" />;

  return (
    <div className="mt-0 md:mt-16">
      <h1 className="pt-16 text-center font-title text-4xl">
        Découvrez mes prestations {serviceGroupeSlug === "photographie" ? " photos" : "graphiques"}
      </h1>
      {prestationList.map((prestation: IPrestation, i: number) => {
        return (
          <div key={prestation.slug}>
            <Prestation prestation={prestation} />
            {i < prestationList.length && (
              <div className="px-16 sm:hidden">
                <hr />
              </div>
            )}
          </div>
        );
      })}
      <CallToAction />
    </div>
  );
};

export default ServiceGroupePage;
