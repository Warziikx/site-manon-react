
import { useEffect, useState } from "react";

export const Contact: React.FC = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true);
			console.log("Hello");
		}
	}, [isMounted, setIsMounted]);
	return <div></div>;
};
