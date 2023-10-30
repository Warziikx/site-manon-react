import { Button } from "../Default/Button"

export const Contact: React.FC = () => {
    return <div className="bg-[#313131] flex flex-row justify-between items-center py-24 px-8 md:px-16">
        <p className="text-white">Prêt à donner vie à votre projet ? Contactez-moi pour le concrétiser!</p>
        <Button type="button" title="Contactez-moi" />
        {/* <div className="text-center">
            <a href="mailto:contact@manonbertho-studio.fr" className="text-4xl font-title text-ternary-400">
                contact@manonbertho-studio.fr
            </a>
            <p className="">Prêt à donner vie à votre projet ? Contactez-moi pour le concrétiser!</p>
        </div> */}
    </div>
}