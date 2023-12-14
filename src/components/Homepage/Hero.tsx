import logo from "@/assets/images/logo.svg";
import fleur1 from "@/assets/images/homepage/hero/fleur1.svg";
import fleur2 from "@/assets/images/homepage/hero/fleur2.svg";
import fleur3 from "@/assets/images/homepage/hero/fleur3.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Hero: React.FC = () => {
  const container = useRef(null);
  const ref = useRef(null);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const isInView = useInView(container, { amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start({ scale: [0.2, 1], rotate: [90, 0] });
      controls2.start({ scale: [0.2, 1], rotate: [-90, -180] });
    }
  }, [controls, isInView]);

  return (
    <>
      <div ref={container} className="relative flex h-spe-height justify-center overflow-hidden bg-link-water">
        <motion.img
          ref={ref}
          src={fleur2}
          alt="Illustation de fleur terracotta"
          className="absolute -top-16 left-4 w-6/12 md:-left-64"
          animate={controls}
          transition={{ duration: 1.2 }}
        />
        <div className="relative m-auto text-center">
          <img src={logo} className="mx-auto w-full md:w-8/12" />
          <p className="relative mx-auto text-lg md:text-2xl text-primary">
            De la capture de vos instants précieux,
            <br /> à la création minutieuse de vos projets graphique
          </p>
        </div>
        <motion.img
          src={fleur1}
          alt="Illustation de fleur rose"
          animate={controls2}
          transition={{ duration: 1.2 }}
          className="absolute -right-12 w-4/12 rotate-180 sm:-right-24 md:block"
        />
      </div>
      <motion.img
        src={fleur3}
        alt="Illustation de fleur verte"
        animate={controls2}
        transition={{ duration: 1.2 }}
        className="absolute -left-12 bottom-8 md:-bottom-20 w-64 rotate-90 md:left-0 md:w-96 xl:left-32"
      />
      <motion.img
        src={fleur2}
        alt="Illustation de fleur bleu"
        animate={controls}
        transition={{ duration: 1.2 }}
        className="absolute -bottom-2 right-8 z-10 w-32 rotate-45 md:-bottom-8 md:right-64"
      />
    </>
  );
};
