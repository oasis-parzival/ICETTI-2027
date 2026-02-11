import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
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

const contactInfo = [
    {
        icon: MapPin, title: 'Address',
        content: 'SIES Graduate School of Technology\nSri Chandrasekarendra Saraswati Vidyapuram,\nPlot IC-E, Sector V, Nerul,\nNavi Mumbai 400706, INDIA',
        color: '#0ea5e9', wide: true,
    },
    {
        icon: Phone, title: 'Phone',
        content: '(91) 6108 2402 / 6108 2417\n6108 2418 / 6108 2419 / 6108 2427\nFax: (91) (22) 27708779',
        color: '#8b5cf6',
    },
    {
        icon: Clock, title: 'Contact Hours',
        content: 'Monday to Friday\n9:30 AM to 5:30 PM IST',
        color: '#10b981',
    },
    {
        icon: Mail, title: 'Email',
        content: 'iceti4t@sies.edu.in',
        isLink: true, href: 'mailto:iceti4t@sies.edu.in',
        color: '#f59e0b',
    },
    {
        icon: Globe, title: 'Website',
        content: 'www.iceti4t.siesgst.edu.in',
        isLink: true, href: 'https://iceti4t.siesgst.edu.in',
        color: '#ec4899',
    },
];

export default function ContactUs() {
    return (
        <PageWrapper>
            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Contact Us" subtitle="Get in touch with the conference organizers" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '20px' }}
                    >
                        {contactInfo.map((item) => (
                            <motion.div
                                key={item.title}
                                variants={itemVariants}
                                className="glass-card group"
                                style={item.wide ? { gridColumn: '1 / -1' } : {}}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                    <div
                                        className="icon-box"
                                        style={{ background: `${item.color}12`, border: `1px solid ${item.color}25`, transition: 'transform 0.3s' }}
                                    >
                                        <item.icon size={24} style={{ color: item.color }} />
                                    </div>
                                    <div>
                                        <h3 className="heading-font" style={{ fontWeight: 700, fontSize: '18px', color: '#fff', marginBottom: '8px' }}>{item.title}</h3>
                                        {item.isLink ? (
                                            <a
                                                href={item.href}
                                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 500, fontSize: '15px' }}
                                            >
                                                {item.content}
                                            </a>
                                        ) : (
                                            <p style={{ color: '#94a3b8', whiteSpace: 'pre-line', lineHeight: 1.8, fontSize: '15px' }}>{item.content}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Map embed */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card"
                        style={{ marginTop: '32px', padding: 0, overflow: 'hidden' }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.544892345!2d73.01550!3d19.03640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24cce39417b%3A0x5099fd2bbd09e96f!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0, display: 'block', opacity: 0.85 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="SIES Graduate School of Technology Location"
                        />
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
