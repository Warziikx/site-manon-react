import { IStore } from "@/contentrain/Homepage";

interface StoreCTAProps {
  data: IStore;
}

export const StoreCTA: React.FC<StoreCTAProps> = ({ data }) => {
  return (
    <section className="bg-primary-300 flex flex-col  md:flex-row justify-between">
      <div className="space-y-6 flex flex-col justify-center my-10 lg:my-12 px-12 lg:px-32">
        <h3 className="font-title text-4xl font-extrabold leading-tight tracking-tight text-white">{data.title}</h3>
        <div className="text-white" dangerouslySetInnerHTML={{ __html: data.description }}></div>
        <div>
          <a
            href="https://www.etsy.com/fr/shop/ManonBerthoStudio"
            target="_blank"
            className="mb-2 focus:outline-none mr-2 rounded-lg px-5 border border-white py-2.5 text-sm 
          font-medium text-white hover:bg-white hover:text-primary transition duration-150 ease-in-out "
          >
            {data.button_label}
          </a>
        </div>
      </div>
      <img src={`/${data.image}`} className="w-auto md:w-2/5 object-cover" alt="Mise en situation d'une affiche présente dans la boutique" />
    </section>
  );
};
