import { CallToAction } from "@/components/Widget/CallToAction";

export const PortfolioPage: React.FC = () => {
  return (
    <div className="mt-0 md:mt-16">
      {/* <div className="px-16 md:px-24 lg:px-32"> */}
      <div className="py-16 flex flex-col items-center mx-auto">
        <h1 className="text-center font-title text-4xl">Mes réalisations</h1>
        <p className="text-center">Découvrer ici une partie de mes réalisations</p>

        <p className="text-center mt-8 max-w-xl">
          J'accompagne mes différents clients tout au long du processus créatifs en mettant mon savoir-faire au service
          de leurs projets
        </p>
      </div>

      {/* </div> */}
      <CallToAction />
    </div>
  );
};
