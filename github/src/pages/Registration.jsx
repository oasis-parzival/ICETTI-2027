import { motion } from 'framer-motion';
import { CreditCard, AlertCircle, Building2, ExternalLink, Info, Clock } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Registration() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Registration" subtitle="Register for ICETTI 2027 Conference" />
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
                        {/* Registration Guidelines */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))' }}>
                                    <Info size={28} style={{ color: '#38bdf8' }} />
                                </div>
                                <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>Registration Guidelines</h3>
                            </div>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px', listStyle: 'none' }}>
                                {[
                                    'It is mandatory that at least one of the authors should register in order to include the paper in the technical programme.',
                                    'Maximum page limit of a paper is 6 pages in IEEE PDF Xpress compatible pdf format.',
                                    'The papers exceeding 6 pages (a maximum of 8 pages) should pay extra page charge of Rs.1000/- (Indian authors) or 20 USD (Foreign authors).',
                                ].map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#94a3b8', fontSize: '15px', lineHeight: 1.7 }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0ea5e9', marginTop: '10px', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Early Bird Registration */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))' }}>
                                    <Clock size={28} style={{ color: '#4ade80' }} />
                                </div>
                                <div>
                                    <h3 className="heading-font" style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>Early Bird Registration</h3>
                                    <p style={{ color: '#4ade80', fontSize: '13px', fontWeight: 500, marginTop: '2px' }}>Early Bird (Including 18% GST)</p>
                                </div>
                            </div>

                            <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid rgba(148,163,184,0.08)' }}>
                                <table className="styled-table">
                                    <thead>
                                        <tr>
                                            <th style={{ borderTopLeftRadius: '12px' }}>Category</th>
                                            <th style={{ textAlign: 'center' }}>Indian</th>
                                            <th style={{ textAlign: 'center', borderTopRightRadius: '12px' }}>Foreign</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {['IEEE Student Member', 'IEEE Member', 'Non-IEEE Student', 'Non-IEEE Member', 'Industry', 'Attendee'].map((cat) => (
                                            <tr key={cat}>
                                                <td style={{ color: '#cbd5e1', fontSize: '14px' }}>{cat}</td>
                                                <td style={{ textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: '14px' }}>Contact Organizer</td>
                                                <td style={{ textAlign: 'center', color: '#38bdf8', fontWeight: 600, fontSize: '14px' }}>Contact Organizer</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        {/* Regular Registration */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.05))' }}>
                                    <CreditCard size={28} style={{ color: '#a78bfa' }} />
                                </div>
                                <div>
                                    <h3 className="heading-font" style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>Regular Registration</h3>
                                    <p style={{ color: '#a78bfa', fontSize: '13px', fontWeight: 500, marginTop: '2px' }}>Regular Registration (Including 18% GST)</p>
                                </div>
                            </div>

                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none', marginBottom: '28px' }}>
                                {[
                                    'Each registration includes admission to all technical sessions, workshops, exhibition hall, coffee breaks and lunches, as well as a welcome reception.',
                                    'IEEE members are requested to upload IEEE membership card/receipt of payment during the online registration process if registering under IEEE category.',
                                    'Students are requested to upload valid student ID card (front and back side) during the online registration process if registering under that student category.',
                                    'Please keep a copy of the transaction ID, generated by the payment gateway as well as by your bank.',
                                    'All correspondence regarding registration for IEEE ICETTI-2027 should contain Paper ID as well as registration confirmation number.',
                                    'Please note that IEEE ICETTI-2027 will not be responsible for any loss, financial or otherwise, caused by improper transactions conducted online.',
                                ].map((text, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#94a3b8', fontSize: '14px', lineHeight: 1.7 }}>
                                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6', marginTop: '9px', flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdtj64R1DX_t4YDnBYdkOvVdy5PWLJseqbQWUe_-hJ6y7MgTA/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '14px', fontWeight: 600, color: '#fff', background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)', textDecoration: 'none', transition: 'transform 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            >
                                Registration Form
                                <ExternalLink size={16} />
                            </a>
                        </motion.div>

                        {/* Payment Details */}
                        <motion.div variants={itemVariants} className="glass-card">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                <div className="icon-box" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))' }}>
                                    <Building2 size={28} style={{ color: '#4ade80' }} />
                                </div>
                                <h3 className="heading-font" style={{ fontWeight: 700, fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', color: '#fff' }}>Payment Details</h3>
                            </div>

                            <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '15px', lineHeight: 1.7 }}>
                                All participants are requested to kindly fill the required details after submitting the Registration fee.
                                Before submitting the form, participant must take a copy of a Fee receipt (preferably in pdf format).
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '12px', marginBottom: '28px' }}>
                                {[
                                    { label: 'Bank Account Number', value: '520101005681101' },
                                    { label: 'Bank Account Name', value: 'SIES Graduate School of Technology' },
                                    { label: 'Bank Name', value: 'Union Bank of India' },
                                    { label: 'Branch Name', value: 'Nerul, Navi Mumbai' },
                                    { label: 'IFSC Code', value: 'UBIN0905721' },
                                    { label: 'MICR Code', value: '400026295' },
                                    { label: 'BSR Code', value: '0290169' },
                                    { label: 'Swift Code', value: 'UBININBBGHT' },
                                    { label: 'Account Type', value: 'Saving' },
                                ].map((item, idx) => (
                                    <div key={idx} className="info-box">
                                        <p style={{ color: '#64748b', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{item.label}</p>
                                        <p style={{ color: '#fff', fontWeight: 500, fontFamily: 'monospace', fontSize: '14px' }}>{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Refund Policy */}
                            <div style={{ borderRadius: '14px', padding: '20px 24px', border: '1px solid rgba(244,63,94,0.2)', background: 'rgba(244,63,94,0.05)' }}>
                                <h4 className="heading-font" style={{ fontWeight: 600, color: '#fb7185', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}>
                                    <AlertCircle size={18} />
                                    Refund and Cancellation Policy
                                </h4>
                                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7 }}>
                                    A candidate once registered and paid the registration fee is not allowed to cancel the registration.
                                    The registration fee for the conference once paid is not refundable.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
