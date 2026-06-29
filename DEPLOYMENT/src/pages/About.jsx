import { motion } from 'framer-motion';
import { GraduationCap, Building2, Target, Lightbulb } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
    return (
        <PageWrapper>
            {/* Page Header */}
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="About" subtitle="Learn more about the conference and the host institute" />
                </div>
            </section>

            {/* About Conference */}
            <section style={{ paddingBottom: '48px' }}>
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass-card"
                        style={{ marginBottom: '32px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                            <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))' }}>
                                <Target size={28} style={{ color: '#38bdf8' }} />
                            </div>
                            <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: '#fff' }}>About Conference</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#cbd5e1', lineHeight: 1.8, fontSize: '16px' }}>
                            <p>
                                The aim of <span style={{ color: '#38bdf8', fontWeight: 600 }}>ICETTI conference</span> is to provide a platform for students,
                                academicians, practitioners, researchers, and the industry to publish and present their innovative work in
                                Industry 4.0 technologies.
                            </p>
                            <p>
                                Industry 4.0 is marked by breakthroughs in emerging technologies in the field of{' '}
                                <span style={{ color: '#fff', fontWeight: 500 }}>Robotics, Artificial Intelligence, Nanotechnology, Quantum Computing,
                                    Biotechnology, Internet of Things, Industrial Internet of Things, Decentralized Consensus,
                                    Fifth-generation Wireless Technologies, 3D Printing, and Autonomous Vehicles.</span>
                            </p>
                        </div>

                        {/* Highlights */}
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginTop: '32px' }}
                        >
                            {[
                                { icon: Lightbulb, title: 'Innovation Focus', desc: 'Showcasing cutting-edge research in Industry 4.0 technologies', color: '#a78bfa', bgColor: 'rgba(139,92,246,0.12)' },
                                { icon: GraduationCap, title: 'Academic Excellence', desc: 'Bringing together the best minds in technology and research', color: '#38bdf8', bgColor: 'rgba(14,165,233,0.12)' },
                            ].map((item) => (
                                <motion.div key={item.title} variants={itemVariants} className="info-box" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <div className="icon-box-sm" style={{ background: item.bgColor }}>
                                        <item.icon size={22} style={{ color: item.color }} />
                                    </div>
                                    <div>
                                        <h4 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '4px', fontSize: '15px' }}>{item.title}</h4>
                                        <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* About Institute */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                            <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))' }}>
                                <Building2 size={28} style={{ color: '#a78bfa' }} />
                            </div>
                            <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: '#fff' }}>About Institute</h3>
                        </div>

                        {/* Institute Image */}
                        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', marginBottom: '28px' }}>
                            <img
                                src="/INSTITUTE/INSTITUTE.jpg"
                                alt="SIES Graduate School of Technology"
                                style={{
                                    width: '100%',
                                    height: '280px',
                                    objectFit: 'cover',
                                    display: 'block',
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(180deg, transparent 50%, rgba(15, 23, 42, 0.7) 100%)',
                                pointerEvents: 'none',
                            }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#cbd5e1', lineHeight: 1.8, fontSize: '16px' }}>
                            <p>
                                <span style={{ color: '#38bdf8', fontWeight: 600 }}>SIES Graduate School of Technology</span>, an integral part of the well
                                established community, started in the year 2002, is located in the midst of an educational hub in Navi Mumbai
                                imparting quality based technical education.
                            </p>
                            <p>
                                The institute offers four year Bachelor of Engineering courses in{' '}
                                <span style={{ color: '#fff', fontWeight: 500 }}>Electronics and Telecommunication Engineering, Computer Engineering,
                                    Information Technology, Electronics & Computer Science, Artificial Intelligence & Machine Learning,
                                    Artificial Intelligence & Data Science, Computer Science and Engineering
                                    (Internet of Things and Cyber Security including Blockchain Technology), Mechanical Engineering</span>,
                                and two post graduation courses in{' '}
                                <span style={{ color: '#fff', fontWeight: 500 }}>Artificial Intelligence & Data Science</span> and{' '}
                                <span style={{ color: '#fff', fontWeight: 500 }}>Information Security</span>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
