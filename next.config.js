/** @type {import('next').NextConfig} */
require('dotenv').config(); // Load environment variables for Contentful

async function fetchContentfulSlugs() {
  const fetch = (await import('node-fetch')).default; // Use dynamic import
  
  const query = `
    {
      pageCollection {
        items {
          slug
          pageName
        }
      }
      galleryCollection {
        items {
          slug
        }
      }
    }
  `;
  
  try {
    const response = await fetch(`${process.env.CONTENTFUL_GRAPHQL_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log("Contentful Response:", data); // Log the response

    if (!data || !data.data) {
      throw new Error("Invalid response structure from Contentful");
    }

    const pageItems = data.data.pageCollection.items; // Array of slugs from pageCollection
    const galleryItems = data.data.galleryCollection.items; // Array of slugs from galleryCollection

    return {
      pages: pageItems,
      galleries: galleryItems,
    }; // Return an object containing both arrays
  } catch (error) {
    console.error("Error fetching slugs from Contentful:", error);
    return { pages: [], galleries: [] }; // Return empty arrays if there's an error
  }
}

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dstimijog/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
        pathname: "/yc55p4rioxpm/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/media/**",
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
  async rewrites() {
    const { pages, galleries } = await fetchContentfulSlugs(); // Fetch slugs dynamically

    const slugToPageMap = {
      "/kontakt": "/contact",
      "/okolica": "/neighborhood", 
      "/cennik": "/pricing",
      "/o-domku": "/about", 
	  "/galeria": "/gallery",
	  "/galeria/domek-od-wewnatrz": "/gallery/domek-od-wewnatrz",
	  "/galeria/domek-od-zewnatrz": "/gallery/domek-od-zewnatrz"
    };

    // Create rewrites for page slugs
    const pageRewrites = pages.map(({ slug }) => {
      const destination = slugToPageMap[slug]; 
      return destination ? {
        source: `/${slug}`, 
        destination, 
      } : null; 
    }).filter(Boolean); 

    // Create rewrites for gallery slugs
    const galleryRewrites = galleries.map(({ slug }) => {
		const destination = slugToPageMap[slug]; 
      	return destination ? {
        source: `/${slug}`, // Keep the source as is
        destination
      }: null;
    }).filter(Boolean);

    // Combine both page and gallery rewrites
    return [...pageRewrites, ...galleryRewrites];
  },
};

module.exports = nextConfig;
