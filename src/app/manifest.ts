import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Sunset House: Domek w górach na wynajem",
		short_name: "Sunset House",
		description:
			"Zarezerwuj domek w górach na wynajem! Oferujemy komfortowy wypoczynek, malownicze widoki, liczne atrakcje i pełne wyposażenie. Idealne miejsce na rodzinne wakacje. Sprawdź dostępność!",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#ffffff",
		icons: [
			{
				src: "/images/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/images/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
