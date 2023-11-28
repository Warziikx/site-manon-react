import { IMansonery, IMansoneryObj } from "@/contentrain/Widget";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MansoneryProps {
  data: IMansonery[];
}

export const Mansonery: React.FC<MansoneryProps> = ({ data }) => {
  const mansoneryRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: mansoneryRef, offset: ["start end", "end -20vh"] });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -1200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-300, -1300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, -1600]);
  const y4 = useTransform(scrollYProgress, [0, 1], [-300, -1400]);
  //   const y1 = useTransform(scrollYProgress, [0, 1], [-400, -1200]);
  //   const y2 = useTransform(scrollYProgress, [0, 1], [-300, -1300]);
  //   const y3 = useTransform(scrollYProgress, [0, 1], [-100, -1600]);
  //   const y4 = useTransform(scrollYProgress, [0, 1], [-300, -1400]);
  const yArray = [y1, y2, y3, y4];
  return (
    <div
      className="grid h-screen grid-cols-2 gap-4 overflow-hidden bg-link-water p-8 md:grid-cols-4 lg:px-32"
      ref={mansoneryRef}
    >
      {data.map((mans: IMansonery, index: number) => (
        <motion.div className="grid gap-4" style={{ y: yArray[index] }}>
          {mans.images
            .sort((a: IMansoneryObj, b: IMansoneryObj) => a.ordre - b.ordre)
            .map((item: IMansoneryObj) => {
              return (
                <div key={item.image}>
                  <img className={`h-auto max-w-full rounded-lg`} src={"/" + item.image} alt="" />
                </div>
              );
            })}
        </motion.div>
      ))}
    </div>
  );
};
