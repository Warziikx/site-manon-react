
import { useForm, ValidationError } from "@formspree/react";

export const ContactPage: React.FC = () => {
	const [state, handleSubmit] = useForm("mleyzqrw");

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
				{/* <script src="https://www.google.com/recaptcha/api.js" async defer></script> */}
				{state.succeeded ? (
					<p>Oui !!!</p>
				) : (
					<form onSubmit={handleSubmit} className="flex flex-col">
						{/* <div className="flex flex-col md:flex-row md:space-x-4">
							<input
								type="text"
								className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 w-full
					focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary 
					transition ease-in-out duration-150"
								placeholder="Nom"
							/>
							<input
								type="text"
								className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 w-full
					focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary 
					transition ease-in-out duration-150"
								placeholder="Prenom"
							/>
						</div> */}
						<input
							type="email"
							name="email"
							className="mb-4 rounded-md border-0 bg-gray-100 p-2 text-gray-800 
					transition duration-150 ease-in-out focus:bg-gray-200 
					focus:outline-none focus:ring-1 focus:ring-primary"
							placeholder="Email"
						/>
						<ValidationError prefix="Email" field="email" errors={state.errors} />

						<textarea
							name="message"
							className="mb-4 rounded-md border-0 bg-gray-100 p-2 text-gray-800 transition 
						duration-150 ease-in-out focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-primary"
							placeholder="Message"
						/>
						<ValidationError prefix="Message" field="message" errors={state.errors} />

						{/* <div className="g-recaptcha" data-sitekey="your_site_key"></div> */}
					</form>
				)}
			</div>
		</div>
	);
};
