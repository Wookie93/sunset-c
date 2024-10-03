import { Metadata } from "next";
import { GalleryEntry } from "@/features/gallery";
import client from "@/lib/contentful";
import { GET_ALL_GALLERY_SLUGS, GET_GALLERY } from "@/lib/queries/gallery-queries";
import { AllGalleryResponse, GalleryResponse } from "@/types/contefulTypes";

export const dynamicParams = false;

async function getGallerySubpageContent(slug: string) {
	const data = await client.request<GalleryResponse>(GET_GALLERY, {
	  slug: `galeria/${slug}`
	});
	return data.galleryCollection.items[0];
}


export async function generateMetadata({
	params,
  }: {
	params: { slug: string };
  }): Promise<Metadata> {
	const galleryData = await getGallerySubpageContent(params.slug);
	
	return {
	  metadataBase: new URL("https://sunset-house.com"),
	  alternates: {
		canonical: `https://sunset-house.com/galeria/${params.slug}`,
	  },
	  title: galleryData?.title || 'Galeria',
	  description: galleryData?.description || 'Zobacz domek',
	};
  }


export async function generateStaticParams() {
	const { galleryCollection } = await client.request<AllGalleryResponse>(GET_ALL_GALLERY_SLUGS);
	
	return galleryCollection.items
	  .filter((item:any) => item.slug !== 'galeria')
	  .map((item:any) => ({
		slug: item.slug.replace('galeria/', ''),
		pageName: item.pageName
	  }));
}


export default async function GalleryEntryPage({
	params,
}: {
	params: { slug: string };
}) {
	const galleryData = await getGallerySubpageContent(params.slug);
	const slugs = await generateStaticParams()

	return <GalleryEntry params={galleryData} pageList={slugs}/>;
}
