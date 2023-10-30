import { Hero } from "@/components/Hero";
import { Mansonery } from "@/components/Image/Mansonery";

import { ServiceList } from "@/components/Image/ServiceList";
import { Presentation } from "@/components/Presentation";
import SmoothScroll from "@/components/SmoothScroll";
import { Contact } from "@/components/Layout/Contact";
import { photoServiceList, graphismeServiceList } from "@/data/Service";

export const Homepage: React.FC = () => {
  return (
    <div className="mt-16">
      <Hero />
      <Presentation />
      <ServiceList serviceList={photoServiceList} title={"Univers Photographie"} />
      <Mansonery />
      <ServiceList serviceList={graphismeServiceList} title={"Univers Graphisme"} />
      <SmoothScroll />
      <Contact />
    </div>
  );
};
