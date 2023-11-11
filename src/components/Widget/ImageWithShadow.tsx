interface ImageWithShadowProps {
	img: string;
}

export const ImageWithShadow: React.FC<ImageWithShadowProps> = ({ img }) => {
	return (
		<img
			src={img}
			className="rounded-full"
			style={{
				boxShadow: "#fff -20px 20px 0px -3px, #3B4F43 -20px 20px",
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
			}}
		/>
	);
};
