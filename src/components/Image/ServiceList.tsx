import { Service } from "@/data/Service";
import { ServiceCard } from "./ServiceCard";

interface ServiceListProps {
  serviceList: Service[];
}

export const ServiceList: React.FC<ServiceListProps> = ({ serviceList }) => {
  return (
    <div className="min-h-screen my-16 flex flex-col justify-center items-center space-y-8">
      <h2 className="text-3xl font-semibold font-title mt-4">Univers Photographie</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-16">
        {serviceList.map((service: Service, index: number) => (
          <ServiceCard key={`photo-service-${index}`} service={service} />
        ))}
      </div>
    </div>
  );
};
