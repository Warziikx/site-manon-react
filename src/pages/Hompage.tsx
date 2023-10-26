import { Hero } from "@/components/Hero";
import { Mansonery } from "@/components/Image/Mansonery";

import manon from "@/assets/images/homepage/manon.jpg";
import { ServiceList } from "@/components/Image/ServiceList";
import { photoServiceList } from "@/data/Service";

export const Homepage: React.FC = () => {
	return (
		<div>
			<Hero />
			<div className="bg-link-water lg:px-32 py-16 grid grid-cols-12 gap-8">
				<div className=" col-span-12 md:col-span-6 my-auto mx-8 md:mx-16">
					<h6 className="text-ternary text-sm" style={{ fontVariant: "small-caps" }}>
						Manon Bertho | Studio Creatif
					</h6>
					<h2 className="text-3xl font-semibold font-title mt-4">Manon - Graphiste et Photographe Freelance</h2>
					<div className="space-y-8">
						<p className="mt-4">
							Passionnée d'art visuel, de photographie, et de design graphique, basée à Rennes, je mets tout mon cœur et
							mon talent dans chaque projet pour capturer des moments uniques et donner vie à des idées créatives.{" "}
						</p>
						<p>
              /* TODO: REWORK || REMOVE */
							<br /> Mon voyage a commencé avec une solide formation en design graphique (BAC + 3) et s'est enrichi
							d'une expertise en gestion de projet (BAC + 5). Ces compétences me permettent de comprendre les besoins de
							mes clients et de les traduire en solutions visuelles inspirantes.{" "}
						</p>
						<p>
							Jai pour objectif de transformer votre vision en réalité. Que ce soit à travers des images qui racontent
							une histoire, des designs qui se démarquent, ou une combinaison des deux, je m'engage à vous offrir un
							service personnalisé qui reflète votre identité.
						</p>
						<p>
							Mais au-delà des compétences, c'est la passion qui m'anime. La photographie n'est pas seulement mon
							métier, c'est ma passion. Chaque instant capturé est un fragment de vie, figé dans le temps. Chaque
							création graphique est une fusion d'art et de communication.
						</p>
						<p>
							Votre projet est unique, et c'est ce qui le rend spécial. En travaillant ensemble, nous créerons quelque
							chose de mémorable, quelque chose qui vous représente pleinement. Alors, que votre projet soit grand ou
							petit, personnel ou professionnel, je suis là pour vous accompagner. Parlons-en, partagez vos idées, et
							ensemble, nous donnerons vie à votre vision.
							{/* <br /> N'hésitez pas à me contacter pour discuter de vos besoins, poser des questions, ou simplement
            échanger des idées. Je suis là pour vous, prête à créer des souvenirs visuels et des designs qui vous
            ressemblent. Bienvenue dans mon monde créatif. Bienvenue chez vous. */}
						</p>
					</div>
				</div>
				<div className=" col-span-12 md:col-span-6 mx-8 md:mx-16">
					<img src={manon} />
				</div>
			</div>
			<ServiceList serviceList={photoServiceList} />
			<Mansonery />
			<p className="bg-link-water p-8 dark:bg-primary md:p-32 lg:px-96">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus augue. Sed varius lectus a nunc
				hendrerit varius. Phasellus ornare nunc non elit aliquam, non consequat dui pharetra. Etiam ullamcorper sapien
				ipsum, vitae euismod arcu ornare ac. Nullam tincidunt pretium fringilla. Quisque in sollicitudin neque. Nam
				commodo diam id nibh sodales, sed elementum mauris dignissim. Ut vulputate magna at convallis ullamcorper.
				Quisque feugiat metus posuere mi varius sollicitudin. Cras suscipit nibh at dolor suscipit, at tincidunt nisi
				blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur nec nisi efficitur, gravida
				ligula id, laoreet enim.
			</p>
			<p className="bg-link-water p-8 dark:bg-primary md:p-32 lg:px-96">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus augue. Sed varius lectus a nunc
				hendrerit varius. Phasellus ornare nunc non elit aliquam, non consequat dui pharetra. Etiam ullamcorper sapien
				ipsum, vitae euismod arcu ornare ac. Nullam tincidunt pretium fringilla. Quisque in sollicitudin neque. Nam
				commodo diam id nibh sodales, sed elementum mauris dignissim. Ut vulputate magna at convallis ullamcorper.
				Quisque feugiat metus posuere mi varius sollicitudin. Cras suscipit nibh at dolor suscipit, at tincidunt nisi
				blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur nec nisi efficitur, gravida
				ligula id, laoreet enim.
			</p>{" "}
			<p className="bg-link-water p-8 dark:bg-primary md:p-32 lg:px-96">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus augue. Sed varius lectus a nunc
				hendrerit varius. Phasellus ornare nunc non elit aliquam, non consequat dui pharetra. Etiam ullamcorper sapien
				ipsum, vitae euismod arcu ornare ac. Nullam tincidunt pretium fringilla. Quisque in sollicitudin neque. Nam
				commodo diam id nibh sodales, sed elementum mauris dignissim. Ut vulputate magna at convallis ullamcorper.
				Quisque feugiat metus posuere mi varius sollicitudin. Cras suscipit nibh at dolor suscipit, at tincidunt nisi
				blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur nec nisi efficitur, gravida
				ligula id, laoreet enim.
			</p>
		</div>
	);
};
