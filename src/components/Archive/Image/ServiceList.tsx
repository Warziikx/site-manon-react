import { Service } from "@/data/Service";
import { ServiceCard } from "./ServiceCard";

interface ServiceListProps {
  serviceList: Service[];
  title: string;
}

export const ServiceList: React.FC<ServiceListProps> = ({ serviceList, title }) => {
  return (
    <div className="pb-32 pt-16 flex min-h-screen flex-col items-center justify-center space-y-8">
      <h2 className="mt-4 font-title text-3xl font-semibold">{title}</h2>
      <div
        className={`grid grid-cols-1 gap-8 px-8 md:px-16 ${
          serviceList.length % 2 == 0 ? "md:grid-cols-2" : ""
        } lg:grid-cols-${serviceList.length}`}
      >
        {serviceList.map((service: Service, index: number) => (
          <ServiceCard key={`photo-service-${index}`} service={service} />
        ))}
      </div>
    </div>
  );
};
