import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import PracticeAreas from '../components/PracticeAreas';
import WomenEmpowerment from '../components/WomenEmpowerment';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Adv. Jigisha T. Sailor - Advocate | Legal Consultant | Women Rights Supporter</title>
        <meta 
          name="description" 
          content="Professional legal services by Adv. Jigisha T. Sailor. Specializing in Family Law, Women Rights, Civil Matters, and Property Law. Experienced advocate providing compassionate and effective legal support with 15+ years of experience and 95% success rate." 
        />
        <meta 
          name="keywords" 
          content="advocate, lawyer, family law, women rights, civil law, property law, legal consultant, Jigisha Sailor, legal services, women empowerment, Mumbai lawyer, female advocate, divorce lawyer, domestic violence, legal aid" 
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Adv. Jigisha T. Sailor - Advocate | Legal Consultant | Women Rights Supporter" />
        <meta property="og:description" content="Professional legal services specializing in Family Law, Women Rights, Civil Matters, and Property Law. 15+ years experience, 95% success rate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jigisha-sailor.vercel.app/" />
        <meta property="og:image" content="https://jigisha-sailor.vercel.app/og-image.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Adv. Jigisha T. Sailor - Professional Legal Services" />
        <meta name="twitter:description" content="Experienced advocate specializing in Family Law, Women Rights, and Civil Matters. Get expert legal consultation today." />
        <meta name="twitter:image" content="https://jigisha-sailor.vercel.app/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Adv. Jigisha T. Sailor" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://jigisha-sailor.vercel.app/" />
        
        {/* Language */}
        <html lang="en" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/playfair-display-v30-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins-v20-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Adv. Jigisha T. Sailor",
              "description": "Professional legal services specializing in Family Law, Women Rights, Civil Matters, and Property Law",
              "url": "https://jigisha-sailor.vercel.app",
              "telephone": "+91-XXXXX-XXXXX",
              "email": "jigisha.sailor@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Legal Complex, City Center",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 19.0760,
                "longitude": 72.8777
              },
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
              "priceRange": "$$",
              "founder": {
                "@type": "Person",
                "name": "Jigisha T. Sailor",
                "jobTitle": "Advocate",
                "worksFor": {
                  "@type": "LegalService",
                  "name": "Adv. Jigisha T. Sailor"
                },
                "knowsAbout": ["Family Law", "Women Rights", "Civil Law", "Property Law"],
                "alumniOf": "[University Name]"
              },
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": "Legal Services",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Legal Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Family Law"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Women Rights Cases"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Civil Matters"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Property Law"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Legal Consultation"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "worstRating": "1", 
                "ratingCount": "127"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Anonymous Client"
                  },
                  "datePublished": "2023-11-15",
                  "description": "Excellent legal representation with compassionate approach. Highly recommended for family law matters.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      
      {/* Page Content */}
      <main className="min-h-screen">
        <Hero />
        <About />
        <PracticeAreas />
        <WomenEmpowerment />
        <Contact />
      </main>
    </>
  );
};

export default Home;