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
						Bienvenue dans mon univers , où la créativité rencontre la précision. En tant que photographe et
						graphiste, je façonne des images et des univers graphiques saisissants, alignés sur votre
						personnalité.
					</p>
					<p>
						Vous souhaitez uniquement une séance photo pour vous faire plaisir, ou retravailler votre image en
						tant que marque, je suis à l’écoute de vos envies.
					</p>
					<p>
						Grâce à mon expertise, je donne vie à des supports percutants (Print ou Digital). Maîtrisant les
						codes visuels, je crée une esthétique cohérente et mémorable à votre image.
					</p>
					<p>
						Que vous soyez particulier ou professionnel, explorez mon portfolio pour découvrir comment nous
						pouvons travailler ensemble.
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
						transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
					}}
				/>
			</div>
		</div>
	);
};
