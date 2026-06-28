const nextConfig = {
  output: "export",
  trailingSlash: true,
  // ปิดการใช้งาน Image Optimization ชั่วคราว เนื่องจากต้องใช้เซิร์ฟเวอร์ในการทำงาน
  images: {
    unoptimized: true, 
  },
  // 🔥 สำคัญมากสำหรับ GitHub Pages
  basePath: "/AgriLink/out",
  assetPrefix: "/AgriLink/out/",
}

module.exports = nextConfig
