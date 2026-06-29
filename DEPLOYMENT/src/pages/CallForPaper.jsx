import { motion } from 'framer-motion';
import { Brain, Cpu, Shield, Wifi, Cog, Leaf } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tracks = [
    {
        icon: Brain, letter: 'A', title: 'Artificial Intelligence and Machine Learning',
        color: { bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.2)', text: '#38bdf8', dot: '#0ea5e9' },
        topics: [
            'AI for industrial automation', 'Deep learning in industrial applications', 'AI-powered predictive maintenance',
            'Decision-making in smart factories', 'Big Data and Analytics', 'Data-driven manufacturing',
            'Predictive analytics in industry', 'Real-time data processing', 'AI and machine learning applications in Industry 4.0',
        ],
    },
    {
        icon: Cpu, letter: 'B', title: 'Industry Technologies and Applications',
        color: { bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.2)', text: '#a78bfa', dot: '#8b5cf6' },
        topics: [
            'Trends in Industry 4.0', 'AR/VR', 'Supply Chain Management', 'Flexible and Agile Manufacturing Systems',
            'Big Data Analytics in Manufacturing and Logistics', 'Product and Brand management', 'Retailing Issues',
            'Research Methods in marketing', 'Risk Assessment', 'Engineering Issues', 'Scheduling Techniques', 'User Interface Design',
        ],
    },
    {
        icon: Shield, letter: 'C', title: 'Computing Architecture and System Security',
        color: { bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)', text: '#6ee7b7', dot: '#10b981' },
        topics: [
            'Cyber Security and Data Privacy', 'Cyber-Physical Security', 'Security challenges in Industry 4.0',
            'Cybersecurity for smart factories', 'Risk management and resilience in industrial systems',
            'Protecting critical infrastructure from cyber threat', 'Blockchain', 'Multimedia, Computer Vision',
            'Computational Intelligence', 'Edge Computing in 4G/5G Systems', 'Edge architectures for 4G/5G networks',
            'Distributed edge computing models', 'Integration of cloud and edge computing', 'Network slicing and edge computing',
        ],
    },
    {
        icon: Wifi, letter: 'D', title: 'Industrial Internet of Things (IoT)',
        color: { bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.2)', text: '#fdba74', dot: '#f97316' },
        topics: [
            'IoT for Energy Technologies', 'Wireless power transfer', 'Smart sensing technologies',
            'Network applications, sensor devices and data technologies in smart grid',
            'Internet of Things (IoT) in manufacturing', 'Connectivity and communication technologies',
        ],
    },
    {
        icon: Cog, letter: 'E', title: 'Instrumentation and Automation',
        color: { bg: 'rgba(244,63,94,0.1)', border: 'rgba(244,63,94,0.2)', text: '#fda4af', dot: '#f43f5e' },
        topics: [
            'E-vehicle', 'Humanoid and mobile robotics', 'VLSI and Embedded systems',
            'Neuro-Fuzzy control and applications', 'Biomedical signal processing and applications',
            'Autonomous mobile robots (AMRs)', 'RPA in manufacturing', 'Metal 3D printing', 'Bioprinting technologies',
            'On-demand manufacturing', 'Real-time factory simulation', 'Predictive maintenance using digital twins',
            'IoT-enabled manufacturing execution systems (MES)', 'AR-assisted assembly', 'VR training modules',
            'Wearable technology in manufacturing',
        ],
    },
    {
        icon: Leaf, letter: 'F', title: 'Environment and Sustainability',
        color: { bg: 'rgba(132,204,22,0.1)', border: 'rgba(132,204,22,0.2)', text: '#bef264', dot: '#84cc16' },
        topics: [
            'Job design perspective in Industry 4.0', 'Green Manufacturing and Transportation',
            'Green Economy and Sustainable Development', 'Sustainability Standards and Corporate Governance',
            'Quality Management & Assurance', 'Energy and water Conservation', 'Renewable Energy',
            'Green and Natural Resource management', 'Green building and management', 'Sustainable communities', 'Pollution prevention',
        ],
    },
];

export default function CallForPaper() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Call for Paper" subtitle="We invite original research papers in the following tracks" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
                    >
                        {tracks.map((track) => (
                            <motion.div key={track.letter} variants={itemVariants} className="glass-card group">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                    <div
                                        className="icon-box"
                                        style={{ background: track.color.bg, border: `1px solid ${track.color.border}`, transition: 'transform 0.3s' }}
                                    >
                                        <track.icon size={24} style={{ color: track.color.text }} />
                                    </div>
                                    <div>
                                        <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: track.color.text }}>
                                            Track {track.letter}
                                        </span>
                                        <h3 className="heading-font" style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>{track.title}</h3>
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '12px 32px' }}>
                                    {track.topics.map((topic, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: '#94a3b8' }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: track.color.dot, marginTop: '7px', flexShrink: 0 }} />
                                            <span style={{ transition: 'color 0.2s', lineHeight: 1.6 }}>{topic}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
