import { homepage } from "@/contentrain/Homepage";

import { Hero } from "@/components/Homepage/Hero";
import { NumberFeatures } from "@/components/Widget/Features/NumberFeatures";
import { Presentation } from "@/components/Homepage/Presentation";

import { IllustrationFeatures } from "@/components/Widget/Features/IllustrationFeatures";
import { Testimonial1 } from "@/components/Widget/Testimonial/Testimonial1";
import { CallToAction } from "@/components/Widget/CallToAction";

export const Homepage: React.FC = () => {
  return (
    <div className="mt-0 md:mt-16">
      <Hero />
      <Presentation data={homepage.presentation} />
      <NumberFeatures data={homepage.why_me} />
      {homepage.prestation && <IllustrationFeatures data={homepage.prestation} />}
      {homepage.testimonial && <Testimonial1 data={homepage.testimonial} />}
      <CallToAction />
    </div>
  );
};
