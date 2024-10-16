"use client";

import React, {useEffect, useRef, useState} from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

const Map = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<L.Map | null>(null);
	const center = { lng: 20.058739, lat: 49.604630 };
	const [zoom] = useState(15);

	const labelIcon = L.divIcon({
		className: "!w-auto !h-auto",
		iconAnchor: [57.5, 28],
		html: `
      <div class="bg-main-gold text-center px-2 py-1 rounded-full max-w-[200px] min-w-[115px] overflow-hidden text-ellipsis whitespace-nowrap">
        <span class="text-black font-semibold text-sm">Sunset House</span>
      </div>`,
	});

	useEffect(() => {
		if (map.current) return;

		map.current = new L.Map(mapContainer.current as HTMLDivElement, {
			center: L.latLng(center.lat, center.lng),
			zoom: zoom,
		});

		// Create a MapTiler Layer inside Leaflet
		L.tileLayer(
			"https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=KOnIbQB3Ywfn2i0Pjzob",
			{
				attribution:
					'&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> contributors',
			}
		).addTo(map.current);

		L.marker([49.604630, 20.058739], { icon: labelIcon, interactive: false, bubblingMouseEvents: false, draggable: false, title: "Sunset House" }).addTo(map.current!);
	}, [center.lng, center.lat, zoom, labelIcon]);

	return (
		<div className="relative h-[20rem] w-full tabletLg:h-[25rem] laptop:h-[31.25rem]">
			<div ref={mapContainer} className="absolute h-full w-full" />
		</div>
	);
};

export default Map
