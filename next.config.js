const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: "export",
  trailingSlash: true,
  // ปิดการใช้งาน Image Optimization ชั่วคราว เนื่องจากต้องใช้เซิร์ฟเวอร์ในการทำงาน
  images: {
    unoptimized: true, 
  },
  // 🔥 สำคัญมากสำหรับ GitHub Pages
  basePath: isProd ? '/AgriLink' : '',
  assetPrefix: isProd ? '/AgriLink/' : '',
}

module.exports = nextConfig
