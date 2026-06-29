import { motion } from 'framer-motion';

export default function SectionHeading({ title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '56px' }}
        >
            <h1
                className="heading-font gradient-text"
                style={{ fontWeight: 800, fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '16px' }}
            >
                {title}
            </h1>
            {subtitle && (
                <p style={{ color: '#94a3b8', fontSize: '17px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
                    {subtitle}
                </p>
            )}
            <div className="glow-line" style={{ maxWidth: '120px', margin: '24px auto 0', height: '2px' }} />
        </motion.div>
    );
}
