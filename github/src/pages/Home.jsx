import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    CalendarDays,
    MapPin,
    ArrowRight,
    Cpu,
    Brain,
    Shield,
    Wifi,
    Cog,
    Leaf,
    Clock,
    FileText,
    Users,
    ChevronRight,
} from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const tracks = [
    {
        icon: Brain,
        title: 'AI & Machine Learning',
        desc: 'AI for industrial automation, deep learning, predictive maintenance, and big data analytics.',
        color: '#0ea5e9',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&q=80',
    },
    {
        icon: Cpu,
        title: 'Industry Technologies',
        desc: 'AR/VR, supply chain management, agile manufacturing, and Industry 4.0 trends.',
        color: '#8b5cf6',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop&q=80',
    },
    {
        icon: Shield,
        title: 'Computing & Security',
        desc: 'Cyber-physical security, blockchain, edge computing, and network slicing.',
        color: '#10b981',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop&q=80',
    },
    {
        icon: Wifi,
        title: 'Industrial IoT',
        desc: 'Smart sensing, wireless power transfer, IoT in manufacturing, and connectivity.',
        color: '#f59e0b',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&q=80',
    },
    {
        icon: Cog,
        title: 'Instrumentation & Automation',
        desc: 'Robotics, VLSI, 3D printing, digital twins, and AR-assisted assembly.',
        color: '#f43f5e',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&q=80',
    },
    {
        icon: Leaf,
        title: 'Environment & Sustainability',
        desc: 'Green manufacturing, renewable energy, sustainable development, and conservation.',
        color: '#84cc16',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&q=80',
    },
];

