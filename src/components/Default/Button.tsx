interface ButtonProps {
    title: string;
    type: "submit" | "reset" | "button" | undefined;
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = ({ title, type, disabled = false }) => {
    return (
        <button disabled={disabled} type={type} className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 
        border-[#313131] hover:border-ternary hover:before:[box-shadow:_20px_20px_20px_30px_#3B4F43] duration-500 
        before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8
        hover:before:blur origin-left hover:decoration-2 hover:text-ternary relative
        bg-neutral-800 h-16 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute
        before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-primary before:rounded-full before:blur-lg
        after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-ternary after:right-8 after:top-3 after:rounded-full
        after:blur-lg">
            {title}
        </button>
    );
};
