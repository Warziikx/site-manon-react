import { Navigate, useParams } from "@tanstack/react-router";

import { serviceDetailRoute } from "@/Router";
import { Prestation } from "@/components/Service/Prestation";
import { PrestationData, mesPrestationPhoto } from "@/data/Service";
import { NumberFeatures } from "@/components/Widget/Features/NumberFeatures";
import { CallToAction } from "@/components/Widget/CallToAction";

export const ServiceDetailPage: React.FC = () => {
	const { serviceSlug } = useParams({ from: serviceDetailRoute.id });
	const prestation = mesPrestationPhoto.find((p: PrestationData) => p.slug === serviceSlug);
	if (prestation === undefined) return <Navigate to="/services" />;
	return (
		<>
			<Prestation prestation={prestation} />
			<NumberFeatures title={prestation.stepData.title} featuresList={prestation.stepData.stepList} />
			<CallToAction />
		</>
	);
};
