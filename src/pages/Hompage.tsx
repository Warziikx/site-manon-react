import { Hero } from "@/components/Hero";
import { Mansonery } from "@/components/Image/Mansonery";

import { ServiceList } from "@/components/Image/ServiceList";
import { Presentation } from "@/components/Presentation";
import SmoothScroll from "@/components/SmoothScroll";
import { photoServiceList, graphismeServiceList } from "@/data/Service";

export const Homepage: React.FC = () => {
	return (
		<div>
			<Hero />
			<Presentation />
			<ServiceList serviceList={photoServiceList} title={"Univers Photographie"} />
			<Mansonery />
			<ServiceList serviceList={graphismeServiceList} title={"Univers Graphisme"} />
			<SmoothScroll />
			<p className="bg-link-water p-8  md:p-32 lg:px-96">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus augue. Sed varius lectus a nunc hendrerit
				varius. Phasellus ornare nunc non elit aliquam, non consequat dui pharetra. Etiam ullamcorper sapien ipsum, vitae euismod
				arcu ornare ac. Nullam tincidunt pretium fringilla. Quisque in sollicitudin neque. Nam commodo diam id nibh sodales, sed
				elementum mauris dignissim. Ut vulputate magna at convallis ullamcorper. Quisque feugiat metus posuere mi varius
				sollicitudin. Cras suscipit nibh at dolor suscipit, at tincidunt nisi blandit. Interdum et malesuada fames ac ante ipsum
				primis in faucibus. Curabitur nec nisi efficitur, gravida ligula id, laoreet enim.
			</p>
			<p className="bg-link-water p-8 md:p-32 lg:px-96">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus augue. Sed varius lectus a nunc hendrerit
				varius. Phasellus ornare nunc non elit aliquam, non consequat dui pharetra. Etiam ullamcorper sapien ipsum, vitae euismod
				arcu ornare ac. Nullam tincidunt pretium fringilla. Quisque in sollicitudin neque. Nam commodo diam id nibh sodales, sed
				elementum mauris dignissim. Ut vulputate magna at convallis ullamcorper. Quisque feugiat metus posuere mi varius
				sollicitudin. Cras suscipit nibh at dolor suscipit, at tincidunt nisi blandit. Interdum et malesuada fames ac ante ipsum
				primis in faucibus. Curabitur nec nisi efficitur, gravida ligula id, laoreet enim.
			</p>{" "}
			<p className="bg-link-water p-8 md:p-32 lg:px-96">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque finibus augue. Sed varius lectus a nunc hendrerit
				varius. Phasellus ornare nunc non elit aliquam, non consequat dui pharetra. Etiam ullamcorper sapien ipsum, vitae euismod
				arcu ornare ac. Nullam tincidunt pretium fringilla. Quisque in sollicitudin neque. Nam commodo diam id nibh sodales, sed
				elementum mauris dignissim. Ut vulputate magna at convallis ullamcorper. Quisque feugiat metus posuere mi varius
				sollicitudin. Cras suscipit nibh at dolor suscipit, at tincidunt nisi blandit. Interdum et malesuada fames ac ante ipsum
				primis in faucibus. Curabitur nec nisi efficitur, gravida ligula id, laoreet enim.
			</p>
			<div className="bg-link-water flex flex-col justify-center items-center py-24">
				<div className="text-center">
					<a href="mailto:contact@manonbertho-studio.fr" className="text-4xl font-title text-ternary-400">
						contact@manonbertho-studio.fr
					</a>
					<p className="">Prêt à donner vie à votre projet ? Contactez-moi pour le concrétiser!</p>
				</div>
			</div>
		</div>
	);
};
