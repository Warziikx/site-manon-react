import { Hero } from "@/components/Homepage/Hero";
import { NumberFeatures } from "@/components/Widget/Features/NumberFeatures";
import { Presentation } from "@/components/Homepage/Presentation";

import { whyMeFeatures, PrestationFeatures } from "@/data/Homepage";
import { IllustrationFeatures } from "@/components/Widget/Features/IllustrationFeatures";
import { Testimonial1 } from "@/components/Widget/Testimonial/Testimonial1";

export const Homepage: React.FC = () => {
  return (
    <div className="mt-0 md:mt-16">
      <Hero />
      <Presentation />
      <NumberFeatures title="Pourquoi travailer avec moi ?" featuresList={whyMeFeatures} />
      <IllustrationFeatures title="Mes Prestations" featuresList={PrestationFeatures} />
      <Testimonial1 />
    </div>
  );
};
