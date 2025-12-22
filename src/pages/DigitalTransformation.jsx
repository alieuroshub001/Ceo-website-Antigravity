import ServicePageLayout from '../components/shared/ServicePageLayout';

const DigitalTransformation = () => {
    const data = {
        title: "Digital Business \n Transformation",
        subtitle: "Innovation & Implementation",
        mainImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", // Abstract tech/server
        description: "Leveraging cutting-edge technologies to modernize business operations, enhance customer experiences, and drive competitive advantage in the digital economy.",
        sections: [
            {
                title: "Cloud & DevOps Modernization",
                content: "Migrating legacy systems to scalable cloud infrastructures and implementing DevOps pipelines to accelerate deployment and reliability. Expertise in AWS, Azure, and automated CI/CD workflows."
            },
            {
                title: "Data Intelligence & AI",
                content: "Turning raw data into actionable insights through advanced Data Mining, Analytics, and bespoke AI Solutions. We help businesses predict trends and automate complex decision-making processes."
            },
            {
                title: "Enterprise Systems (ERP/CRM)",
                content: "Implementing and customizing robust ERP and CRM solutions (HubSpot, Salesforce, SAP) to unify business data, streamline operations, and improve customer relationship management."
            },
            {
                title: "Product Engineering (SaaS & Mobile)",
                content: "End-to-end design and development of scalable SaaS platforms, mobile applications, and e-commerce solutions. Focusing on intuitive UI/UX and robust backend architecture."
            },
            {
                title: "Cybersecurity & Risk",
                content: "Deploying comprehensive cybersecurity protocols to safeguard digital assets, including penetration testing, vulnerability assessments, and secure infrastructure design."
            }
        ]
    };

    return <ServicePageLayout {...data} />;
};

export default DigitalTransformation;
