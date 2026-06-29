import { motion } from 'framer-motion';
import { Users, Crown, Award, Star } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import SectionHeading from '../components/SectionHeading';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const committees = [
    {
        title: 'Chief Patrons', icon: Crown, color: '#f59e0b',
        members: [
            { name: 'Dr. V. Shankar', role: 'Hon. President, SIES' },
            { name: 'Dr. Ramnath Subramanian', role: 'Hon. Secretary, SIES' },
            { name: 'Dr. P. V. Parameswaran', role: 'Hon. Advisor, SIESGST' },
        ],
    },
    {
        title: 'Patrons', icon: Award, color: '#8b5cf6',
        members: [
            { name: 'Dr. K. Lakshmisudha', role: 'Principal, SIESGST' },
            { name: 'Dr. Preeti Hemnani', role: 'Head, EXTC Dept & Dean Academics, SIESGST' },
        ],
    },
    {
        title: 'Chair', icon: Star, color: '#0ea5e9',
        members: [{ name: 'Dr. Aparna Bannore', role: 'Head, CE Dept & Vice Principal, SIESGST' }],
    },
    {
        title: 'Co-Chairs', icon: Users, color: '#06b6d4',
        members: [
            { name: 'Dr. Shubhangi Kharche', role: 'Head, ECS Dept' },
            { name: 'Prof. Biju Balakrishnan', role: 'Faculty EXTC Dept' },
        ],
    },
    {
        title: 'Track Chairs', icon: Users, color: '#10b981',
        members: [
            { name: 'Dr. Rizwana Shaikh', role: 'Head, AI&DS Dept' },
            { name: 'Dr. Varsha Patil', role: 'Head, AI&ML Dept' },
            { name: 'Dr. Sulochana Madachane', role: 'Head, CSE Dept' },
            { name: 'Dr. Pooja Singh', role: 'Faculty, FE Dept' },
            { name: 'Prof. Leena Ladge', role: 'Coordinator, IQAC' },
            { name: 'Dr. Deepika Kumari', role: 'Faculty, ECS Dept' },
            { name: 'Dr. Bhagyalakshmi', role: 'Faculty, AI&ML Dept' },
            { name: 'Dr. Vidya Keshwani', role: 'Faculty, AI&DS Dept' },
        ],
    },
    {
        title: 'Financial & Sponsorship', icon: Users, color: '#f97316',
        members: [
            { name: 'Dr. Rizwana Shaikh', role: 'Head, AIDS dept' },
            { name: 'Dr. Ramkishan Bhise', role: 'Faculty, FE Dept' },
            { name: 'Mr. Mahesh Biradar', role: 'Faculty, FE Dept' },
            { name: 'Prof. Seema Khan', role: 'Faculty, FE Dept' },
        ],
    },
    {
        title: 'Technical Program / Poster Presentation', icon: Users, color: '#ec4899',
        members: [
            { name: 'Dr. Kalyani Pampattiwar', role: 'Faculty, CE Dept' },
            { name: 'Dr. Arundhati Das', role: 'Faculty, AI&ML Dept' },
            { name: 'Prof. Prachi Shahane', role: 'Faculty, CSE Dept' },
            { name: 'Prof. Pratibha Joshi', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Madhuri Kulkarni', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Savita Lohiya', role: 'Faculty, IT Dept' },
            { name: 'Prof. Kalpana Bodke', role: 'Faculty, IT Dept' },
            { name: 'Prof. Swapnil Wani', role: 'Faculty, CSE Dept' },
        ],
    },
    {
        title: 'Microsoft CMT', icon: Users, color: '#0ea5e9',
        members: [
            { name: 'Prof. Kalpana Bodke', role: 'Faculty, IT Dept' },
            { name: 'Prof. Swapnil Wani', role: 'Faculty, CSE Dept' },
            { name: 'Prof. Rasika Malgi', role: 'Faculty, CE Dept' },
        ],
    },
    {
        title: 'Conference Website', icon: Users, color: '#8b5cf6',
        members: [
            { name: 'Prof. Sunil Punjabi', role: 'Faculty, CE Dept' },
            { name: 'Prof. Vaishali Mangrulkar', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Smruti Vyavahare', role: 'Faculty, CE Dept' },
            { name: 'Prof. Sampada Lovalekar', role: 'Faculty, IT Dept' },
            { name: 'Prof. Rohini Gaikwad', role: 'Faculty, AI&DS Dept' },
        ],
    },
    {
        title: 'Publicity/Media Coverage', icon: Users, color: '#06b6d4',
        members: [
            { name: 'Dr. Ashwin Chavan', role: 'Faculty, FE Dept' },
            { name: 'Prof. Kaustubh Chavan', role: 'Faculty, Mech Dept' },
            { name: 'Dr. Namrata Patel', role: 'Faculty, CE Dept' },
            { name: 'Prof. Ajay Hundiwale', role: 'Faculty, Mech Dept' },
            { name: 'Prof. Aparna Ghadge', role: 'Faculty, FE Dept' },
        ],
    },
    {
        title: 'Design Team', icon: Users, color: '#f43f5e',
        members: [
            { name: 'Dr. Smitha Kumar', role: 'Faculty, FE Dept' },
            { name: 'Prof. Ujwala Ravale', role: 'Faculty, CE Dept' },
            { name: 'Prof. Athang Joshi', role: 'Faculty, FE Dept' },
        ],
    },
    {
        title: 'Pre-Conference Tutorial', icon: Users, color: '#10b981',
        members: [
            { name: 'Dr. Arathi Boyanapalli', role: 'Faculty, CE Dept' },
            { name: 'Dr. Arundhati Das', role: 'Faculty, AI&ML Dept' },
            { name: 'Dr. Shiney Varghese', role: 'Faculty, AI&DS Dept' },
            { name: 'Dr. Anushree Goud', role: 'Faculty, CE Dept' },
            { name: 'Prof. Urvashi Patkar', role: 'Faculty, CE Dept' },
        ],
    },
    {
        title: 'Venue', icon: Users, color: '#f59e0b',
        members: [
            { name: 'Prof. Shubhangi Kadu', role: 'Faculty, FE Dept' },
            { name: 'Prof. Shyamala Mathi', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Madhuri Kulkarni', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Rasika Malgi', role: 'Faculty, CE Dept' },
        ],
    },
    {
        title: 'Online Platform & Online Venue Arrangements', icon: Users, color: '#8b5cf6',
        members: [
            { name: 'Prof. Jasmin Hirani', role: 'Faculty, AI&ML Dept' },
            { name: 'Prof. Sonal Hutke', role: 'Faculty, CSE Dept' },
            { name: 'Prof. Gilu K. Abraham', role: 'Faculty, AI&ML Dept' },
            { name: 'Prof. Pranita Pingle', role: 'Faculty, CSE Dept' },
        ],
    },
    {
        title: 'Food & Accommodation', icon: Users, color: '#06b6d4',
        members: [
            { name: 'Dr. Namrata Patel', role: 'Faculty, CE Dept' },
            { name: 'Prof. Sandhya Bharambe', role: 'Faculty, FE Dept' },
            { name: 'Prof. Vimala Elengo', role: 'Faculty, FE Dept' },
        ],
    },
    {
        title: 'Accounts', icon: Users, color: '#10b981',
        members: [
            { name: 'Prof. Mrinal Khadse', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Pranavi Nikam', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Swapnil Wani', role: 'Faculty, CSE Dept' },
            { name: 'Prof. Deepali Jagtap', role: 'Faculty, AI&DS Dept' },
        ],
    },
    {
        title: 'Registration & Certificates', icon: Users, color: '#ec4899',
        members: [
            { name: 'Prof. Kranti Bade', role: 'Faculty, CE Dept' },
            { name: 'Prof. Priyanka Kadam', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Megha Jain', role: 'Faculty, AIDS Dept' },
            { name: 'Prof. Hema Raut', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Pallavi Mahadik', role: 'Faculty, FE Dept' },
            { name: 'Prof. Darshana Wajekar', role: 'Faculty, AI&DS Dept' },
        ],
    },
    {
        title: 'IEEE Correspondence & Publication', icon: Users, color: '#0ea5e9',
        members: [
            { name: 'Dr. Arathi Boyanpalli', role: 'Faculty, CE Dept' },
            { name: 'Dr. Arundhati Das', role: 'Faculty, AI&ML Dept' },
            { name: 'Dr. Swati Rane', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Nita Patil', role: 'Faculty, AI&ML Dept' },
            { name: 'Prof. Sheetal Kadam', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Megha Jain', role: 'Faculty, AI&DS Dept' },
            { name: 'Prof. Sumedha Maindalkar', role: 'Faculty, AI&ML Dept' },
        ],
    },
];

export default function OrganizingCommittee() {
    return (
        <PageWrapper>
            {/* Cyber styles for Organizing Committee */}
            <style>{`
                .cyber-comm-card {
                    position: relative;
                    background: rgba(8, 12, 30, 0.75);
                    border: 1px solid rgba(56, 189, 248, 0.15);
                    clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));
                    padding: 32px;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4), inset 0 0 20px rgba(56, 189, 248, 0.02);
                }
                .cyber-comm-card::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(56, 189, 248, 0.01) 2px,
                        rgba(56, 189, 248, 0.01) 4px
                    );
                    pointer-events: none;
                    clip-path: polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px));
                }
                .cyber-comm-card:hover {
                    border-color: rgba(56, 189, 248, 0.5);
                    background: rgba(14, 165, 233, 0.05);
                    box-shadow: 0 0 30px rgba(56, 189, 248, 0.2), inset 0 0 30px rgba(56, 189, 248, 0.03);
                    transform: translateY(-3px);
                }
                .cyber-comm-icon-box {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(56, 189, 248, 0.08);
                    border: 1px solid rgba(56, 189, 248, 0.2);
                    transition: all 0.4s;
                    clip-path: polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px));
                }
                .cyber-comm-card:hover .cyber-comm-icon-box {
                    box-shadow: 0 0 16px rgba(56, 189, 248, 0.4);
                    border-color: rgba(56, 189, 248, 0.5);
                    background: rgba(56, 189, 248, 0.15);
                }
                .cyber-member-card {
                    flex: 1 1 260px;
                    max-width: 280px;
                    background: rgba(10, 15, 36, 0.5);
                    border: 1px solid rgba(56, 189, 248, 0.08);
                    clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px));
                    padding: 18px 20px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    text-align: center;
                }
                .cyber-member-card:hover {
                    border-color: rgba(56, 189, 248, 0.35);
                    background: rgba(14, 165, 233, 0.08);
                    box-shadow: 0 0 15px rgba(56, 189, 248, 0.12);
                    transform: translateY(-2px);
                }
            `}</style>

            <section className="section-gap-sm">
                <div className="container-main">
                    <SectionHeading title="Organizing Committee" subtitle="The dedicated team behind ICETTI 2027" />
                </div>
            </section>

            <section style={{ paddingBottom: '96px' }}>
                <div className="container-narrow">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-50px' }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
                    >
                        {committees.map((committee) => (
                            <motion.div key={committee.title} variants={itemVariants} className="cyber-comm-card group">
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}>
                                    <div className="cyber-comm-icon-box">
                                        <committee.icon size={22} style={{ color: '#38bdf8', transition: 'all 0.3s' }} />
                                    </div>
                                    <h3 className="heading-font" style={{ fontWeight: 700, fontSize: '18px', color: '#fff', letterSpacing: '0.03em', textTransform: 'uppercase' }}>{committee.title}</h3>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
                                    {committee.members.map((member, idx) => (
                                        <div key={idx} className="cyber-member-card">
                                            <p style={{ fontWeight: 600, color: '#fff', fontSize: '14px', marginBottom: '4px', letterSpacing: '0.01em' }}>{member.name}</p>
                                            <p style={{ color: '#64748b', fontSize: '12px', letterSpacing: '0.02em' }}>{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
}
