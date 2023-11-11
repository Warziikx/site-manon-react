import logo from "@/assets/images/logo.svg";
import fleur1 from "@/assets/images/homepage/hero/fleur1.svg";
import fleur2 from "@/assets/images/homepage/hero/fleur2.svg";
import fleur3 from "@/assets/images/homepage/hero/fleur3.svg";

export const Hero: React.FC = () => {
	return (
		<>
			<div className="relative h-spe-height overflow-hidden bg-link-water">
				<img src={fleur2} className="absolute -top-24 left-4 w-6/12 md:-left-64 md:-top-16" />
				<img src={fleur3} className="absolute -left-12 bottom-4 w-96 rotate-6 lg:left-32" />
				<div className="relative mx-auto pt-12 text-center">
					<img src={logo} className="mx-auto max-w-2xl" />
					<p className="relative mx-auto -mt-16 text-4xl text-primary">Votre image sur mesure</p>
				</div>
				<img
					src={fleur1}
					className="absolute -right-36 top-32 hidden w-4/12 rotate-180 md:block lg:-right-24"
				/>
			</div>
			<img src={fleur2} className="absolute -bottom-2 right-8 z-10 w-32 rotate-45 md:-bottom-8 md:right-64" />
		</>
	);
};
