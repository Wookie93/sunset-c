import { ContentfulFooter } from "@/types/contefulTypes";
import NextLink from "next/link";

export const Footer = ({footerData}: ContentfulFooter) => {
	return (
		<footer className="container mx-auto border-t border-gray-100 py-6">
			<div className="grid gap-2 laptop:grid-cols-2">
				<div className="space-x-6 laptop:col-start-1">
					<NextLink
						className="text-sm text-gray-900 transition-colors duration-300 hover:text-lion"
						href={footerData.socials.facebook}
						target="_blank"
						prefetch
					>
						Facebook
					</NextLink>
					<NextLink
						className="text-sm text-gray-900 transition-colors duration-300 hover:text-lion"
						href={footerData.socials.instagram}
						target="_blank"
						prefetch
					>
						Instagram
					</NextLink>
				</div>
				{footerData.privacePolicy ? <div className="col-start-2">
					<NextLink
						className="text-sm text-gray-900 transition-colors duration-300 hover:text-lion"
						href={footerData.privacePolicy}
					>
						Polityka prywatności
					</NextLink>
				</div> : null}
				<div className="laptop:col-end-12">
					<p className="text-sm text-gray-900">
						{footerData.copywright}
					</p>
				</div>
			</div>
		</footer>
	);
};
