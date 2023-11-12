import maelle2 from "@/assets/images/photo/portrait/maelle2.webp";
import manon from "@/assets/images/photo/portrait/laura.webp";
import enora2 from "@/assets/images/photo/portrait/enora2.webp";

export const Testimonial1: React.FC = () => {
	return (
		<div className="space-y-16 bg-link-water py-16 lg:px-32">
			<div className="grid grid-cols-1 gap-8 px-32 md:grid-cols-12 md:px-16">
				<div className="col-span-1 space-y-4 md:col-span-3">
					<img className="rounded-xl" src={maelle2} />
					<p className="text-center">Une séance au top, je recommande vraiment</p>
					<p className="text-end text-gray-400 " style={{ fontVariant: "small-caps" }}>
						Maelle
					</p>
				</div>
				<div className="col-span-1 space-y-4 md:col-span-4 md:col-start-5 md:-mt-24">
					<img className="rounded-xl" src={manon} />
					<p className="text-center">Une séance au top, je recommande vraiment</p>
					<p className="text-end text-gray-400 " style={{ fontVariant: "small-caps" }}>
						Maelle
					</p>
				</div>
				<div className="col-span-1 space-y-4 md:col-span-3 md:col-start-10">
					<img className="rounded-xl" src={enora2} />
					<p className="text-center">Une séance au top, je recommande vraiment</p>
					<p className="text-end text-gray-400 " style={{ fontVariant: "small-caps" }}>
						Enora
					</p>
				</div>
			</div>
		</div>
	);
};
