import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

export default function AdvisoryCommittee() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Advisory Committee" subtitle="Distinguished experts guiding ICETTI 2027" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card"
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                            <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))' }}>
                                <Users size={28} style={{ color: '#a78bfa' }} />
                            </div>
                            <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>Advisory Committee Members</h3>
                        </div>

                        <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.8, marginBottom: '28px' }}>
                            The Advisory Committee comprises esteemed academicians, researchers, and industry leaders who provide
                            strategic guidance and direction for the conference. Their expertise ensures the highest quality of
                            academic discourse and industry relevance.
                        </p>

                        <div className="info-box" style={{ textAlign: 'center' }}>
                            <p style={{ color: '#94a3b8', fontSize: '15px' }}>
                                Advisory Committee details will be updated soon. Please check back for the complete list of members.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
