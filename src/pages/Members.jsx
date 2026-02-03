import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Drama, Music, Paintbrush, BookOpen, Heart } from 'lucide-react';
import styles from './Members.module.css';

const leadership = [
  {
    name: 'Abebe Tadesse',
    role: 'President',
    department: 'Theatre Arts',
    image: null,
  },
  {
    name: 'Selam Mekonnen',
    role: 'Vice President',
    department: 'Music',
    image: null,
  },
  {
    name: 'Dawit Hailu',
    role: 'Creative Director',
    department: 'Drama',
    image: null,
  },
  {
    name: 'Tigist Bekele',
    role: 'Music Director',
    department: 'Traditional Music',
    image: null,
  },
  {
    name: 'Hanan Ahmed',
    role: 'Literature Coordinator',
    department: 'Poetry & Writing',
    image: null,
  },
  {
    name: 'Yonas Girma',
    role: 'Dance Captain',
    department: 'Traditional Dance',
    image: null,
  },
];

const departments = [
  {
    name: 'Literature & Poetry',
    icon: BookOpen,
    members: 18,
    description: 'Writers, poets, and storytellers crafting words that inspire.',
  },
  {
    name: 'Theatre & Drama',
    icon: Drama,
    members: 20,
    description: 'Actors, directors, and stage crew bringing stories to life.',
  },
  {
    name: 'Music & Vocals',
    icon: Music,
    members: 15,
    description: 'Musicians and vocalists preserving our musical heritage.',
  },
  {
    name: 'Dance & Movement',
    icon: Heart,
    members: 22,
    description: 'Dancers celebrating culture through traditional and contemporary movement.',
  },
  {
    name: 'Production & Design',
    icon: Paintbrush,
    members: 10,
    description: 'Set designers, costume makers, and technical crew.',
  },
];

const Members = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.heroSubtitle}>
              Our People
            </p>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleGold}>Members</span>
            </h1>
            <p className={styles.heroDescription}>
              The talented individuals who make HUMTC extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className={styles.leadershipSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.leadershipHeader}
          >
            <h2 className={styles.leadershipTitle}>
              Leadership Team
            </h2>
            <p className={styles.leadershipDescription}>
              Our dedicated leaders guiding the club's vision and operations.
            </p>
          </motion.div>

          <div className={styles.leadershipGrid}>
            {leadership.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.leaderCard}
              >
                <div className={styles.leaderAvatar}>
                  <div className={styles.leaderAvatarPlaceholder}>
                    <span className={styles.leaderInitial}>
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className={styles.leaderName}>
                  {member.name}
                </h3>
                <p className={styles.leaderRole}>{member.role}</p>
                <p className={styles.leaderDepartment}>{member.department}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className={styles.departmentsSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.departmentsHeader}
          >
            <p className={styles.departmentsSubtitle}>
              Our Teams
            </p>
            <h2 className={styles.departmentsTitle}>
              Departments
            </h2>
          </motion.div>

          <div className={styles.departmentsGrid}>
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={styles.departmentCard}
              >
                <div className={styles.departmentIcon}>
                  <dept.icon size={32} className={styles.departmentIconSvg} />
                </div>
                <h3 className={styles.departmentName}>
                  {dept.name}
                </h3>
                <p className={styles.departmentCount}>
                  {dept.members}+
                </p>
                <p className={styles.departmentDescription}>
                  {dept.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Total Members */}
      <section className={styles.totalSection}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.totalContent}
          >
            <p className={styles.totalSubtitle}>
              Growing Together
            </p>
            <p className={styles.totalNumber}>
              85+
            </p>
            <p className={styles.totalDescription}>
              Active Members and Counting
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;