import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Call for Paper', path: '/call-for-paper' },
    { label: 'Important Dates', path: '/important-dates' },
    {
        label: 'Committees',
        children: [
            { label: 'Organizing Committee', path: '/committees/organizing' },
            { label: 'Advisory Committee', path: '/committees/advisory' },
        ],
    },
    { label: 'Author Guidelines', path: '/author-guidelines' },
    { label: 'Registration', path: '/registration' },
    { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [commDropdown, setCommDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setCommDropdown(false);
    }, [location]);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Navbar styles */}
            <style>{`
                .icetti-nav {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                }
                .icetti-nav--top {
                    background: rgba(13, 18, 36, 0.7); /* Lighter blue-ish shade for visibility */
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                }
                .icetti-nav--scrolled {
                    background: rgba(10, 14, 28, 0.9);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-bottom: 1px solid rgba(56, 189, 248, 0.2); /* Cyber blue border */
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
                }
                .icetti-nav__link {
                    position: relative;
                    padding: 8px 12px;
                    font-size: 14px;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.3s;
                    letter-spacing: 0.02em;
                    white-space: nowrap;
                    text-transform: uppercase; /* Tech/Cyber feel */
                    font-family: 'Inter', sans-serif;
                }
                .icetti-nav__link:hover {
                    color: #7dd3fc !important;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.6); /* Glow effect */
                }
                .icetti-nav__link--active {
                    color: #38bdf8 !important;
                    text-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
                }
                .icetti-nav__link--active::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 12px;
                    right: 12px;
                    height: 2px;
                    background: #38bdf8;
                    box-shadow: 0 0 10px #38bdf8;
                }
                .icetti-nav__dropdown-btn {
                    padding: 8px 12px;
                    font-size: 14px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.3s;
                    letter-spacing: 0.02em;
                    white-space: nowrap;
                    text-transform: uppercase;
                }
                .icetti-nav__dropdown-btn:hover {
                    color: #7dd3fc !important;
                    text-shadow: 0 0 8px rgba(56, 189, 248, 0.6);
                }
                .desktop-nav { display: none !important; }
                @media (min-width: 1024px) { .desktop-nav { display: flex !important; } }
                @media (min-width: 1024px) { .mobile-toggle { display: none !important; } }
            `}</style>

            <header className={`icetti-nav ${scrolled ? 'icetti-nav--scrolled' : 'icetti-nav--top'}`}>
                <nav className="container-wide">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '84px' }}>
                        {/* Logo — prominent and clearly visible */}
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', flexShrink: 0 }}>
                            <img
                                src="/LOGO/LOGO.png"
                                alt="ICETTI-2027"
                                style={{
                                    height: '58px', /* Increased size */
                                    width: 'auto',
                                    display: 'block',
                                    filter: 'drop-shadow(0 0 10px rgba(56,189,248,0.3))', /* Subtle glow for visibility */
                                }}
                            />
                            <div style={{ paddingLeft: '16px', borderLeft: '1px solid rgba(255,255,255,0.15)', height: '42px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span className="heading-font" style={{ fontWeight: 800, fontSize: '24px', color: '#f1f5f9', lineHeight: 1, letterSpacing: '0.05em', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>ICETTI</span>
                                <span style={{ color: '#7dd3fc', fontSize: '13px', fontWeight: 600, letterSpacing: '0.2em', marginTop: '2px', textTransform: 'uppercase' }}>2027</span>
                            </div>
                        </Link>

                        {/* Desktop navigation links */}
                        <div style={{ display: 'none', alignItems: 'center', gap: '2px' }} className="desktop-nav">
                            {navItems.map((item) =>
                                item.children ? (
                                    <div
                                        key={item.label}
                                        style={{ position: 'relative' }}
                                        onMouseEnter={() => setCommDropdown(true)}
                                        onMouseLeave={() => setCommDropdown(false)}
                                    >
                                        <button
                                            className="icetti-nav__dropdown-btn"
                                            style={{
                                                color: item.children.some((c) => isActive(c.path)) ? '#38bdf8' : '#e2e8f0',
                                            }}
                                        >
                                            {item.label}
                                            <ChevronDown size={14} style={{ transition: 'transform 0.3s', transform: commDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                        </button>
                                        <AnimatePresence>
                                            {commDropdown && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 15 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    style={{
                                                        position: 'absolute', top: '100%', left: 0, marginTop: '10px',
                                                        width: '260px', borderRadius: '4px', overflow: 'hidden',
                                                        background: 'rgba(8, 12, 30, 0.95)', backdropFilter: 'blur(24px)',
                                                        border: '1px solid rgba(56, 189, 248, 0.2)',
                                                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                                    }}
                                                >
                                                    {item.children.map((child) => (
                                                        <Link
                                                            key={child.path}
                                                            to={child.path}
                                                            style={{
                                                                display: 'block',
                                                                padding: '14px 24px',
                                                                fontSize: '14px',
                                                                fontWeight: 500,
                                                                transition: 'all 0.2s',
                                                                textDecoration: 'none',
                                                                color: isActive(child.path) ? '#38bdf8' : '#cbd5e1',
                                                                borderBottom: '1px solid rgba(255,255,255,0.03)',
                                                                position: 'relative',
                                                                overflow: 'hidden'
                                                            }}
                                                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(56, 189, 248, 0.1)'; e.currentTarget.style.color = '#7dd3fc'; e.currentTarget.style.paddingLeft = '28px'; }}
                                                            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isActive(child.path) ? '#38bdf8' : '#cbd5e1'; e.currentTarget.style.paddingLeft = '24px'; }}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        className={`icetti-nav__link ${isActive(item.path) ? 'icetti-nav__link--active' : ''}`}
                                        style={{
                                            color: isActive(item.path) ? '#38bdf8' : '#e2e8f0',
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Mobile toggle */}
                        <button
                            style={{ padding: '10px', color: '#e2e8f0', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', borderRadius: '4px' }}
                            className="mobile-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden', background: 'rgba(5, 8, 20, 0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(56, 189, 248, 0.2)' }}
                        >
                            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {navItems.map((item) =>
                                    item.children ? (
                                        <div key={item.label}>
                                            <button
                                                onClick={() => setCommDropdown(!commDropdown)}
                                                style={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '16px',
                                                    fontSize: '15px',
                                                    fontWeight: 600,
                                                    color: '#e2e8f0',
                                                    background: 'rgba(255,255,255,0.03)',
                                                    border: '1px solid rgba(255,255,255,0.05)',
                                                    cursor: 'pointer',
                                                    borderRadius: '4px',
                                                    textTransform: 'uppercase'
                                                }}
                                            >
                                                {item.label}
                                                <ChevronDown size={16} style={{ transition: 'transform 0.3s', transform: commDropdown ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                                            </button>
                                            <AnimatePresence>
                                                {commDropdown && (
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        animate={{ height: 'auto' }}
                                                        exit={{ height: 0 }}
                                                        style={{ overflow: 'hidden', marginLeft: '12px', borderLeft: '1px solid rgba(56, 189, 248, 0.2)' }}
                                                    >
                                                        {item.children.map((child) => (
                                                            <Link
                                                                key={child.path}
                                                                to={child.path}
                                                                style={{
                                                                    display: 'block',
                                                                    padding: '14px 20px',
                                                                    fontSize: '14px',
                                                                    textDecoration: 'none',
                                                                    color: isActive(child.path) ? '#38bdf8' : '#cbd5e1',
                                                                    background: isActive(child.path) ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                                                }}
                                                            >
                                                                {child.label}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            style={{
                                                display: 'block',
                                                padding: '16px',
                                                fontSize: '15px',
                                                fontWeight: 600,
                                                borderRadius: '4px',
                                                textDecoration: 'none',
                                                transition: 'all 0.2s',
                                                color: isActive(item.path) ? '#38bdf8' : '#e2e8f0',
                                                background: isActive(item.path) ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                                                border: isActive(item.path) ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent',
                                                textTransform: 'uppercase'
                                            }}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Height spacer to prevent content overlap */}
            <div style={{ height: '84px' }} />
        </>
    );
}
