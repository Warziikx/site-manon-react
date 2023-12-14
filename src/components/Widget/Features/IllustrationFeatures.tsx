import { IPrestation, IPrestationObj } from "@/contentrain/Homepage";
import { getById } from "@/contentrain/Service";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { DotArrowRight } from "iconoir-react";
import dotRose from "@/assets/images/identite_visuelle/dot-rose.svg";

interface NumberFeaturesPropos {
  data: IPrestation;
}

const liDotMotion = {
  hover: { scale: 1.2, rotate: 180 },
  tap: { scale: 0.8, rotate: -90, borderRadius: "100%" },
};

const liTextMotion = {
  hover: { scale: 1.1 },
  tap: { scale: 0.8 },
};

export const IllustrationFeatures: React.FC<NumberFeaturesPropos> = ({ data }) => {
  return (
    <div className="space-y-16 py-16 lg:px-32">
      <h3 className="text-center font-title text-4xl font-semibold text-ternary">{data.title}</h3>
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        {data.list.map((feature: IPrestationObj, index: number) => (
          <div key={index} className="flex flex-col justify-center">
            <img className="max-w-md" src={feature.image} />
            <Link
              resetScroll={true}
              to={feature.link}
              className="whitespace-pre-line flex flex-row space-x-4 px-16 text-center text-xl text-ternary"
            >
              <p className="font-semibold">{feature.title}</p>
              <DotArrowRight />
            </Link>
            <ul className="mt-4 space-y-4">
              {feature.list.map((liItem: string, i: number) => {
                let prestation = getById(liItem);
                return (
                  <motion.li key={`feat-${i}`} initial="rest" whileHover="hover" whileTap="tap">
                    <Link
                      to={`/service/${prestation?.type}/${prestation?.slug}`}
                      className="flex flex-row items-center space-x-4"
                    >
                      <motion.img src={dotRose} className="h-6 w-6" variants={liDotMotion} />
                      <motion.p className="font-semibold" variants={liTextMotion}>
                        {prestation?.title}
                      </motion.p>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
