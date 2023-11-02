import { Hero } from "@/components/Hero";
import { Mansonery } from "@/components/Archive/Image/Mansonery";

import { ServiceList } from "@/components/Archive/Image/ServiceList";
import { Presentation } from "@/components/Presentation";
import SmoothScroll from "@/components/Archive/SmoothScroll";
import { Contact } from "@/components/Archive/Contact";
import { photoServiceList, graphismeServiceList } from "@/data/Service";

export const Homepage: React.FC = () => {
  return (
    <div className="mt-0 md:mt-16">
      <Hero />
      <Presentation />
      <div className="bg-primary min-h-spe-height">
        <h3 className="text-center text-white pt-16 font-title text-4xl font-semibold">
          Pourquoi travailer avec moi ?
        </h3>
        <div className="grid grid-cols-3">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
      {/*<ServiceList serviceList={photoServiceList} title={"Univers Photographie"} />
      <Mansonery />
      <ServiceList serviceList={graphismeServiceList} title={"Univers Graphisme"} />
      <SmoothScroll />
      <Contact /> */}
    </div>
  );
};
