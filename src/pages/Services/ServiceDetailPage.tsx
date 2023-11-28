import { Link, Navigate, useParams } from "@tanstack/react-router";

import { IPricingObj, getBySlug } from "@/contentrain/Service";

import { serviceDetailRoute } from "@/Router";
import { Prestation } from "@/components/Service/Prestation";
import { NumberFeatures } from "@/components/Widget/Features/NumberFeatures";
import { CallToAction } from "@/components/Widget/CallToAction";
import { Mansonery } from "@/components/Widget/Mansonery";

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams({ from: serviceDetailRoute.id });
  const prestation = getBySlug(serviceSlug);
  if (prestation === undefined) return <Navigate to="/service" />;

  return (
    <div className="mt-0 md:mt-16">
      <Prestation prestation={prestation} />
      {prestation.step && <NumberFeatures data={prestation.step} />}

      {prestation.pricing && (
        <div className="space-y-16 py-16 lg:px-32">
          <h3 className="text-center font-title text-4xl font-semibold text-ternary">{prestation.pricing.title}</h3>
          {prestation.pricing?.list.length !== 0 ? (
            <div className={`md:grid-cols-${prestation.pricing.list.length} grid grid-cols-1 gap-16`}>
              {prestation.pricing.list.map((pricingData: IPricingObj) => (
                <div className="flex flex-col items-center justify-center">
                  <h4 className="whitespace-pre-line px-16 text-center text-xl text-ternary">{pricingData.title}</h4>
                  <ul className="mt-4">
                    {pricingData.list.map((liItem: string, liIndex: number) => (
                      <li className="flex flex-row items-center space-x-2" key={liIndex}>
                        <div className="h-4 w-4 rounded-full bg-ternary" />
                        <p className="font-semibold">{liItem}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm text-gray-600">{pricingData.subtitle}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto space-y-4 text-center">
              <p>Uniquement sur devis</p>
              <div>
                <Link
                  to="/contact"
                  className="mb-2focus:outline-none mr-2 rounded-lg bg-ternary px-5 py-2.5 text-sm font-medium 
                  text-white hover:bg-ternary-500 focus:ring-4 focus:ring-ternary-500"
                >
                  Contacter moi
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
      {prestation.mansonery && <Mansonery data={prestation.mansonery} />}
      <CallToAction />
    </div>
  );
};
export default ServiceDetailPage;
