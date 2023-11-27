import logo from "@/assets/images/logo.svg";
import fleur1 from "@/assets/images/homepage/hero/fleur1.svg";
import fleur2 from "@/assets/images/homepage/hero/fleur2.svg";
import fleur3 from "@/assets/images/homepage/hero/fleur3.svg";

export const Hero: React.FC = () => {
  return (
    <>
      <div className="relative flex h-spe-height justify-center overflow-hidden bg-link-water">
        <img src={fleur2} className="absolute  -top-16 left-4 w-6/12 md:-left-64" />
        <img src={fleur3} className="absolute -left-12 bottom-4 w-64 rotate-6 md:left-0 md:w-96 xl:left-32" />
        <div className="relative m-auto text-center">
          <img src={logo} className="mx-auto max-w-2xl" />
          <p className="relative mx-auto -mt-16 text-4xl text-primary">Votre image sur mesure</p>
        </div>
        <img src={fleur1} className="absolute -right-12 top-32 w-4/12 rotate-180 sm:-right-24 md:block" />
      </div>
      <img src={fleur2} className="absolute -bottom-2 right-8 z-10 w-32 rotate-45 md:-bottom-8 md:right-64" />
    </>
  );
};
