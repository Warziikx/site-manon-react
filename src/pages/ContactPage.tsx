import { useEffect } from "react";

declare global {
	interface Window {
		hbspt: any;
	}
}

window.hbspt = window.hbspt || {};

export const ContactPage: React.FC = () => {
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "https://js.hsforms.net/forms/v2.js";
		document.body.appendChild(script);

		script.addEventListener("load", () => {
			if (window.hbspt) {
				window.hbspt.forms.create({
					region: "eu1",
					portalId: "143624250",
					formId: "c0fba5fc-23bc-44dd-9db7-96d5cba2da58",
					target: "#hubspotForm",
				});
			}
		});
	}, []);

	return (
		<div className="mt-16">
			<div className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 md:px-16 lg:px-32">
				<div>
					<h1 className="text-sm text-ternary" style={{ fontVariant: "small-caps" }}>
						Contact
					</h1>
					<h4 className="mt-4 font-title text-3xl font-semibold">
						Un projet, une collaboration&nbsp;? Contactez-moi si vous souhaitez que l'on en discute&nbsp;!
					</h4>
					<p>Vous pouvez également me contacter par mail à : contact@manonbertho-studio.fr</p>
				</div>
				<div id="hubspotForm"></div>
			</div>
		</div>
	);
};
