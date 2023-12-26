import { IPresentation } from "@/contentrain/Homepage";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PresentationProps {
  data: IPresentation;
}

export const Presentation: React.FC<PresentationProps> = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div className="grid min-h-spe-height grid-cols-12 gap-8 overflow-x-hidden py-16 lg:px-32">
      <div className=" col-span-12 mx-8 my-auto md:col-span-8 md:mx-16">
        <h4 className="text-sm text-ternary" style={{ fontVariant: "small-caps" }}>
          {data.surtitle}
        </h4>
        <h1 className="mt-4 font-title text-3xl font-semibold">{data.title}</h1>
        <div className="space-y-8 mt-4" dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
      <div className="col-span-12 mx-16 md:col-span-4 md:mx-8 flex items-center" ref={ref}>
        <motion.img
          src={data.image}
          alt="Photo de moi"
          className="rounded-full"
          style={{
            boxShadow: "#fff -20px 20px 0px -3px, #3B4F43 -20px 20px",
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        />
      </div>
    </div>
  );
};
