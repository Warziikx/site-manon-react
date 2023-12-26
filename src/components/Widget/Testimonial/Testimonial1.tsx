import { ITestimonial } from "@/contentrain/Homepage";

interface Testimonial1Props {
  data: ITestimonial[];
}

export const Testimonial1: React.FC<Testimonial1Props> = ({ data }) => {
  return (
    <div className="py-8 space-y-8">
      <h3 className="font-title text-3xl text-center font-semibold">Vos mots doux</h3>
      <div className="grid grid-cols-1  gap-8  px-16 sm:px-32 md:grid-cols-12">
        {data
          .sort((a: ITestimonial, b: ITestimonial) => a.ordre - b.ordre)
          .map((testimonial: ITestimonial) => (
            <div className="col-span-1 space-y-4 md:col-span-4 flex flex-col items-center" key={`testimonial_${testimonial.ID}`}>
              <img className="rounded-xl" src={"/" + testimonial.image} alt={`Photo du shooting de ${testimonial.author}`} />
              <div className="h-full space-y-4 flex flex-col justify-between">
                <p className="text-center" dangerouslySetInnerHTML={{ __html: testimonial.description }}></p>
                <p className="text-end text-gray-400 " style={{ fontVariant: "small-caps" }}>
                  {testimonial.author}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
