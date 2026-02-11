import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{ position: 'relative', zIndex: 10, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {/* Glow line */}
            <div className="glow-line" />

            <div className="glass-light">
                <div className="container-wide" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '48px' }}>
                        {/* Logo & Info */}
                        <div>
                            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
                                <img src="/LOGO/LOGO.png" alt="ICETTI-2027" style={{ height: '48px', width: 'auto' }} />
                                <div>
                                    <span className="heading-font gradient-text" style={{ fontWeight: 700, fontSize: '20px', display: 'block' }}>ICETTI</span>
                                    <span style={{ color: '#64748b', fontSize: '11px', display: 'block' }}>2027</span>
                                </div>
                            </Link>
                            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.7 }}>
                                International Conference on Emerging Trends in Technologies for Industry
                            </p>
                            <p style={{ color: '#38bdf8', fontWeight: 600, marginTop: '12px', fontSize: '14px' }}>
                                4th & 5th June 2027
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '24px', fontSize: '17px' }}>Quick Links</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { label: 'Home', path: '/' },
                                    { label: 'About', path: '/about' },
                                    { label: 'Call for Paper', path: '/call-for-paper' },
                                    { label: 'Important Dates', path: '/important-dates' },
                                    { label: 'Registration', path: '/registration' },
                                ].map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                                        >
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(14,165,233,0.5)' }} />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h3 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '24px', fontSize: '17px' }}>Resources</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    { label: 'Author Guidelines', path: '/author-guidelines' },
                                    { label: 'Organizing Committee', path: '/committees/organizing' },
                                    { label: 'Advisory Committee', path: '/committees/advisory' },
                                    { label: 'Contact Us', path: '/contact' },
                                ].map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            style={{ color: '#94a3b8', fontSize: '14px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'color 0.2s' }}
                                        >
                                            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(139,92,246,0.5)' }} />
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="heading-font" style={{ fontWeight: 600, color: '#fff', marginBottom: '24px', fontSize: '17px' }}>Contact</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <a
                                    href="mailto:iceti4t@sies.edu.in"
                                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94a3b8', textDecoration: 'none', fontSize: '14px' }}
                                >
                                    <Mail size={16} style={{ marginTop: '2px', flexShrink: 0, color: '#0ea5e9' }} />
                                    iceti4t@sies.edu.in
                                </a>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94a3b8', fontSize: '14px' }}>
                                    <Phone size={16} style={{ marginTop: '2px', flexShrink: 0, color: '#0ea5e9' }} />
                                    <span>(91) 6108 2402 / 6108 2417</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#94a3b8', fontSize: '14px' }}>
                                    <MapPin size={16} style={{ marginTop: '2px', flexShrink: 0, color: '#0ea5e9' }} />
                                    <span>SIES Graduate School of Technology, Nerul, Navi Mumbai 400706, India</span>
                                </div>
                                <a
                                    href="https://iceti4t.siesgst.edu.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38bdf8', textDecoration: 'none', fontSize: '14px' }}
                                >
                                    <ExternalLink size={14} />
                                    www.iceti4t.siesgst.edu.in
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                        <p style={{ color: '#64748b', fontSize: '12px' }}>
                            © 2027 ICETTI – SIES Graduate School of Technology. All rights reserved.
                        </p>
                        <p style={{ color: '#475569', fontSize: '12px' }}>
                            Organized by Department of EXTC, SIESGST
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
