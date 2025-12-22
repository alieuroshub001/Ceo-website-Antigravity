import ServicePageLayout from '../components/shared/ServicePageLayout';

const CSuiteAdvisory = () => {
    const data = {
        title: "C-Suite \n Advisory",
        subtitle: "Executive Leadership & Strategy",
        mainImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop", // Professional meeting/boardroom
        description: "Empowering leadership teams with the clarity, strategy, and operational frameworks needed to navigate complex growth phases and market shifts.",
        sections: [
            {
                title: "Interim CxO Leadership",
                content: "Stepping in as Interim CEO, COO, or Chief Strategy Officer to stabilize operations, drive critical change initiatives, and bridge leadership gaps during transitional periods."
            },
            {
                title: "Strategic Growth Mapping",
                content: "Developing comprehensive long-term strategies that align product vision with market demands, ensuring sustainable revenue growth and scalable business models."
            },
            {
                title: "Operational Restructuring",
                content: "Auditing and redesigning internal workflows, organizational hierarchies, and resource allocation to maximize efficiency and reduce operational overhead."
            },
            {
                title: "Investor Relations & Fundraising",
                content: "Crafting compelling investment narratives, preparing due diligence documentation, and advising on fundraising strategies to secure capital for negotiation and expansion."
            }
        ]
    };

    return <ServicePageLayout {...data} />;
};

export default CSuiteAdvisory;
