import logo from "@/assets/images/logo.svg";
import fleur1 from "@/assets/images/homepage/hero/fleur1.svg";
import fleur2 from "@/assets/images/homepage/hero/fleur2.svg";
import fleur3 from "@/assets/images/homepage/hero/fleur3.svg";

export const Hero: React.FC = () => {
  return (
    <div className="bg-link-water relative overflow-x-hidden overflow-visible h-spe-height">
      <img src={fleur2} className="w-6/12 absolute -top-24 md:-top-16 -left-64" />
      <img src={fleur3} className="w-96 absolute -left-12 lg:left-32 bottom-4 rotate-6" />
      <div className="mx-auto text-center pt-12 relative">
        <img src={logo} className="max-w-2xl mx-auto" />
        <p className="mx-auto relative text-4xl text-primary -mt-16">Votre image sur mesure</p>
      </div>
      <img src={fleur1} className="w-4/12 absolute top-32 -right-36 lg:-right-24 hidden md:block rotate-180" />
      <img src={fleur2} className="w-32 absolute right-64 -bottom-16 rotate-45 z-100" />
    </div>
  );
};
