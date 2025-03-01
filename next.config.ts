import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // devIndicators: {
  //   appIsrStatus: false,
  // },
  // reactStrictMode: true,
  // poweredByHeader: false,
  // productionBrowserSourceMaps: true,
  // images: {
  //   domains: ["res.cloudinary.com"],
  // },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  }
  //  as any, // Workaround for
  //
  // Type '() => { source: string; headers: { key: string; value: string; }[]; }[]' is not assignable to type '() => Promise<Header[]>'.
  //   Type '{ source: string; headers: { key: string; value: string; }[]; }[]' is not assignable to type 'Promise<Header[]>'.
  //     Type '{ source: string; headers: { key: string; value: string; }[]; }' is not assignable to type 'Header'.
  //       Object literal may only specify known properties, and 'source' does not exist in type 'Header'.
};

export default nextConfig;
