import { homepage } from "@/contentrain/Homepage";

import { Hero } from "@/components/Homepage/Hero";
import { NumberFeatures } from "@/components/Widget/Features/NumberFeatures";
import { Presentation } from "@/components/Homepage/Presentation";

import { IllustrationFeatures } from "@/components/Widget/Features/IllustrationFeatures";
import { CallToAction } from "@/components/Widget/CTA/CallToAction";
import ScrollingTestimonial from "@/components/Widget/Testimonial/ScrollingTestimonial";
import { Testimonial1 } from "@/components/Widget/Testimonial/Testimonial1";
import { StoreCTA } from "@/components/Widget/CTA/StoreCTA";

export const Homepage: React.FC = () => {
  return (
    <div className="mt-0 md:mt-16">
      <Hero />
      <Presentation data={homepage.presentation} />
      <NumberFeatures data={homepage.why_me} />
      {homepage.prestation && <IllustrationFeatures data={homepage.prestation} />}
      <StoreCTA data={homepage.store} />
      {homepage.testimonial && homepage.testimonial.length > 3 && <ScrollingTestimonial data={homepage.testimonial} />}
      {homepage.testimonial && homepage.testimonial.length <= 3 && <Testimonial1 data={homepage.testimonial} />}
      <CallToAction />
    </div>
  );
};
