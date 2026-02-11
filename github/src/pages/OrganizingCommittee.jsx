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
            { name: 'Prof. K. Venkatramani', role: 'Hon. Secretary, SIES' },
            { name: 'Dr. P. V. Parameswaran', role: 'Hon. Advisor, SIESGST' },
        ],
    },
    {
        title: 'Patrons', icon: Award, color: '#8b5cf6',
        members: [
            { name: 'Dr. K. Lakshmisudha', role: 'Principal, SIESGST' },
            { name: 'Dr. Aparna Bannore', role: 'Vice Principal, SIESGST' },
        ],
    },
    {
        title: 'Chair', icon: Star, color: '#0ea5e9',
        members: [{ name: 'Dr. Preeti Hemnani', role: 'Head, EXTC Dept.' }],
    },
    {
        title: 'Co-Chairs', icon: Users, color: '#06b6d4',
        members: [
            { name: 'Prof. Suvarna Chaure', role: 'Faculty CE Dept' },
            { name: 'Prof. Biju Balakrishnan', role: 'Faculty EXTC Dept' },
        ],
    },
    {
        title: 'Track Chairs', icon: Users, color: '#10b981',
        members: [
            { name: 'Dr. Shubhangi Kharche', role: 'Head, ECS Dept' },
            { name: 'Dr. Seema Redekar', role: 'Head, IT Dept' },
            { name: 'Dr. Varsha Patil', role: 'Head, AI&ML Dept' },
            { name: 'Dr. Rizwana Shaikh', role: 'Head, AI&DS Dept' },
            { name: 'Dr. Rupendra Nehete', role: 'Head, ME Dept' },
            { name: 'Dr. Sulochana Madachane', role: 'Head, CSE Dept' },
            { name: 'Prof. Pratibha Sharma', role: 'Head, FE Dept' },
            { name: 'Prof. Leena Ladge', role: 'Coordinator, IQAC' },
            { name: 'Dr. Pooja Singh', role: 'Faculty, FE Dept' },
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
            { name: 'Dr. Prashant Ambadekar', role: 'Faculty, Mech Dept' },
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
            { name: 'Prof. Sujata Kamble', role: 'Faculty, CE Dept' },
            { name: 'Prof. Sampada Lovalekar', role: 'Faculty, IT Dept' },
            { name: 'Prof. Rohini Gaikwad', role: 'Faculty, AI&DS Dept' },
        ],
    },
    {
        title: 'Publicity/Media Coverage', icon: Users, color: '#06b6d4',
        members: [
            { name: 'Dr. Ashwin Chavan', role: 'Faculty, FE Dept' },
            { name: 'Prof. Kaustubh Chavan', role: 'Faculty, Mech Dept' },
            { name: 'Prof. Namrata Patel', role: 'Faculty CE Dept' },
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
            { name: 'Dr. Arundathi Das', role: 'Faculty, AI&ML Dept' },
            { name: 'Prof. Samundiswary Shrinivasan', role: 'Faculty, IT Dept' },
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
            { name: 'Prof. Vandana Sawant', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Pranita Pingle', role: 'Faculty, CSE Dept' },
        ],
    },
    {
        title: 'Food & Accommodation', icon: Users, color: '#06b6d4',
        members: [
            { name: 'Dr. Aparna Bhonde', role: 'Faculty, CE Dept' },
            { name: 'Prof. Sandhya Bharambe', role: 'Faculty, FE Dept' },
            { name: 'Prof. Vimala Elengo', role: 'Faculty, FE Dept' },
        ],
    },
    {
        title: 'Accounts', icon: Users, color: '#10b981',
        members: [
            { name: 'Prof. Mrinal Khadse', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Pranavi Nikam', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Paurnima Patil', role: 'Faculty, ECS Dept' },
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
            { name: 'Prof. Prajakta Kane', role: 'Faculty, Mech Dept' },
        ],
    },
    {
        title: 'IEEE Correspondence & Publication', icon: Users, color: '#0ea5e9',
        members: [
            { name: 'Dr. Arathi Boyanpalli', role: 'Faculty, CE Dept' },
            { name: 'Dr. Arundathi Das', role: 'Faculty, AI&ML Dept' },
            { name: 'Dr. Swati Rane', role: 'Faculty, EXTC Dept' },
            { name: 'Prof. Nita Patil', role: 'Faculty, AI&ML Dept' },
            { name: 'Prof. Sheetal Kadam', role: 'Faculty, ECS Dept' },
            { name: 'Prof. Lakshmi Pavani', role: 'Faculty, FE Dept' },
            { name: 'Prof. Jyoti Baviskar', role: 'Faculty, CE Dept' },
        ],
    },
];

export default function OrganizingCommittee() {
    return (
        <PageWrapper>
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
                        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                    >
                        {committees.map((committee) => (
                            <motion.div key={committee.title} variants={itemVariants} className="glass-card group">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                    <div
                                        className="icon-box-sm"
                                        style={{ background: `${committee.color}15`, border: `1px solid ${committee.color}25`, transition: 'transform 0.3s' }}
                                    >
                                        <committee.icon size={22} style={{ color: committee.color }} />
                                    </div>
                                    <h3 className="heading-font" style={{ fontWeight: 700, fontSize: '18px', color: '#fff' }}>{committee.title}</h3>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '12px' }}>
                                    {committee.members.map((member, idx) => (
                                        <div key={idx} className="member-card">
                                            <p style={{ fontWeight: 600, color: '#fff', fontSize: '14px', marginBottom: '4px' }}>{member.name}</p>
                                            <p style={{ color: '#64748b', fontSize: '12px' }}>{member.role}</p>
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
