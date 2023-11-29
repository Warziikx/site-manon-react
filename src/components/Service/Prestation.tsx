import { IPrestation } from "@/contentrain/Service";

import { Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface PrestationProps {
  prestation: IPrestation;
  fullDescription?: boolean;
}

export const Prestation: React.FC<PrestationProps> = ({ prestation, fullDescription = false }) => {
  const { display, full_description, type, image, surtitle, title, description, slug } = prestation;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div className="py-8 grid grid-cols-12 gap-8 overflow-x-hidden md:gap-4 xl:gap-8 xl:px-32">
      {display === "left" && (
        <div className="col-span-12 mx-16 flex items-center md:col-span-6 md:mx-8 xl:col-span-4" ref={ref}>
          <motion.img
            src={"/" + image}
            className="mx-auto max-w-xs rounded-full"
            style={{
              boxShadow: "#fff -20px 20px 0px -3px, #3B4F43 -20px 20px",
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          />
        </div>
      )}
      <div className="order-last col-span-12 mx-16 my-auto sm:order-none md:col-span-6 md:mx-8 xl:col-span-8">
        <h4 className="text-sm text-ternary" style={{ fontVariant: "small-caps" }}>
          {surtitle}
        </h4>
        <div className="space-y-4">
          <h1 className="mt-2 font-title text-3xl font-semibold">{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: fullDescription ? full_description : description }}></p>
          <div>
            <Link
              to={"/service/$serviceGroupeSlug/$serviceSlug"}
              params={{ serviceSlug: slug, serviceGroupeSlug: type }}
              activeProps={{ className: "hidden" }}
              activeOptions={{ exact: true }}
              className="mb-2 me-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-white transition duration-150 
              ease-in-out hover:bg-secondary-400 focus:outline-none focus:ring-4 focus:ring-secondary-300"
            >
              Découvrir cette formule
            </Link>
          </div>
        </div>
      </div>
      {display === "right" && (
        <div className="col-span-12 mx-16 flex items-center md:col-span-6 md:mx-8 xl:col-span-4" ref={ref}>
          <motion.img
            src={"/" + image}
            className="mx-auto max-w-xs rounded-full"
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
