import { ImageWithShadow } from "@/components/Widget/ImageWithShadow";
import enora2 from "@/assets/images/photo/enora2.webp";

export const ServicePage: React.FC = () => {
	return (
		<div className="mt-0 px-16 md:mt-16 md:px-24 lg:px-32">
			<h1 className="pt-16 text-center font-title text-4xl">Découvrez mes prestations photo</h1>
			<div className="grid grid-cols-12 gap-8 overflow-x-hidden py-16">
				<div className="col-span-12 mx-16 md:col-span-6 md:mx-8 lg:col-span-4">
					<ImageWithShadow img={enora2} />
				</div>
				<div className=" col-span-12 my-auto md:col-span-6  lg:col-span-8">
					<h1 className="text-sm text-primary" style={{ fontVariant: "small-caps" }}>
						Portrait - Self Love
					</h1>
					<p>
						Envie de reprendre confiance en toi à travers un shooting photo ou bien tout simplement te faire
						plaire ? En exterieur ou en studio, cette formuile est faite pour toi{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
