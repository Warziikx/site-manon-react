import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import cartePostal from "@/assets/images/illustration/carte-postal.jpg";
import chaussure from "@/assets/images/illustration/chaussure.jpg";
import citron from "@/assets/images/illustration/citron.jpg";
import citrouille from "@/assets/images/illustration/citrouille.jpg";
import fiole from "@/assets/images/illustration/fiole.jpg";
import lecture from "@/assets/images/illustration/lecture.jpg";
import magie from "@/assets/images/illustration/magie.jpg";
import mouton from "@/assets/images/illustration/mouton.jpg";
import mouton2 from "@/assets/images/illustration/mouton-2.jpg";
import oiseau from "@/assets/images/illustration/oiseau.jpg";
import phare from "@/assets/images/illustration/phare.jpg";
import renard from "@/assets/images/illustration/renard.jpg";
import sirene from "@/assets/images/illustration/sirene.jpg";
import sirene2 from "@/assets/images/illustration/sirene-2.jpg";
import soldat from "@/assets/images/illustration/soldat.jpg";
import surf from "@/assets/images/illustration/surf.jpg";

interface ColItem {
  url: string;
  class: string;
}

const col1: ColItem[] = [
  { url: soldat, class: "" },
  { url: oiseau, class: "" },
  { url: mouton, class: "" },
  { url: sirene, class: "" },
  { url: chaussure, class: "" },
  { url: citrouille, class: "" },
  { url: magie, class: "" },
  { url: citron, class: "" },
];
const col2: ColItem[] = [
  { url: fiole, class: "" },
  { url: phare, class: "" },
  { url: cartePostal, class: "" },
  { url: lecture, class: "" },
  { url: mouton2, class: "" },
  { url: sirene2, class: "" },
  { url: renard, class: "" },
  { url: surf, class: "" },
];
const col3: ColItem[] = [
  { url: cartePostal, class: "" },
  { url: lecture, class: "" },
  { url: soldat, class: "" },
  { url: oiseau, class: "" },
  { url: magie, class: "" },
  { url: citron, class: "" },
  { url: mouton2, class: "" },
  { url: sirene2, class: "" },
];
const col4: ColItem[] = [
  { url: sirene, class: "" },
  { url: chaussure, class: "" },
  { url: fiole, class: "" },
  { url: phare, class: "" },
  { url: renard, class: "" },
  { url: surf, class: "" },
  { url: citrouille, class: "" },
  { url: mouton, class: "" },
];

export const Mansonery: React.FC = () => {
  const mansoneryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: mansoneryRef, offset: ["start end", "end -20vh"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [-400, -1200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-300, -1300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, -1600]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-300, -1400]);
  return (
    <div
      className="grid h-screen grid-cols-2 gap-4 overflow-hidden bg-secondary-50 p-8 md:grid-cols-4 lg:px-32"
      ref={mansoneryRef}
    >
      <motion.div className="grid gap-4" style={{ y: y1 }}>
        {col1.map((item: ColItem) => {
          return (
            <div key={item.url}>
              <img className={`h-auto max-w-full rounded-lg ${item.class}`} src={item.url} alt="" />
            </div>
          );
        })}
      </motion.div>
      <motion.div className="grid gap-4" style={{ y: y2 }}>
        {col2.map((item: ColItem) => {
          return (
            <div key={item.url}>
              <img className={`h-auto max-w-full rounded-lg ${item.class}`} src={item.url} alt="" />
            </div>
          );
        })}
      </motion.div>
      <motion.div className="hidden gap-4 md:grid " style={{ y: y3 }}>
        {col3.map((item: ColItem) => {
          return (
            <div key={item.url}>
              <img className={`h-auto max-w-full rounded-lg ${item.class}`} src={item.url} alt="" />
            </div>
          );
        })}
      </motion.div>
      <motion.div className="hidden gap-4 md:grid" style={{ y: y4 }}>
        {col4.map((item: ColItem) => {
          return (
            <div key={item.url}>
              <img className={`h-auto max-w-full rounded-lg ${item.class}`} src={item.url} alt="" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
