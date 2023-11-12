import { PrestationData } from "@/data/Service";
import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PrestationProps {
  prestation: PrestationData;
}

export const Prestation: React.FC<PrestationProps> = ({ prestation }) => {
  const { type, img, surtitle, title, description, slug } = prestation;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div className="grid grid-cols-12 gap-8 overflow-x-hidden py-16 lg:px-32">
      {type === "left" && (
        <div className="col-span-12 mx-16 md:col-span-6 md:mx-8 xl:col-span-4" ref={ref}>
          <motion.img
            src={img}
            className="rounded-full max-w-xs mx-auto"
            style={{
              boxShadow: "#fff -20px 20px 0px -3px, #3B4F43 -20px 20px",
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          />
        </div>
      )}
      <div className="col-span-12 mx-16 my-auto md:col-span-6 xl:col-span-8 order-last sm:order-none">
        <h4 className="text-sm text-ternary" style={{ fontVariant: "small-caps" }}>
          {surtitle}
        </h4>
        <div className="space-y-4">
          <h1 className="mt-2 font-title text-3xl font-semibold">{title}</h1>
          <p>{description}</p>
          <div>
            <Link
              to={"/services/$serviceSlug"}
              params={{ serviceSlug: slug }}
              activeProps={{ className: "hidden" }}
              activeOptions={{ exact: true }}
              className="mb-2 me-2 rounded-lg bg-secondary px-5 py-2.5 
        text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-secondary-400 focus:outline-none 
        focus:ring-4 focus:ring-secondary-300"
            >
              Découvrir cette formule
            </Link>
          </div>
        </div>
      </div>
      {type === "right" && (
        <div className="col-span-12 mx-16 md:col-span-6 md:mx-8 xl:col-span-4" ref={ref}>
          <motion.img
            src={img}
            className="rounded-full max-w-xs mx-auto"
            style={{
              boxShadow: "#fff -20px 20px 0px -3px, #3B4F43 -20px 20px",
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          />
        </div>
      )}
    </div>
  );
};
