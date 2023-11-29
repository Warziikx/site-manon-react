import { ITestimonial } from "@/contentrain/Homepage";

interface Testimonial1Props {
	data: ITestimonial[];
}

export const Testimonial1: React.FC<Testimonial1Props> = ({ data }) => {
	return (
		<div className="grid grid-cols-1 bg-link-water gap-8 py-16 px-16 sm:px-32 md:grid-cols-12">
			{data
				.sort((a: ITestimonial, b: ITestimonial) => a.ordre - b.ordre)
				.map((testimonial: ITestimonial) => (
					<div className="col-span-1 space-y-4 md:col-span-4" key={`testimonial_${testimonial.ID}`}>
						<img className="rounded-xl" src={'/' + testimonial.image} />
						<p className="text-center" dangerouslySetInnerHTML={{ __html: testimonial.description }}></p>
						<p className="text-end text-gray-400 " style={{ fontVariant: "small-caps" }}>
							{testimonial.author}
						</p>
					</div>
				))}
		</div>
	);
};
