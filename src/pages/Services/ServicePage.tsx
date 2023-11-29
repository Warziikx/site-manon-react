import { IllustrationFeatures } from "@/components/Widget/Features/IllustrationFeatures";
import { homepage } from "@/contentrain/Homepage";

export const ServicePage: React.FC = () => {
  return <div className="py-16">
    {homepage.prestation && <IllustrationFeatures data={homepage.prestation} />}
    </div>;
};
