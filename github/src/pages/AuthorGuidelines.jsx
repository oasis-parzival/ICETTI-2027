import { motion } from 'framer-motion';
import { FileText, ExternalLink, AlertCircle, CheckCircle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AuthorGuidelines() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Author Guidelines" subtitle="Instructions for paper submission and formatting" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
                    >
                        {/* PDF eXpress */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))' }}>
                                    <FileText size={28} style={{ color: '#38bdf8' }} />
                                </div>
                                <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>PDF eXpress</h3>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#cbd5e1' }}>
                                <div className="info-box">
                                    <h4 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                        <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                                        Before Creating a PDF
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>
                                        Proofread your source document thoroughly to confirm that it will require no revision.
                                    </p>
                                </div>

                                <div className="info-box">
                                    <h4 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                        <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                                        Creating your PDF eXpress Account
                                    </h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>
                                        <p>
                                            Log in to the IEEE PDF eXpress™ site –{' '}
                                            <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer"
                                                style={{ color: '#38bdf8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                                https://ieee-pdf-express.org <ExternalLink size={12} />
                                            </a>
                                        </p>
                                        <p style={{ fontWeight: 500, color: '#fff' }}>First-time users should do the following:</p>
                                        <ol style={{ listStyle: 'decimal', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <li>Select the New Users – Click Here link.</li>
                                            <li>
                                                Enter the following:
                                                <ul style={{ listStyle: 'disc', paddingLeft: '24px', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                    <li>Conference ID – <span style={{ color: '#38bdf8', fontFamily: 'monospace', fontWeight: 700 }}>63625X</span></li>
                                                    <li>Your email address</li>
                                                    <li>A password</li>
                                                </ul>
                                            </li>
                                            <li>Continue to enter information as prompted.</li>
                                        </ol>
                                        <p>An online confirmation will be displayed, and an email confirmation will be sent.</p>
                                    </div>
                                </div>

                                <div className="info-box">
                                    <h4 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                        <CheckCircle size={18} style={{ color: '#38bdf8' }} />
                                        Verifying your account setup
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>
                                        Previous users of PDF eXpress need to follow the above steps but should enter the same
                                        password that was used for previous conferences. Verify that your contact information is valid.
                                    </p>
                                </div>

                                {/* Important Note */}
                                <div style={{ borderRadius: '14px', padding: '20px 24px', border: '1px solid rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>
                                    <h4 className="heading-font" style={{ fontWeight: 600, color: '#fbbf24', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                        <AlertCircle size={18} />
                                        Important Note
                                    </h4>
                                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>
                                        Check all Authors names and title of paper in eCopyright while submitting once. If not appearing,
                                        add author name in CMT using edit submission first, then come to eCopyright to submit.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* IEEE Paper Template */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))' }}>
                                    <FileText size={28} style={{ color: '#a78bfa' }} />
                                </div>
                                <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>IEEE Paper Template</h3>
                            </div>

                            <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                                Use the official IEEE conference paper template for formatting your manuscript.
                            </p>

                            <a
                                href="https://www.ieee.org/conferences/publishing/templates.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '14px', fontWeight: 600, color: '#fff', background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)', textDecoration: 'none', transition: 'transform 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Visit IEEE Templates
                                <ExternalLink size={16} />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
