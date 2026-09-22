
// This script is automatically executed after the build process
// You don't need to run it manually anymore

const reactSnap = require('react-snap');
const fs = require('fs');
const path = require('path');

const run = async () => {
  console.log('Running react-snap to generate static HTML for better SEO...');
  
  // First run react-snap to generate static HTML files
  await reactSnap.run({
    puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    skipThirdPartyRequests: true,
    minifyHtml: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      decodeEntities: true,
      keepClosingSlash: true,
      sortAttributes: true,
      sortClassName: true
    },
    // Preserve dynamic routes
    fixWebpackChunksIssue: false,
    removeBlobs: true,
    destination: 'dist',
  });
  
  console.log('Static HTML generation complete! Your site is now SEO-friendly.');
  
  // Now copy sitemap files to the dist directory
  console.log('Copying sitemap files to distribution folder...');
  const sitemapFiles = [
    'sitemap.xml',
    'sitemap_index.xml',
    'page-sitemap.xml',
    'post-sitemap.xml'
  ];
  
  // Ensure all sitemap files exist in the public directory
  sitemapFiles.forEach(file => {
    const sourcePath = path.resolve(__dirname, '../public', file);
    const destPath = path.resolve(__dirname, '../dist', file);
    
    try {
      if (fs.existsSync(sourcePath)) {
        // Copy existing file
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Successfully copied ${file} to dist folder`);
      } else {
        console.error(`Warning: Source file ${sourcePath} does not exist`);
      }
    } catch (error) {
      console.error(`Error copying ${file}:`, error);
    }
  });
  
  // Update the dates in all XML files to today's date
  const today = new Date().toISOString().split('T')[0];
  sitemapFiles.forEach(file => {
    const filePath = path.resolve(__dirname, '../dist', file);
    try {
      if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace all lastmod dates with today
        content = content.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${today}</lastmod>`);
        fs.writeFileSync(filePath, content);
        console.log(`Updated dates in ${file}`);
      }
    } catch (error) {
      console.error(`Error updating dates in ${file}:`, error);
    }
  });
  
  console.log('Sitemap deployment complete!');
};

run();
