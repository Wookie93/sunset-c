import NextLink from "next/link";

export const Footer = () => {
	return (
		<footer className="container mx-auto border-t border-gray-100 py-6">
			<div className="grid grid-cols-2 gap-10">
				<div className="col-start-1 space-x-6">
					<NextLink
						className="text-sm text-gray-900 transition-colors duration-300 hover:text-lion"
						href="https://www.facebook.com"
						target="_blank"
						prefetch
					>
						Facebook
					</NextLink>
					<NextLink
						className="text-sm text-gray-900 transition-colors duration-300 hover:text-lion"
						href="https://www.instagram.com"
						target="_blank"
						prefetch
					>
						Instagram
					</NextLink>
				</div>
				<div className="col-start-2">
					<NextLink
						className="text-sm text-gray-900 transition-colors duration-300 hover:text-lion"
						href="/"
					>
						Polityka prywatności
					</NextLink>
				</div>
				<div className="col-end-12">
					<p className="text-sm text-gray-900">
						Copyright by Sunset House. Wszelkie prawa zastrzeżone
					</p>
				</div>
			</div>
		</footer>
	);
};
