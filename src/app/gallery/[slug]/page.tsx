import { gallery } from "@/app/gallery/mock";
import { Metadata } from "next";
import { GalleryEntry } from "@/features/gallery";

export const dynamicParams = false;

export async function generateStaticParams() {
	return gallery.map((el) => ({
		slug: el.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const galleryPost = gallery.find((el) => el.slug === params.slug);
	return {
		metadataBase: new URL("https://sunset-house.com"),
		alternates: {
			canonical: `https://sunset-house.com/gallery/${params.slug}`,
		},
		title: galleryPost?.title,
		description: galleryPost?.description,
	};
}

export default async function GalleryEntryPage({
	params,
}: {
	params: { slug: string };
}) {
	return <GalleryEntry params={params} />;
}
