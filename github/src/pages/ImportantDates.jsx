import { motion } from 'framer-motion';
import { Calendar, Clock, FileCheck, Send, Award, CreditCard } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const dates = [
    { icon: Send, event: 'Call for Papers Announcement', date: '1st May 2026', status: 'upcoming', color: '#0ea5e9' },
    { icon: Send, event: 'Paper Submission Deadline', date: '15th January 2027', status: 'upcoming', color: '#8b5cf6' },
    { icon: FileCheck, event: 'Notification of Acceptance', date: '15th March 2027', status: 'upcoming', color: '#06b6d4' },
    { icon: Clock, event: 'Final Camera-Ready Paper', date: '7th April 2027', status: 'upcoming', color: '#10b981' },
    { icon: Award, event: 'Conference Dates', date: '4th & 5th June 2027', status: 'upcoming', color: '#f43f5e' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function ImportantDates() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Important Dates" subtitle="Key milestones and deadlines for ICETTI 2027" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    {/* Timeline */}
                    <div style={{ position: 'relative' }}>
                        {/* Vertical line - hidden on mobile */}
                        <div style={{ position: 'absolute', left: '28px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #0ea5e9, #8b5cf6, transparent)', display: 'none' }} className="timeline-line-desktop" />

                        <style>{`.timeline-line-desktop { display: none !important; } @media (min-width: 768px) { .timeline-line-desktop { display: block !important; } }`}</style>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                        >
                            {dates.map((item, idx) => (
                                <motion.div key={idx} variants={itemVariants} style={{ position: 'relative', paddingLeft: '0' }}>
                                    <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                                        <div
                                            className="icon-box-sm"
                                            style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, transition: 'transform 0.3s' }}
                                        >
                                            <item.icon size={22} style={{ color: item.color }} />
                                        </div>
                                        <div style={{ flex: 1, minWidth: '200px' }}>
                                            <h3 className="heading-font" style={{ fontWeight: 600, color: '#fff', fontSize: '17px' }}>{item.event}</h3>
                                            <p style={{ fontWeight: 600, marginTop: '4px', color: item.color, fontSize: '15px' }}>{item.date}</p>
                                        </div>
                                        {item.status === 'active' && (
                                            <span style={{ padding: '4px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600, background: 'rgba(16,185,129,0.12)', color: '#4ade80', border: '1px solid rgba(16,185,129,0.2)' }}>
                                                Active
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="info-box"
                        style={{ marginTop: '40px', textAlign: 'center' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '8px' }}>
                            <Calendar size={18} style={{ color: '#38bdf8' }} />
                            <span className="heading-font" style={{ fontWeight: 600, color: '#fff' }}>Mark Your Calendar</span>
                        </div>
                        <p style={{ color: '#94a3b8', fontSize: '14px' }}>
                            All dates are subject to updates. Please check back regularly for the latest information.
                        </p>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
