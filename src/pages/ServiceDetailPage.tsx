import { Link, Navigate, useParams } from "@tanstack/react-router";

import { serviceDetailRoute } from "@/Router";
import { Prestation } from "@/components/Service/Prestation";
import { PrestationData, PrestationPrincingData, mesPrestationPhoto } from "@/data/Service";
import { NumberFeatures } from "@/components/Widget/Features/NumberFeatures";
import { CallToAction } from "@/components/Widget/CallToAction";

export const ServiceDetailPage: React.FC = () => {
  const { serviceSlug } = useParams({ from: serviceDetailRoute.id });
  const prestation = mesPrestationPhoto.find((p: PrestationData) => p.slug === serviceSlug);
  if (prestation === undefined) return <Navigate to="/services" />;
  return (
    <>
      <Prestation prestation={prestation} />
      <NumberFeatures title={prestation.stepData.title} featuresList={prestation.stepData.stepList} />

      <div className="space-y-16 py-16 lg:px-32">
        <h3 className="text-center font-title text-4xl font-semibold text-ternary">{prestation.pricing.title}</h3>
        {prestation.pricing.pricingData.length !== 0 ? (
          <div className={`grid grid-cols-1 gap-16 md:grid-cols-${prestation.pricing.pricingData.length}`}>
            {prestation.pricing.pricingData.map((pricingData: PrestationPrincingData) => (
              <div className="flex flex-col items-center justify-center px-32">
                <h4 className="whitespace-pre-line px-16 text-center text-xl text-ternary">{pricingData.title}</h4>
                <ul className="mt-4">
                  {pricingData.priceList.map((liItem: string) => (
                    <li className="flex flex-row items-center space-x-2">
                      <div className="h-4 w-4 rounded-full bg-ternary" />
                      <p className="font-semibold">{liItem}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-600 mt-8">{pricingData.subtitle}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center mx-auto space-y-4">
            <p>Uniquement sur devis</p>
            <div>
              <Link
                to="/contact"
                className="mb-2focus:outline-none mr-2 rounded-lg bg-ternary px-5 
						py-2.5 text-sm font-medium text-white hover:bg-ternary-500 focus:ring-4 focus:ring-ternary-500"
              >
                Contacter moi
              </Link>
            </div>
          </div>
        )}
      </div>
      {prestation.pricing.pricingData.length !== 0 && <CallToAction />}
    </>
  );
};
