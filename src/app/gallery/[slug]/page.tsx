import { Metadata } from "next";
import { GalleryEntry } from "@/features/gallery";
import client from "@/lib/contentful";
import { GET_ALL_GALLERY_SLUGS, GET_GALLERY } from "@/lib/queries/gallery-queries";
import { AllGalleryResponse, GalleryResponse } from "@/types/contefulTypes";


export async function generateStaticParams() {
	const { galleryCollection } = await client.request<AllGalleryResponse>(GET_ALL_GALLERY_SLUGS);
	const arrayWithSlugs = galleryCollection.items
		  .filter((item:any) => item.slug !== '/galeria')
		  .map(async (item:any) => ({
			slug: item.slug.replace('galeria/', ''),
			pageName: item.pageName,
		  	}));
	return arrayWithSlugs
}

async function getGallerySubpageContent(slug: string) {
	const data = await client.request<GalleryResponse>(GET_GALLERY, {
	  slug: `/galeria/${slug}`
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
	  title: galleryData?.metaTitle || 'Galeria',
	  description: galleryData?.metaDescription || 'Zobacz domek',
	};
  }

  
  export default async function GalleryEntryPage({
	params
  }: {
	params: { slug: string }
  }) {

	const galleryData= await getGallerySubpageContent(params.slug);
	const {galleryCollection} = await client.request<AllGalleryResponse>(GET_ALL_GALLERY_SLUGS);

	return (
	  <>
		<GalleryEntry params={galleryData} pageList={galleryCollection.items}/>
	  </>
	);
  }