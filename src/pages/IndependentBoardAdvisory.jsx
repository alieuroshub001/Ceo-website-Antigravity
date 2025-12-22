import ServicePageLayout from '../components/shared/ServicePageLayout';

const IndependentBoardAdvisory = () => {
    const data = {
        title: "Independent \n Board Advisory",
        subtitle: "Governance & Strategic Oversight",
        mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop", // High-rise architecture
        description: "Providing boards with independent, technology-focused insights to ensure robust governance, risk mitigation, and future-proof decision making.",
        sections: [
            {
                title: "Digital Governance & Compliance",
                content: "Establishing frameworks to ensure technology initiatives comply with global regulations (GDPR, CCPA) and ethical standards, minimizing liability and reputational risk."
            },
            {
                title: "Technology Risk Oversight",
                content: "Identifying critical cybersecurity and infrastructure vulnerabilities, and advising on robust mitigation strategies to protect enterprise assets and stakeholder value."
            },
            {
                title: "M&A Tech Due Diligence",
                content: "Conducting deep-dive technical assessments during Mergers & Acquisitions to evaluate target company IP, code quality, and scalability, ensuring informed investment decisions."
            },
            {
                title: "Succession Planning & Mentorship",
                content: "Advising on technical leadership succession and providing mentorship to first-time CTOs and technical founders to groom the next generation of C-level talent."
            }
        ]
    };

    return <ServicePageLayout {...data} />;
};

export default IndependentBoardAdvisory;
