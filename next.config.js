/** @type {import('next').NextConfig} */



const nextConfig = {
    experimental:{
        appdir:true,
    },
    images: {
        hostname:["images.freepik.com","images.pexels.com"],
        domains:["images.freepik.com","images.pexels.com"]
}
}

module.exports =nextConfig;




