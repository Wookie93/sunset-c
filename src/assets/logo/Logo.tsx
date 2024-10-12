import NextImage from "next/image";

export const Logo = ({
	width = 68,
	height = 80,
	url
}: {
	width?: number;
	height?: number;
	url: string;
}) => (
	<NextImage
	src={url}
	alt='Logo'
	width={width}
	height={height}
/>
);
