import SlideDetailPage from './SlideDetailPage'

const slides = [
  {
    path: '/about-us',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=85',
    badge: 'Trusted Healthcare & Support Services',
    title: 'Empowering Lives, One Family at a Time',
    intro: 'Veroni Healthcare Services delivers compassionate, evidence-based behavioral therapy, autism support, and developmental disability programs — designed around your family\'s unique needs.',
    sections: [
      {
        heading: 'Who We Are',
        body: 'Veroni Healthcare Services is a premier provider of behavioral health and social support services. For over 15 years, we have walked alongside individuals with autism, developmental disabilities, and complex behavioral needs — and the families who love them. Our organization was built on the belief that every person deserves access to high-quality, compassionate care.',
      },
      {
        heading: 'Our Approach',
        body: 'We take a holistic, family-centered approach to care. Every program we offer is grounded in the latest peer-reviewed research and tailored to the unique strengths, goals, and circumstances of each individual. We don\'t believe in one-size-fits-all solutions — we believe in personalized care that evolves with the people we serve.',
      },
      {
        heading: 'Our Commitment',
        body: 'From the moment a family reaches out to us, we are committed to transparency, accountability, and open communication. We provide regular progress reports, involve families in every decision, and celebrate every milestone — no matter how small. Our success is measured by the real-world outcomes we achieve together.',
      },
    ],
    highlights: [
      '15+ years of trusted service',
      'BCBA-certified clinical team',
      'Family-centered care model',
      'Evidence-based interventions',
      'CARF accredited organization',
      'Medicaid & insurance accepted',
    ],
  },
  {
    path: '/aba-therapy',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1600&q=85',
    badge: 'Evidence-Based Autism Support',
    title: 'Transforming Lives Through ABA Therapy',
    intro: 'Our BCBA-certified clinicians design individualized ABA therapy programs that unlock each child\'s potential — building skills, confidence, and independence every step of the way.',
    sections: [
      {
        heading: 'What is ABA Therapy?',
        body: 'Applied Behavior Analysis (ABA) is the gold-standard, evidence-based treatment for autism spectrum disorder. It uses principles of learning and behavior to increase helpful behaviors and reduce behaviors that interfere with learning or daily functioning. ABA therapy is highly individualized and data-driven, ensuring measurable progress at every stage.',
      },
      {
        heading: 'Our ABA Programs',
        body: 'At Veroni Healthcare Services, our ABA programs are designed and supervised by Board Certified Behavior Analysts (BCBAs). We offer Early Intensive Behavioral Intervention (EIBI) for young children, school-age programs, social skills training, and parent-mediated therapy. Each program is built around a comprehensive assessment of the child\'s strengths and areas for growth.',
      },
      {
        heading: 'What Families Can Expect',
        body: 'Families are active partners in our ABA programs. We provide regular parent training sessions, detailed progress reports, and open communication with your child\'s clinical team. Our goal is not just progress in the clinic — we want skills to generalize to home, school, and community settings.',
      },
    ],
    highlights: [
      'BCBA-supervised therapy sessions',
      'Individualized treatment plans',
      'Early Intensive Behavioral Intervention (EIBI)',
      'Social skills training groups',
      'Parent coaching & training',
      'School & community generalization',
    ],
  },
  {
    path: '/family-care',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1600&q=85',
    badge: 'Family-Centered Care',
    title: 'Your Family Is at the Heart of Everything We Do',
    intro: 'We partner with families as active members of the care team — providing coaching, training, and ongoing support so that progress extends far beyond our clinic walls.',
    sections: [
      {
        heading: 'Why Family Involvement Matters',
        body: 'Research consistently shows that children and adults make the greatest progress when their families are actively involved in the care process. At Veroni, we don\'t just work with individuals — we work with entire family systems. We believe that empowered families create empowered individuals.',
      },
      {
        heading: 'Our Family Support Services',
        body: 'We offer a comprehensive range of family support services including parent coaching, family counseling, sibling support groups, and navigation assistance. Our family support coordinators help families access funding, navigate systems, and connect with community resources — so no family ever feels alone on this journey.',
      },
      {
        heading: 'Building Lasting Skills at Home',
        body: 'Our clinicians work closely with families to ensure that the skills learned in therapy transfer to everyday home and community settings. We provide practical strategies, visual supports, and ongoing coaching so that families feel confident and equipped to support their loved ones around the clock.',
      },
    ],
    highlights: [
      'Parent coaching & training programs',
      'Family counseling services',
      'Sibling support groups',
      'Funding navigation assistance',
      'Home-based strategy coaching',
      '24/7 crisis support line',
    ],
  },
  {
    path: '/our-team',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=85',
    badge: 'Certified & Experienced Professionals',
    title: 'A Team You Can Trust With What Matters Most',
    intro: 'Our multidisciplinary team of BCBAs, social workers, and support specialists brings decades of combined expertise — united by a shared commitment to changing lives.',
    sections: [
      {
        heading: 'Our Multidisciplinary Team',
        body: 'Veroni Healthcare Services employs a diverse team of Board Certified Behavior Analysts (BCBAs), Registered Behavior Technicians (RBTs), Licensed Clinical Social Workers (LCSWs), occupational therapists, vocational coaches, and direct support professionals. Every team member is carefully vetted, trained, and supervised to ensure the highest quality of care.',
      },
      {
        heading: 'Ongoing Training & Development',
        body: 'We invest heavily in the professional development of our staff. All team members participate in regular training, clinical supervision, and continuing education. We stay current with the latest research and best practices so that our clients always receive the most effective, up-to-date interventions available.',
      },
      {
        heading: 'A Culture of Compassion',
        body: 'Beyond credentials and qualifications, what truly sets our team apart is their genuine passion for the work they do. Every member of the Veroni team is driven by a deep commitment to making a meaningful difference in the lives of the individuals and families we serve.',
      },
    ],
    highlights: [
      'BCBA-certified clinical leadership',
      'Registered Behavior Technicians (RBTs)',
      'Licensed Clinical Social Workers',
      'Ongoing clinical supervision',
      'Regular continuing education',
      '50+ certified team members',
    ],
  },
  {
    path: '/childrens-programs',
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1600&q=85',
    badge: "Children's Programs & Early Intervention",
    title: 'Early Support Builds a Brighter Future',
    intro: 'Early intervention is the most powerful tool we have. Our children\'s programs provide the foundation for lifelong learning, communication, and social connection.',
    sections: [
      {
        heading: 'The Power of Early Intervention',
        body: 'Research shows that early intervention — particularly before age 5 — can dramatically improve outcomes for children with autism and developmental delays. The brain\'s neuroplasticity during early childhood means that targeted, intensive support can lead to significant and lasting gains in communication, social skills, and adaptive behavior.',
      },
      {
        heading: 'Our Children\'s Programs',
        body: 'Our children\'s programs include Early Intensive Behavioral Intervention (EIBI), play-based ABA therapy, social skills groups for ages 3–12, school readiness programs, and sensory integration support. Each program is tailored to the child\'s individual profile and delivered in a warm, nurturing environment that makes learning fun.',
      },
      {
        heading: 'Supporting School Success',
        body: 'We work closely with schools and educators to ensure a seamless transition between our clinic and the classroom. Our team provides school consultation, individualized education plan (IEP) support, and teacher training to help children generalize their skills and thrive in educational settings.',
      },
    ],
    highlights: [
      'Early Intensive Behavioral Intervention (EIBI)',
      'Play-based ABA therapy',
      'Social skills groups (ages 3–12)',
      'School readiness programs',
      'Sensory integration support',
      'IEP consultation & school support',
    ],
  },
  {
    path: '/community-programs',
    image: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1600&q=85',
    badge: 'Community Integration & Support',
    title: 'Building Belonging in Every Community',
    intro: 'We believe every individual deserves to live, work, and thrive in their community. Our programs foster independence, inclusion, and meaningful participation in everyday life.',
    sections: [
      {
        heading: 'Community Integration',
        body: 'True independence means being able to participate fully in community life — shopping, using public transportation, attending social events, and building friendships. Our community integration programs teach practical skills in real-world settings, helping individuals navigate their communities with confidence and safety.',
      },
      {
        heading: 'Vocational & Employment Support',
        body: 'We partner with local employers to create meaningful employment opportunities for individuals with disabilities. Our vocational coaches provide job readiness training, resume and interview coaching, on-the-job support, and workplace accommodation planning — helping individuals secure and maintain fulfilling employment.',
      },
      {
        heading: 'Recreational & Social Programs',
        body: 'Recreation and social connection are essential to wellbeing. Our structured recreational programs provide safe, inclusive environments for individuals to explore hobbies, build friendships, and enjoy life to the fullest. From arts and crafts to sports, cooking clubs to summer camps — there\'s something for everyone.',
      },
    ],
    highlights: [
      'Community access & navigation training',
      'Peer mentorship programs',
      'Vocational coaching & job placement',
      'Employer partnership network',
      'Recreational activity groups',
      'Summer camp programs',
    ],
  },
]

export const slideRoutes = slides.map(s => ({ path: s.path, element: <SlideDetailPage slide={s} /> }))
