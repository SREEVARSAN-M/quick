// next.config.ts
module.exports = {
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com'],
  },
  trailingSlash: true,  // Ensures compatibility with GitHub Pages
  output: "export",     // Enables static site export
  basePath: '',         // Optional: Set if your GitHub Pages site uses a sub-path
};
