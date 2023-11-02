import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { photoMansonery } from "@/data/Mansonery";

export const Mansonery: React.FC = () => {
  const mansoneryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: mansoneryRef, offset: ["start end", "end -20vh"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [-400, -1200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-300, -1300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, -1600]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-300, -1400]);
  return (
    <div
      className="grid h-screen grid-cols-2 gap-4 overflow-hidden bg-link-water p-8 md:grid-cols-4 lg:px-32"
      ref={mansoneryRef}
    >
      <motion.div className="grid gap-4" style={{ y: y1 }}>
        {photoMansonery[0].map((item: string) => {
          return (
            <div key={item}>
              <img className={`h-auto max-w-full rounded-lg`} src={item} alt="" />
            </div>
          );
        })}
      </motion.div>
      <motion.div className="grid gap-4" style={{ y: y2 }}>
        {photoMansonery[1].map((item: string) => {
          return (
            <div key={item}>
              <img className={`h-auto max-w-full rounded-lg`} src={item} alt="" />
            </div>
          );
        })}
      </motion.div>
      <motion.div className="hidden gap-4 md:grid " style={{ y: y3 }}>
        {photoMansonery[2].map((item: string) => {
          return (
            <div key={item}>
              <img className={`h-auto max-w-full rounded-lg`} src={item} alt="" />
            </div>
          );
        })}
      </motion.div>
      <motion.div className="hidden gap-4 md:grid" style={{ y: y4 }}>
        {photoMansonery[3].map((item: string) => {
          return (
            <div key={item}>
              <img className={`h-auto max-w-full rounded-lg`} src={item} alt="" />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
