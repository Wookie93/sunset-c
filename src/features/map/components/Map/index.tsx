"use client";

import React, { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export const Map = () => {
	const mapContainer = useRef<HTMLDivElement | null>(null);
	const map = useRef<L.Map | null>(null);
	const center = { lng: 20.059325, lat: 49.595935 };
	const [zoom] = useState(14);

	useEffect(() => {
		if (map.current) return;

		map.current = new L.Map(mapContainer.current as HTMLDivElement, {
			center: L.latLng(center.lat, center.lng),
			zoom: zoom,
		});

		// Create a MapTiler Layer inside Leaflet
		new maptilersdk.Map({
			container: mapContainer.current as HTMLDivElement,
			apiKey: "KOnIbQB3Ywfn2i0Pjzob",
			style: maptilersdk.MapStyle.BRIGHT.LIGHT,
			center: L.latLng(center.lat, center.lng),
			zoom: zoom,
		});
	}, [center.lng, center.lat, zoom]);

	return (
		<div className="relative h-[20rem] w-full tabletLg:h-[25rem] laptop:h-[31.25rem]">
			<div ref={mapContainer} className="absolute h-full w-full" />
		</div>
	);
};