const quickLinks = [
    { icon: FileText, label: 'Call for Paper', path: '/call-for-paper', desc: 'Submit your research' },
    { icon: Clock, label: 'Important Dates', path: '/important-dates', desc: 'Key deadlines' },
    { icon: Users, label: 'Registration', path: '/registration', desc: 'Register now' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Home() {
    return (
        <PageWrapper>
            {/* ===== HERO SECTION ===== */}
            <section style={{ position: 'relative', minHeight: 'calc(100vh - 84px)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'visible' }}>
                {/* Background image */}
                <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop&q=80"
                    alt=""
                    aria-hidden="true"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Dark cinematic overlay — extended downward for seamless blend */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: '-120px', background: 'linear-gradient(180deg, rgba(2,6,23,0.82) 0%, rgba(2,6,23,0.68) 35%, rgba(2,6,23,0.78) 60%, rgba(2,6,23,0.95) 80%, rgb(2,6,23) 100%)' }} />
                {/* Subtle color accent orbs */}
                <div style={{ position: 'absolute', top: '10%', left: '5%', width: '400px', height: '400px', background: 'rgba(14,165,233,0.06)', borderRadius: '50%', filter: 'blur(120px)' }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '500px', height: '500px', background: 'rgba(139,92,246,0.05)', borderRadius: '50%', filter: 'blur(140px)' }} />

                {/* Hero CSS for glowing text */}
                <style>{`
                    .font-tech { font-family: 'Space Grotesk', sans-serif; }
                    
                    /* Liquid Metal Text Animation */
                    .text-liquid-metal {
                        background: linear-gradient(
                            to bottom,
                            #ffffff 0%,
                            #cbd5e1 20%,
                            #94a3b8 40%,
                            #e2e8f0 55%,
                            #ffffff 80%,
                            #64748b 100%
                        );
                        background-size: 100% 200%;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        animation: shine-metal 4s ease-in-out infinite alternate;
                        filter: drop-shadow(0 0 15px rgba(255,255,255,0.3));
                    }
                    
                    .text-electric-blue {
                        background: linear-gradient(135deg, #7dd3fc 0%, #0ea5e9 50%, #0284c7 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        filter: drop-shadow(0 0 25px rgba(14, 165, 233, 0.5));
                    }

                    @keyframes shine-metal {
                        0% { background-position: 0% 0%; filter: drop-shadow(0 0 15px rgba(255,255,255,0.3)); }
                        100% { background-position: 0% 100%; filter: drop-shadow(0 0 30px rgba(255,255,255,0.5)); }
                    }

                    /* Button Glow Effects — Cyber Industrial */
                    .btn-glow-primary {
                        position: relative;
                        overflow: hidden;
                        background: linear-gradient(135deg, #0c4a6e, #0369a1, #0ea5e9);
                        background-size: 200% 200%;
                        animation: gradient-shift 4s ease infinite;
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 0 15px rgba(14, 165, 233, 0.3), inset 0 1px 0 rgba(255,255,255,0.1);
                        clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
                        border: none;
                    }
                    .btn-glow-primary::before {
                        content: '';
                        position: absolute;
                        top: 0; left: -100%;
                        width: 100%; height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
                        transition: left 0.6s;
                    }
                    .btn-glow-primary::after {
                        content: '';
                        position: absolute;
                        inset: 0;
                        background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px);
                        pointer-events: none;
                    }
                    .btn-glow-primary:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 0 30px rgba(56, 189, 248, 0.6), 0 0 60px rgba(56, 189, 248, 0.2), inset 0 1px 0 rgba(255,255,255,0.15);
                    }
                    .btn-glow-primary:hover::before {
                        left: 100%;
                    }

                    .btn-glow-glass {
                        position: relative;
                        overflow: hidden;
                        background: rgba(8, 12, 30, 0.6);
                        border: 1px solid rgba(56, 189, 248, 0.2);
                        backdrop-filter: blur(10px);
                        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                        clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
                    }
                    .btn-glow-glass::before {
                        content: '';
                        position: absolute;
                        top: 0; left: -100%;
                        width: 100%; height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.1), transparent);
                        transition: left 0.6s;
                        pointer-events: none;
                    }
                    .btn-glow-glass:hover {
                        border-color: rgba(56, 189, 248, 0.5);
                        box-shadow: 0 0 20px rgba(56, 189, 248, 0.3), inset 0 0 20px rgba(56, 189, 248, 0.05);
                        color: #7dd3fc !important;
                        text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
                        transform: translateY(-3px);
                    }
                    .btn-glow-glass:hover::before {
                        left: 100%;
                    }
                `}</style>

                <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

                    {/* Logo + Main heading side by side */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(20px, 4vw, 48px)', marginBottom: '24px', flexWrap: 'wrap' }}
                    >
                        {/* Logo */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            src="/LOGO/LOGO.png"
                            alt="SIES GST Logo"
                            style={{
                                height: 'clamp(180px, 22vw, 280px)',
                                width: 'auto',
                                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))'
                            }}
                        />

                        {/* ICETTI 2027 text */}
                        <h1
                            className="font-tech"
                            style={{ fontWeight: 800, fontSize: 'clamp(4rem, 10vw, 8rem)', lineHeight: 0.9, letterSpacing: '-0.03em', textAlign: 'left' }}
                        >
                            <span className="text-liquid-metal" style={{ display: 'block' }}>ICETTI</span>
                            <span className="text-electric-blue" style={{ display: 'block', marginTop: '4px', fontSize: '0.9em' }}>2027</span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{ fontSize: 'clamp(0.95rem, 2.2vw, 1.2rem)', color: 'rgba(203,213,225,0.9)', fontWeight: 300, maxWidth: '680px', margin: '0 auto 16px', lineHeight: 1.6 }}
                    >
                        International Conference on{' '}
                        <span style={{ color: '#fff', fontWeight: 500 }}>Emerging Trends</span> in{' '}
                        <span style={{ color: '#7dd3fc', fontWeight: 600 }}>Technologies for Industry</span>
                    </motion.p>

                    {/* Thin separator line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)', margin: '0 auto 20px' }}
                    />

                    {/* Date & Venue */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', marginBottom: '40px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#7dd3fc', background: 'rgba(14, 165, 233, 0.1)', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(14,165,233,0.2)' }}>
                            <CalendarDays size={18} />
                            <span className="font-tech" style={{ fontWeight: 600, fontSize: '15px', letterSpacing: '0.02em' }}>4th & 5th June 2027</span>
                        </div>
                        <a href="https://maps.app.goo.gl/6Z4wGDwhx8KNWNBEA" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e2e8f0', background: 'rgba(255, 255, 255, 0.05)', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', textDecoration: 'none', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(56,189,248,0.4)'; e.currentTarget.style.background = 'rgba(14,165,233,0.1)'; e.currentTarget.style.color = '#7dd3fc'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = '#e2e8f0'; }}>
                            <MapPin size={18} />
                            <span className="font-tech" style={{ fontWeight: 500, fontSize: '14px', letterSpacing: '0.02em' }}>SIES Graduate School of Technology, Navi Mumbai</span>
                        </a>
                    </motion.div>

                    {/* CTA Buttons — Redesigned for Professional Glow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}
                    >
                        <Link
                            to="/registration"
                            className="btn-glow-primary font-tech"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '18px 42px',
                                fontWeight: 600,
                                fontSize: '15px',
                                color: '#fff',
                                textDecoration: 'none',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase'
                            }}
                        >
                            <span>Register Now</span>
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            to="/call-for-paper"
                            className="btn-glow-glass font-tech"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '18px 42px',
                                fontWeight: 600,
                                fontSize: '15px',
                                color: '#94a3b8',
                                textDecoration: 'none',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase'
                            }}
                        >
                            Submit Paper
                        </Link>
                    </motion.div>
                </div>


            </section>

            {/* ===== QUICK LINKS ===== */}
            <section className="section-gap-sm">
                <div className="container-main">
                    {/* Cyber card styles */}
                    <style>{`
                        .cyber-card {
                            position: relative;
                            display: flex;
                            align-items: center;
                            gap: 16px;
                            padding: 22px 28px;
                            text-decoration: none;
                            background: rgba(8, 12, 30, 0.8);
                            border: 1px solid rgba(56, 189, 248, 0.15);
                            clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px));
                            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                            overflow: hidden;
                        }
                        .cyber-card::before {
                            content: '';
                            position: absolute;
                            inset: 0;
                            background: repeating-linear-gradient(
                                0deg,
                                transparent,
                                transparent 2px,
                                rgba(56, 189, 248, 0.02) 2px,
                                rgba(56, 189, 248, 0.02) 4px
                            );
                            pointer-events: none;
                            opacity: 0;
                            transition: opacity 0.4s;
                        }
                        .cyber-card::after {
                            content: '';
                            position: absolute;
                            top: 0; left: -100%;
                            width: 100%; height: 100%;
                            background: linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.08), transparent);
                            transition: left 0.6s;
                            pointer-events: none;
                        }
                        .cyber-card:hover {
                            border-color: rgba(56, 189, 248, 0.5);
                            background: rgba(14, 165, 233, 0.06);
                            box-shadow: 0 0 20px rgba(56, 189, 248, 0.15), inset 0 0 30px rgba(56, 189, 248, 0.03);
                            transform: translateY(-3px);
                        }
                        .cyber-card:hover::before {
                            opacity: 1;
                        }
                        .cyber-card:hover::after {
                            left: 100%;
                        }
                        .cyber-card:hover .cyber-icon {
                            box-shadow: 0 0 16px rgba(56, 189, 248, 0.5);
                            border-color: rgba(56, 189, 248, 0.6);
                        }
                        .cyber-card:hover .cyber-arrow {
                            color: #38bdf8 !important;
                            transform: translateX(4px);
                            filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.6));
                        }
                        .cyber-icon {
                            width: 48px; height: 48px;
                            border-radius: 4px;
                            display: flex; align-items: center; justify-content: center;
                            flex-shrink: 0;
                            background: rgba(56, 189, 248, 0.08);
                            border: 1px solid rgba(56, 189, 248, 0.2);
                            transition: all 0.4s;
                        }
                        .cyber-arrow {
                            transition: all 0.3s !important;
                        }
                    `}</style>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}
                    >
                        {quickLinks.map((qk) => (
                            <motion.div key={qk.label} variants={itemVariants}>
                                <Link
                                    to={qk.path}
                                    className="cyber-card"
                                >
                                    <div className="cyber-icon">
                                        <qk.icon size={22} style={{ color: '#38bdf8' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 className="heading-font" style={{ fontWeight: 600, color: '#e2e8f0', fontSize: '15px', marginBottom: '2px', letterSpacing: '0.03em' }}>{qk.label}</h3>
                                        <p style={{ color: '#475569', fontSize: '13px', letterSpacing: '0.02em' }}>{qk.desc}</p>
                                    </div>
                                    <ArrowRight size={16} className="cyber-arrow" style={{ color: '#334155' }} />
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== ABOUT SNIPPET ===== */}
            <section className="section-gap">
                <div className="container-main">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}>
                        {/* Left side: two-column on desktop */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '48px', alignItems: 'start' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span style={{ color: '#38bdf8', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', display: 'block' }}>About the Conference</span>
                                <h2 className="heading-font" style={{ fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#fff', marginBottom: '24px', lineHeight: 1.2 }}>
                                    Shaping the Future of{' '}
                                    <span className="gradient-text">Industry 4.0</span>
                                </h2>
                                <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '20px', fontSize: '15px' }}>
                                    The aim of ICETTI conference is to provide a platform for students, academicians,
                                    practitioners, researchers, and the industry to publish and present their innovative
                                    work in Industry 4.0 technologies.
                                </p>
                                <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '28px', fontSize: '15px' }}>
                                    Industry 4.0 is marked by breakthroughs in emerging technologies in the field of
                                    Robotics, Artificial Intelligence, Nanotechnology, Quantum Computing, Biotechnology,
                                    Internet of Things, Industrial Internet of Things, Decentralized Consensus,
                                    Fifth-generation Wireless Technologies, 3D Printing, and Autonomous Vehicles.
                                </p>
                                <Link
                                    to="/about"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#38bdf8', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s' }}
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                style={{ position: 'relative' }}
                            >
                                <div style={{ position: 'absolute', inset: '-16px', background: 'linear-gradient(135deg, rgba(14,165,233,0.08), rgba(139,92,246,0.08))', borderRadius: '24px', filter: 'blur(24px)' }} />
                                <div className="glass-card" style={{ position: 'relative' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                                        {[
                                            { icon: Cpu, color: '#38bdf8', bgColor: 'rgba(14,165,233,0.12)', title: '6 Research Tracks', desc: 'AI, IoT, Security & more' },
                                            { icon: Users, color: '#a78bfa', bgColor: 'rgba(139,92,246,0.12)', title: 'International Speakers', desc: 'Global academic community' },
                                            { icon: FileText, color: '#6ee7b7', bgColor: 'rgba(16,185,129,0.12)', title: 'IEEE Publication', desc: 'Papers published via IEEE' },
                                        ].map((item) => (
                                            <div key={item.title} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                                <div className="icon-box" style={{ background: item.bgColor }}>
                                                    <item.icon size={24} style={{ color: item.color }} />
                                                </div>
                                                <div>
                                                    <h4 className="heading-font" style={{ fontWeight: 600, color: '#fff', fontSize: '16px', marginBottom: '2px' }}>{item.title}</h4>
                                                    <p style={{ color: '#64748b', fontSize: '14px' }}>{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TRACKS ===== */}
            <section className="section-gap">
                <div className="container-wide">
                    <SectionHeading
                        title="Conference Tracks"
                        subtitle="Explore cutting-edge research areas spanning the breadth of Industry 4.0"
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '24px' }}
                    >
                        {tracks.map((track) => (
                            <motion.div key={track.title} variants={itemVariants}>
                                <div
                                    className="glass-card track-card"
                                    style={{ height: '100%', padding: 0, overflow: 'hidden', cursor: 'default' }}
                                >
                                    {/* Image */}
                                    <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                                        <img
                                            src={track.image}
                                            alt={track.title}
                                            loading="lazy"
                                            style={{
                                                width: '100%', height: '100%', objectFit: 'cover',
                                                transition: 'transform 0.5s ease',
                                            }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                        />
                                        {/* Gradient overlay */}
                                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(2,6,23,0.85) 100%)' }} />
                                        {/* Icon badge on image */}
                                        <div style={{
                                            position: 'absolute', top: '14px', left: '14px',
                                            width: '40px', height: '40px', borderRadius: '12px',
                                            background: `${track.color}22`, backdropFilter: 'blur(12px)',
                                            border: `1px solid ${track.color}44`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            <track.icon size={20} style={{ color: track.color }} />
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <div style={{ padding: '24px 28px 28px' }}>
                                        <h3 className="heading-font" style={{ fontWeight: 700, color: '#fff', fontSize: '18px', marginBottom: '10px' }}>{track.title}</h3>
                                        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7 }}>{track.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        style={{ textAlign: 'center', marginTop: '48px' }}
                    >
                        <Link
                            to="/call-for-paper"
                            className="glass-card-compact"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', fontWeight: 600, color: '#38bdf8', textDecoration: 'none' }}
                        >
                            View All Tracks
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* ===== CTA BANNER — IEEE-inspired professional ===== */}
            <section className="section-gap">
                <div className="container-wide">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', minHeight: '340px' }}
                    >
                        {/* Background photo */}
                        <img
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&h=600&fit=crop&q=80"
                            alt="Conference"
                            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        {/* Dark overlay */}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(2,6,23,0.92) 0%, rgba(15,23,42,0.88) 50%, rgba(30,27,75,0.85) 100%)' }} />
                        {/* Accent line */}
                        <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'linear-gradient(180deg, transparent, rgba(56,189,248,0.3), transparent)', display: 'none' }} className="cta-divider" />
                        <style>{`.cta-divider { display: none !important; } @media (min-width: 768px) { .cta-divider { display: block !important; } }`}</style>

                        {/* Content */}
                        <div style={{
                            position: 'relative', zIndex: 2,
                            display: 'grid', gridTemplateColumns: '1fr',
                            gap: '40px', padding: 'clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px)',
                            alignItems: 'center',
                        }} className="cta-grid">
                            <style>{`.cta-grid { grid-template-columns: 1fr !important; } @media (min-width: 768px) { .cta-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>

                            {/* Left column */}
                            <div>
                                <span style={{
                                    display: 'inline-block', fontSize: '11px', fontWeight: 700,
                                    textTransform: 'uppercase', letterSpacing: '0.15em',
                                    color: '#38bdf8', marginBottom: '20px',
                                    padding: '6px 16px', borderRadius: '999px',
                                    background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.15)',
                                }}>ICETTI 2027</span>
                                <h2 className="heading-font" style={{
                                    fontWeight: 800, fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                                    color: '#fff', lineHeight: 1.2, marginBottom: '20px',
                                }}>
                                    Connect With the Global Research Community
                                </h2>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '16px', lineHeight: 1.7, maxWidth: '440px' }}>
                                    Present your work, network with leading researchers, and contribute to the future of emerging technologies at ICETTI 2027.
                                </p>
                            </div>

                            {/* Right column — action links */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                                {[
                                    { label: 'Submit Your Research Paper', path: '/call-for-paper' },
                                    { label: 'Register for the Conference', path: '/registration' },
                                    { label: 'View Important Deadlines', path: '/important-dates' },
                                    { label: 'Contact the Organizing Committee', path: '/contact' },
                                ].map((item, idx) => (
                                    <Link
                                        key={idx}
                                        to={item.path}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '14px',
                                            padding: '18px 0',
                                            borderBottom: idx < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                                            textDecoration: 'none', transition: 'all 0.3s',
                                            color: '#e2e8f0',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = '#38bdf8';
                                            e.currentTarget.style.paddingLeft = '8px';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = '#e2e8f0';
                                            e.currentTarget.style.paddingLeft = '0';
                                        }}
                                    >
                                        <ChevronRight size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                                        <span className="heading-font" style={{ fontWeight: 600, fontSize: '15px' }}>{item.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
