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

const col1 = [sirene, chaussure, citrouille, mouton];
const col2 = [cartePostal, lecture, mouton2, sirene2];
const col3 = [soldat, oiseau, magie, citron];
const col4 = [fiole, phare, renard, surf];

export const Mansonery: React.FC = () => {
    const mansoneryRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: mansoneryRef, offset: ["start end", "end end"] });
    const y1 = useTransform(scrollYProgress, [0, 1], [-400, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [-600, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [-300, -300]);
    const y4 = useTransform(scrollYProgress, [0, 1], [-200, -400]);
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-ternary h-screen overflow-hidden" ref={mansoneryRef}>
            <motion.div className="grid gap-4" style={{ y: y1 }}>
                {col1.map((item: string) => {
                    return (
                        <div key={item}>
                            <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                        </div>
                    );
                })}
            </motion.div>
            <motion.div className="grid gap-4" style={{ y: y2 }}>
                {col2.map((item: string) => {
                    return (
                        <div key={item}>
                            <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                        </div>
                    );
                })}
            </motion.div>
            <motion.div className="grid gap-4" style={{ y: y3 }}>
                {col3.map((item: string) => {
                    return (
                        <div key={item}>
                            <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                        </div>
                    );
                })}
            </motion.div>
            <motion.div className="grid gap-4" style={{ y: y4 }}>
                {col4.map((item: string) => {
                    return (
                        <div key={item}>
                            <img className="h-auto max-w-full rounded-lg" src={item} alt="" />
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};
