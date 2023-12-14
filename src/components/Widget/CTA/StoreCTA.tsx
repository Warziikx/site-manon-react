import mockupNavire from "@/assets/images/shop/mockup_navire.webp";

export const StoreCTA: React.FC = () => {
  return (
    <section className="bg-primary-100 flex flex-col  md:flex-row justify-between">
      <div className="space-y-4 flex flex-col justify-center my-10 lg:my-12 px-12 lg:px-32">
        <h4 className="font-title text-4xl font-extrabold leading-tight tracking-tight text-gray-900 ">Boutique</h4>
        <p>
          De l'embellissement de votre espace intérieur à la recherche d'une charmante papeterie pour vos loisirs, je
          vous convie à explorer la boutique et ses créations confectionnées avec passion.
        </p>
        <div>
          <a
            href="https://www.etsy.com/fr/shop/ManonBerthoStudio"
            target="_blank"
            className="mb-2 focus:outline-none mr-2 rounded-lg px-5 border border-primary py-2.5 text-sm 
          font-medium text-primary hover:bg-primary hover:text-white transition duration-150 ease-in-out "
          >
            Découvrir
          </a>
        </div>
      </div>
      <img src={mockupNavire} className="w-auto md:w-2/5 object-cover" />
    </section>
  );
};
