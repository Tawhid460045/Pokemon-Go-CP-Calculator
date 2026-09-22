
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface SitemapXmlProps {
  type: 'main' | 'index' | 'page' | 'post';
}

const SitemapXml = ({ type }: SitemapXmlProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // In production, the XML files should be served directly by the web server
    // This component is just a fallback for when the static files aren't found
    
    // Redirect to the appropriate XML file
    let xmlPath = '';
    
    switch (type) {
      case 'main':
        xmlPath = '/sitemap.xml';
        break;
      case 'index':
        xmlPath = '/sitemap_index.xml';
        break;
      case 'page':
        xmlPath = '/page-sitemap.xml';
        break;
      case 'post':
        xmlPath = '/post-sitemap.xml';
        break;
    }
    
    // Try to fetch the XML file
    fetch(xmlPath)
      .then(response => {
        if (!response.ok) {
          console.error(`Sitemap file not found: ${xmlPath}`);
          navigate('/not-found', { replace: true });
        }
      })
      .catch(error => {
        console.error(`Error fetching sitemap: ${error}`);
        navigate('/not-found', { replace: true });
      });
    
    console.log(`Sitemap requested: ${type} (${xmlPath})`);
  }, [type, navigate]);

  // This component doesn't render anything
  return null;
};

export default SitemapXml;
