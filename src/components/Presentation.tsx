import manon from "@/assets/images/homepage/manon.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Presentation: React.FC = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });
	return (
		<div className="grid min-h-spe-height grid-cols-12 gap-8 overflow-x-hidden py-16 lg:px-32">
			<div className=" col-span-12 mx-8 my-auto md:col-span-8 md:mx-16">
				<h1 className="text-sm text-ternary" style={{ fontVariant: "small-caps" }}>
					Manon Bertho | Studio Creatif
				</h1>
				<h4 className="mt-4 font-title text-3xl font-semibold">Manon - Graphiste et Photographe Freelance</h4>
				<div className="space-y-8">
					<p className="mt-4">
						Passionnée d'art visuel, de photographie, et de design graphique, basée à Rennes, je mets tout mon
						cœur et mon talent dans chaque projet pour capturer des moments uniques et donner vie à des idées
						créatives.{" "}
					</p>
					{/* <p>
            
            <br /> Mon voyage a commencé avec une solide formation en design graphique (BAC + 3) et s'est enrichi d'une
            expertise en gestion de projet (BAC + 5). Ces compétences me permettent de comprendre les besoins de mes
            clients et de les traduire en solutions visuelles inspirantes.{" "}
          </p> */}
					<p>
						J'ai pour objectif de transformer votre vision en réalité. Que ce soit à travers des images qui
						racontent une histoire, des designs qui se démarquent, ou une combinaison des deux, je m'engage à
						vous offrir un service personnalisé qui reflète votre identité.
					</p>
					<p>
						Mais au-delà des compétences, c'est la passion qui m'anime. La photographie n'est pas seulement
						mon métier, c'est ma passion. Chaque instant capturé est un fragment de vie, figé dans le temps.
						Chaque création graphique est une fusion d'art et de communication.
					</p>
					<p>
						Votre projet est unique, et c'est ce qui le rend spécial. En travaillant ensemble, nous créerons
						quelque chose de mémorable, quelque chose qui vous représente pleinement. Alors, que votre projet
						soit grand ou petit, personnel ou professionnel, je suis là pour vous accompagner. Parlons-en,
						partagez vos idées, et ensemble, nous donnerons vie à votre vision.
						{/* <br /> N'hésitez pas à me contacter pour discuter de vos besoins, poser des questions, ou simplement
échanger des idées. Je suis là pour vous, prête à créer des souvenirs visuels et des designs qui vous
ressemblent. Bienvenue dans mon monde créatif. Bienvenue chez vous. */}
					</p>
				</div>
			</div>
			<div className="col-span-12 mx-16 md:col-span-4 md:mx-8" ref={ref}>
				<motion.img
					src={manon}
					className="rounded-full"
					style={{
						boxShadow: "#fff -20px 20px 0px -3px, #3B4F43 -20px 20px",
						transform: isInView ? "none" : "translateX(200px)",
						opacity: isInView ? 1 : 0,
						//transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
					}}
				/>
			</div>
		</div>
	);
};
