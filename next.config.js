/** @type {import('next').NextConfig} */



const nextConfig = {
   
    images: {
        domains: ["img.freepik.com,images.freepik.com", "images.pexels.com", "images.unsplash", "drive.google.com", "firebase.com", "firebasestorage.googleapis.com", "images.unsplash.com", "renukiran.b-cdn.net", 'tecdn.b-cdn.net', "niitfoundation.org", "niti.gov.in","media.istockphoto.com","cdn.pixabay.com"]
},
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) =>
            rule.test?.test?.('.svg'),
        )

        config.module.rules.push(
            // Reapply the existing rule, but only for svg imports ending in ?url
            {
                ...fileLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },
            // Convert all other *.svg imports to React components
            {
                test: /\.svg$/i,
                issuer: fileLoaderRule.issuer,
                resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        )

        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i

        return config
    },
}

module.exports =nextConfig;




