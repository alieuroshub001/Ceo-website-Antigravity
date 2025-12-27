import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonical, type = 'website', image }) => {
    const siteTitle = 'Sheikh Nabeel | Strategic Growth Advisor';
    const siteUrl = 'https://sheikhnabeel.com';
    const defaultImage = 'https://sheikhnabeel.com/wp-content/uploads/2025/04/1-1-1536x1536.png'; // Update with actual default OG image if available

    const fullTitle = title ? `${title} | Sheikh Nabeel` : siteTitle;
    const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
    const metaImage = image || defaultImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description || "Strategic advisory for C-Suite executives and boards. Specializing in digital transformation, governance, and scalable growth."} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
};

export default SEO;
