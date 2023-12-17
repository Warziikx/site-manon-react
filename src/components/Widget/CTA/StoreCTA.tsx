import { IStore } from "@/contentrain/Homepage";

interface StoreCTAProps {
  data: IStore;
}

export const StoreCTA: React.FC<StoreCTAProps> = ({ data }) => {
  return (
    <section className="bg-primary-100 flex flex-col  md:flex-row justify-between">
      <div className="space-y-4 flex flex-col justify-center my-10 lg:my-12 px-12 lg:px-32">
        <h4 className="font-title text-4xl font-extrabold leading-tight tracking-tight text-gray-900">{data.title}</h4>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <div>
          <a
            href="https://www.etsy.com/fr/shop/ManonBerthoStudio"
            target="_blank"
            className="mb-2 focus:outline-none mr-2 rounded-lg px-5 border border-primary py-2.5 text-sm 
          font-medium text-primary hover:bg-primary hover:text-white transition duration-150 ease-in-out "
          >
            {data.button_label}
          </a>
        </div>
      </div>
      <img src={`/${data.image}`} className="w-auto md:w-2/5 object-cover" />
    </section>
  );
};
