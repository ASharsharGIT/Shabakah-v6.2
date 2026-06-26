/**
 * COMPLETE BILINGUAL LANGUAGE SYSTEM
 * Full Arabic/English Content Translation for SHABAKAH Website
 * All pages have COMPLETE translations - not just alignment changes
 */

const translations = {
    en: {
        // ============ NAVIGATION ============
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            solutions: 'Solutions',
            partners: 'Partners',
            contact: 'Contact',
            serviceDropdown: 'Services',
            serviceLabels: {
                dia: '(DIA) INTERNET & CONNECTIVITY',
                hosting: 'Hosting',
                managed: 'Managed Services'
            },
            solutionLabels: {
                physicalSecurity: 'Physical Security Systems',
                infrastructure: 'IT Infrastructure',
                datacenter: 'Data Center Solutions',
                communications: 'Unified Communications & Collaboration',
                enduser: 'End-User Devices',
                cybersecurity: 'Integrated Security solutions & Business Continuity',
                licensing: 'Software Licensing'
            }
        },

        // ============ COMMON ELEMENTS ============
        common: {
            search: {
                placeholder: 'Search services, solutions, insights...',
                button: 'Search'
            },
            cookie: {
                message: 'We use cookies to enhance your browsing experience and analyze our traffic. By continuing to use this site, you consent to our use of cookies.',
                learnMore: 'Learn More',
                accept: 'Accept'
            }
        },

        // ============ HOME PAGE ============
        home: {
            hero: {
                title: 'Saudi Vision.',
                subtitle: 'Enterprise-Grade ICT & ISP Excellence',
                since: 'Since 1997',
                description: 'Empowering mission-critical operations with world-class technology infrastructure, cybersecurity, and managed services across Saudi Arabia and beyond.',
                cta1: 'Explore Services',
                cta2: 'Get In Touch',
                scroll: 'Scroll to explore',
                stats: {
                    years: 'Years of Excellence',
                    projects: 'Projects Delivered',
                    clients: 'Trusted Clients'
                }
            },
            heroBold: {
                line1: 'We Build the',
                line2: 'IT Foundation',
                line3: 'for Saudi Businesses',
                description: '50,000+ successfully delivered IT projects, certified with 6 international ISO standards, and a CST-certified ISP data center.',
                stats: {
                    established: 'Established',
                    projects: 'Successful projects',
                    branches: 'Branches in KSA & Egypt',
                    experience: 'Years experience',
                    cstDataCenter: 'Licensed data center',
                    localHosting: 'Hosting data center',
                    localDia: 'Local DIA service provider',
                    isoCerts: 'ISO certifications'
                }
            },
            heroOrbLabels: ['DIA', 'Cloud services', 'Smart infrastructure', 'VSAT', 'Outsource'],
            why: {
                tag: 'Why Choose Us',
                title: 'The SHABAKAH Advantage',
                description: 'Nearly three decades of unwavering commitment to excellence, innovation, and customer success',
                cards: {
                    security: {
                        title: 'Security-By-Design',
                        description: 'Enterprise-grade security architecture with ISO 27001 and ISO 22301 certification, ensuring your data and operations remain protected.'
                    },
                    support: {
                        title: '24/7 Operations',
                        description: 'Round-the-clock monitoring, support, and maintenance with clear operational separation for uninterrupted service delivery.'
                    },
                    certified: {
                        title: 'Certified Excellence',
                        description: 'NCA compliant with multiple international certifications, demonstrating our commitment to industry best practices.'
                    },
                    vendor: {
                        title: 'Vendor-Agnostic',
                        description: 'Independent architecture approach ensures the best technology solutions tailored to your specific needs.'
                    },
                    track: {
                        title: 'Proven Track Record',
                        description: '28+ years serving government and enterprise sectors with consistently high customer satisfaction and project success rates.'
                    }
                }
            },
            services: {
                tag: 'Our Expertise',
                title: 'Provide ICT & ISP Solutions',
                description: 'End-to-end technology services designed for mission-critical enterprise operations'
            },
            // Home page service cards (bullets + goal; goalLabel optional, default "Goal")
            serviceCards: [
                {
                    title: 'Physical Security Systems',
                    bullets: [
                        'CCTV surveillance systems',
                        'Access Control systems',
                        'barrier gates for People and vehicle access control'
                    ],
                    goal: 'Ensuring full Control and monitoring for your business environment.',
                    link: 'Learn More',
                    href: 'solutions.html#physicalsecurity'
                },
                {
                    title: 'IT Infrastructure',
                    bullets: [
                        'Copper & fiber cabling infrastructure',
                        'Network Active solutions LAN/WLAN',
                        'SD-WAN solutions for branch connectivity and performance optimization.',
                        'Network monitoring & management systems.'
                    ],
                    goal: 'Deliver a next-generation IT network infrastructure ensuring a secure and high-speed performance across your entire business.',
                    link: 'Learn More',
                    href: 'solutions.html#infrastructure'
                },
                {
                    title: 'Data Center Solutions',
                    bullets: [
                        'Building data centers with certified standards',
                        'Server, storage & backup Solutions design and implementation',
                        'Deploying virtualization solutions .'
                    ],
                    goal: 'Provide a full integrated and Optimized environment to run Business systems.',
                    link: 'Learn More',
                    href: 'solutions.html#datacenter'
                },
                {
                    title: 'Unified Communications & Collaboration',
                    bullets: [
                        'Advanced IP Telephony systems with centralized call management',
                        'Centralized Secure cloud-based VoIP for branches',
                        'fully integrated communication solutions Covering voice, video, messaging, and meetings.'
                    ],
                    goal: 'Enable efficient communication across teams & branches at minimal cost while enhancing overall business productivity.',
                    link: 'Learn More',
                    href: 'solutions.html#communications'
                },
                {
                    title: 'End-User Devices',
                    bullets: [
                        'Supply & install end-user devices from leading brands: Dell, HP, Lenovo including vendor warranty & support.',
                        'Deploy centralized endpoint management using up-to-date tools such as Intune, VMware Workspace ONE, ManageEngine.'
                    ],
                    goal: 'Provide end-user devices tailored to your business needs with unified management.',
                    link: 'Learn More',
                    href: 'solutions.html#enduser'
                },
                {
                    title: 'Integrated Security solutions & Business Continuity',
                    bullets: [
                        'Next-Generation Firewalls & Intrusion IDS/IPS',
                        'Endpoint protection & EDR',
                        'Identity & Access Management IAM / PAM',
                        'Backup and recovery systems'
                    ],
                    goal: 'To protect your core systems and data by securing your IT environment and ensuring business continuity.',
                    link: 'Learn More',
                    href: 'solutions.html#cybersecurity'
                },
                {
                    title: 'Software Licensing',
                    bullets: [
                        'Supply and install original software licenses: Microsoft, Adobe, and others.',
                        'Supply and activate cloud licenses: O365, Azure, and others.'
                    ],
                    goal: 'Deliver the original software licenses with a fast and reliable activation process.',
                    link: 'Learn More',
                    href: 'solutions.html#licensing'
                },
                {
                    title: 'Managed Services',
                    bullets: [
                        'Provide Remote and onsite operation & support services with instant response.',
                        'Provide Flexible work models (part-time, full-time, seasonal)',
                        'Providing skilled technical staff (Network engineers, IT support, Cybersecurity specialists).',
                        'Provide preventive and corrective maintenance services for infrastructure and systems.',
                        'Including reports to measure service levels ensure SLA compliance.'
                    ],
                    goal: 'Operational support that reduces workload and operating costs while ensuring the highest levels of technical efficiency.',
                    link: 'Learn More',
                    href: 'services.html#managed'
                },
                {
                    title: 'ISP Services',
                    bullets: [
                        'Dedicated Internet Access (DIA) and enterprise connectivity',
                        'Hosting services',
                        '24/7 technical support to ensure continuous and stable operations for mission-critical environments'
                    ],
                    goal: 'To ensure reliable and high-performance connectivity and hosting services that supports business continuity and digital growth.',
                    link: 'Learn More',
                    href: 'services.html#dia'
                }
            ],
            horizontalProjects: {
                tag: 'SCROLL HORIZONTALLY →',
                title: 'Mission-Critical',
                titleHighlight: 'Deployments',
                projects: [
                    {
                        number: '01',
                        badge: 'FINANCIAL SECTOR',
                        title: 'Saudi Bank Core<br>Banking Migration',
                        description: 'Migrated entire core banking infrastructure (5,000+ transactions/second) from legacy mainframe to modern HPE SimpliVity hyperconverged platform. <strong style="color: #FFB800;">Zero transaction loss</strong> during 96-hour migration window.',
                        metrics: [
                            { value: '96h', label: 'Migration Window' },
                            { value: '5K+', label: 'Trans/Second' },
                            { value: '0%', label: 'Data Loss' }
                        ],
                        tech: ['HPE SimpliVity', 'VMware vSphere', 'Veeam Backup', 'SAMA Compliant']
                    },
                    {
                        number: '02',
                        badge: 'GOVERNMENT',
                        title: 'National Agency<br>SOC Deployment',
                        description: 'Built <strong style="color: #00C4E6;">NCA-certified</strong> Security Operations Center for critical government infrastructure. 24/7 monitoring of 50+ government entities with AI-powered threat detection. <strong style="color: #FFB800;">Not a single breach in 6 years.</strong>',
                        metrics: [
                            { value: '50+', label: 'Gov Entities' },
                            { value: '24/7', label: 'Monitoring' },
                            { value: '6yr', label: 'Zero Breaches' }
                        ],
                        tech: ['Fortinet FortiGate', 'Palo Alto NGFW', 'Splunk SIEM', 'NCA Certified']
                    },
                    {
                        number: '03',
                        badge: 'TELECOM',
                        title: 'Carrier-Grade<br>Datacenter Build',
                        description: 'Designed and deployed Tier III datacenter for major Saudi telecom operator. Supports <strong style="color: #00C4E6;">10 million subscribers</strong> with 99.99% uptime SLA. Full redundancy (N+1) across power, cooling, and network.',
                        metrics: [
                            { value: '10M', label: 'Subscribers' },
                            { value: 'Tier 3', label: 'Datacenter' },
                            { value: '99.99%', label: 'Uptime SLA' }
                        ],
                        tech: ['HPE 3PAR', 'Cisco UCS', 'Nutanix AHV', 'N+1 Redundancy']
                    }
                ]
            },
            stats: {
                title: 'Delivering Excellence at Scale',
                projects: 'Projects Delivered',
                clients: 'Trusted Clients',
                years: 'Years of Excellence',
                support: '24/7 Operations Support'
            },
            testimonials: {
                tag: 'Certifications',
                title: 'Shabakah Certifications'
            },
            // Featured Projects Carousel
            projectsCarousel: {
                tag: 'FEATURED PROJECTS',
                title: '',
                titleHighlight: 'Success stories',
                slides: [
                    {
                        badge: 'FINANCIAL SECTOR',
                        title: '1,300 Network Points &amp;<br>NTP Servers Installation',
                        description: 'Implementation of a structured cabling system consisting of <strong class="text-gold">1,300 network points</strong>, including termination, testing, and labeling, and deployment of centralized <strong class="text-teal">NTP servers</strong> to ensure accurate time synchronization across all network devices.',
                        metrics: { m1: '1,300', m1Label: 'Network points', m2: '3', m2Label: 'NTP servers' },
                        tags: ['Structured cabling', 'Testing & labeling', 'Time sync', 'NTP rollout']
                    },
                    {
                        badge: 'GOVERNMENT',
                        title: 'Operation &amp; Maintenance<br>for GIS System',
                        description: 'Operation and maintenance of the GIS system, including monitoring, updates, troubleshooting, and technical support to ensure <strong class="text-teal">stable performance</strong> and <strong class="text-gold">continuous availability</strong> of geographic information services.',
                        metrics: { m1: '3yr', m1Label: 'Operations', m2: 'Esri', m2Label: 'GIS', m3: 'Oracle', m3Label: 'Database' },
                        tags: ['Esri GIS', 'Oracle DB', 'O&M', 'GIS support']
                    },
                    {
                        badge: 'SEMI-GOVERNMENT',
                        title: 'Enterprise IP Telephony<br>Upgrade &amp; Migration',
                        description: 'Upgrade and replacement of the existing IP telephony system with a modern enterprise <strong class="text-teal">Yeastar</strong> communications platform—including system design, deployment of IP PBX servers, configuration of IP phones, network integration, call routing configuration, and migration of existing services.',
                        metrics: { m1: 'Yeastar', m1Label: 'Platform', m2: 'IP PBX', m2Label: 'Deployment', m3: 'Full', m3Label: 'Migration' },
                        tags: ['Yeastar', 'IP telephony', 'Call routing', 'Migration services']
                    }
                ]
            },
            // Proof of Work Section
            proofSection: {
                title: "Trusted By Saudi Arabia's",
                titleHighlight: 'Most Critical Infrastructure',
                description: 'Real results from real projects',
                cards: [
                    {
                        badge: 'CONSTRUCTION',
                        title: '450 Mbps DIA — Diriyah Projects',
                        description:
                            'Deployment and provision of a 450 Mbps Dedicated Internet Access (DIA) service, ensuring secure connectivity to enterprise systems, cloud services, and project-management platforms.',
                        tags: ['DIA', '450 Mbps', 'ISO 27001']
                    },
                    {
                        badge: 'OIL & GAS',
                        title: '100 Mbps DIA — Major Oil & Gas Client',
                        description:
                            'Deployment and provision of a 100 Mbps Dedicated Internet Access (DIA) service to support the day-to-day operational requirements of one of the top oil and gas companies in KSA.',
                        tags: ['DIA', '100 Mbps', 'ISO 20000']
                    },
                    {
                        badge: 'GOV SECTOR',
                        title: 'VSAT Internet Service',
                        description:
                            'Deployment and provision of dedicated VSAT satellite Internet access to support mission-critical operations for this government entity.',
                        tags: ['VSAT', 'Satellite', 'ISO 22301']
                    }
                ]
            },
            // Trust Band
            trustBand: {
                html: 'Partnering with <strong style="color: var(--cyan-electric); font-weight: 700;">Leading</strong> Technology Vendors'
            },
            // Technology Section
            techSection: {
                title: 'Enterprise Technology',
                titleHighlight: 'We Master',
                description: 'Expertise across the entire IT solutions stack',
                categories: [
                    {
                        title: 'Physical Security Systems',
                        items: ['Hikvision', 'Dahua', 'Bosch', 'Milestone', 'Hanwha', 'Honeywell', 'ZKTeco', 'Suprema']
                    },
                    {
                        title: 'Integrated Security Systems',
                        items: ['Fortinet', 'Sophos', 'Kaspersky', 'Trend Micro', 'Palo Alto']
                    },
                    {
                        title: 'ISP Services',
                        items: ['DIA', 'Colocation', 'VPS', 'Cloud Services', 'Web Hosting', 'Email Hosting']
                    },
                    {
                        title: 'Cabling Solutions',
                        items: ['Panduit', 'CommScope', 'Belden', 'Nexans', 'Corning', 'MMC']
                    },
                    {
                        title: 'Network Solutions',
                        items: ['Cisco', 'Aruba', 'Huawei', 'Netgear']
                    },
                    {
                        title: 'Data Center Systems',
                        items: ['Dell', 'Huawei', 'HPE', 'Lenovo', 'VMware', 'Veeam']
                    },
                    {
                        title: 'Unified Communication',
                        items: ['3CX', 'Yeastar', 'Yealink', 'Avaya', 'Cisco', 'Grandstream']
                    },
                    {
                        title: 'Software Licensing',
                        items: ['Microsoft', 'Adobe', 'Esri', 'AutoCAD']
                    }
                ],
                ctaButton: 'View All Services →'
            },
            cta: {
                title: 'Ready to Transform Your Technology Infrastructure?',
                description: "Let's discuss how SHABAKAH can empower your organization with enterprise-grade ICT & ISP solutions",
                btn1: 'Start a Conversation',
                btn2: 'View All Services'
            },
            // Modern footer translations
            footerModern: {
                tagline: 'Enterprise-Grade ICT & ISP Excellence Since 1997. Transforming businesses across Saudi Arabia with innovative technology solutions.',
                columns: {
                    services: 'Services',
                    company: 'Company',
                    solutions: 'Solutions',
                    connect: 'Connect'
                },
                links: {
                    dia: '(DIA) INTERNET & CONNECTIVITY',
                    hosting: 'Hosting',
                    managed: 'Managed Services',
                    physicalSecurity: 'Physical Security Systems',
                    infrastructure: 'IT Infrastructure',
                    datacenter: 'Data Center Solutions',
                    communications: 'Unified Communications & Collaboration',
                    enduser: 'End-User Devices',
                    cybersecurity: 'Integrated Security solutions & Business Continuity',
                    licensing: 'Software Licensing',
                    about: 'About Us',
                    journey: 'Our Journey',
                    partners: 'Partners',
                    solutions: 'Solutions',
                    contact: 'Contact'
                },
                contactInfo: {
                    location: 'Riyadh, Saudi Arabia',
                    phone: '+966 11 234 5678',
                    email: 'info@shabakah.com.sa',
                    support: '24/7 Support'
                },
                copyright: '© 2024 SHABAKAH Integrated Technology. All rights reserved.',
                certs: {
                    iso27001: 'ISO 27001',
                    iso22301: 'ISO 22301',
                    iso20000: 'ISO 20000',
                    iso9001: 'ISO 9001',
                    iso45001: 'ISO 45001',
                    iso14001: 'ISO 14001'
                }
            }
        },

        // ============ ABOUT PAGE ============
        about: {
            hero: {
                breadcrumb: 'About Us',
                title: 'About SHABAKAH',
                subtitle: '28 Years of ICT & ISP Excellence, Innovation, and Trust'
            },
            // Modern hero for about page
            heroModern: {
                titleLine1: 'About',
                titleLine2: 'SHABAKAH',
                subtitle: '28 Years of ICT & ISP Excellence, Innovation, and Trust — pioneering Technology Solution provider across Saudi Arabia.',
                stats: {
                    stat1: { number: '28+', label: 'Years Experience' },
                    stat2: { number: '50,000+', label: 'Projects Delivered' },
                    stat3: { number: '2,500+', label: 'Satisfied Clients' }
                }
            },
            overview: {
                tag: 'Our Story',
                title: 'Pioneering ICT & ISP Excellence Since 1997',
                p1: 'SHABAKAH Integrated Technology began its journey in 1997 as one of Saudi Arabia\'s pioneering Internet Service Providers. Over nearly three decades, we have evolved into a comprehensive ICT & ISP solutions provider, serving mission-critical infrastructure needs across government and enterprise sectors.',
                p2: 'Today, SHABAKAH stands as a trusted partner for organizations seeking enterprise-grade technology solutions. Our expertise spans IT infrastructure, Integrated Security solutions & Business Continuity, data centers, unified communications, and managed services, all delivered with unwavering commitment to security, reliability, and innovation.',
                p3: 'With over 50,000 projects delivered and 2,500+ satisfied clients, we continue to drive digital transformation across the Kingdom, aligned with Saudi Vision 2030\'s technology advancement goals.'
            },
            timeline: {
                tag: 'Our Journey',
                title: 'Milestones of Excellence',
                description: 'A timeline of innovation, growth, and unwavering commitment to technology excellence',
                milestones: {
                    1997: {
                        title: 'Foundation & ISP Launch',
                        description: 'SHABAKAH founded as one of Saudi Arabia\'s pioneering Internet Service Providers, bringing connectivity to businesses across the Kingdom.'
                    },
                    2005: {
                        title: 'Enterprise Solutions Expansion',
                        description: 'Expanded service portfolio to include enterprise IT infrastructure, networking, and systems integration services.'
                    },
                    2010: {
                        title: 'Hosting Data Center Establishment',
                        description: 'Established state-of-the-art local hosting data center facilities, offering private cloud and colocation services with Tier II standards.'
                    },
                    2015: {
                        title: 'ISO Certifications Achieved',
                        description: '<p>We are certified across a comprehensive range of ISO standards, including ISO 27001 for Information Security and ISO 22301 for Business Continuity, demonstrating our commitment to secure, reliable, and resilient operations.</p><p>We also hold ISO 20000, ISO 9001, ISO 45001, and ISO 14001 certifications, reflecting our dedication to excellence in service management, quality, occupational health and safety, and environmental responsibility.</p>'
                    },
                    2020: {
                        title: 'Digital Transformation Partner',
                        description: 'Became a key technology partner supporting Saudi Vision 2030\'s digital transformation initiatives across government and enterprise sectors.'
                    },
                    2024: {
                        title: 'Expanding Our Services',
                        description: 'Expanding our services to include Smart systems, tracking systems, ISO consultation services, and managed services.'
                    }
                }
            },
            offices: {
                tag: 'Our Presence',
                title: 'Where We Operate',
                description: 'A well-established presence across Saudi Arabia and Egypt — Riyadh headquarters, Jeddah, and Cairo.',
                locations: {
                    riyadh: 'Riyadh',
                    jeddah: 'Jeddah',
                    cairo: 'Cairo',
                    hq: 'Headquarters'
                }
            },
            visionMission: {
                vision: {
                    title: 'Our Vision',
                    description: 'To be the most trusted and innovative ICT & ISP partner in the Middle East, empowering organizations with secure, resilient, and future-ready technology infrastructure that drives sustainable growth and digital transformation.'
                },
                mission: {
                    title: 'Our Mission',
                    description: 'To deliver enterprise-grade ICT & ISP solutions with unwavering commitment to security, reliability, and operational excellence. We partner with our clients to design, implement, and manage mission-critical technology infrastructure that exceeds expectations and drives business value.'
                }
            },
            philosophy: {
                tag: 'How We Work',
                title: 'Engineering Philosophy',
                description: 'Guiding principles that define every solution we deliver',
                items: [
                    {
                        number: '01',
                        title: 'Business-Driven Design',
                        description: 'Every solution starts with understanding the client\'s business goals. We design technology that directly supports operational efficiency, growth, and long-term continuity.',
                        features: []
                    },
                    {
                        number: '02',
                        title: 'Multi-Vendor Expertise',
                        description: 'Our team works across leading global technology vendors, enabling us to select the most suitable technologies for each environment.',
                        features: []
                    },
                    {
                        number: '03',
                        title: 'Security & Compliance First',
                        description: 'Security and compliance standards are embedded into every layer of the solution design and implementation process, following ISO standards 27001, 20000, 22301, 9001, and 45001.',
                        features: []
                    },
                    {
                        number: '04',
                        title: 'End-to-End Integration',
                        description: 'From infrastructure and connectivity to security and managed services, we ensure seamless integration across the entire IT ecosystem.',
                        features: []
                    },
                    {
                        number: '05',
                        title: '24/7 Help Desk Support',
                        description: 'Dedicated support team available 24/7 to assist with ISP connectivity and hosting services, troubleshooting, and guarantee service continuity.',
                        features: []
                    }
                ]
            },
            values: {
                tag: 'Our Values',
                title: 'What Drives Us',
                items: [
                    { title: 'Excellence', description: 'Pursuing the highest standards in everything we do' },
                    { title: 'Integrity', description: 'Operating with transparency, honesty, and ethical principles' },
                    { title: 'Innovation', description: 'Embracing cutting-edge technologies and creative solutions' },
                    { title: 'Partnership', description: 'Building long-term relationships based on mutual success' }
                ]
            }
        },

        // ============ SERVICES PAGE ============
        services: {
            hero: {
                breadcrumb: 'Services',
                title: 'Provide ICT & ISP Solutions',
                subtitle: 'Enterprise-Grade Technology Services Designed for Mission-Critical Operations'
            },
            // Modern hero for services page
            heroModern: {
                titleLine1: 'Provide ICT & ISP Solutions',
                titleLine2: '& ISP Services',
                subtitle: 'Enterprise-Grade Technology Services Designed for Mission-Critical Operations',
                stats: {
                    stat1: { number: 'SLA', label: 'contracts' },
                    stat2: { number: '24/7', label: 'support' },
                    stat3: { number: '99.75%', label: 'availability' }
                }
            },
            dia: {
                tag: '(DIA) INTERNET & CONNECTIVITY',
                title: '(DIA) INTERNET & CONNECTIVITY',
                description: 'Our internet services offer Dedicated Connectivity to the World Wide Web via Shabakah gateway that enables us to provide internet. Furthermore, our internet Coverage of presence in entire Saudi Arabian geographical locations empower us to provide connectivity services anywhere in the kingdom at minimum time with affordable cost.',
                features: []
            },
            hosting: {
                tag: 'Hosting',
                title: 'Hosting',
                description: 'Our data center provides the latest infrastructure with the highest industry standards, offers Cloud services available 24x7x365 with redundant power, improved security & recovery systems. Our DNOC and support team includes highly professional employees, equipped with multiple monitoring tools to manage and monitor the Datacenter services.',
                features: [
                    { title: 'Shared email and web Hosting', description: 'Cost-effective hosting for websites and email services with reliable performance and easy management.' },
                    { title: 'Co-Location Hosting', description: 'Secure data center space to host your servers with reliable power, cooling, and high-speed connectivity.' },
                    { title: 'VPS Hosting', description: 'Scalable virtual private servers providing dedicated resources and flexibility for growing applications.' },
                    { title: 'DNS Parking', description: 'Domain parking services that allow you to reserve and manage domains until they are ready for use.' },
                    { title: 'Domain Registration', description: 'Registration and management of domain names for businesses and online services.' }
                ]
            },
            managed: {
                tag: 'Managed Services',
                title: 'Managed Services',
                description: '',
                features: [
                    { title: 'Remote and onsite operation & support', description: 'Provide Remote and onsite operation & support services with instant response.' },
                    { title: 'Flexible work models', description: 'Provide Flexible work models (part-time, full-time, seasonal)' },
                    { title: 'Skilled technical staff', description: 'Providing skilled technical staff (Network engineers, IT support, Cybersecurity specialists).' },
                    { title: 'Preventive and corrective maintenance', description: 'Provide preventive and corrective maintenance services for infrastructure and systems.' },
                    { title: 'SLA Contracts', description: 'Including reports to measure service levels ensure SLA compliance.' }
                ],
                goal: 'Operational support that reduces workload and operating costs while ensuring the highest levels of technical efficiency.'
            }
        },

        // ============ SOLUTIONS PAGE ============
        solutions: {
            hero: {
                breadcrumb: 'Solutions',
                title: 'Our Technology Solutions',
                subtitle: 'Tailored ICT & ISP Solutions for Your Sector'
            },
            // Modern hero for solutions page
            heroModern: {
                titleLine1: 'Our Technology',
                titleLine2: 'Solutions',
                subtitle: 'Tailored Technology Solutions for Government and Enterprise Sectors',
                stats: [
                    { label: 'Physical Security Systems', anchor: 'physicalsecurity' },
                    { label: 'IT Infrastructure', anchor: 'infrastructure' },
                    { label: 'Data Center Solutions', anchor: 'datacenter' },
                    { label: 'Unified Communications & Collaboration', anchor: 'communications' },
                    { label: 'End-User Devices', anchor: 'enduser' },
                    { label: 'Integrated Security solutions & Business Continuity', anchor: 'cybersecurity' },
                    { label: 'Software Licensing', anchor: 'licensing' }
                ]
            },
            overview: {
                tag: 'Our Solutions',
                title: 'Wide range of Technology Solutions',
                description: 'Comprehensive ICT & ISP solutions designed for the unique challenges and requirements of different industries'
            },
            infrastructure: {
                tag: 'IT Infrastructure',
                title: 'IT Infrastructure',
                bullets: [
                    'Copper & fiber cabling infrastructure',
                    'Network Active solutions LAN/WLAN',
                    'SD-WAN solutions for branch connectivity and performance optimization.',
                    'Network monitoring & management systems.'
                ],
                goal: 'Deliver a next-generation IT network infrastructure ensuring a secure and high-speed performance across your entire business.'
            },
            datacenter: {
                tag: 'Data Center Solutions',
                title: 'Data Center Solutions',
                bullets: [
                    'Building data centers with certified standards',
                    'Server, storage & backup Solutions design and implementation',
                    'Deploying virtualization solutions .'
                ],
                goal: 'Provide a full integrated and Optimized environment to run Business systems.'
            },
            physicalsecurity: {
                tag: 'Physical Security Systems',
                title: 'Physical Security Systems',
                bullets: [
                    'CCTV surveillance systems',
                    'Access Control systems',
                    'barrier gates for People and vehicle access control'
                ],
                goal: 'Ensuring full Control and monitoring for your business environment.'
            },
            communications: {
                tag: 'Unified Communications & Collaboration',
                title: 'Unified Communications & Collaboration',
                bullets: [
                    'Advanced IP Telephony systems with centralized call management',
                    'Centralized Secure cloud-based VoIP for branches',
                    'fully integrated communication solutions Covering voice, video, messaging, and meetings.'
                ],
                goal: 'Enable efficient communication across teams & branches at minimal cost while enhancing overall business productivity.'
            },
            enduser: {
                tag: 'End-User Devices',
                title: 'End-User Devices',
                bullets: [
                    'Supply & install end-user devices from leading brands: Dell, HP, Lenovo including vendor warranty & support.',
                    'Deploy centralized endpoint management using up-to-date tools such as Intune, VMware Workspace ONE, ManageEngine.'
                ],
                goal: 'Provide end-user devices tailored to your business needs with unified management.'
            },
            licensing: {
                tag: 'Software Licensing',
                title: 'Software Licensing',
                bullets: [
                    'Supply and install original software licenses: Microsoft, Adobe, and others.',
                    'Supply and activate cloud licenses: O365, Azure, and others.'
                ],
                goal: 'Deliver the original software licenses with a fast and reliable activation process.'
            },
            cybersecurity: {
                tag: 'Integrated Security solutions & Business Continuity',
                title: 'Integrated Security solutions & Business Continuity',
                bullets: [
                    'Next-Generation Firewalls & Intrusion IDS/IPS',
                    'Endpoint protection & EDR',
                    'Identity & Access Management IAM / PAM',
                    'Backup and recovery systems'
                ],
                goal: 'To protect your core systems and data by securing your IT environment and ensuring business continuity.'
            },
            managed: {
                tag: 'Managed Services',
                title: '24/7 Operations & Support Services',
                description: 'Focus on your core business while we manage your IT infrastructure. Our managed services deliver proactive monitoring, maintenance, and optimization ensuring peak performance and minimal downtime.',
                features: [
                    { title: '24/7 Infrastructure Monitoring', description: 'Continuous monitoring and alerting for all systems' },
                    { title: 'Proactive Maintenance & Patching', description: 'Regular updates and maintenance during off-peak hours' },
                    { title: 'Help Desk & Technical Support', description: 'Multi-tier support with guaranteed response times' },
                    { title: 'Performance Optimization', description: 'Continuous tuning and capacity planning' }
                ]
            },
            isp: {
                tag: 'ISP Services',
                title: 'Dedicated Internet, Hosting & Mission-Critical Support',
                description: 'As a long-established provider, we deliver enterprise-grade connectivity and hosting with clear SLAs—supporting continuity, cloud adoption, and digital growth across the Kingdom.',
                features: [
                    { title: 'Dedicated Internet Access (DIA)', description: 'High-performance enterprise connectivity with committed bandwidth and paths' },
                    { title: 'Hosting & Colocation', description: 'Secure hosting options aligned to workload, compliance, and availability targets' },
                    { title: '24/7 Technical Support', description: 'Round-the-clock engineering support for mission-critical operations' },
                    { title: 'Connectivity Consulting', description: 'Architecture for branches, SD-WAN integration, and performance optimization' }
                ]
            },
            approach: {
                tag: 'Our Approach',
                title: 'How We Deliver Solutions',
                steps: [
                    { number: '01', title: 'Discovery & Assessment', description: 'Comprehensive analysis of your business requirements, existing infrastructure, and strategic objectives.' },
                    { number: '02', title: 'Solution Design', description: 'Custom architecture and design aligned with industry best practices and your specific needs.' },
                    { number: '03', title: 'Implementation', description: 'Phased deployment with minimal disruption, following proven project management methodologies.' },
                    { number: '04', title: 'Optimization & Support', description: 'Continuous monitoring, optimization, and 24/7 support ensuring peak performance.' }
                ]
            },
            differentiators: {
                tag: 'What Sets Us Apart',
                title: 'The SHABAKAH Difference',
                cards: [
                    { title: 'Local Expertise', description: '28+ years serving Saudi market with deep understanding of regional requirements and regulations' },
                    { title: 'Certified Excellence', description: 'ISO 27001, ISO 22301, and NCA certified ensuring highest standards of quality and security' },
                    { title: 'Vendor Agnostic', description: 'Independent consultancy approach selecting best-fit technologies for your needs' },
                    { title: 'Vision 2030 Aligned', description: "Solutions supporting Saudi Arabia's digital transformation and economic diversification goals" }
                ]
            }
        },

        // ============ PARTNERS PAGE ============
        partners: {
            hero: {
                breadcrumb: 'Partners',
                title: 'Technology Partners',
                subtitle: 'Collaborating with Global Technology Leaders'
            },
            // Modern hero for partners page
            heroModern: {
                titleLine1: 'Strategic Technology',
                titleLine2: 'Partners',
                subtitle: 'SHABAKAH\'s wide range product portfolio is full of perfect choices that can enable us to select the best product for any specific need for every single project.'
            },
            intro: {
                tag: 'Strategic Partnerships',
                title: 'Best-of-Breed Technology Solutions',
                description: 'Our vendor-agnostic approach allows us to partner with the world\'s leading technology providers, ensuring you receive the best solutions for your specific needs.'
            },
            clients: {
                tag: 'Clients',
                title: 'Organizations we work with'
            },
            categories: {
                infrastructure: {
                    tag: 'Infrastructure',
                    title: 'Infrastructure & Computing Partners'
                },
                security: {
                    tag: 'Security',
                    title: 'Security & Protection Partners'
                },
                dataProtection: {
                    tag: 'Data Protection',
                    title: 'Backup & Recovery Partners'
                },
                cctv: {
                    tag: 'CCTV',
                    title: 'CCTV & Video Management Partners'
                },
                cabling: {
                    tag: 'Cabling',
                    title: 'Structured Cabling Partners'
                },
                accessControl: {
                    tag: 'Access Control',
                    title: 'Physical Access Partners'
                },
                network: {
                    tag: 'Networking',
                    title: 'Network Infrastructure Partners'
                },
                softwarePlatforms: {
                    tag: 'Software',
                    title: 'Software & Platform Partners'
                },
                unifiedComms: {
                    tag: 'Unified Communications',
                    title: 'Unified Communications Partners'
                }
            },
            partnerCards: {
                hpe: { name: 'Hewlett Packard Enterprise', description: 'Enterprise servers, storage solutions, and hybrid cloud infrastructure' },
                huawei: { name: 'Huawei', description: 'Next-generation data center and cloud infrastructure solutions' },
                lenovo: { name: 'Lenovo', description: 'Enterprise computing, servers, and end-user devices' },
                lenovoAlt: { name: 'Lenovo', description: 'Enterprise computing, servers, and end-user devices' },
                fortinet: { name: 'Fortinet', description: 'Advanced firewall, network security, and threat protection' },
                paloAlto: { name: 'Palo Alto Networks', description: 'Next-generation firewalls and cloud security platforms' },
                sophos: { name: 'Sophos', description: 'Endpoint protection and network security solutions' },
                kaspersky: { name: 'Kaspersky', description: 'Anti-malware, endpoint security, and threat intelligence' },
                veeam: { name: 'Veeam', description: 'Backup, disaster recovery, and data management solutions' },
                veritas: { name: 'Veritas', description: 'Enterprise backup, archiving, and business continuity' },
                commvault: { name: 'Commvault', description: 'Enterprise data protection and intelligent data management' },
                acronis: { name: 'Acronis', description: 'Cyber protection, backup, and disaster recovery solutions' },
                cctvHikvision: { name: 'Hikvision', description: 'Video surveillance, NVRs, and integrated security platforms' },
                cctvDahua: { name: 'Dahua', description: 'CCTV, access control, and intelligent building solutions' },
                cctvHanwha: { name: 'Hanwha', description: 'Wisenet video security and analytics' },
                cctvBosch: { name: 'Bosch', description: 'Security, safety, and communications systems' },
                cctvHoneywell: { name: 'Honeywell', description: 'Building technologies and security solutions' },
                cctvAxis: { name: 'Axis', description: 'Network video, audio, and analytics' },
                cctvMilestone: { name: 'Milestone', description: 'Video management software (VMS)' },
                cablingCommScope: { name: 'CommScope', description: 'Structured cabling and connectivity infrastructure' },
                cablingPanduit: { name: 'Panduit', description: 'Physical infrastructure and network cabling systems' },
                cablingNexans: { name: 'Nexans', description: 'Copper and fiber cable solutions' },
                cablingCorning: { name: 'Corning', description: 'Optical fiber and connectivity' },
                cablingBelden: { name: 'Belden', description: 'Signal transmission and industrial networking' },
                accessZKTeco: { name: 'ZKTeco', description: 'Biometric and access control terminals' },
                accessSuprema: { name: 'Suprema', description: 'Biometrics and physical access solutions' },
                accessHikvision: { name: 'Hikvision', description: 'Access control integrated with video security' },
                accessDahua: { name: 'Dahua', description: 'Access and entrance management systems' },
                networkCisco: { name: 'Cisco', description: 'Enterprise switching, routing, and wireless' },
                networkAruba: { name: 'Aruba', description: 'Campus and branch networking (HPE Aruba)' },
                networkNetgear: { name: 'Netgear', description: 'Business networking and Wi-Fi' },
                networkHuawei: { name: 'Huawei', description: 'Network switches, WLAN, and data center networking' },
                softwareMicrosoft: { name: 'Microsoft', description: 'Cloud, productivity, and enterprise platforms' },
                softwareAdobe: { name: 'Adobe', description: 'Creative and document experience software' },
                softwareAutoCAD: { name: 'AutoCAD', description: 'Design and drafting software (Autodesk)' },
                softwareEsri: { name: 'Esri', description: 'GIS and location intelligence' },
                ucYealink: { name: 'Yealink', description: 'IP phones, video conferencing, and collaboration devices' },
                ucYeastar: { name: 'Yeastar', description: 'PBX and unified communications systems' },
                ucGrandstream: { name: 'Grandstream', description: 'UC endpoints, Wi-Fi, and networking' },
                ucAvaya: { name: 'Avaya', description: 'Contact center and enterprise communications' },
                ucCisco: { name: 'Cisco', description: 'Webex and collaboration infrastructure' }
            },
            benefits: {
                tag: 'Why It Matters',
                title: 'Partnership Advantages',
                items: [
                    { title: 'Certified Expertise', description: 'Our engineers hold advanced certifications from all major partners, ensuring expert implementation and support' },
                    { title: 'Priority Support', description: 'As authorized partners, we provide expedited vendor support channels and direct escalation paths' },
                    { title: 'Early Access', description: 'Access to latest technologies, beta programs, and product roadmaps from our partners' },
                    { title: 'Extended Warranties', description: 'Comprehensive warranty coverage and maintenance agreements through official channels' },
                    { title: 'Training Programs', description: 'Access to vendor training, workshops, and knowledge transfer programs for your team' },
                    { title: 'Genuine Products', description: '100% authentic products with full manufacturer warranties and support' }
                ]
            }
        },

        // ============ CONTACT PAGE ============
        contact: {
            hero: {
                breadcrumb: 'Contact',
                title: 'Get In Touch',
                subtitle: 'Let\'s Discuss How SHABAKAH Can Empower Your Organization'
            },
            // Modern hero for contact page
            heroModern: {
                titleLine1: 'Get In',
                titleLine2: 'Touch',
                subtitle: "Let's Discuss How SHABAKAH Can Empower Your Organization",
                stats: {
                    stat1: { number: '24h', label: 'Response Time' },
                    stat2: { number: 'Free', label: 'Consultation' },
                    stat3: { number: 'Expert', label: 'ICT & ISP Advisors' }
                }
            },
            form: {
                title: 'Send Us a Message',
                description: 'Fill out the form below and our team will get back to you within 24 hours',
                fields: {
                    name: 'Full Name *',
                    namePlaceholder: 'Your Name',
                    email: 'Email Address *',
                    emailPlaceholder: 'your.email@company.com',
                    phone: 'Phone Number',
                    phonePlaceholder: '+966 XX XXX XXXX',
                    company: 'Company',
                    companyPlaceholder: 'Company Name',
                    service: 'Service Interest',
                    servicePlaceholder: 'Select a service...',
                    message: 'Message *',
                    messagePlaceholder: 'Tell us about your project or requirements...',
                    submit: 'Send Message'
                },
                serviceOptions: {
                    physicalsecurity: 'Physical Security Systems',
                    infrastructure: 'IT Infrastructure',
                    datacenter: 'Data Center Solutions',
                    communications: 'Unified Communications & Collaboration',
                    enduser: 'End-User Devices',
                    cybersecurity: 'Integrated Security solutions & Business Continuity',
                    licensing: 'Software Licensing',
                    other: 'Other'
                }
            },
            infoCards: {
                office: {
                    title: 'Our Office',
                    line1: 'Located in: Andalus Mall',
                    line2: 'Al Wurud, Olaya Street',
                    line3: 'Riyadh 12215, Saudi Arabia'
                },
                phone: {
                    title: 'Phone',
                    number: '(+966) 920033465',
                    note: '24/7 Support Available'
                },
                email: {
                    title: 'Email',
                    address: 'info@shabakah.sa',
                    note: 'We\'ll respond within 24 hours'
                },
                hours: {
                    title: 'Business Hours',
                    days: 'Sunday - Thursday',
                    time: '8:00 AM - 5:00 PM (GMT+3)'
                },
                social: {
                    title: 'Follow Us'
                }
            },
            info: {
                title: 'Contact Information',
                headquarters: {
                    title: 'Headquarters',
                    address: 'Riyadh, Saudi Arabia'
                },
                phone: {
                    title: 'Phone',
                    number: '+966 11 XXX XXXX'
                },
                email: {
                    title: 'Email',
                    address: 'info@shabakah.sa'
                },
                hours: {
                    title: 'Business Hours',
                    time: 'Sunday - Thursday: 8:00 AM - 5:00 PM'
                }
            }
        },

        // ============ RASED + ELM SERVICES + ISO PAGE ============
        iotTracking: {
            meta: {
                title: 'Rased Vehicle Tracking, Elm Services & ISO Certifications | SHABAKAH',
                description: 'Authorized Elm partner for Muqeem, Tamm, Rased fleet tracking (TGA-accredited), and Smart Gate. Rased packages from 5–23 SAR per vehicle/month — tracking, operations, rental and full fleet bundles. ISO consultancy included.'
            },
            hero: {
                badge: 'Authorized Elm Partner · 20+ Years',
                title: 'Elm e-Services, Rased Fleet Tracking & ISO Consultancy',
                subtitle: 'Authorized Elm partner · 20+ years in the Kingdom — Muqeem, Tamm, Rased, Smart Gate, and ISO consultancy with same-day activation, training, and renewal alerts before your subscription expires.',
                pillars: [
                    { title: 'Elm e-Services', description: 'Muqeem · Tamm · Rased · Smart Gate', anchor: '#elm-hub' },
                    { title: 'Raqeeb Platform', description: 'SHABAKAH fleet intelligence — real-time visibility, safety analytics, web + mobile', anchor: '#raqeeb' },
                    { title: 'Standards & Certifications Consultancy', description: 'ISO, HACCP, SASO, HALAL, BRC & the full standards catalogue', anchor: '#iso' }
                ],
                buttons: {
                    demo: 'Talk to an Expert',
                    whatsapp: 'WhatsApp',
                    features: 'Explore Services'
                },
                stats: {
                    vehicles: { number: '5000', label: 'Vehicles Tracked' },
                    realtime: { number: '1', suffix: 's', label: 'Real-Time Updates' },
                    uptime: { number: '99', suffix: '.9%', label: 'Uptime SLA' },
                    platforms: { number: '2', label: 'Platforms (iOS & Android)' }
                }
            },
            trustStrip: {
                line1: 'Authorized reseller and after-sales partner of',
                elmLabel: 'Elm (علم) Information Security',
                line2: 'Listed on the Elm Partners directory · Riyadh, Saudi Arabia'
            },
            activationJourney: {
                tag: 'How it works',
                title: 'From request to live service — without interruption',
                steps: [
                    { title: 'Choose your service', description: 'Muqeem, Tamm, Rased, Smart Gate, or ISO — one form, one partner.' },
                    { title: 'We activate with Elm', description: 'Fast activation after document verification.' },
                    { title: 'Training & onboarding', description: 'Hands-on training for your HR, fleet, or quality teams in the Kingdom.' },
                    { title: 'Renewal alerts', description: 'We remind you before subscriptions expire — zero surprise downtime.' }
                ]
            },
            clients: {
                tag: 'Trusted by organizations',
                title: 'Organizations that rely on SHABAKAH'
            },
            elmHub: {
                tag: 'Elm Services Hub',
                title: 'Four Elm platforms, one accountable partner',
                description: 'SHABAKAH is a leading reseller and strategic partner of Elm (علم) for over twenty years, with a complete after-sales practice — onboarding, training, data updates, renewal alerts and rapid request handling — to guarantee zero service interruption.',
                cardCta: 'Explore details',
                cards: [
                    { id: 'muqeem', name: 'Muqeem', arabic: 'مقيم', icon: 'id-card', tagline: 'Residency & Passports', description: 'Manage residency, visa and exit/re-entry transactions for expatriate staff fully online.' },
                    { id: 'tamm', name: 'Tamm', arabic: 'تم', icon: 'car-front', tagline: 'Vehicles & Traffic', description: 'A direct e-channel to the General Directorate of Traffic for fleets, transport and leasing companies.' },
                    { id: 'rased', name: 'Rased', arabic: 'راصد', icon: 'satellite', tagline: 'Fleet Tracking', description: 'Cloud-based live tracking and operations management, accredited by the Saudi Transport General Authority.' },
                    { id: 'smart-gate', name: 'Smart Gate', arabic: 'البوابة الذكية', icon: 'shield-check', tagline: 'Permits & Verification', description: 'Issue digital visitor permits and verify person + vehicle data against official records in real time.' }
                ]
            },
            muqeem: {
                title: 'Muqeem — Residency & Passport e-Services',
                arabic: 'خدمة مقيم',
                description: 'Muqeem lets establishments view their resident employees\' data and complete passport-directorate transactions online — instantly, anywhere, anytime — without visiting the General Directorate of Passports.',
                ctaLabel: 'Activate Muqeem subscription',
                pricingTag: 'Muqeem · Packages',
                pricingTitle: 'Package tiers — Basic, Advanced & Professional',
                pricingNote: 'Annual prices in SAR, excluding VAT.',
                pricingTierAriaLabel: 'Muqeem resident tiers',
                tableResidentsTitle: 'Resident tiers',
                tableFreeUsersTitle: 'Free users included per package',
                tablePricesTitle: 'Annual package prices',
                colTier: 'Tier',
                colResidents: 'Residents',
                freeUsersLabel: 'Free users',
                annualPriceLabel: 'Annual price',
                perResident: 'per resident',
                currency: 'SAR',
                packages: [
                    { id: 'basic', name: 'Basic' },
                    { id: 'advanced', name: 'Advanced' },
                    { id: 'professional', name: 'Professional' }
                ],
                tiers: [
                    { tier: 1, range: '0 – 9 residents', freeUsers: { basic: '1 user', advanced: '2 users', professional: '3 users' }, prices: { basic: 1100, advanced: 1210, professional: 1485 }, perResident: false },
                    { tier: 2, range: '10 – 49 residents', freeUsers: { basic: '2 users', advanced: '4 users', professional: '6 users' }, prices: { basic: 2300, advanced: 2645, professional: 3220 }, perResident: false },
                    { tier: 3, range: '50 – 99 residents', freeUsers: { basic: '3 users', advanced: '6 users', professional: '9 users' }, prices: { basic: 3600, advanced: 4140, professional: 5220 }, perResident: false },
                    { tier: 4, range: '100 – 199 residents', freeUsers: { basic: '4 users', advanced: '8 users', professional: '12 users' }, prices: { basic: 5600, advanced: 6160, professional: 7000 }, perResident: false },
                    { tier: 5, range: '200 – 800 residents', freeUsers: { basic: '5 users', advanced: '10 users', professional: '15 users' }, prices: { basic: 7550, advanced: 7928, professional: 9060 }, perResident: false },
                    { tier: 6, range: '801+ residents', freeUsers: { basic: '6 users', advanced: '12 users', professional: '18 users' }, prices: { basic: 11, advanced: 11.55, professional: 12.65 }, perResident: true }
                ]
            },
            tamm: {
                tag: 'Elm Service · Fleets, Transport & Leasing',
                title: 'Tamm — Vehicle & Traffic e-Services',
                arabic: 'خدمة تم',
                description: 'Tamm helps organize the transport and vehicle sector in Saudi Arabia with advanced e-services that let clients complete their traffic-related transactions directly with the General Directorate of Traffic.',
                featuresLabel: 'Key transactions',
                features: [
                    'Add and cancel the actual driver',
                    'Driving licenses inquiry',
                    'Vehicle insurance inquiry',
                    'Issue and cancel local authorizations',
                    'Issue and cancel international authorizations',
                    'Vehicle ownership transfer',
                    'Issue and renew vehicle licenses (Istimara)',
                    'Vehicle information inquiry'
                ],
                pricingTag: 'Transparent Pricing',
                pricingTitle: 'Annual subscription — 9 tiers by fleet size',
                pricingNote: 'All prices are in SAR and exclude VAT.',
                pricingTierLabel: 'Tier',
                pricingRangeLabel: 'Vehicles',
                pricingPriceLabel: 'Annual price',
                perVehicleNote: '+ 0.5 SAR per additional vehicle',
                pricingTiers: [
                    { tier: 1, range: '0 – 9 vehicles', short: '0–9', price: 1800 },
                    { tier: 2, range: '10 – 49 vehicles', short: '10–49', price: 3300 },
                    { tier: 3, range: '50 – 99 vehicles', short: '50–99', price: 4800 },
                    { tier: 4, range: '100 – 249 vehicles', short: '100–249', price: 7300 },
                    { tier: 5, range: '250 – 499 vehicles', short: '250–499', price: 9800 },
                    { tier: 6, range: '500 – 999 vehicles', short: '500–999', price: 12300 },
                    { tier: 7, range: '1,000 – 4,999 vehicles', short: '1,000–4,999', price: 16300 },
                    { tier: 8, range: '5,000 – 9,999 vehicles', short: '5,000–9,999', price: 20300 },
                    { tier: 9, range: '10,000+ vehicles', short: '10,000+', price: 24300, perVehicleRate: 0.5 }
                ],
                currency: 'SAR',
                perYear: '/ year',
                ctaLabel: 'Subscribe to Tamm'
            },
            rasedSubnav: {
                platforms: 'Platforms',
                features: 'Features',
                packages: 'Packages',
                outcomes: 'Outcomes'
            },
            rasedModules: {
                tag: 'Rased · Service modules',
                title: 'Four modules for every fleet operation',
                description: 'Choose the Rased capabilities your organization needs — tracking, maintenance, operations, or rental.',
                items: [
                    { title: 'Vehicle tracking', description: 'Live GPS, geofencing, trip history, and instant alerts on web and mobile.', link: 'View capabilities' },
                    { title: 'Maintenance & operations', description: 'Work orders, preventive maintenance schedules, and technician workflows.', link: 'View capabilities' },
                    { title: 'Fleet operations', description: 'Dispatch, driver scoring, fuel analytics, and compliance reporting.', link: 'View capabilities' },
                    { title: 'Rental management', description: 'Contract tracking, handover/return checks, and rental fleet utilization.', link: 'Talk to sales' }
                ]
            },
            platformShowcase: {
                tag: 'Rased · Dual Platform',
                title: 'Rased — Complete Fleet Visibility, Anywhere',
                description: 'A powerful Web command center for administrators and a native Mobile application for on-the-go monitoring — both fully integrated with the Rased cloud.',
                webDashboard: {
                    title: 'Rased Web Dashboard',
                    subtitle: 'Enterprise Command Center',
                    features: [
                        'Comprehensive fleet overview',
                        'Advanced analytics & reporting',
                        'Multi-user role management',
                        'Bulk device registration',
                        'Custom alert configuration'
                    ],
                    mockupText: 'Dashboard Preview',
                    ctaLabel: 'Visit Rased portal',
                    activateLabel: 'Activate via SHABAKAH',
                    url: 'https://rasedfms.elm.sa/en-US/EndUserAccounts-Authentication/login'
                },
                mobileApp: {
                    title: 'Rased Mobile App',
                    subtitle: 'Fleet Management On-the-Go',
                    features: [
                        'Real-time location tracking',
                        'Instant push notifications',
                        'Trip history & playback',
                        'Driver behavior insights',
                        'Quick asset status checks'
                    ],
                    mockupText: 'Mobile App Preview',
                    ctaLabel: 'Activate Rased subscription',
                    iosUrl: 'https://apps.apple.com/az/app/rased-myfleet/id6755953829',
                    androidUrl: 'https://play.google.com/store/apps/details?id=elm.rased.partner&hl=ar',
                    storeBadgesAria: 'Download Rased mobile app',
                    iosBadgeLabel: 'Download on the',
                    androidBadgeLabel: 'GET IT ON'
                }
            },
            raqeeb: {
                tag: 'SHABAKAH · Enterprise Fleet Intelligence',
                title: 'Raqeeb IoT Tracking Platform',
                arabic: 'منصة رقيب',
                description: 'Sophisticated fleet management and IoT asset tracking solution providing real-time visibility, safety analytics, and operational efficiency for businesses managing vehicle fleets and valuable assets.',
                subnav: {
                    platforms: 'Platforms',
                    capabilities: 'Capabilities',
                    outcomes: 'Outcomes',
                    preview: 'Preview'
                },
                platformShowcase: {
                    webDashboard: {
                        title: 'Raqeeb Web Dashboard',
                        subtitle: 'Enterprise Command Center',
                        features: [
                            'Comprehensive fleet overview',
                            'Advanced analytics & reporting',
                            'Multi-user role management',
                            'Bulk device registration',
                            'Custom alert configuration'
                        ],
                        ctaLabel: 'Open Raqeeb dashboard',
                        url: 'https://raqeeb.tracking.me'
                    },
                    mobileApp: {
                        title: 'Raqeeb Mobile App',
                        subtitle: 'Fleet Management On-the-Go',
                        features: [
                            'Real-time location tracking',
                            'Instant push notifications',
                            'Trip history & playback',
                            'Driver behavior insights',
                            'Quick asset status checks'
                        ],
                        iosLabel: 'Download on iOS',
                        iosUrl: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190',
                        androidLabel: 'Get on Android',
                        androidUrl: 'https://play.google.com/store/apps/details?id=com.tracking.iot.app'
                    }
                },
                features: {
                    tag: 'Raqeeb · Core Capabilities',
                    title: 'Enterprise-Grade Fleet Functionalities',
                    items: [
                        {
                            title: 'Real-Time Monitoring',
                            features: [
                                'Live location updates on interactive maps',
                                'Asset status: Moving, Idling, Disconnected',
                                'Heat maps for asset density visualization'
                            ]
                        },
                        {
                            title: 'Fleet & Asset Management',
                            features: [
                                'Asset categorization and grouping',
                                'Device registration & configuration',
                                'SIM management & connectivity tracking'
                            ]
                        },
                        {
                            title: 'Safety & Driver Behavior',
                            features: [
                                'Automated behavior scoring system',
                                'Real-time alerts: speeding, harsh events',
                                'Fatigue monitoring & break tracking'
                            ]
                        },
                        {
                            title: 'Operational Efficiency',
                            features: [
                                'Fuel consumption & mileage reports',
                                'Complete trip history with playback',
                                'Geofencing with entry/exit alerts'
                            ]
                        },
                        {
                            title: 'Administration & Maintenance',
                            features: [
                                'Custom alert rule configuration',
                                'Technician management tools',
                                'Comprehensive compliance reporting'
                            ]
                        }
                    ]
                },
                value: {
                    tag: 'Raqeeb · Core Value',
                    title: 'Your Fleet Command Center',
                    description: 'More than just location tracking — actionable insights for safety, cost control and operational excellence.',
                    items: [
                        { title: 'Reduce Accidents', description: 'Monitor harsh events and driver behavior to improve safety and reduce incident rates.' },
                        { title: 'Lower Fuel Costs', description: 'Track fuel efficiency and identify wasteful driving patterns to cut operational expenses.' },
                        { title: 'Extend Vehicle Lifespan', description: 'Proactive maintenance alerts and reduced harsh driving protect your fleet investment.' }
                    ]
                },
                gallery: {
                    tag: 'Raqeeb · Platform Preview',
                    title: 'See Raqeeb in Action',
                    items: [
                        { alt: 'Live Tracking Dashboard', src: 'assets/images/raqeeb/2%20en(4).jpeg' },
                        { alt: 'Analytics & Reports', src: 'assets/images/raqeeb/2en%20(1).jpeg' },
                        { alt: 'Mobile Application', src: 'assets/images/raqeeb/2en%20(2).jpeg' },
                        { alt: 'Safety Monitoring', src: 'assets/images/raqeeb/2en%20(3).jpeg' }
                    ]
                }
            },
            rasedHighlights: {
                tag: 'Rased · Features',
                title: 'Features',
                items: [
                    {
                        id: '01',
                        icon: 'badge-check',
                        title: 'Approved by the Transport General Authority',
                        description: 'TGA-accredited fleet tracking cloud service by Elm.'
                    },
                    {
                        id: '02',
                        icon: 'link-2',
                        title: 'Integration with relevant services',
                        description: 'Through linking with Tamm for authorizations, Tajeer for rental contracts, and Shomos for required data.'
                    },
                    {
                        id: '03',
                        icon: 'layout-dashboard',
                        title: 'Specialized system',
                        description: 'Supported by a dashboard and periodic reports to enhance operational efficiency.'
                    },
                    {
                        id: '04',
                        icon: 'gauge',
                        title: 'Inclusive performance',
                        description: 'By monitoring driver behavior and tracking regular maintenance and special documents.'
                    }
                ]
            },
            rasedPricing: {
                tag: 'Rased · Packages',
                title: 'Packages & Subscriptions',
                description: 'Select the number of vehicles and the appropriate package for your fleet management, or contact our sales team.',
                fleetAriaLabel: 'Fleet size tiers',
                perVehicleLabel: 'Per vehicle',
                currency: 'SAR',
                period: '/ month',
                fleetTiers: [
                    { key: '99', label: '5–99 vehicles' },
                    { key: '249', label: '100–249 vehicles' },
                    { key: '499', label: '250–499 vehicles' },
                    { key: '999', label: '500–999 vehicles' },
                    { key: '4999', label: '1,000–4,999 vehicles' },
                    { key: '5000', label: 'More than 5,000 vehicles' }
                ],
                packages: [
                    { id: 'tracking', name: 'Tracking', prices: { '99': 16, '249': 14, '499': 13, '999': 12, '4999': 11, '5000': 9 } },
                    { id: 'ops', name: 'Tracking, operation and maintenance', prices: { '99': 18, '249': 16, '499': 15, '999': 14, '4999': 13, '5000': 12 } },
                    { id: 'rental', name: 'Rental', prices: { '99': 7.5, '249': 7, '499': 6.5, '999': 6, '4999': 5.5, '5000': 5 } },
                    { id: 'full', name: 'Full Package', prices: { '99': 23, '249': 21, '499': 19.5, '999': 18, '4999': 16.5, '5000': 15 } },
                    { id: 'fuel', name: 'Fuel Package', prices: { '99': 16, '249': 14, '499': 13, '999': 12, '4999': 11, '5000': 9 } }
                ],
                notePrice: 'Prices are in SAR, per vehicle per month.',
                noteSubscription: 'Note: This is the subscription fee for the program only. It does not include devices, sensors, and chips.',
                ctaLabel: 'Activate Rased via SHABAKAH'
            },
            value: {
                tag: 'Rased · Core Value',
                title: 'Your Fleet Command Center',
                description: 'More than just location tracking — actionable insights for safety, cost control and operational excellence.',
                items: [
                    { title: 'Reduce Accidents', description: 'Monitor harsh events and driver behavior to improve safety and reduce incident rates.' },
                    { title: 'Lower Fuel Costs', description: 'Track fuel efficiency and identify wasteful driving patterns to cut operational expenses.' },
                    { title: 'Extend Vehicle Lifespan', description: 'Proactive maintenance alerts and reduced harsh driving protect your fleet investment.' }
                ]
            },
            smartGate: {
                tag: 'Elm Service · Security & Permits',
                title: 'Smart Gate (Tasreeh) — Digital Permits & Verification',
                arabic: 'البوابة الذكية',
                description: 'The Smart Gate is your key to a complete online experience — a single place for trusted security services that verify individuals and vehicles using direct, fast techniques to promote security and safety.',
                paragraph: 'Because services are 100% electronic from the first step to the last, they are free of human errors during data verification and help reduce fraud and falsification.',
                highlights: {
                    tag: 'Smart Gate · Features',
                    title: 'Smart Gate Features',
                    items: [
                        { id: '01', icon: 'layout-grid', title: 'One Place', description: 'All your security services in one platform — no searching across disconnected systems.' },
                        { id: '02', icon: 'layers', title: 'Complete Services', description: 'All Smart Gate services are integrated and linked to each other.' },
                        { id: '03', icon: 'mouse-pointer-click', title: 'Flexible Procedures', description: 'Create your account, find the right service, and subscribe immediately.' },
                        { id: '04', icon: 'zap', title: 'Online Subscription', description: 'Instant digital subscription — no paperwork or conventional procedures.' }
                    ]
                },
                services: {
                    tag: 'Smart Gate · Services',
                    title: 'Services',
                    description: 'Smart Gate services provide easy access to essential security procedures with full reliability for beneficiaries, help reduce fraud and falsification, and stay 100% electronic from first step to last — free of human errors during data verification.',
                    items: [
                        {
                            id: 'tasreeh',
                            name: 'Tasreeh Service',
                            icon: 'file-badge',
                            features: [
                                'Issuing visitor permits for individuals or entities with vehicles to registered vital facilities.',
                                'Validating individual and vehicle data against official authority records per facility-owner rules.',
                                'Service available 24/7 from anywhere.',
                                'Less time and effort to issue and track entry permits.',
                                'Eliminates paper letters and manual visitor-permit requests.'
                            ]
                        },
                        {
                            id: 'kashef',
                            name: 'Kashef Service',
                            icon: 'scan-line',
                            features: [
                                'Automatically verify vehicle security and legal status via plate data at the client location.',
                                'Check visitor vehicle legal status from the National Information Center.',
                                'Linked to NIC — available around the clock.'
                            ]
                        }
                    ]
                },
                ctaLabel: 'Activate Smart Gate'
            },
            officialLinks: {
                tag: 'Official portals',
                title: 'Use the official Elm platforms',
                description: 'We handle activation and training — you operate on the official Muqeem, Tamm, Rased, and Smart Gate portals.',
                portals: [
                    { name: 'Muqeem portal', url: 'https://muqeem.sa/#/login' },
                    { name: 'Tamm portal', url: 'https://idp.elm.sa/auth/realms/Tamm/protocol/openid-connect/auth?client_id=tamm-portal-web&redirect_uri=https%3A%2F%2Ftamm.sa%2Fdashboard&response_type=code&scope=openid%20profile%20offline_access&nonce=a046d105e941be631b9f3c6b31865bb79fhmFS7Zc&state=01d5f03c8815b14d9184c73983c1a55462OaAvke7&code_challenge=OsOVBG_xYzmXCLGawibMHwZVv_AP4LJUFS0ABIbGYH8&code_challenge_method=S256&ui_locales=ar' },
                    { name: 'Rased portal', url: 'https://rasedfms.elm.sa/en-US/EndUserAccounts-Authentication/login' },
                    { name: 'Smart Gate portal', url: 'https://smartgate.com.sa/login' }
                ]
            },
            iso: {
                tag: 'Standards & Certification Consultancy',
                title: 'From gap analysis to certificate — handled end-to-end',
                description: 'SHABAKAH is a leading specialist in integrated quality and management-systems solutions, with deep experience qualifying and developing organizations of every size and sector. We deliver consultancy across the full ISO catalogue plus HACCP, SASO, HALAL, and BRC — not limited to a fixed list of standards.',
                paragraphs: [
                    'We deliver complete advisory services: current-state assessment, gap analysis, policy & procedure authoring, forms & records, supporting org structures, plus training programs that elevate your teams and embed a culture of quality.',
                    'Whether you need an ISO management system, Saudi conformity (SASO), Halal certification, BRC food safety, or HACCP — we map the right standard to your sector and guide you through audit readiness.',
                    'SHABAKAH commits to a long-term strategic-partner role — from planning and qualification through monitoring and continuous improvement — so the system stays sustainable and keeps pace with growth ambitions.'
                ],
                schemesTag: 'ISO | HACCP | HALAL | SASO | BRC | SABER',
                schemesTitle: 'Regional & sector certifications',
                schemesDescription: 'Beyond ISO management systems — we prepare your organization for food safety, Saudi conformity, Halal, and global retail standards.',
                schemes: [
                    { code: 'HACCP', name: 'Hazard Analysis Critical Control Point', description: 'Preventive food-safety methodology that identifies and controls hazards through critical control points.', image: 'assets/images/iot/HACCP.jpeg' },
                    { code: 'SASO', name: 'Saudi Standards & Conformity', description: 'Saudi Standards, Metrology and Quality Organization conformity for products and services in the Kingdom.', image: 'assets/images/iot/SASO.png' },
                    { code: 'HALAL', name: 'Halal Certification', description: 'End-to-end Halal compliance for food, hospitality, and supply-chain operations serving Muslim markets.', image: 'assets/images/iot/HALAL.png' },
                    { code: 'BRC', name: 'BRC Global Standard', description: 'British Retail Consortium food-safety and quality standard for manufacturers, retailers, and exporters.', image: 'assets/images/iot/BRC.jpg' }
                ],
                standardsTag: 'Popular ISO standards',
                standardsTitle: 'Popular ISO standards — and every ISO you need',
                standardsDescription: 'The grid below shows commonly requested examples — we deliver consultancy for the full ISO catalogue, not only these.',
                standards: [
                    { code: 'ISO 9001:2015', name: 'Quality Management System', description: 'Improve product and service quality through effective process management and continuous improvement.', category: 'quality', icon: 'badge-check' },
                    { code: 'ISO 14001:2015', name: 'Environmental Management System', description: 'Manage environmental impacts efficiently, reduce risk and comply with environmental regulations.', category: 'environment', icon: 'leaf' },
                    { code: 'ISO 45001:2018', name: 'Occupational Health & Safety', description: 'Provide a safer, healthier workplace by identifying hazards and reducing incidents.', category: 'safety', icon: 'hard-hat' },
                    { code: 'ISO 22000:2018', name: 'Food Safety Management', description: 'Control hazards across the food supply chain and meet regulatory requirements.', category: 'food', icon: 'utensils' },
                    { code: 'ISO 13485:2016', name: 'Medical Device Quality', description: 'Specialized QMS for medical devices and supplies, ensuring compliance and patient safety.', category: 'health', icon: 'heart-pulse' },
                    { code: 'ISO 20000-1:2018', name: 'IT Service Management', description: 'Deliver stable, reliable IT services that meet client needs and business requirements.', category: 'it', icon: 'server' },
                    { code: 'ISO 27001:2022', name: 'Information Security Management', description: 'Protect sensitive information and data through effective security controls.', category: 'security', icon: 'shield-check' },
                    { code: 'ISO 18788:2015', name: 'Private Security Operations', description: 'Manage private security operations with legal compliance and respect for human rights.', category: 'security', icon: 'shield' },
                    { code: 'ISO 41001:2018', name: 'Facility Management', description: 'Improve facility and support-services management to sustain business and resource efficiency.', category: 'assets', icon: 'building' },
                    { code: 'ISO 21001:2018', name: 'Educational Organizations', description: 'Improve the quality of educational services and raise learner satisfaction.', category: 'education', icon: 'graduation-cap' },
                    { code: 'ISO 22301:2019', name: 'Business Continuity', description: 'Prepare for crises and ensure continuity of operations during disruption.', category: 'continuity', icon: 'life-buoy' },
                    { code: 'ISO 44001:2017', name: 'Collaborative Business Relations', description: 'Structured framework for managing partnerships and collaborative relationships.', category: 'compliance', icon: 'handshake' },
                    { code: 'ISO 55001:2014', name: 'Asset Management', description: 'Manage physical and intangible assets throughout their lifecycle to maximize value.', category: 'assets', icon: 'recycle' },
                    { code: 'ISO 37301:2021', name: 'Compliance Management', description: 'Help institutions comply with legal and regulatory requirements and embed strong governance.', category: 'compliance', icon: 'gavel' },
                    { code: 'Full ISO catalogue', name: 'Every ISO standard you need', description: 'These are popular examples — we deliver consultancy across the complete ISO family. Share your industry and certification goal and we will map the right standard and audit-ready pathway.', category: 'all', icon: 'layers' }
                ],
                ctaLabel: 'Request certification consultation'
            },
            isoCategories: {
                all: 'Popular standards',
                quality: 'Quality',
                environment: 'Environment',
                safety: 'Health & Safety',
                food: 'Food',
                health: 'Healthcare',
                it: 'IT',
                security: 'Security',
                education: 'Education',
                continuity: 'Continuity',
                assets: 'Assets',
                compliance: 'Compliance'
            },
            support: {
                tag: 'Support · Available All Week',
                title: 'Talk to a SHABAKAH specialist',
                description: 'Activation, technical support, subscription renewal alerts and operational training — handled directly by our team in Riyadh.',
                channels: {
                    phone: { label: 'Direct line', value: '+966 920033465', href: 'tel:+966920033465', icon: 'phone' },
                    whatsapp: { label: 'WhatsApp', value: '+966 920033465', href: '#', icon: 'message-circle' },
                    email: { label: 'Email', value: 'info@shabakah.sa', href: 'mailto:info@shabakah.sa', icon: 'mail' },
                    location: { label: 'Office', value: 'Andalus Mall, Riyadh', icon: 'map-pin' }
                },
                form: {
                    title: 'Request activation or a callback',
                    name: 'Full name',
                    company: 'Company / Establishment',
                    phone: 'Phone',
                    service: 'Interested in',
                    serviceOptions: ['Muqeem', 'Tamm', 'Rased', 'Raqeeb', 'Smart Gate', 'ISO Consultancy', 'Other'],
                    message: 'How can we help?',
                    submit: 'Send Request',
                    note: 'We typically respond within one business hour.'
                },
                salesTeams: {
                    heading: 'Dedicated sales representatives',
                    subheading: 'Reach the right specialist for Elm e-Services, ISO consultancy, or Raqeeb tracking.',
                    callLabel: 'Call',
                    whatsappLabel: 'WhatsApp',
                    roles: {
                        manager: 'Department Manager',
                        consultant: 'Consulting Engineer',
                        sales: 'Sales Representative'
                    },
                    teams: [
                        {
                            id: 'elm',
                            title: 'Elm e-Services Sales',
                            icon: 'building-2',
                            contacts: [
                                { name: 'Mohammed Al-Shami', phone: '0580841296' },
                                { name: 'Mohammed Abd Al-Azim', phone: '0543238145' },
                                { name: 'Mahmoud Al-Shami', phone: '0596800151' },
                                { name: 'Noura Al-Subaie', phone: '0581058026' },
                                { name: 'Mariam Al-Khalidi', phone: '0594596138' },
                                { name: 'Fatima Nasser', phone: '0599752984' }
                            ]
                        },
                        {
                            id: 'iso',
                            title: 'ISO Sales',
                            icon: 'award',
                            contacts: [
                                { name: 'Mohammed Mansour', phone: '0582826449', role: 'manager' },
                                { name: 'Eng. Yasser Abd Al-Basit', phone: '0596199385', role: 'consultant' },
                                { name: 'Mai Al-Sarfi', phone: '0596160509' },
                                { name: 'Doaa Khaled', phone: '0596857815' },
                                { name: 'Sara Romani', phone: '0596266772' },
                                { name: 'Amal', phone: '0594596151' }
                            ]
                        },
                        {
                            id: 'raqeeb',
                            title: 'Raqeeb Tracking Sales',
                            icon: 'radar',
                            contacts: [
                                { name: 'Mahmoud Sharshar', phone: '0505387993' },
                                { name: 'Abd Al-Hamid Jamil', phone: '0570131573' }
                            ]
                        }
                    ]
                }
            },
            faq: {
                tag: 'FAQ',
                title: 'Frequently asked questions',
                categories: {
                    all: 'All',
                    muqeem: 'Muqeem',
                    tamm: 'Tamm',
                    rased: 'Rased',
                    raqeeb: 'Raqeeb',
                    'smart-gate': 'Smart Gate',
                    iso: 'ISO'
                },
                items: [
                    { category: 'muqeem', q: 'What is Muqeem and who can use it?', a: 'Muqeem is an Elm-powered platform that lets companies handle passport and residency transactions for their resident staff online. The service is available to registered establishments only, not individuals.' },
                    { category: 'muqeem', q: 'How does Muqeem subscription pricing work?', a: 'Muqeem offers three annual packages — Basic, Advanced and Professional — across six resident tiers (0–9 up to 801+). Tier 1 starts at 1,100 SAR (Basic) to 1,485 SAR (Professional); tier 6 is priced per resident from 11 SAR. Each package includes free users that scale with tier. All prices exclude VAT.' },
                    { category: 'tamm', q: 'How is Tamm priced for fleets?', a: 'Tamm is priced in 9 tiers based on fleet size, starting at 1,800 SAR for 0-9 vehicles and going up to 24,300 SAR for 10,000+ vehicles (+ 0.5 SAR per additional vehicle). All prices exclude VAT.' },
                    { category: 'tamm', q: 'How do I add or remove the actual driver in Tamm?', a: 'From the Tamm fleet portal, open the vehicle record, choose Actual Driver, then add or cancel the driver linked to the plate. SHABAKAH provides hands-on training for your transport team.' },
                    { category: 'rased', q: 'How is Rased priced?', a: 'Rased offers five monthly packages per vehicle: Tracking, Tracking+Operations+Maintenance, Rental, Full Package, and Fuel Package. Prices scale by fleet size from 5–23 SAR per vehicle per month. The subscription covers the software only — devices and sensors are billed separately.' },
                    { category: 'rased', q: 'What are Rased\'s key features?', a: 'Rased is accredited by the Transport General Authority, integrates with Tamm, Tajeer and Shomos, provides dashboards and periodic reports, and monitors driver behavior, maintenance schedules and fleet documents.' },
                    { category: 'raqeeb', q: 'Does Raqeeb include a mobile app?', a: 'Yes. Raqeeb ships with a web dashboard at raqeeb.tracking.me and native mobile apps for iOS and Android, covering live tracking, trip history, geofencing and driver scoring.' },
                    { category: 'raqeeb', q: 'How long is trip history stored in Raqeeb?', a: 'Trip archives are available for playback and export based on your Raqeeb subscription tier — typically 90 days to 12 months. Contact us for archive retention that matches your compliance needs.' },
                    { category: 'smart-gate', q: 'What are Smart Gate features?', a: 'Smart Gate offers a unified portal, integrated security services, easy subscription steps, and instant online activation — all 100% electronic.' },
                    { category: 'smart-gate', q: 'What services does Smart Gate provide?', a: 'Tasreeh issues and tracks visitor entry permits with official data validation. Kashef verifies vehicle security and legal status via plate data, linked to the National Information Center 24/7.' },
                    { category: 'smart-gate', q: 'What does Smart Gate do?', a: 'Smart Gate issues digital visitor permits for vital facilities and verifies person + vehicle data against official records — eliminating manual paperwork and fraud risk.' },
                    { category: 'iso', q: 'Which standards and certifications does SHABAKAH cover?', a: 'We deliver end-to-end consultancy for the full ISO catalogue — quality, environment, safety, IT, food, healthcare, and sector-specific management systems. We also prepare organizations for HACCP, SASO, HALAL, and BRC. Popular examples include ISO 9001, 14001, 45001, 22000, 13485, 20000-1, 27001, and more — tell us your sector and we map the right path.' },
                    { category: 'general', q: 'How fast can a new Elm subscription be activated?', a: 'Most subscriptions activate within the same business day once documents are verified. Our after-sales team also tracks renewal dates so your service never lapses.' },
                    { category: 'general', q: 'Why activate Elm services through SHABAKAH?', a: 'You get Riyadh-based support in Arabic and English, same-day activation, training for your teams, renewal reminders, published Muqeem and Tamm pricing, and one partner for Muqeem, Tamm, Rased, Smart Gate, and ISO consultancy.' }
                ]
            },
            mobileContact: {
                call: 'Call',
                whatsapp: 'WhatsApp'
            }
        },

        // ============ FOOTER ============
        footer: {
            tagline: 'Enterprise-Grade ICT & ISP Excellence Since 1997',
            newsletter: {
                title: 'Stay Updated',
                description: 'Subscribe to our newsletter for the latest ICT & ISP insights and updates',
                placeholder: 'Enter your email',
                button: 'Subscribe'
            },
            sections: {
                services: 'Services',
                company: 'Company',
                resources: 'Resources',
                connect: 'Connect'
            },
            links: {
                physicalSecurity: 'Physical Security Systems',
                infrastructure: 'IT Infrastructure',
                datacenter: 'Data Center Solutions',
                communications: 'Unified Communications & Collaboration',
                enduser: 'End-User Devices',
                cybersecurity: 'Integrated Security solutions & Business Continuity',
                licensing: 'Software Licensing',
                about: 'About Us',
                careers: 'Careers',
                partners: 'Partners',
                contact: 'Contact Us',
                blog: 'Blog',
                caseStudies: 'Case Studies',
                whitepapers: 'Whitepapers',
                support: 'Support'
            },
            copyright: '© 2024 SHABAKAH Integrated Technology. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            certified: 'ISO 27001 | ISO 22301 Certified'
        }
    },

    ar: {
        // ============ التنقل ============
        nav: {
            home: 'الرئيسية',
            about: 'من نحن',
            services: 'الخدمات',
            solutions: 'الحلول',
            partners: 'الشركاء',
            contact: 'تواصل معنا',
            serviceDropdown: 'الخدمات',
            serviceLabels: {
                dia: 'الاتصال المؤسسي والإنترنت المخصص (DIA)',
                hosting: 'الاستضافة',
                managed: 'الخدمات المُدارة'
            },
            solutionLabels: {
                physicalSecurity: 'أنظمة الأمن المادي',
                infrastructure: 'البنية التحتية لتقنية المعلومات',
                datacenter: 'حلول مراكز البيانات',
                communications: 'الاتصالات الموحدة',
                enduser: 'أجهزة المستخدمين',
                cybersecurity: 'الأمن السيبراني واستمرارية الأعمال',
                licensing: 'تراخيص البرمجيات'
            }
        },

        // ============ عناصر مشتركة ============
        common: {
            search: {
                placeholder: 'ابحث في الخدمات والحلول...',
                button: 'بحث'
            },
            cookie: {
                message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتحليل حركة المرور. باستمرارك في استخدام هذا الموقع، فإنك توافق على استخدامنا لملفات تعريف الارتباط.',
                learnMore: 'اعرف المزيد',
                accept: 'قبول'
            }
        },

        // ============ الصفحة الرئيسية ============
        home: {
            hero: {
                title: 'رؤية سعودية.',
                subtitle: 'تميّز تقني على مستوى المؤسسات',
                since: 'منذ عام 1997',
                description: 'تمكين العمليات الحيوية من خلال بنية تحتية تقنية عالمية المستوى، والأمن السيبراني، والخدمات المُدارة في جميع أنحاء المملكة العربية السعودية وما بعدها.',
                cta1: 'استكشف الخدمات',
                cta2: 'تواصل معنا',
                scroll: 'تصفح للاستكشاف',
                stats: {
                    years: 'عاماً من التميز',
                    projects: 'مشروع منجز',
                    clients: 'عميل موثوق'
                }
            },
            heroBold: {
                line1: 'نبني',
                line2: 'البنية التحتية التقنية',
                line3: 'لمؤسسات الأعمال السعودية',
                description: 'أكثر من 50,000 مشروع تقني منجز، معتمدون بستة معايير ISO دولية، ومركز بيانات مرخّص من هيئة الاتصالات والفضاء والتقنية (CST) كمزود خدمة إنترنت.',
                stats: {
                    established: 'تأسست',
                    projects: 'مشاريع ناجحة',
                    branches: 'فروع في السعودية ومصر',
                    experience: 'سنوات خبرة',
                    cstDataCenter: 'مركز بيانات مرخّص — CST',
                    localHosting: 'استضافة محلية',
                    localDia: 'مزود DIA محلي',
                    isoCerts: 'شهادات ISO'
                }
            },
            heroOrbLabels: ['DIA', 'الخدمات السحابية', 'البنية التحتية الذكية', 'VSAT', 'الخدمات المُدارة'],
            why: {
                tag: 'لماذا تختارنا',
                title: 'ميزة شبكة',
                description: 'ما يقارب ثلاثة عقود من الالتزام الثابت بالتميز والابتكار ونجاح العملاء',
                cards: {
                    security: {
                        title: 'الأمن بالتصميم',
                        description: 'بنية أمنية على مستوى المؤسسات مع شهادات ISO 27001 و ISO 22301، لضمان حماية بياناتك وعملياتك.'
                    },
                    support: {
                        title: 'عمليات على مدار الساعة',
                        description: 'مراقبة ودعم وصيانة على مدار الساعة طوال أيام الأسبوع مع فصل تشغيلي واضح لتقديم خدمة مستمرة دون انقطاع.'
                    },
                    certified: {
                        title: 'تميز معتمد',
                        description: 'متوافق مع الهيئة الوطنية للأمن السيبراني مع شهادات دولية متعددة، تُثبت التزامنا بأفضل الممارسات في الصناعة.'
                    },
                    vendor: {
                        title: 'مستقل عن الموردين',
                        description: 'نهج معماري مستقل يضمن أفضل الحلول التقنية المصممة خصيصاً لاحتياجاتك المحددة.'
                    },
                    track: {
                        title: 'سجل حافل مُثبت',
                        description: '28+ عاماً في خدمة القطاعين الحكومي والمؤسسي مع معدلات عالية باستمرار من رضا العملاء ونجاح المشاريع.'
                    }
                }
            },
            services: {
                tag: 'خبرتنا',
                title: 'حلول تقنية المعلومات وخدمات مزودي الإنترنت',
                description: 'خدمات تقنية متكاملة للأنظمة الحرجة في بيئات الأعمال المؤسسية'
            },
            // Home page service cards - Arabic
            serviceCards: [
                {
                    title: 'أنظمة الأمن المادي',
                    bullets: [
                        'أنظمة المراقبة بالفيديو (CCTV)',
                        'أنظمة التحكم في الدخول',
                        'بوابات حواجز لمرور الأشخاص والمركبات'
                    ],
                    goal: 'ضمان رقابة وتحكم كاملين على بيئة أعمالك.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#physicalsecurity'
                },
                {
                    title: 'البنية التحتية لتقنية المعلومات',
                    bullets: [
                        'بنية كابلات نحاسية وألياف بصرية',
                        'معدات الشبكات النشطة (LAN/WLAN)',
                        'حلول SD-WAN لربط الفروع وتحسين الأداء',
                        'أنظمة مراقبة وإدارة الشبكات'
                    ],
                    goal: 'تقديم بنية شبكات تقنية معلومات من الجيل التالي تضمن أداءً آمناً وعالي السرعة عبر كامل أعمالك.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#infrastructure'
                },
                {
                    title: 'حلول مراكز البيانات',
                    bullets: [
                        'بناء مراكز بيانات وفق معايير معتمدة',
                        'تصميم وتنفيذ الخوادم والتخزين والنسخ الاحتياطي',
                        'نشر حلول المحاكاة الافتراضية'
                    ],
                    goal: 'توفير بيئة متكاملة ومحسّنة لتشغيل أنظمة الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#datacenter'
                },
                {
                    title: 'الاتصالات الموحدة',
                    bullets: [
                        'أنظمة هاتف IP متقدمة مع إدارة مركزية للمكالمات',
                        'VoIP سحابي آمن ومركزي للفروع',
                        'حلول اتصال متكاملة تشمل الصوت والفيديو والمراسلة والاجتماعات'
                    ],
                    goal: 'تمكين تواصل فعّال بين الفرق والفروع بتكلفة منخفضة مع تعزيز إنتاجية الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#communications'
                },
                {
                    title: 'أجهزة المستخدمين',
                    bullets: [
                        'توريد وتركيب أجهزة المستخدمين من العلامات الرائدة: Dell وHP وLenovo بما في ذلك ضمان ودعم المورّد',
                        'نشر إدارة مركزية لنقاط النهاية باستخدام أدوات حديثة مثل Intune وVMware Workspace ONE وManageEngine'
                    ],
                    goal: 'توفير أجهزة المستخدمين الملائمة لاحتياجات أعمالك مع إدارة موحدة.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#enduser'
                },
                {
                    title: 'الأمن السيبراني واستمرارية الأعمال',
                    bullets: [
                        'جدران حماية من الجيل التالي وأنظمة كشف/منع التسلل IDS/IPS',
                        'حماية نقاط النهاية وEDR',
                        'إدارة الهوية والصلاحيات IAM / PAM',
                        'أنظمة النسخ الاحتياطي والاستعادة'
                    ],
                    goal: 'حماية أنظمتك وبياناتك الأساسية من خلال تأمين بيئتك التقنية وضمان استمرارية الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#cybersecurity'
                },
                {
                    title: 'تراخيص البرمجيات',
                    bullets: [
                        'توريد وتركيب تراخيص برمجيات أصلية: Microsoft وAdobe وغيرها',
                        'توريد وتفعيل تراخيص سحابية: O365 وAzure وغيرها'
                    ],
                    goal: 'تقديم تراخيص البرمجيات الأصلية مع عملية تفعيل سريعة وموثوقة.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'solutions.html#licensing'
                },
                {
                    title: 'الخدمات المُدارة',
                    bullets: [
                        'تقديم خدمات التشغيل والدعم عن بُعد وفي الموقع مع استجابة فورية',
                        'توفير نماذج عمل مرنة (دوام جزئي، دوام كامل، موسمي)',
                        'توفير كوادر تقنية ماهرة (مهندسو شبكات، دعم تقنية المعلومات، متخصصو الأمن السيبراني)',
                        'تقديم خدمات الصيانة الوقائية والتصحيحية للبنية التحتية والأنظمة',
                        'تضمين تقارير لقياس مستويات الخدمة وضمان الامتثال لاتفاقيات مستوى الخدمة (SLA)'
                    ],
                    goal: 'دعم تشغيلي يقلل عبء العمل وتكاليف التشغيل مع ضمان أعلى مستويات الكفاءة التقنية.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'services.html#managed'
                },
                {
                    title: 'خدمات مزودي الإنترنت',
                    bullets: [
                        'اتصال إنترنت مخصص (DIA) واتصال مؤسسي',
                        'خدمات الاستضافة',
                        'دعم تقني على مدار الساعة لضمان عمليات مستقرة ومتواصلة للبيئات الحرجة'
                    ],
                    goal: 'ضمان اتصال واستضافة موثوقة وعالية الأداء تدعم استمرارية الأعمال والنمو الرقمي.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد',
                    href: 'services.html#dia'
                }
            ],
            horizontalProjects: {
                tag: '→ تصفح أفقياً',
                title: 'مشاريع حيوية',
                titleHighlight: 'ومهمة',
                projects: [
                    {
                        number: '01',
                        badge: 'القطاع المالي',
                        title: 'ترحيل الخدمات المصرفية<br>الأساسية لبنك سعودي',
                        description: 'قمنا بترحيل البنية التحتية المصرفية بالكامل (5000+ معاملة/ثانية) من نظام قديم إلى منصة HPE SimpliVity الحديثة. <strong style="color: #FFB800;">صفر خسارة في المعاملات</strong> خلال فترة الترحيل 96 ساعة.',
                        metrics: [
                            { value: '96 ساعة', label: 'فترة الترحيل' },
                            { value: '5000+', label: 'معاملة/ثانية' },
                            { value: '0%', label: 'خسارة البيانات' }
                        ],
                        tech: ['HPE SimpliVity', 'VMware vSphere', 'Veeam Backup', 'متوافق مع SAMA']
                    },
                    {
                        number: '02',
                        badge: 'القطاع الحكومي',
                        title: 'نشر مركز عمليات<br>الأمن الوطني',
                        description: 'أنشأنا مركز عمليات أمنية <strong style="color: #00C4E6;">معتمد من NCA</strong> للبنية التحتية الحكومية الحيوية. مراقبة 24/7 لأكثر من 50 جهة حكومية مع كشف التهديدات بالذكاء الاصطناعي. <strong style="color: #FFB800;">لا اختراقات منذ 6 سنوات.</strong>',
                        metrics: [
                            { value: '50+', label: 'جهة حكومية' },
                            { value: '24/7', label: 'المراقبة' },
                            { value: '6 سنوات', label: 'صفر اختراقات' }
                        ],
                        tech: ['Fortinet FortiGate', 'Palo Alto NGFW', 'Splunk SIEM', 'معتمد NCA']
                    },
                    {
                        number: '03',
                        badge: 'قطاع الاتصالات',
                        title: 'بناء مركز بيانات<br>على مستوى الناقل',
                        description: 'صممنا ونشرنا مركز بيانات Tier III لمشغل اتصالات سعودي كبير. يدعم <strong style="color: #00C4E6;">10 ملايين مشترك</strong> مع SLA بنسبة توفر 99.99%. تكرار كامل (N+1) عبر الطاقة والتبريد والشبكة.',
                        metrics: [
                            { value: '10 مليون', label: 'مشترك' },
                            { value: 'Tier 3', label: 'مركز البيانات' },
                            { value: '99.99%', label: 'SLA التوفر' }
                        ],
                        tech: ['HPE 3PAR', 'Cisco UCS', 'Nutanix AHV', 'تكرار N+1']
                    }
                ]
            },
            stats: {
                title: 'تقديم التميز على نطاق واسع',
                projects: 'مشروع منجز',
                clients: 'عميل موثوق',
                years: 'عاماً من التميز',
                support: 'دعم العمليات على مدار الساعة'
            },
            testimonials: {
                tag: 'الشهادات والاعتمادات',
                title: 'اعتمادات شبكة'
            },
            // كاروسيل المشاريع المميزة
            projectsCarousel: {
                tag: 'المشاريع المميزة',
                title: '',
                titleHighlight: 'قصص النجاح',
                slides: [
                    {
                        badge: 'القطاع المالي',
                        title: 'تنفيذ 1,300 نقطة شبكة<br>وتثبيت 3 خوادم NTP للمزامنة الزمنية',
                        description: 'شبكة كابلات منظمة جاهزة للتشغيل تضم <strong class="text-gold">1,300 نقطة شبكة</strong> مع الإنهاء والاختبار والتسمية، مع نشر <strong class="text-teal">3 خوادم NTP</strong> للمزامنة الزمنية عبر جميع أجهزة الشبكة.',
                        metrics: { m1: '1,300', m1Label: 'نقطة شبكة', m2: '3', m2Label: 'خادم NTP' },
                        tags: ['كابلات منظمة', 'اختبار وتسمية', 'المزامنة الزمنية', 'NTP']
                    },
                    {
                        badge: 'القطاع الحكومي',
                        title: 'تشغيل وصيانة<br>نظام GIS',
                        description: 'تشغيل وصيانة نظام المعلومات الجغرافية (GIS) بما في ذلك المراقبة والتحديثات واستكشاف الأخطاء والدعم الفني لضمان <strong class="text-teal">أداء مستقر</strong> و<strong class="text-gold">توافر مستمر</strong> لخدمات المعلومات الجغرافية.',
                        metrics: { m1: '3 سنوات', m1Label: 'تشغيل', m2: 'Esri', m2Label: 'GIS', m3: 'Oracle', m3Label: 'قاعدة البيانات' },
                        tags: ['Esri GIS', 'Oracle DB', 'تشغيل وصيانة', 'دعم GIS']
                    },
                    {
                        badge: 'شبه حكومي',
                        title: 'ترقية وهجرة نظام<br>الهاتف IP المؤسسي',
                        description: 'ترقية واستبدال نظام الهاتف IP الحالي بمنصة اتصالات <strong class="text-teal">Yeastar</strong> حديثة بمعايير مؤسسية، شاملة تصميم النظام ونشر خوادم IP PBX وتهيئة الهواتف وتكامل الشبكة وتهيئة توجيه المكالمات وترحيل الخدمات الحالية.',
                        metrics: { m1: 'Yeastar', m1Label: 'المنصة', m2: 'IP PBX', m2Label: 'النشر', m3: 'كامل', m3Label: 'الهجرة' },
                        tags: ['Yeastar', 'هاتف IP', 'توجيه المكالمات', 'خدمات الهجرة']
                    }
                ]
            },
            // قسم إثبات العمل
            proofSection: {
                title: 'موثوقون لدى أهم',
                titleHighlight: 'البنى التحتية الحرجة في المملكة',
                description: 'نتائج حقيقية من مشاريع حقيقية',
                cards: [
                    {
                        badge: 'قطاع الإنشاءات',
                        title: 'DIA سعة 450 ميجابت/ث — مشاريع الدرعية',
                        description:
                            'نُقدّم خدمة اتصال إنترنت مخصص (DIA) بسعة 450 ميجابت/ث، بما يضمن اتصالاً آمناً بأنظمة المؤسسة وخدمات السحابة ومنصات إدارة المشاريع.',
                        tags: ['DIA', '450 Mbps', 'ISO 27001']
                    },
                    {
                        badge: 'النفط والغاز',
                        title: 'DIA سعة 100 ميجابت/ث — شركة نفط وغاز رائدة',
                        description:
                            'نوفر خدمة اتصال إنترنت مخصص (DIA) بسعة 100 ميجابت/ث لدعم المتطلبات التشغيلية اليومية لإحدى كبرى شركات النفط والغاز في المملكة.',
                        tags: ['DIA', '100 Mbps', 'ISO 20000']
                    },
                    {
                        badge: 'قطاع حكومي',
                        title: 'خدمة إنترنت VSAT',
                        description:
                            'ننفّذ وصول إنترنت VSAT عبر الأقمار الصناعية المخصصة لدعم العمليات الحرجة لهذه الجهة الحكومية.',
                        tags: ['VSAT', 'قمر صناعي', 'ISO 22301']
                    }
                ]
            },
            // شريط الثقة
            trustBand: {
                html: 'بالشراكة مع <strong style="color: var(--cyan-electric); font-weight: 700;">الشركات الرائدة</strong> في التقنية من المزوّدين'
            },
            // قسم التقنية
            techSection: {
                title: 'تقنيات المؤسسات',
                titleHighlight: 'التي نتقنها',
                description: 'خبرة تمتد على كامل منظومة حلول تقنية المعلومات والاتصالات',
                categories: [
                    {
                        title: 'أنظمة الأمن المادي',
                        items: ['Hikvision', 'Dahua', 'Bosch', 'Milestone', 'Hanwha', 'Honeywell', 'ZKTeco', 'Suprema']
                    },
                    {
                        title: 'أنظمة الأمن المتكامل',
                        items: ['Fortinet', 'Sophos', 'Kaspersky', 'Trend Micro', 'Palo Alto']
                    },
                    {
                        title: 'الاتصال والاستضافة',
                        items: ['DIA', 'الاستضافة المشتركة', 'VPS', 'الخدمات السحابية', 'استضافة الويب', 'استضافة البريد']
                    },
                    {
                        title: 'حلول التمديدات والكابلات',
                        items: ['Panduit', 'CommScope', 'Belden', 'Nexans', 'Corning', 'MMC']
                    },
                    {
                        title: 'حلول الشبكات',
                        items: ['Cisco', 'Aruba', 'Huawei', 'Netgear']
                    },
                    {
                        title: 'أنظمة مراكز البيانات',
                        items: ['Dell', 'Huawei', 'HPE', 'Lenovo', 'VMware', 'Veeam']
                    },
                    {
                        title: 'الاتصالات الموحدة',
                        items: ['3CX', 'Yeastar', 'Yealink', 'Avaya', 'Cisco', 'Grandstream']
                    },
                    {
                        title: 'تراخيص البرمجيات',
                        items: ['Microsoft', 'Adobe', 'Esri', 'AutoCAD']
                    }
                ],
                ctaButton: 'استعرض جميع الخدمات ←'
            },
            cta: {
                title: 'هل أنت مستعد لتحويل بنيتك التحتية التقنية؟',
                description: 'دعنا نناقش كيف يمكن لشبكة تمكين مؤسستك بحلول تقنية معلومات واتصالات على مستوى المؤسسات',
                btn1: 'ابدأ محادثة',
                btn2: 'عرض جميع الخدمات'
            },
            // ترجمات التذييل الحديث
            footerModern: {
                tagline: 'تميّز مؤسسي في تقنية المعلومات وخدمات مزودي الإنترنت منذ عام 1997. نُمكّن المؤسسات في المملكة بحلول تقنية موثوقة ومبتكرة.',
                columns: {
                    services: 'الخدمات',
                    company: 'الشركة',
                    solutions: 'الحلول',
                    connect: 'التواصل'
                },
                links: {
                    dia: 'الاتصال المؤسسي والإنترنت المخصص (DIA)',
                    hosting: 'الاستضافة',
                    managed: 'الخدمات المُدارة',
                    physicalSecurity: 'أنظمة الأمن المادي',
                    infrastructure: 'البنية التحتية لتقنية المعلومات',
                    datacenter: 'حلول مراكز البيانات',
                    communications: 'الاتصالات الموحدة',
                    enduser: 'أجهزة المستخدمين',
                    cybersecurity: 'الأمن السيبراني واستمرارية الأعمال',
                    licensing: 'تراخيص البرمجيات',
                    about: 'من نحن',
                    journey: 'رحلتنا',
                    partners: 'الشركاء',
                    solutions: 'الحلول',
                    contact: 'تواصل معنا'
                },
                contactInfo: {
                    location: 'الرياض، المملكة العربية السعودية',
                    phone: '+966 11 234 5678',
                    email: 'info@shabakah.com.sa',
                    support: 'دعم على مدار الساعة'
                },
                copyright: '© 2024 شبكة التقنية المتكاملة. جميع الحقوق محفوظة.',
                certs: {
                    iso27001: 'ISO 27001',
                    iso22301: 'ISO 22301',
                    iso20000: 'ISO 20000',
                    iso9001: 'ISO 9001',
                    iso45001: 'ISO 45001',
                    iso14001: 'ISO 14001'
                }
            }
        },

        // ============ صفحة من نحن ============
        about: {
            hero: {
                breadcrumb: 'من نحن',
                title: 'عن شبكة',
                subtitle: '28 عاماً من التميز والابتكار والثقة في تقنية المعلومات وخدمات مزودي الإنترنت'
            },
            // ترجمات البطل الحديث لصفحة من نحن
            heroModern: {
                titleLine1: 'عن',
                titleLine2: 'شبكة',
                subtitle: '28 عاماً من التميز في تقنية المعلومات وخدمات مزودي الإنترنت — رائدون في حلول التقنية والاتصالات في المملكة العربية السعودية.',
                stats: {
                    stat1: { number: '+28', label: 'سنوات الخبرة' },
                    stat2: { number: '+50,000', label: 'مشاريع منجزة' },
                    stat3: { number: '+2,500', label: 'عملاء راضون' }
                }
            },
            overview: {
                tag: 'قصتنا',
                title: 'رواد التميز في تقنية المعلومات وخدمات مزودي الإنترنت منذ عام 1997',
                p1: 'بدأت شبكة للتقنية المتكاملة رحلتها عام 1997 كإحدى الشركات الرائدة في تقديم خدمات الإنترنت في المملكة. وعلى مدى نحو ثلاثة عقود، تطوّرنا إلى مزود شامل لحلول تقنية المعلومات والاتصالات وخدمات مزودي الإنترنت، نخدم البنى التحتية الحرجة في القطاعين الحكومي والمؤسسي.',
                p2: 'اليوم، تُعد شبكة شريكاً موثوقاً للمؤسسات التي تسعى إلى حلول تقنية مؤسسية. تمتد خبرتنا لتشمل البنية التحتية لتقنية المعلومات، والأمن السيبراني واستمرارية الأعمال، ومراكز البيانات، والاتصالات الموحدة، والخدمات المُدارة، وكلها مُقدمة بالتزام ثابت بالأمان والموثوقية والابتكار.',
                p3: 'مع أكثر من 50,000 مشروع منجز و2,500+ عميل راضٍ، نواصل قيادة التحول الرقمي في أنحاء المملكة، متوافقين مع أهداف رؤية السعودية 2030 للتقدم التقني.'
            },
            timeline: {
                tag: 'رحلتنا',
                title: 'معالم التميز',
                description: 'مسيرة من الابتكار والنمو والالتزام بالتميز التقني',
                milestones: {
                    1997: {
                        title: 'التأسيس وإطلاق خدمات الإنترنت',
                        description: 'تأسست شبكة كإحدى الشركات الرائدة في تقديم خدمات الإنترنت في المملكة العربية السعودية، لتمكين الشركات من الاتصال في مختلف مناطق المملكة.'
                    },
                    2005: {
                        title: 'توسّع حلول المؤسسات',
                        description: 'توسّعت محفظة خدماتنا لتشمل البنية التحتية التقنية المؤسسية، والشبكات، وخدمات تكامل الأنظمة.'
                    },
                    2010: {
                        title: 'تأسيس مركز بيانات للاستضافة',
                        description: 'أنشأنا مرافق استضافة محلية متطورة لمراكز البيانات، تقدّم خدمات السحابة الخاصة والاستضافة المشتركة (Co-location) وفق معايير Tier II.'
                    },
                    2015: {
                        title: 'الحصول على شهادات ISO',
                        description: '<p>نحن معتمدون على مجموعة شاملة من معايير ISO، بما في ذلك ISO 27001 لأمن المعلومات وISO 22301 لاستمرارية الأعمال، مما يعكس التزامنا بالعمليات الآمنة والموثوقة والمرنة.</p><p>كما نحمل شهادات ISO 20000 وISO 9001 وISO 45001 وISO 14001، مما يعكس التزامنا بالتميز في إدارة الخدمات والجودة والصحة والسلامة المهنية والمسؤولية البيئية.</p>'
                    },
                    2020: {
                        title: 'شريك التحول الرقمي',
                        description: 'أصبحنا شريكاً تقنياً رئيساً يدعم مبادرات التحول الرقمي لرؤية السعودية 2030 في القطاعين الحكومي والمؤسسي.'
                    },
                    2024: {
                        title: 'توسيع نطاق خدماتنا',
                        description: 'نوسّع خدماتنا لتشمل الأنظمة الذكية، وأنظمة التتبع، واستشارات ISO، والخدمات المُدارة.'
                    }
                }
            },
            offices: {
                tag: 'تواجدنا',
                title: 'أين نعمل',
                description: 'تواجد راسخ في المملكة العربية السعودية ومصر — المقر الرئيسي في الرياض، وفروع في جدة والقاهرة.',
                locations: {
                    riyadh: 'الرياض',
                    jeddah: 'جدة',
                    cairo: 'القاهرة',
                    hq: 'المقر الرئيسي'
                }
            },
            visionMission: {
                vision: {
                    title: 'رؤيتنا',
                    description: 'أن نكون الشريك الأكثر موثوقية وابتكاراً في تقنية المعلومات والاتصالات وخدمات مزودي الإنترنت في الشرق الأوسط، نُمكّن المؤسسات ببنية تحتية تقنية آمنة ومرنة وجاهزة للمستقبل تدعم النمو المستدام والتحول الرقمي.'
                },
                mission: {
                    title: 'مهمتنا',
                    description: 'تقديم حلول تقنية المعلومات والاتصالات وخدمات مزودي الإنترنت بمعايير مؤسسية، مع التزام ثابت بالأمان والموثوقية والتميز التشغيلي. نتشارك مع عملائنا في تصميم وتنفيذ وإدارة البنى التحتية التقنية الحرجة بما يفوق التوقعات ويحقق قيمة الأعمال.'
                }
            },
            philosophy: {
                tag: 'كيف نعمل',
                title: 'فلسفة الهندسة',
                description: 'المبادئ التوجيهية التي تحدد كل حل نقدمه',
                items: [
                    {
                        number: '01',
                        title: 'تصميم مدفوع بالأعمال',
                        description: 'كل حل يبدأ بفهم أهداف عمل العميل. نصمم تقنية تدعم مباشرة الكفاءة التشغيلية والنمو واستمرارية العمل على المدى الطويل.',
                        features: []
                    },
                    {
                        number: '02',
                        title: 'خبرة مع مورّدين متعددين',
                        description: 'يعمل فريقنا مع كبار مورّدي التكنولوجيا العالميين، مما يمكّننا من اختيار الأنسب من التقنيات لكل بيئة.',
                        features: []
                    },
                    {
                        number: '03',
                        title: 'الأمان والامتثال أولاً',
                        description: 'تُدمج معايير الأمان والامتثال في كل طبقة من تصميم الحل وتنفيذه، وفق معايير ISO 27001 و20000 و22301 و9001 و45001.',
                        features: []
                    },
                    {
                        number: '04',
                        title: 'تكامل شامل',
                        description: 'من البنية التحتية والاتصال إلى الأمن والخدمات المُدارة، نضمن تكاملاً سلساً عبر منظومة تقنية المعلومات بأكملها.',
                        features: []
                    },
                    {
                        number: '05',
                        title: 'دعم مكتب المساعدة على مدار الساعة',
                        description: 'فريق دعم مكرّس متاح على مدار الساعة لمساعدتكم في اتصال واستضافة مزودي الإنترنت واستكشاف الأخطاء وضمان استمرارية الخدمة.',
                        features: []
                    }
                ]
            },
            values: {
                tag: 'قيمنا',
                title: 'ما يحركنا',
                items: [
                    { title: 'التميز', description: 'السعي لأعلى المعايير في كل ما نفعله' },
                    { title: 'النزاهة', description: 'العمل بشفافية وصدق ومبادئ أخلاقية' },
                    { title: 'الابتكار', description: 'تبنّي التقنيات المتقدمة والحلول الإبداعية' },
                    { title: 'الشراكة', description: 'بناء شراكات طويلة الأمد قائمة على النجاح المشترك' }
                ]
            }
        },

        // ============ صفحة الخدمات ============
        services: {
            hero: {
                breadcrumb: 'الخدمات',
                title: 'حلول تقنية المعلومات وخدمات مزودي الإنترنت',
                subtitle: 'خدمات تقنية مؤسسية مصممة للأنظمة الحرجة'
            },
            // ترجمات البطل الحديث لصفحة الخدمات
            heroModern: {
                titleLine1: 'حلول تقنية المعلومات',
                titleLine2: 'وخدمات مزودي الإنترنت',
                subtitle: 'خدمات تقنية مؤسسية مصممة للأنظمة الحرجة',
                stats: {
                    stat1: { number: 'SLA', label: 'اتفاقيات مستوى الخدمة (SLA)' },
                    stat2: { number: '24/7', label: 'دعم فني' },
                    stat3: { number: '99.75%', label: 'اتفاقية التوفر' }
                }
            },
            dia: {
                tag: 'الاتصال المؤسسي والإنترنت المخصص (DIA)',
                title: 'الاتصال المؤسسي والإنترنت المخصص (DIA)',
                description: 'نوفر اتصال إنترنت مخصص (DIA) بمعايير مؤسسية عبر بنيتنا المرخّصة من هيئة الاتصالات والفضاء والتقنية (CST)، مع تغطية وطنية واتفاقيات مستوى خدمة (SLA) واضحة. نُمكّن مؤسستكم من الاتصال الآمن والمستقر بخدمات السحابة وأنظمة الأعمال في مختلف مناطق المملكة — بنشر سريع وتكلفة مناسبة.',
                features: []
            },
            hosting: {
                tag: 'الاستضافة',
                title: 'الاستضافة',
                description: 'يوفّر مركز بياناتنا بنية تحتية حديثة بمعايير الصناعة، مع خدمات سحابية متاحة على مدار الساعة طوال أيام السنة، وطاقة احتياطية وأنظمة أمان واستعادة محسّنة. يضم فريق مركز عمليات الشبكة (NOC) لدينا مختصين مجهّزين بأدوات مراقبة متعددة لإدارة خدمات مركز البيانات على مدار الساعة.',
                features: [
                    { title: 'استضافة البريد والويب المشتركة', description: 'استضافة فعّالة من حيث التكلفة للمواقع وخدمات البريد الإلكتروني مع أداء موثوق وإدارة سهلة' },
                    { title: 'الاستضافة المشتركة (Co-location)', description: 'مساحة آمنة في مركز البيانات لاستضافة خوادمكم مع طاقة وتبريد واتصال عالي السرعة موثوق' },
                    { title: 'استضافة VPS', description: 'خوادم افتراضية خاصة قابلة للتوسع توفر موارد مخصصة ومرونة للتطبيقات المتنامية' },
                    { title: 'حجز النطاقات', description: 'حجز وإدارة أسماء النطاقات حتى تصبح جاهزة للاستخدام' },
                    { title: 'تسجيل النطاقات', description: 'تسجيل وإدارة أسماء النطاقات للشركات والخدمات عبر الإنترنت' }
                ]
            },
            managed: {
                tag: 'الخدمات المُدارة',
                title: 'الخدمات المُدارة',
                description: '',
                features: [
                    { title: 'التشغيل والدعم عن بُعد وفي الموقع', description: 'استجابة فورية للتشغيل والدعم التقني عن بُعد أو في موقع العميل' },
                    { title: 'نماذج عمل مرنة', description: 'خيارات دوام جزئي، دوام كامل، أو تشغيل موسمي حسب احتياجاتكم' },
                    { title: 'كوادر تقنية ماهرة', description: 'مهندسو شبكات، دعم تقنية المعلومات، ومتخصصو الأمن السيبراني' },
                    { title: 'الصيانة الوقائية والتصحيحية', description: 'صيانة دورية وتصحيحية للبنية التحتية والأنظمة' },
                    { title: 'اتفاقيات مستوى الخدمة (SLA)', description: 'تقارير دورية لقياس مستويات الخدمة وضمان الامتثال لاتفاقيات SLA' }
                ],
                goal: 'دعم تشغيلي يقلل عبء العمل وتكاليف التشغيل مع ضمان أعلى مستويات الكفاءة التقنية.'
            }
        },

        // ============ صفحة الحلول ============
        solutions: {
            hero: {
                breadcrumb: 'الحلول',
                title: 'حلولنا التقنية',
                subtitle: 'حلول تقنية مخصصة للقطاعين الحكومي والمؤسسي'
            },
            // ترجمات البطل الحديث لصفحة الحلول
            heroModern: {
                titleLine1: 'حلولنا',
                titleLine2: 'التقنية',
                subtitle: 'حلول تقنية مخصصة للقطاعين الحكومي والمؤسسي',
                stats: [
                    { label: 'أنظمة الأمن المادي', anchor: 'physicalsecurity' },
                    { label: 'البنية التحتية لتقنية المعلومات', anchor: 'infrastructure' },
                    { label: 'حلول مراكز البيانات', anchor: 'datacenter' },
                    { label: 'الاتصالات الموحدة', anchor: 'communications' },
                    { label: 'أجهزة المستخدمين', anchor: 'enduser' },
                    { label: 'الأمن السيبراني واستمرارية الأعمال', anchor: 'cybersecurity' },
                    { label: 'تراخيص البرمجيات', anchor: 'licensing' }
                ]
            },
            overview: {
                tag: 'حلولنا',
                title: 'مجموعة واسعة من الحلول التقنية',
                description: 'حلول تقنية معلومات واتصالات وخدمات مزودي إنترنت شاملة، مصممة لتحديات القطاعين الحكومي والمؤسسي ومتطلباتهما التشغيلية'
            },
            infrastructure: {
                tag: 'البنية التحتية لتقنية المعلومات',
                title: 'البنية التحتية لتقنية المعلومات',
                bullets: [
                    'بنية كابلات نحاسية وألياف بصرية',
                    'معدات الشبكات النشطة (LAN/WLAN)',
                    'حلول SD-WAN لربط الفروع وتحسين الأداء',
                    'أنظمة مراقبة وإدارة الشبكات'
                ],
                goal: 'بنية شبكات تقنية معلومات من الجيل التالي بأداء آمن وعالي السرعة على كامل أعمالكم.'
            },
            datacenter: {
                tag: 'حلول مراكز البيانات',
                title: 'حلول مراكز البيانات',
                bullets: [
                    'بناء مراكز بيانات وفق معايير معتمدة',
                    'تصميم وتنفيذ الخوادم والتخزين والنسخ الاحتياطي',
                    'نشر حلول المحاكاة الافتراضية'
                ],
                goal: 'بيئة متكاملة ومحسّنة لتشغيل أنظمة الأعمال.'
            },
            physicalsecurity: {
                tag: 'أنظمة الأمن المادي',
                title: 'أنظمة الأمن المادي',
                bullets: [
                    'أنظمة المراقبة بالفيديو (CCTV)',
                    'أنظمة التحكم في الدخول',
                    'بوابات حواجز لمرور الأشخاص والمركبات'
                ],
                goal: 'ضمان رقابة وتحكم كاملين على بيئة أعمالكم.'
            },
            communications: {
                tag: 'الاتصالات الموحدة',
                title: 'الاتصالات الموحدة',
                bullets: [
                    'أنظمة هاتف IP متقدمة مع إدارة مركزية للمكالمات',
                    'VoIP سحابي آمن ومركزي للفروع',
                    'حلول اتصال متكاملة تشمل الصوت والفيديو والمراسلة والاجتماعات'
                ],
                goal: 'تمكين تواصل فعّال بين الفرق والفروع بتكلفة منخفضة مع تعزيز إنتاجية الأعمال.'
            },
            enduser: {
                tag: 'أجهزة المستخدمين',
                title: 'أجهزة المستخدمين',
                bullets: [
                    'توريد وتركيب أجهزة المستخدمين من العلامات الرائدة: Dell وHP وLenovo بما في ذلك ضمان ودعم المورّد',
                    'نشر إدارة مركزية لنقاط النهاية باستخدام أدوات حديثة مثل Intune وVMware Workspace ONE وManageEngine'
                ],
                goal: 'أجهزة مستخدمين ملائمة لاحتياجات أعمالكم مع إدارة موحدة.'
            },
            licensing: {
                tag: 'تراخيص البرمجيات',
                title: 'تراخيص البرمجيات',
                bullets: [
                    'توريد وتركيب تراخيص برمجيات أصلية: Microsoft وAdobe وغيرها',
                    'توريد وتفعيل تراخيص سحابية: O365 وAzure وغيرها'
                ],
                goal: 'تراخيص برمجيات أصلية مع تفعيل سريع وموثوق.'
            },
            cybersecurity: {
                tag: 'الأمن السيبراني واستمرارية الأعمال',
                title: 'الأمن السيبراني واستمرارية الأعمال',
                bullets: [
                    'جدران حماية من الجيل التالي وأنظمة كشف/منع التسلل IDS/IPS',
                    'حماية نقاط النهاية وEDR',
                    'إدارة الهوية والصلاحيات IAM / PAM',
                    'أنظمة النسخ الاحتياطي والاستعادة'
                ],
                goal: 'حماية أنظمتك وبياناتك الأساسية من خلال تأمين بيئتك التقنية وضمان استمرارية الأعمال.'
            },
            managed: {
                tag: 'الخدمات المُدارة',
                title: 'خدمات التشغيل والدعم على مدار الساعة',
                description: 'ركّزوا على أعمالكم الأساسية بينما نتولى إدارة بنيتكم التحتية لتقنية المعلومات — مراقبة استباقية وصيانة وتحسين لضمان أعلى أداء وأقل توقف.',
                features: [
                    { title: 'مراقبة البنية التحتية على مدار الساعة', description: 'مراقبة مستمرة وتنبيه فوري لجميع الأنظمة' },
                    { title: 'الصيانة والتحديث الاستباقي', description: 'تحديثات وصيانة دورية خلال ساعات خارج الذروة' },
                    { title: 'مكتب المساعدة والدعم الفني', description: 'دعم متعدد المستويات مع أوقات استجابة مضمونة' },
                    { title: 'تحسين الأداء', description: 'ضبط مستمر وتخطيط للطاقة الاستيعابية' }
                ]
            },
            isp: {
                tag: 'خدمات مزودي الإنترنت',
                title: 'اتصال إنترنت مخصص واستضافة ودعم للبيئات الحرجة',
                description: 'كمزود راسخ نوفّر اتصالاً واستضافة بمعايير مؤسسية مع اتفاقيات مستوى خدمة (SLA) واضحة — ندعم الاستمرارية واعتماد السحابة والنمو الرقمي في أنحاء المملكة.',
                features: [
                    { title: 'اتصال إنترنت مخصص (DIA)', description: 'اتصال مؤسسي عالي الأداء مع نطاق ترددي مضمون ومسارات محددة' },
                    { title: 'الاستضافة والاستضافة المشتركة', description: 'خيارات استضافة آمنة متوافقة مع عبء العمل والامتثال وأهداف التوفر' },
                    { title: 'دعم فني على مدار الساعة', description: 'دعم هندسي مستمر للبيئات الحرجة' },
                    { title: 'استشارات الاتصال', description: 'هندسة للفروع وتكامل SD-WAN وتحسين الأداء' }
                ]
            },
            approach: {
                tag: 'نهجنا',
                title: 'كيف ننفّذ الحلول',
                steps: [
                    { number: '01', title: 'الاكتشاف والتقييم', description: 'تحليل متطلباتكم والبنية التحتية الحالية والأهداف الاستراتيجية لتحديد الفجوات وفرص التحسين' },
                    { number: '02', title: 'تصميم الحل', description: 'هندسة وتصميم مخصص وفق أفضل الممارسات ومتطلباتكم التشغيلية' },
                    { number: '03', title: 'التنفيذ', description: 'نشر مرحلي بأقل قدر من التعطيل، وفق منهجيات إدارة مشاريع مثبتة' },
                    { number: '04', title: 'التحسين والدعم', description: 'مراقبة وتحسين مستمران ودعم على مدار الساعة لضمان الأداء الأمثل' }
                ]
            },
            differentiators: {
                tag: 'ما يميزنا',
                title: 'فرق شبكة',
                cards: [
                    { title: 'خبرة محلية', description: 'أكثر من 28 عاماً في خدمة السوق السعودي مع فهم عميق للمتطلبات واللوائح المحلية' },
                    { title: 'تميز معتمد', description: 'معتمدون بشهادات ISO 27001 و ISO 22301 وNCA لضمان أعلى معايير الجودة والأمان' },
                    { title: 'مستقلون عن الموردين', description: 'نهج استشاري مستقل لاختيار التقنيات الأنسب لاحتياجاتكم' },
                    { title: 'متوافقون مع رؤية 2030', description: 'حلول تدعم التحول الرقمي في المملكة وأهداف التنويع الاقتصادي' }
                ]
            }
        },

        // ============ صفحة الشركاء ============
        partners: {
            hero: {
                breadcrumb: 'الشركاء',
                title: 'شركاء التقنية الاستراتيجيون',
                subtitle: 'شراكات مع أبرز مورّدي التكنولوجيا العالميين'
            },
            // ترجمات البطل الحديث لصفحة الشركاء
            heroModern: {
                titleLine1: 'شركاء التقنية',
                titleLine2: 'الاستراتيجيون',
                subtitle: 'محفظة منتجات واسعة من أبرز المورّدين العالميين — نختار الأنسب لكل متطلب في كل مشروع'
            },
            intro: {
                tag: 'شراكات استراتيجية',
                title: 'حلول تقنية من أفضل الفئات',
                description: 'نهجنا المستقل عن الموردين يتيح الشراكة مع أبرز مزودي التكنولوجيا عالمياً — لنقدّم أنسب الحلول لاحتياجاتكم'
            },
            clients: {
                tag: 'عملاؤنا',
                title: 'مؤسسات نفخر بخدمتها'
            },
            categories: {
                infrastructure: {
                    tag: 'البنية التحتية',
                    title: 'شركاء البنية التحتية والحوسبة'
                },
                security: {
                    tag: 'الأمن',
                    title: 'شركاء الأمن والحماية'
                },
                dataProtection: {
                    tag: 'حماية البيانات',
                    title: 'شركاء النسخ الاحتياطي والاستعادة'
                },
                cctv: {
                    tag: 'CCTV',
                    title: 'شركاء المراقبة بالفيديو (CCTV) وإدارة الفيديو'
                },
                cabling: {
                    tag: 'الكابلات',
                    title: 'شركاء الكابلات المنظمة'
                },
                accessControl: {
                    tag: 'التحكم بالوصول',
                    title: 'شركاء الوصول المادي'
                },
                network: {
                    tag: 'الشبكات',
                    title: 'شركاء بنية الشبكات'
                },
                softwarePlatforms: {
                    tag: 'البرمجيات',
                    title: 'شركاء البرمجيات والمنصات'
                },
                unifiedComms: {
                    tag: 'الاتصالات الموحدة',
                    title: 'شركاء الاتصالات الموحدة'
                }
            },
            partnerCards: {
                hpe: { name: 'هيوليت باكارد إنتربرايز', description: 'خوادم مؤسسية وحلول تخزين وبنية سحابية هجينة' },
                huawei: { name: 'هواوي', description: 'بنية تحتية لمراكز البيانات والسحابة من الجيل التالي' },
                lenovo: { name: 'لينوفو', description: 'حوسبة مؤسسية وخوادم وأجهزة المستخدمين' },
                lenovoAlt: { name: 'لينوفو', description: 'حوسبة مؤسسية وخوادم وأجهزة المستخدمين' },
                fortinet: { name: 'فورتينت', description: 'جدران حماية متقدمة وأمن شبكات والحماية من التهديدات' },
                paloAlto: { name: 'بالو ألتو نتوركس', description: 'جدران حماية من الجيل التالي ومنصات أمان سحابية' },
                sophos: { name: 'سوفوس', description: 'حماية نقاط النهاية وأمان الشبكات' },
                kaspersky: { name: 'كاسبرسكي', description: 'مكافحة البرمجيات الخبيثة وأمان نقاط النهاية واستخبارات التهديدات' },
                veeam: { name: 'فيم', description: 'نسخ احتياطي وتعافي من الكوارث وإدارة البيانات' },
                veritas: { name: 'فيريتاس', description: 'نسخ احتياطي مؤسسي وأرشفة واستمرارية الأعمال' },
                commvault: { name: 'Commvault', description: 'حماية بيانات مؤسسية وإدارة بيانات ذكية' },
                acronis: { name: 'Acronis', description: 'حماية سيبرانية ونسخ احتياطي وتعافي من الكوارث' },
                cctvHikvision: { name: 'Hikvision', description: 'مراقبة بالفيديو وأنظمة تسجيل وأمن متكامل' },
                cctvDahua: { name: 'Dahua', description: 'CCTV والتحكم بالوصول وحلول المباني الذكية' },
                cctvHanwha: { name: 'Hanwha', description: 'أمن فيديو Wisenet وتحليلات' },
                cctvBosch: { name: 'Bosch', description: 'أنظمة أمان وسلامة واتصالات' },
                cctvHoneywell: { name: 'Honeywell', description: 'تقنيات المباني والحلول الأمنية' },
                cctvAxis: { name: 'Axis', description: 'فيديو وصوت عبر الشبكة وتحليلات' },
                cctvMilestone: { name: 'Milestone', description: 'برمجيات إدارة الفيديو (VMS)' },
                cablingCommScope: { name: 'CommScope', description: 'كابلات منظمة وبنية تحتية للاتصال' },
                cablingPanduit: { name: 'Panduit', description: 'بنية تحتية مادية وأنظمة كابلات الشبكات' },
                cablingNexans: { name: 'Nexans', description: 'حلول كابلات نحاسية وألياف بصرية' },
                cablingCorning: { name: 'Corning', description: 'ألياف بصرية واتصالات' },
                cablingBelden: { name: 'Belden', description: 'نقل إشارات وشبكات صناعية' },
                accessZKTeco: { name: 'ZKTeco', description: 'أجهزة بيومترية وتحكم بالوصول' },
                accessSuprema: { name: 'Suprema', description: 'بيومترية وحلول وصول مادي' },
                accessHikvision: { name: 'Hikvision', description: 'تحكم بالوصول متكامل مع أمن الفيديو' },
                accessDahua: { name: 'Dahua', description: 'أنظمة وصول وإدارة المداخل' },
                networkCisco: { name: 'Cisco', description: 'تبديل وتوجيه وشبكات لاسلكية مؤسسية' },
                networkAruba: { name: 'Aruba', description: 'شبكات الحرم والفروع (HPE Aruba)' },
                networkNetgear: { name: 'Netgear', description: 'شبكات أعمال وواي فاي' },
                networkHuawei: { name: 'هواوي', description: 'مفاتيح شبكة وWLAN وبنية شبكات مراكز البيانات' },
                softwareMicrosoft: { name: 'Microsoft', description: 'سحابة وإنتاجية ومنصات مؤسسية' },
                softwareAdobe: { name: 'Adobe', description: 'برمجيات إبداعية وإدارة وثائق' },
                softwareAutoCAD: { name: 'AutoCAD', description: 'تصميم ومسودات هندسية (Autodesk)' },
                softwareEsri: { name: 'Esri', description: 'نظم معلومات جغرافية (GIS) وذكاء الموقع' },
                ucYealink: { name: 'Yealink', description: 'هاتف IP ومؤتمرات فيديو وأجهزة التعاون' },
                ucYeastar: { name: 'Yeastar', description: 'PBX وأنظمة اتصالات موحدة' },
                ucGrandstream: { name: 'Grandstream', description: 'نقاط نهاية UC وواي فاي وشبكات' },
                ucAvaya: { name: 'Avaya', description: 'مراكز اتصال واتصالات مؤسسية' },
                ucCisco: { name: 'Cisco', description: 'Webex وبنية تحتية للتعاون' }
            },
            benefits: {
                tag: 'لماذا يهم',
                title: 'مزايا الشراكة',
                items: [
                    { title: 'خبرة معتمدة', description: 'مهندسونا حاصلون على شهادات متقدمة من شركائنا الرئيسيين — تنفيذ ودعم بمعايير احترافية' },
                    { title: 'دعم ذو أولوية', description: 'قنوات دعم سريعة من المورّدين ومسارات تصعيد مباشرة بصفتنا شركاء معتمدين' },
                    { title: 'وصول مبكر', description: 'أحدث التقنيات والبرامج التجريبية وخرائط طريق المنتجات من شركائنا' },
                    { title: 'ضمانات ممتدة', description: 'تغطية ضمان واتفاقيات صيانة عبر القنوات الرسمية' },
                    { title: 'برامج تدريبية', description: 'تدريب المورّدين وورش عمل ونقل معرفة لفريقكم' },
                    { title: 'منتجات أصلية', description: 'منتجات أصلية 100% مع ضمان المصنّع والدعم الكامل' }
                ]
            }
        },

        // ============ صفحة التواصل ============
        contact: {
            hero: {
                breadcrumb: 'تواصل معنا',
                title: 'تواصل معنا',
                subtitle: 'لنناقش كيف تمكّن شبكة مؤسستكم بحلول تقنية المعلومات والاتصالات وخدمات مزودي الإنترنت'
            },
            // ترجمات البطل الحديث لصفحة التواصل
            heroModern: {
                titleLine1: 'تواصل',
                titleLine2: 'معنا',
                subtitle: 'لنناقش كيف تمكّن شبكة مؤسستكم بحلول تقنية المعلومات والاتصالات وخدمات مزودي الإنترنت',
                stats: {
                    stat1: { number: '24 ساعة', label: 'مدة الاستجابة' },
                    stat2: { number: 'مجانية', label: 'استشارة' },
                    stat3: { number: 'خبراء', label: 'مستشارو تقنية المعلومات وخدمات مزودي الإنترنت' }
                }
            },
            form: {
                title: 'أرسلوا رسالة',
                description: 'أكملوا النموذج وسيتواصل معكم فريقنا خلال 24 ساعة',
                fields: {
                    name: 'الاسم الكامل *',
                    namePlaceholder: 'الاسم',
                    email: 'البريد الإلكتروني *',
                    emailPlaceholder: 'your.email@company.com',
                    phone: 'رقم الهاتف',
                    phonePlaceholder: '+966 XX XXX XXXX',
                    company: 'الشركة',
                    companyPlaceholder: 'اسم الشركة',
                    service: 'مجال الاهتمام',
                    servicePlaceholder: 'اختر مجالاً...',
                    message: 'الرسالة *',
                    messagePlaceholder: 'أخبرونا عن مشروعكم أو متطلباتكم...',
                    submit: 'إرسال الرسالة'
                },
                serviceOptions: {
                    physicalsecurity: 'أنظمة الأمن المادي',
                    infrastructure: 'البنية التحتية لتقنية المعلومات',
                    datacenter: 'حلول مراكز البيانات',
                    communications: 'الاتصالات الموحدة',
                    enduser: 'أجهزة المستخدمين',
                    cybersecurity: 'الأمن السيبراني واستمرارية الأعمال',
                    licensing: 'تراخيص البرمجيات',
                    other: 'أخرى'
                }
            },
            infoCards: {
                office: {
                    title: 'مكتبنا',
                    line1: 'مول الأندلس',
                    line2: 'الورود، شارع العليا',
                    line3: 'الرياض 12215، المملكة العربية السعودية'
                },
                phone: {
                    title: 'الهاتف',
                    number: '(+966) 920033465',
                    note: 'دعم متاح على مدار الساعة'
                },
                email: {
                    title: 'البريد الإلكتروني',
                    address: 'info@shabakah.sa',
                    note: 'نرد خلال 24 ساعة'
                },
                hours: {
                    title: 'ساعات العمل',
                    days: 'الأحد – الخميس',
                    time: '8:00 صباحاً – 5:00 مساءً (GMT+3)'
                },
                social: {
                    title: 'تابعونا'
                }
            },
            info: {
                title: 'معلومات التواصل',
                headquarters: {
                    title: 'المقر الرئيسي',
                    address: 'الرياض، المملكة العربية السعودية'
                },
                phone: {
                    title: 'الهاتف',
                    number: '+966 11 XXX XXXX'
                },
                email: {
                    title: 'البريد الإلكتروني',
                    address: 'info@shabakah.sa'
                },
                hours: {
                    title: 'ساعات العمل',
                    time: 'الأحد – الخميس: 8:00 صباحاً – 5:00 مساءً'
                }
            }
        },

        // ============ صفحة راصد وخدمات علم والأيزو ============
        iotTracking: {
            meta: {
                title: 'راصد لتتبع المركبات، خدمات علم، وشهادات الأيزو | شبكة التقنية المتكاملة',
                description: 'شريك علم المعتمد لمقيم وتم وراصد (معتمد من هيئة النقل) والبوابة الذكية. باقات راصد من 5 إلى 23 ريالاً للمركبة شهرياً — تتبع، تشغيل، تأجير والباقة الكاملة. استشارات الأيزو متوفرة.'
            },
            hero: {
                badge: 'شريك علم المعتمد · أكثر من 20 عاماً',
                title: 'خدمات علم، رقيب لإنترنت الأشياء، واستشارات الأيزو',
                subtitle: 'تُعد شركة شبكة التقنية شريكاً استراتيجياً موثوقاً في تقديم الحلول التقنية والاستشارات المتخصصة، حيث تجمع بين الخبرة في الخدمات الرقمية، وأنظمة الجودة، وحلول إنترنت الأشياء.',
                pillars: [
                    { title: 'خدمات علم الإلكترونية', description: 'مقيم · تم · راصد · البوابة الذكية', anchor: '#elm-hub' },
                    { title: 'منصة رقيب لإنترنت الأشياء', description: 'تقنية ذكية لإدارة الأسطول وتعزيز كفاءة التشغيل', anchor: '#raqeeb' },
                    { title: 'خدمات وإستشارات أنظمة الجودة', description: 'ISO | HACCP | HALAL | SASO | BRC | SABER', anchor: '#iso' }
                ],
                buttons: {
                    demo: 'تحدث مع مختص',
                    whatsapp: 'واتساب',
                    features: 'استكشف الخدمات'
                },
                stats: {
                    vehicles: { number: '5000', label: 'مركبة متتبعة' },
                    realtime: { number: '1', suffix: 'ث', label: 'تحديثات فورية' },
                    uptime: { number: '99', suffix: '.9%', label: 'اتفاقية مستوى الخدمة' },
                    platforms: { number: '2', label: 'منصتين (iOS و Android)' }
                }
            },
            trustStrip: {
                line1: 'موزع ومركز خدمة ما بعد البيع المعتمد لشركة',
                elmLabel: 'علم لأمن المعلومات',
                line2: 'مدرجون على دليل شركاء علم · الرياض، المملكة العربية السعودية'
            },
            activationJourney: {
                tag: 'كيف يعمل',
                title: 'من الطلب إلى الخدمة الفعّالة — دون انقطاع',
                steps: [
                    { title: 'اختر خدمتك', description: 'مقيم، تم، راصد، البوابة الذكية — نموذج واحد وشريك واحد.' },
                    { title: 'خدمات عِلْم بين يديك', description: 'بتفعيل أسرع وتجربة أكثر سهولة' },
                    { title: 'تهيئة ودعم متكامل لخدماتك', description: 'نساعدك على بدء استخدام الخدمة بكل سهولة من خلال التفعيل والتهيئة والتدريب العملي، مع دعم مستمر والرد على الاستفسارات لضمان أفضل تجربة تشغيل على مدار الساعة' },
                    { title: 'تنبيهات التجديد', description: 'نذكّرك قبل انتهاء الاشتراكات — دون مفاجآت أو توقف.' }
                ]
            },
            clients: {
                tag: 'موثوق من منشآت',
                title: 'نفخر بخدمة هذه الجهات'
            },
            elmHub: {
                tag: 'مركز خدمات علم',
                title: 'أربع منصات من علم بشريك واحد مسؤول',
                description: 'شبكة التقنية المتكاملة شريك ومزود رائد لخدمات شركة علم لأمن المعلومات منذ أكثر من عشرين عاماً، مع منظومة متكاملة من خدمات ما بعد البيع تشمل الشرح والتدريب على الأنظمة، الاستجابة السريعة للطلبات، تحديث البيانات، ومتابعة الاشتراكات والتنبيه بتجديدها قبل انتهائها لضمان استمرارية الخدمة دون أي انقطاع.',
                cardCta: 'عرض التفاصيل',
                cards: [
                    { id: 'muqeem', name: 'منصة مقيم', arabic: 'Muqeem', icon: 'id-card', tagline: 'إقامات وجوازات', description: 'إدارة بيانات الموظفين المقيمين وإنجاز معاملات الجوازات إلكترونياً بشكل فوري، في أي وقت ومن أي مكان، دون الحاجة لمراجعة الجوازات.' },
                    { id: 'tamm', name: 'منصة تم', arabic: 'Tamm', icon: 'car-front', tagline: 'مركبات ومرور', description: 'خدمات إلكترونية متطورة لإدارة معاملات المركبات والخدمات المرورية، تُمكّن المنشآت من إنجاز إجراءاتها بسهولة وسرعة عبر منصة موحدة.' },
                    { id: 'rased', name: 'منصة راصد', arabic: 'Rased', icon: 'satellite', tagline: 'تتبع الأسطول', description: 'نظام ذكي لإدارة أسطول المركبات يوفر تقارير وتحليلات دقيقة وإشعارات فورية تساعد على خفض التكاليف، رفع الكفاءة، وتحسين الأداء التشغيلي.' },
                    { id: 'smart-gate', name: 'البوابة الذكية', arabic: 'Smart Gate', icon: 'shield-check', tagline: 'تصاريح وتحقق', description: 'منصة إلكترونية متكاملة توفر خدمات أمنية موثوقة للتحقق من بيانات الأفراد والمركبات بسرعة وسهولة، بما يعزز الأمن ويرفع مستوى السلامة' }
                ]
            },
            muqeem: {
                title: 'مقيم — الإقامات وخدمات الجوازات',
                arabic: 'Muqeem',
                description: 'تتيح خدمة مقيم للمنشآت الاطلاع على بيانات موظفيها المقيمين وإتمام معاملات الجوازات الخاصة بهم إلكترونياً وبشكل فوري في أي وقت ومن أي مكان، دون الحاجة إلى مراجعة المديرية العامة للجوازات.',
                ctaLabel: 'تفعيل اشتراك مقيم',
                pricingTag: 'مقيم · الباقات',
                pricingTitle: 'شرائح باقات (أساسي، مطور، احترافي)',
                pricingNote: 'الأسعار السنوية بالريال السعودي وغير شاملة ضريبة القيمة المضافة.',
                pricingTierAriaLabel: 'شرائح عدد المقيمين',
                tableResidentsTitle: 'شرائح عدد المقيمين',
                tableFreeUsersTitle: 'أعداد المستخدمين المجانية حسب الباقة',
                tablePricesTitle: 'أسعار الباقات',
                colTier: 'الشريحة',
                colResidents: 'عدد المقيمين',
                freeUsersLabel: 'المستخدمون المجانيون',
                annualPriceLabel: 'السعر السنوي',
                perResident: 'لكل مقيم',
                currency: 'ر.س',
                packages: [
                    { id: 'basic', name: 'أساسي' },
                    { id: 'advanced', name: 'مطور' },
                    { id: 'professional', name: 'احترافي' }
                ],
                tiers: [
                    { tier: 1, range: 'من 0 مقيم إلى 9 مقيم', freeUsers: { basic: '1 مستخدم', advanced: '2 مستخدمين', professional: '3 مستخدمين' }, prices: { basic: 1100, advanced: 1210, professional: 1485 }, perResident: false },
                    { tier: 2, range: 'من 10 مقيم إلى 49 مقيم', freeUsers: { basic: '2 مستخدمين', advanced: '4 مستخدمين', professional: '6 مستخدمين' }, prices: { basic: 2300, advanced: 2645, professional: 3220 }, perResident: false },
                    { tier: 3, range: 'من 50 مقيم إلى 99 مقيم', freeUsers: { basic: '3 مستخدمين', advanced: '6 مستخدمين', professional: '9 مستخدمين' }, prices: { basic: 3600, advanced: 4140, professional: 5220 }, perResident: false },
                    { tier: 4, range: 'من 100 مقيم إلى 199 مقيم', freeUsers: { basic: '4 مستخدمين', advanced: '8 مستخدمين', professional: '12 مستخدم' }, prices: { basic: 5600, advanced: 6160, professional: 7000 }, perResident: false },
                    { tier: 5, range: 'من 200 مقيم إلى 800 مقيم', freeUsers: { basic: '5 مستخدمين', advanced: '10 مستخدمين', professional: '15 مستخدم' }, prices: { basic: 7550, advanced: 7928, professional: 9060 }, perResident: false },
                    { tier: 6, range: 'من 801 مقيم', freeUsers: { basic: '6 مستخدمين', advanced: '12 مستخدم', professional: '18 مستخدم' }, prices: { basic: 11, advanced: 11.55, professional: 12.65 }, perResident: true }
                ]
            },
            tamm: {
                tag: 'خدمة من علم · للمنشآت والنقل والتأجير',
                title: 'تم — معاملات المركبات والمرور إلكترونياً',
                arabic: 'Tamm',
                description: 'تساهم بوابة تم في تنظيم قطاع النقل والمركبات في المملكة العربية السعودية من خلال إتاحة خدمات إلكترونية متطورة لتمكين العملاء من إجراء معاملاتهم المرورية الخاصة بالمركبات والمرتبطة بالإدارة العامة للمرور.',
                featuresLabel: 'أبرز المعاملات',
                features: [
                    'إضافة وإلغاء القائد الفعلي',
                    'الاستعلام عن رخص القيادة',
                    'الاستعلام عن تأمين المركبة',
                    'إصدار وإلغاء التفويض',
                    'إصدار وإلغاء التفويض الدولي',
                    'خدمة نقل الملكية',
                    'إصدار وتجديد رخص السير (الاستمارة)',
                    'الاستعلام عن معلومات المركبات'
                ],
                pricingTag: 'تسعير شفاف',
                pricingTitle: 'الاشتراك السنوي — 9 شرائح حسب حجم الأسطول',
                pricingNote: 'جميع الأسعار بالريال السعودي وغير شاملة ضريبة القيمة المضافة.',
                pricingTierLabel: 'الشريحة',
                pricingRangeLabel: 'عدد المركبات',
                pricingPriceLabel: 'السعر السنوي',
                perVehicleNote: '+ 0.5 ر.س لكل مركبة إضافية',
                pricingTiers: [
                    { tier: 1, range: 'من 0 إلى 9 مركبات', short: '0–9', price: 1800 },
                    { tier: 2, range: 'من 10 إلى 49 مركبة', short: '10–49', price: 3300 },
                    { tier: 3, range: 'من 50 إلى 99 مركبة', short: '50–99', price: 4800 },
                    { tier: 4, range: 'من 100 إلى 249 مركبة', short: '100–249', price: 7300 },
                    { tier: 5, range: 'من 250 إلى 499 مركبة', short: '250–499', price: 9800 },
                    { tier: 6, range: 'من 500 إلى 999 مركبة', short: '500–999', price: 12300 },
                    { tier: 7, range: 'من 1,000 إلى 4,999 مركبة', short: '1,000–4,999', price: 16300 },
                    { tier: 8, range: 'من 5,000 إلى 9,999 مركبة', short: '5,000–9,999', price: 20300 },
                    { tier: 9, range: 'أكثر من 10,000 مركبة', short: '10,000+', price: 24300, perVehicleRate: 0.5 }
                ],
                currency: 'ر.س',
                perYear: '/ سنوياً',
                ctaLabel: 'اشترك في تم'
            },
            rasedSubnav: {
                platforms: 'المنصات',
                features: 'المميزات',
                packages: 'الباقات و الاشتراكات',
                outcomes: 'النتائج'
            },
            rasedModules: {
                tag: 'راصد · وحدات الخدمة',
                title: 'أربع وحدات لكل عملية أسطول',
                description: 'اختر قدرات راصد التي تحتاجها منشأتك — تتبع، صيانة، عمليات، أو تأجير.',
                items: [
                    { title: 'تتبع المركبات', description: 'GPS مباشر، سياج جغرافي، سجل الرحلات، وتنبيهات فورية على الويب والجوال.', link: 'عرض الإمكانات' },
                    { title: 'الصيانة والتشغيل', description: 'أوامر عمل، جداول صيانة وقائية، وسير عمل الفنيين.', link: 'عرض الإمكانات' },
                    { title: 'عمليات الأسطول', description: 'إرسال المهام، تقييم السائق، تحليلات الوقود، وتقارير الامتثال.', link: 'عرض الإمكانات' },
                    { title: 'إدارة التأجير', description: 'تتبع العقود، فحوصات التسليم والاستلام، واستغلال أسطول التأجير.', link: 'تحدث مع المبيعات' }
                ]
            },
            platformShowcase: {
                tag: 'راصد · منصة سحابية لإدارة الأسطول',
                title: 'راصد — رؤية كاملة لأسطولك في أي مكان',
                description: 'هي خدمة إلكترونية سحابية متطورة لإدارة أسطول المركبات بكفاءة، وتعنى بتتبع ومراقبة حية للمركبات وتحديد مواقعها.',
                webDashboard: {
                    title: 'لوحة راصد على الويب',
                    subtitle: 'مركز قيادة المؤسسة',
                    features: [
                        'نظرة شاملة على الأسطول',
                        'تحليلات وتقارير متقدمة',
                        'إدارة أدوار متعددة المستخدمين',
                        'تسجيل الأجهزة بالجملة',
                        'تكوين التنبيهات المخصصة'
                    ],
                    mockupText: 'معاينة لوحة التحكم',
                    ctaLabel: 'زيارة بوابة راصد',
                    activateLabel: 'التفعيل عبر شبكة التقنية',
                    url: 'https://rasedfms.elm.sa/en-US/EndUserAccounts-Authentication/login'
                },
                mobileApp: {
                    title: 'تطبيق راصد للجوال',
                    subtitle: 'إدارة الأسطول أثناء التنقل',
                    features: [
                        'تتبع الموقع في الوقت الفعلي',
                        'إشعارات فورية',
                        'سجل الرحلات مع إعادة التشغيل',
                        'رؤى سلوك السائق',
                        'فحص سريع لحالة الأصول'
                    ],
                    mockupText: 'معاينة تطبيق الجوال',
                    ctaLabel: 'تفعيل اشتراك راصد',
                    iosUrl: 'https://apps.apple.com/az/app/rased-myfleet/id6755953829',
                    androidUrl: 'https://play.google.com/store/apps/details?id=elm.rased.partner&hl=ar',
                    storeBadgesAria: 'تحميل تطبيق راصد للجوال',
                    iosBadgeLabel: 'حمّل من',
                    androidBadgeLabel: 'احصل عليه من'
                }
            },
            raqeeb: {
                tag: 'شبكة التقنية · ذكاء الأسطول المؤسسي',
                title: 'منصة رقيب لتتبع إنترنت الأشياء',
                arabic: 'Raqeeb',
                description: 'حل متطور لإدارة الأسطول وتتبع أصول إنترنت الأشياء يوفر رؤية فورية وتحليلات السلامة والكفاءة التشغيلية للشركات التي تدير أساطيل المركبات والأصول القيمة.',
                subnav: {
                    platforms: 'المنصات',
                    capabilities: 'الإمكانات',
                    outcomes: 'النتائج',
                    preview: 'معاينة'
                },
                platformShowcase: {
                    webDashboard: {
                        title: 'لوحة رقيب على الويب',
                        subtitle: 'مركز قيادة المؤسسة',
                        features: [
                            'نظرة شاملة على الأسطول',
                            'تحليلات وتقارير متقدمة',
                            'إدارة أدوار متعددة المستخدمين',
                            'تسجيل الأجهزة بالجملة',
                            'تكوين التنبيهات المخصصة'
                        ],
                        ctaLabel: 'فتح لوحة رقيب',
                        url: 'https://raqeeb.tracking.me'
                    },
                    mobileApp: {
                        title: 'تطبيق رقيب للجوال',
                        subtitle: 'إدارة الأسطول أثناء التنقل',
                        features: [
                            'تتبع الموقع في الوقت الفعلي',
                            'إشعارات فورية',
                            'سجل الرحلات مع إعادة التشغيل',
                            'رؤى سلوك السائق',
                            'فحص سريع لحالة الأصول'
                        ],
                        iosLabel: 'تحميل لنظام iOS',
                        iosUrl: 'https://apps.apple.com/pk/app/tracking-iot/id6755716190',
                        androidLabel: 'تحميل لنظام Android',
                        androidUrl: 'https://play.google.com/store/apps/details?id=com.tracking.iot.app'
                    }
                },
                features: {
                    tag: 'رقيب · القدرات الأساسية',
                    title: 'وظائف على مستوى المؤسسات لإدارة الأسطول',
                    items: [
                        {
                            title: 'المراقبة في الوقت الفعلي',
                            features: [
                                'تحديثات الموقع المباشر على خرائط تفاعلية',
                                'حالة الأصول: متحركة، خاملة، غير متصلة',
                                'خرائط حرارية لتصور كثافة الأصول'
                            ]
                        },
                        {
                            title: 'إدارة الأسطول والأصول',
                            features: [
                                'تصنيف وتجميع الأصول',
                                'تسجيل وتكوين الأجهزة',
                                'إدارة بطاقات SIM وتتبع الاتصال'
                            ]
                        },
                        {
                            title: 'السلامة وسلوك السائق',
                            features: [
                                'نظام تقييم السلوك الآلي',
                                'تنبيهات فورية للسرعة والأحداث القاسية',
                                'مراقبة الإرهاق وتتبع الاستراحات'
                            ]
                        },
                        {
                            title: 'الكفاءة التشغيلية',
                            features: [
                                'تقارير استهلاك الوقود والمسافات',
                                'سجل رحلات كامل مع إعادة التشغيل',
                                'سياج جغرافي مع تنبيهات الدخول والخروج'
                            ]
                        },
                        {
                            title: 'الإدارة والصيانة',
                            features: [
                                'تكوين قواعد التنبيه المخصصة',
                                'أدوات إدارة الفنيين',
                                'تقارير امتثال شاملة'
                            ]
                        }
                    ]
                },
                value: {
                    tag: 'رقيب · القيمة الأساسية',
                    title: 'مركز قيادة أسطولك',
                    description: 'أكثر من مجرد تتبع للموقع — رؤى قابلة للتنفيذ للسلامة وضبط التكاليف والتميز التشغيلي.',
                    items: [
                        { title: 'تقليل الحوادث', description: 'راقب الأحداث القاسية وسلوك السائق لتحسين السلامة وتقليل معدلات الحوادث.' },
                        { title: 'خفض تكاليف الوقود', description: 'تتبع كفاءة الوقود وحدد أنماط القيادة المهدرة لخفض النفقات التشغيلية.' },
                        { title: 'إطالة عمر المركبات', description: 'تنبيهات الصيانة الاستباقية والقيادة الأقل قسوة تحمي استثمار أسطولك.' }
                    ]
                },
                gallery: {
                    tag: 'رقيب · معاينة المنصة',
                    title: 'شاهد رقيب أثناء العمل',
                    items: [
                        { alt: 'لوحة التتبع المباشر', src: 'assets/images/raqeeb/1%20ar%20(3).jpeg' },
                        { alt: 'التحليلات والتقارير', src: 'assets/images/raqeeb/1%20ar%20(4).jpeg' },
                        { alt: 'تطبيق الجوال', src: 'assets/images/raqeeb/1%20ar%20(1).jpeg' },
                        { alt: 'مراقبة السلامة', src: 'assets/images/raqeeb/1%20ar%20(2).jpeg' }
                    ]
                }
            },
            rasedHighlights: {
                tag: 'راصد · المميزات',
                title: 'المميزات',
                items: [
                    {
                        id: '01',
                        icon: 'badge-check',
                        title: 'خدمة معتمدة من الهيئة العامة للنقل',
                        description: 'خدمة سحابية لتتبع الأسطول معتمدة من هيئة النقل، مقدّمة من علم.'
                    },
                    {
                        id: '02',
                        icon: 'link-2',
                        title: 'التكامل مع الخدمات',
                        description: 'خدمة تم لعمليات التفويض، خدمة تأجير لإصدار عقد التأجير الإلكتروني، وخدمة شموس للبيانات.'
                    },
                    {
                        id: '03',
                        icon: 'layout-dashboard',
                        title: 'نظام متخصص',
                        description: 'مدعوم بلوحة مؤشرات وتقارير دورية وخاصية الإشعارات لرفع الكفاءة ومتابعة عمليات الصيانة.'
                    },
                    {
                        id: '04',
                        icon: 'gauge',
                        title: 'شمولية الأداء',
                        description: 'عن طريق مراقبة سلوك قائدي المركبات ومتابعة الصيانة الدورية والوثائق الخاصة بالمركبات والسائقين.'
                    }
                ]
            },
            rasedPricing: {
                tag: 'راصد · الباقات',
                title: 'الباقات و الاشتراكات',
                description: 'حدد عدد المركبات، واختر الباقة المناسبة لإدارة أسطولك، أو تواصل مع فريق المبيعات.',
                fleetAriaLabel: 'شرائح حجم الأسطول',
                perVehicleLabel: 'للمركبة الواحدة',
                currency: 'ر.س',
                period: '/ شهرياً',
                fleetTiers: [
                    { key: '99', label: '5–99 مركبة' },
                    { key: '249', label: '100–249 مركبة' },
                    { key: '499', label: '250–499 مركبة' },
                    { key: '999', label: '500–999 مركبة' },
                    { key: '4999', label: '1,000–4,999 مركبة' },
                    { key: '5000', label: 'أكثر من 5,000 مركبة' }
                ],
                packages: [
                    { id: 'tracking', name: 'باقة التتبع', prices: { '99': 16, '249': 14, '499': 13, '999': 12, '4999': 11, '5000': 9 } },
                    { id: 'ops', name: 'التتبع والتشغيل والصيانة', prices: { '99': 18, '249': 16, '499': 15, '999': 14, '4999': 13, '5000': 12 } },
                    { id: 'rental', name: 'باقة التأجير', prices: { '99': 7.5, '249': 7, '499': 6.5, '999': 6, '4999': 5.5, '5000': 5 } },
                    { id: 'full', name: 'الباقة الكاملة', prices: { '99': 23, '249': 21, '499': 19.5, '999': 18, '4999': 16.5, '5000': 15 } },
                    { id: 'fuel', name: 'باقة الوقود', prices: { '99': 16, '249': 14, '499': 13, '999': 12, '4999': 11, '5000': 9 } }
                ],
                notePrice: 'الأسعار بالريال السعودي لكل مركبة شهرياً.',
                noteSubscription: 'ملاحظة: هذه رسوم الاشتراك في البرنامج فقط، ولا تشمل الأجهزة والحساسات والشرائح.',
                ctaLabel: 'التفعيل عبر شبكة التقنية'
            },
            value: {
                tag: 'راصد · القيمة الأساسية',
                title: 'مركز قيادة أسطولك',
                description: 'أكثر من مجرد تتبع للموقع — رؤى قابلة للتنفيذ للسلامة والتحكم في التكاليف والتميز التشغيلي.',
                items: [
                    { title: 'تقليل الحوادث', description: 'مراقبة الأحداث القاسية وسلوك السائق لتحسين السلامة وتقليل معدلات الحوادث.' },
                    { title: 'خفض تكاليف الوقود', description: 'تتبع كفاءة الوقود وتحديد أنماط القيادة المهدرة لتقليل النفقات التشغيلية.' },
                    { title: 'إطالة عمر المركبة', description: 'تنبيهات الصيانة الاستباقية وتقليل القيادة القاسية تحمي استثمارك في الأسطول.' }
                ]
            },
            smartGate: {
                tag: 'خدمة من علم · أمن وتصاريح',
                title: 'البوابة الذكية (تصريح) — تصاريح رقمية وتحقق',
                arabic: 'Smart Gate',
                description: 'توفر البوابة الذكية تجربة إلكترونية متكاملة، فهي نافذة متطورة للحصول على جميع الخدمات الأمنية الموثوقة التي تساهم بالتحقق من حالة الأفراد والمركبات بآليات عمل سريعة ومباشرة، وتركز على تعزيز الأمن ورفع مستوى السلامة الضرورية.',
                paragraph: 'ونظراً لكونها خدمات إلكترونية 100% من الخطوة الأولى وحتى الخطوة الأخيرة، فهي بعيدة تماماً عن حدوث الأخطاء البشرية خلال عمليات التحقق من البيانات وتساعد في الحد من التحايل والتزوير.',
                highlights: {
                    tag: 'البوابة الذكية · المميزات',
                    title: 'مزايا البوابة الذكية',
                    items: [
                        { id: '01', icon: 'layout-grid', title: 'بوابة موحّدة', description: 'عدم التشتت في البحث عن الخدمات الأمنية المطلوبة.' },
                        { id: '02', icon: 'layers', title: 'خدمات متكاملة', description: 'جميع خدمات البوابة مترابطة ومكمّلة لبعضها البعض.' },
                        { id: '03', icon: 'mouse-pointer-click', title: 'خطوات سهلة', description: 'سجّل في البوابة، ابحث عن خدمتك المناسبة، واشترك فوراً.' },
                        { id: '04', icon: 'zap', title: 'اشتراك فوري', description: 'تتميّز خدمات البوابة بالاشتراك الفوري وبالتالي عدم الحاجة إلى الإجراءات التقليدية أو الورقية.' }
                    ]
                },
                services: {
                    tag: 'البوابة الذكية · الخدمات',
                    title: 'الخدمات',
                    description: 'تسهم خدمات البوابة الذكية في سهولة الوصول إلى الإجراءات الأمنية الضرورية التي توفر الأمان والموثوقية الكاملة للجهات المستفيدة، وتساعد في الحدّ من عمليات التحايل والتزوير في البيانات. ونظراً لكونها خدمات إلكترونية 100% من الخطوة الأولى وحتى الخطوة الأخيرة، فهي بعيدة تماماً عن حدوث الأخطاء البشرية خلال عمليات التحقق من البيانات.',
                    items: [
                        {
                            id: 'tasreeh',
                            name: 'خدمة تصريح',
                            icon: 'file-badge',
                            features: [
                                'إصدار تصاريح دخول الزوار من أفراد أو منشآت بمركباتهم لمنشأة حيوية مسجلة في خدمة تصريح.',
                                'التحقق من صحة البيانات المدخلة سواءً كانت بيانات أفراد أو مركبات وفقاً لما هو موجود لدى الجهات الرسمية ووفق ضوابط وشروط محددة من قبل مالك المنشأة.',
                                'سهولة الوصول للخدمة في أي وقت وفي أي مكان 24/7.',
                                'اختصار الوقت والجهد في عملية إصدار تصاريح الدخول ومتابعتها.',
                                'التخلص من الخطابات الورقية والإرسال اليدوي لطلبات تصريح الزيارة.'
                            ]
                        },
                        {
                            id: 'kashef',
                            name: 'خدمة كاشف',
                            icon: 'scan-line',
                            features: [
                                'التحقق المباشر من حالة المركبة الأمنية والنظامية عن طريق قراءة بيانات لوحة المركبة.',
                                'التحقق من حالة مركبات الزوار لتلك المواقع.',
                                'ربط الخدمة بمركز المعلومات الوطني بحيث تكون متاحة على مدار الساعة.'
                            ]
                        }
                    ]
                },
                ctaLabel: 'تفعيل البوابة الذكية'
            },
            officialLinks: {
                tag: 'البوابات الرسمية',
                title: 'استخدم منصات علم الرسمية',
                description: 'نتولى التفعيل والتدريب — وتعمل على بوابات مقيم وتم وراصد والبوابة الذكية الرسمية.',
                portals: [
                    { name: 'بوابة مقيم', url: 'https://muqeem.sa/#/login' },
                    { name: 'بوابة تم', url: 'https://idp.elm.sa/auth/realms/Tamm/protocol/openid-connect/auth?client_id=tamm-portal-web&redirect_uri=https%3A%2F%2Ftamm.sa%2Fdashboard&response_type=code&scope=openid%20profile%20offline_access&nonce=a046d105e941be631b9f3c6b31865bb79fhmFS7Zc&state=01d5f03c8815b14d9184c73983c1a55462OaAvke7&code_challenge=OsOVBG_xYzmXCLGawibMHwZVv_AP4LJUFS0ABIbGYH8&code_challenge_method=S256&ui_locales=ar' },
                    { name: 'بوابة راصد', url: 'https://rasedfms.elm.sa/en-US/EndUserAccounts-Authentication/login' },
                    { name: 'البوابة الذكية', url: 'https://smartgate.com.sa/login' }
                ]
            },
            iso: {
                tag: 'استشارات المعايير والشهادات',
                title: 'حلول متكاملة للتأهيل والاعتماد والمطابقة وفق المعايير المحلية والدولية',
                description: 'تُعد شبكة التقنية من الشركات المتخصصة والرائدة في تقديم حلول وأنظمة الجودة المتكاملة. نقدم استشارات الأيزو الكاملة إضافة إلى HACCP وSASO وHALAL وBRCو saber.',
                paragraphs: [
                    'تقدم الشركة خدمات استشارية شاملة تشمل دراسة الوضع القائم، وتحليل الفجوات، وإعداد السياسات والإجراءات، وتطوير النماذج والسجلات، وبناء الهياكل التنظيمية الداعمة، إضافة إلى تنفيذ برامج تدريبية لرفع كفاءة فرق العمل وترسيخ ثقافة الجودة داخل المنشأة.',
                    'سواء احتجت نظام أيزو لإدارة، أو مطابقة سعودية (SASO)، أو شهادة حلال، أو معيار BRC لسلامة الغذاء، أو HACCP — نربط المعيار المناسب بقطاعك ونرافقك حتى الجاهزية للتدقيق.',
                    'وتلتزم شبكة التقنية بمرافقة عملائها كشريك استراتيجي طويل الأمد، من مرحلة التخطيط والتأهيل وحتى المتابعة والتطوير المستمر، لضمان استدامة النظام وتحقيق التحسين المستمر بما يتوافق مع تطلعات الإدارة وأهداف النمو المستقبلية.'
                ],
                schemesTag: 'ISO | HACCP | HALAL | SASO | BRC | SABER',
                schemesTitle: 'شهادات قطاعية وإقليمية',
                schemesDescription: 'إلى جانب أنظمة الأيزو — نؤهّل منشأتك لسلامة الغذاء، والمطابقة السعودية، والحلال، ومعايير التجزئة العالمية.',
                schemes: [
                    { code: 'HACCP', name: 'تحليل المخاطر ونقاط التحكم الحرجة', description: 'منهجية وقائية لسلامة الغذاء تعتمد على تحديد المخاطر والتحكم بها عبر نقاط رقابية حرجة.', image: 'assets/images/iot/HACCP.jpeg' },
                    { code: 'SASO', name: 'المعايير والمطابقة السعودية', description: 'مطابقة الهيئة السعودية للمواصفات والمقاييس والجودة للمنتجات والخدمات داخل المملكة.', image: 'assets/images/iot/SASO.png' },
                    { code: 'HALAL', name: 'شهادة الحلال', description: 'امتثال حلال متكامل للأغذية والضيافة وسلاسل الإمداد التي تخدم الأسواق الإسلامية.', image: 'assets/images/iot/HALAL.png' },
                    { code: 'BRC', name: 'معيار BRC العالمي', description: 'معيار اتحاد تجار التجزئة البريطاني لسلامة وجودة الغذاء للمصنعين والتجار والمصدرين.', image: 'assets/images/iot/BRC.jpg' }
                ],
                standardsTag: 'معايير أيزو شائعة',
                standardsTitle: 'معايير أيزو شائعة — وكل معيار أيزو تحتاجه',
                standardsDescription: 'الشبكة أدناه تعرض أمثلة مطلوبة بكثرة — نقدم استشارات للأيزو الكاملة.',
                standards: [
                    { code: 'ISO 9001:2015', name: 'نظام إدارة الجودة', description: 'تحسين جودة المنتجات والخدمات من خلال إدارة فعّالة للعمليات وتعزيز التحسين المستمر داخل المنشأة.', category: 'quality', icon: 'badge-check' },
                    { code: 'ISO 14001:2015', name: 'نظام الإدارة البيئية', description: 'إدارة التأثيرات البيئية بكفاءة، وتقليل المخاطر، والالتزام بالأنظمة والتشريعات ذات العلاقة.', category: 'environment', icon: 'leaf' },
                    { code: 'ISO 45001:2018', name: 'الصحة والسلامة المهنية', description: 'توفير بيئة عمل آمنة وصحية بتحديد المخاطر وتقليل الحوادث وتعزيز ثقافة السلامة.', category: 'safety', icon: 'hard-hat' },
                    { code: 'ISO 22000:2018', name: 'سلامة الغذاء', description: 'ضمان سلامة المنتجات الغذائية بالتحكم في المخاطر عبر سلسلة الإمداد.', category: 'food', icon: 'utensils' },
                    { code: 'ISO 13485:2016', name: 'جودة الأجهزة الطبية', description: 'نظام متخصص يركز على ضمان جودة وسلامة الأجهزة والمستلزمات الطبية والامتثال للوائح.', category: 'health', icon: 'heart-pulse' },
                    { code: 'ISO 20000-1:2018', name: 'إدارة خدمات تقنية المعلومات', description: 'تقديم خدمات تقنية مستقرة وموثوقة تلبي احتياجات العملاء ومتطلبات الأعمال.', category: 'it', icon: 'server' },
                    { code: 'ISO 27001:2022', name: 'إدارة أمن المعلومات', description: 'حماية المعلومات والبيانات الحساسة بتطبيق ضوابط أمنية فعّالة للسرية والسلامة والتوافر.', category: 'security', icon: 'shield-check' },
                    { code: 'ISO 18788:2015', name: 'عمليات الأمن الخاص', description: 'إدارة عمليات الأمن الخاص باحترافية تراعي الامتثال القانوني واحترام حقوق الإنسان.', category: 'security', icon: 'shield' },
                    { code: 'ISO 41001:2018', name: 'إدارة المرافق', description: 'تحسين كفاءة إدارة المرافق والخدمات المساندة لدعم استمرارية الأعمال.', category: 'assets', icon: 'building' },
                    { code: 'ISO 21001:2018', name: 'المنظمات التعليمية', description: 'تحسين جودة الخدمات التعليمية ورفع مستوى رضا المستفيدين وفعالية العمليات.', category: 'education', icon: 'graduation-cap' },
                    { code: 'ISO 22301:2019', name: 'استمرارية الأعمال', description: 'الاستعداد للأزمات والطوارئ وضمان استمرارية الأعمال وتقليل آثار الانقطاعات.', category: 'continuity', icon: 'life-buoy' },
                    { code: 'ISO 44001:2017', name: 'علاقات الأعمال التعاونية', description: 'إطار لإدارة علاقات الشراكة والتعاون بطريقة منظمة تعزز الثقة والأهداف المشتركة.', category: 'compliance', icon: 'handshake' },
                    { code: 'ISO 55001:2014', name: 'إدارة الأصول', description: 'الإدارة الفعالة للأصول المادية وغير المادية طوال دورة حياتها لتحقيق أقصى قيمة.', category: 'assets', icon: 'recycle' },
                    { code: 'ISO 37301:2021', name: 'إدارة الامتثال', description: 'مساعدة المؤسسات على الالتزام بالمتطلبات القانونية وتعزيز ثقافة الحوكمة الرشيدة.', category: 'compliance', icon: 'gavel' },
                    { code: 'مجموعة الأيزو الكاملة', name: 'نقدم جميع معايير الايزو', description: 'نقدّم استشارات متكاملة لجميع معايير الأيزو. شاركنا قطاعك وهدف الشهادة، ونوضّح لك المعيار الأنسب ومسار التأهيل حتى الجاهزية للتدقيق.', category: 'all', icon: 'layers' }
                ],
                ctaLabel: 'طلب استشارة الشهادات'
            },
            isoCategories: {
                all: 'معايير شائعة',
                quality: 'الجودة',
                environment: 'البيئة',
                safety: 'الصحة والسلامة',
                food: 'الأغذية',
                health: 'الرعاية الصحية',
                it: 'تقنية المعلومات',
                security: 'الأمن',
                education: 'التعليم',
                continuity: 'الاستمرارية',
                assets: 'الأصول',
                compliance: 'الامتثال'
            },
            support: {
                tag: 'الدعم · متاح طوال الأسبوع',
                title: 'تحدّث مع مختص من شبكة التقنية',
                description: 'التفعيل، الدعم الفني، تنبيهات تجديد الاشتراك، والتدريب التشغيلي — يديرها فريقنا في الرياض مباشرة.',
                channels: {
                    phone: { label: 'الخط المباشر', value: '+966 920033465', href: 'tel:+966920033465', icon: 'phone' },
                    whatsapp: { label: 'واتساب', value: '+966 920033465', href: '#', icon: 'message-circle' },
                    email: { label: 'البريد الإلكتروني', value: 'info@shabakah.sa', href: 'mailto:info@shabakah.sa', icon: 'mail' },
                    location: { label: 'المكتب', value: 'الأندلس مول، الرياض', icon: 'map-pin' }
                },
                form: {
                    title: 'طلب تفعيل أو معاودة الاتصال',
                    name: 'الاسم الكامل',
                    company: 'الشركة / المنشأة',
                    phone: 'الجوال',
                    service: 'مهتم بـ',
                    serviceOptions: ['مقيم', 'تم', 'راصد', 'رقيب', 'البوابة الذكية', 'استشارات الأيزو', 'أخرى'],
                    message: 'كيف يمكننا مساعدتك؟',
                    submit: 'إرسال الطلب',
                    note: 'نرد عادة خلال ساعة عمل واحدة.'
                },
                salesTeams: {
                    heading: 'ممثلو المبيعات المختصون',
                    subheading: 'تواصل مع المختص المناسب لخدمات علم، أو استشارات الأيزو، أو تتبع رقيب.',
                    callLabel: 'اتصال',
                    whatsappLabel: 'واتساب',
                    roles: {
                        manager: 'مدير القسم',
                        consultant: 'مهندس استشاري',
                        sales: 'ممثل مبيعات'
                    },
                    teams: [
                        {
                            id: 'elm',
                            title: 'مبيعات خدمات علم',
                            icon: 'building-2',
                            contacts: [
                                { name: 'محمد الشامي', phone: '0580841296' },
                                { name: 'محمد عبدالعظيم', phone: '0543238145' },
                                { name: 'محمود الشامي', phone: '0596800151' },
                                { name: 'نورة السبيعي', phone: '0581058026' },
                                { name: 'مريم الخالدي', phone: '0594596138' },
                                { name: 'فاطمة ناصر', phone: '0599752984' }
                            ]
                        },
                        {
                            id: 'iso',
                            title: 'مبيعات الأيزو',
                            icon: 'award',
                            contacts: [
                                { name: 'محمد منصور', phone: '0582826449', role: 'manager' },
                                { name: 'المهندس ياسر عبدالباسط', phone: '0596199385', role: 'consultant' },
                                { name: 'مي الصرفي', phone: '0596160509' },
                                { name: 'دعاء خالد', phone: '0596857815' },
                                { name: 'سارة روماني', phone: '0596266772' },
                                { name: 'آمال', phone: '0594596151' }
                            ]
                        },
                        {
                            id: 'raqeeb',
                            title: 'مبيعات تتبع رقيب',
                            icon: 'radar',
                            contacts: [
                                { name: 'محمود شرشر', phone: '0505387993' },
                                { name: 'عبدالحميد جميل', phone: '0570131573' }
                            ]
                        }
                    ]
                }
            },
            faq: {
                tag: 'الأسئلة الشائعة',
                title: 'إجابات على أكثر الأسئلة شيوعاً',
                categories: {
                    all: 'الكل',
                    muqeem: 'مقيم',
                    tamm: 'تم',
                    rased: 'راصد',
                    raqeeb: 'رقيب',
                    'smart-gate': 'البوابة الذكية',
                    iso: 'الأيزو'
                },
                items: [
                    { category: 'muqeem', q: 'ما هي خدمة مقيم ومن يمكنه استخدامها؟', a: 'مقيم منصة من علم تتيح للمنشآت إدارة معاملات الجوازات والإقامات لموظفيها المقيمين إلكترونياً. الخدمة متاحة للمنشآت المسجلة فقط ولا تخدم الأفراد.' },
                    { category: 'muqeem', q: 'كيف يعمل تسعير اشتراك مقيم؟', a: 'تقدم مقيم ثلاث باقات سنوية — أساسي ومطور واحترافي — عبر 6 شرائح حسب عدد المقيمين (من 0–9 حتى 801+). الشريحة 1 تبدأ من 1,100 ر.س (أساسي) إلى 1,485 ر.س (احترافي)، والشريحة 6 تُسعّر لكل مقيم من 11 ر.س. كل باقة تتضمن مستخدمين مجانيين يزدادون مع الشريحة. الأسعار غير شاملة الضريبة.' },
                    { category: 'tamm', q: 'كيف يتم تسعير خدمة تم للأساطيل؟', a: 'تُسعّر تم في 9 شرائح حسب حجم الأسطول، تبدأ من 1,800 ر.س لـ 0-9 مركبات وتصل إلى 24,300 ر.س لأكثر من 10,000 مركبة (+ 0.5 ر.س لكل مركبة إضافية). جميع الأسعار غير شاملة الضريبة.' },
                    { category: 'tamm', q: 'كيف أضيف أو ألغي القائد الفعلي في تم؟', a: 'من بوابة تم - الصفحة الرئيسية - التفاويض - إضافة أو إلغاء مستخدم فعلي' },
                    { category: 'rased', q: 'كيف يتم تسعير راصد؟', a: 'يقدم راصد خمس باقات شهرية لكل مركبة: التتبع، التتبع والتشغيل والصيانة، التأجير، والباقة الكاملة، باقة الوقود. تتدرج الأسعار حسب حجم الأسطول من 5 إلى 23 ريالاً للمركبة شهرياً. رسوم الاشتراك للبرنامج فقط — الأجهزة والحساسات تُفوتر بشكل منفصل.' },
                    { category: 'rased', q: 'ما أبرز مميزات راصد؟', a: 'راصد معتمد من الهيئة العامة للنقل، يتكامل مع تم وتأجير وشموس، ويوفر لوحات مؤشرات وتقارير دورية، ويراقب سلوك السائقين وجداول الصيانة ووثائق الأسطول.' },
                    { category: 'raqeeb', q: 'هل يتضمن رقيب تطبيقاً للجوال؟', a: 'نعم. يأتي رقيب مع لوحة ويب على raqeeb.tracking.me وتطبيقات جوال أصلية لنظامي iOS و Android تشمل التتبع المباشر، سجل الرحلات، السياج الجغرافي وتقييم سلوك السائق.' },
                    { category: 'raqeeb', q: 'كم مدة الاحتفاظ بسجل الرحلات في رقيب؟', a: 'الأرشيف متاح للتشغيل والتصدير حسب شريحة اشتراك رقيب — عادة من 90 يوماً إلى 12 شهراً. تواصل معنا لمدة أرشفة تناسب متطلبات الامتثال.' },
                    { category: 'smart-gate', q: 'ما مزايا البوابة الذكية؟', a: 'بوابة موحّدة، خدمات متكاملة، خطوات اشتراك سهلة، واشتراك فوري إلكتروني بالكامل — دون إجراءات ورقية.' },
                    { category: 'smart-gate', q: 'ما الخدمات التي تقدمها البوابة الذكية؟', a: 'خدمة تصريح لإصدار ومتابعة تصاريح دخول الزوار مع التحقق من البيانات الرسمية. خدمة كاشف للتحقق من حالة المركبات عبر لوحاتها وربطها بمركز المعلومات الوطني على مدار الساعة.' },
                    { category: 'smart-gate', q: 'ماذا تقدم البوابة الذكية؟', a: 'تصدر البوابة الذكية تصاريح زوار رقمية للمنشآت الحيوية وتتحقق من بيانات الأشخاص والمركبات مقابل السجلات الرسمية — لا أوراق ولا مخاطر تزوير.' },
                    { category: 'iso', q: 'ما المعايير والشهادات التي تغطيها شبكة التقنية؟', a: 'نقدم استشارات شاملة للأيزو الكاملة — الجودة والبيئة والسلامة وتقنية المعلومات والأغذية والرعاية الصحية وأنظمة إدارة قطاعية. كما نؤهّل المنشآت لـ HACCP و SASO و HALAL و BRC. من الأمثلة الشائعة ISO 9001 و 14001 و 45001 و 22000 و 13485 و 20000-1 و 27001 وغيرها — أخبرنا بقطاعك ونحدد المسار المناسب.' },
                    { category: 'general', q: 'كم يستغرق تفعيل اشتراك جديد لخدمات علم؟', a: 'التفعيل خلال دقائق على مدار الساعة طوال أيام الأسبوع' },
                    { category: 'general', q: 'لماذا أفعّل خدمات علم عبر شبكة التقنية؟', a: 'تحصل على دعم في المملكة بالعربية والإنجليزية، تفعيل في نفس اليوم، تدريب لفريقك، تذكير بالتجديد، تسعير مقيم وتم منشور، وشريك واحد لمقيم وتم وراصد والبوابة الذكية.' }
                ]
            },
            mobileContact: {
                call: 'اتصال',
                whatsapp: 'واتساب'
            }
        },

        // ============ التذييل ============
        footer: {
            tagline: 'تميّز تقني على مستوى المؤسسات منذ عام 1997',
            newsletter: {
                title: 'ابق على اطلاع',
                description: 'اشترك في نشرتنا الإخبارية لآخر الأفكار والتحديثات التقنية',
                placeholder: 'أدخل بريدك الإلكتروني',
                button: 'اشتراك'
            },
            sections: {
                services: 'الخدمات',
                company: 'الشركة',
                resources: 'الموارد',
                connect: 'التواصل'
            },
            links: {
                physicalSecurity: 'أنظمة الأمن المادي',
                infrastructure: 'البنية التحتية لتقنية المعلومات',
                datacenter: 'حلول مراكز البيانات',
                communications: 'الاتصالات الموحدة والتعاون',
                enduser: 'أجهزة المستخدم النهائي',
                cybersecurity: 'حلول الأمن المتكاملة واستمرارية الأعمال',
                licensing: 'ترخيص البرمجيات',
                about: 'من نحن',
                careers: 'الوظائف',
                partners: 'الشركاء',
                contact: 'تواصل معنا',
                blog: 'المدونة',
                caseStudies: 'دراسات الحالة',
                whitepapers: 'الأوراق البيضاء',
                support: 'الدعم'
            },
            copyright: '© 2024 شبكة التقنية المتكاملة. جميع الحقوق محفوظة.',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الخدمة',
            certified: 'معتمد ISO 27001 | ISO 22301'
        }
    }
};

// ============ LANGUAGE MANAGEMENT SYSTEM ============
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language system
function initLanguageSystem() {
    setLanguage(currentLanguage);
    
    // Multiple binding approaches for language toggle
    const languageToggle = document.getElementById('languageToggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguage();
        }, true);
        
        languageToggle.querySelectorAll('*').forEach(child => {
            child.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleLanguage();
            }, true);
        });
    }
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('#languageToggle')) {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguage();
        }
    }, true);
    
    console.log('🌐 Language system initialized:', currentLanguage);
}

// Toggle between languages
function toggleLanguage() {
    console.log('Toggle clicked! Current language:', currentLanguage);
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    console.log('Switching to:', newLanguage);
    
    localStorage.setItem('language', newLanguage);
    location.reload();
}

window.toggleLanguage = toggleLanguage;

// Set language
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('ltr', lang === 'en');
    
    // Update active language indicator
    const langEn = document.querySelector('.lang-en');
    const langAr = document.querySelector('.lang-ar');
    
    if (langEn && langAr) {
        if (lang === 'en') {
            langEn.classList.add('active');
            langAr.classList.remove('active');
        } else {
            langEn.classList.remove('active');
            langAr.classList.add('active');
        }
    }
    
    // Update all translatable elements
    updatePageContent(lang);
    
    console.log('✅ Language changed to:', lang);
}

// ============ PAGE CONTENT UPDATERS ============
function updatePageContent(lang) {
    const t = translations[lang];
    const currentPage = getCurrentPage();
    
    // Update navigation (common to all pages)
    updateNavigation(t.nav);
    updateFooter(t.footer);
    
    // Update breadcrumb "Home" link (common to all pages except index)
    updateBreadcrumbHome(t.nav.home);
    
    // Update common elements (search modal, cookie consent)
    if (t.common) {
        updateCommonElements(t.common);
    }
    
    // Update modern footer (common to all pages)
    if (t.home && t.home.footerModern) {
        updateModernFooter(t.home.footerModern);
    }
    
    // Page-specific updates
    switch(currentPage) {
        case 'index':
            updateHomePage(t.home);
            break;
        case 'about':
            updateAboutPage(t.about);
            break;
        case 'services':
            updateServicesPage(t.services);
            break;
        case 'solutions':
            updateSolutionsPage(t.solutions);
            break;
        case 'partners':
            updatePartnersPage(t.partners);
            break;
        case 'contact':
            updateContactPage(t.contact);
            break;
        case 'iot-tracking':
            updateIoTPage(t.iotTracking);
            break;
    }
}

// Determine current page
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('about')) return 'about';
    if (path.includes('services')) return 'services';
    if (path.includes('solutions')) return 'solutions';
    if (path.includes('partners')) return 'partners';
    if (path.includes('contact')) return 'contact';
    if (path.includes('iot-tracking')) return 'iot-tracking';
    return 'index';
}

// Update navigation
function setNavDropdownLabel(link, label) {
    if (!link) return;
    link.textContent = label;
}

function updateNavigation(nav) {
    const serviceKeys = ['dia', 'hosting', 'managed'];
    const solutionKeys = ['physicalSecurity', 'infrastructure', 'datacenter', 'communications', 'enduser', 'cybersecurity', 'licensing'];

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;
        if (href.includes('index.html') || href === 'index.html') link.textContent = nav.home;
        else if (href.includes('about')) link.textContent = nav.about;
        else if (href.includes('services.html') && link.closest('.nav-dropdown-services')) {
            setNavDropdownLabel(link, nav.services);
        } else if (href.includes('solutions.html') && link.closest('.nav-dropdown-solutions')) {
            setNavDropdownLabel(link, nav.solutions);
        } else if (href.includes('partners')) link.textContent = nav.partners;
        else if (href.includes('contact')) link.textContent = nav.contact;
    });

    const serviceLinks = document.querySelectorAll('.nav-dropdown-services .nav-dropdown-list a');
    serviceLinks.forEach((link, index) => {
        const key = serviceKeys[index];
        if (key && nav.serviceLabels && nav.serviceLabels[key]) {
            link.textContent = nav.serviceLabels[key];
        }
    });

    const solutionLinks = document.querySelectorAll('.nav-dropdown-solutions .nav-dropdown-list a');
    solutionLinks.forEach((link, index) => {
        const key = solutionKeys[index];
        if (key && nav.solutionLabels && nav.solutionLabels[key]) {
            link.textContent = nav.solutionLabels[key];
        }
    });
}

// Update Breadcrumb Home Link (common to all pages)
function updateBreadcrumbHome(homeText) {
    // Modern breadcrumb style
    const breadcrumbHomeModern = document.querySelector('.breadcrumb-modern a[href*="index"]');
    if (breadcrumbHomeModern) breadcrumbHomeModern.textContent = homeText;
    
    // Fallback for older breadcrumb style
    const breadcrumbHome = document.querySelector('.breadcrumb a[href*="index"]');
    if (breadcrumbHome) breadcrumbHome.textContent = homeText;
    
    // Also try matching just href="index.html"
    const breadcrumbHomeAlt = document.querySelector('a[href="index.html"]');
    if (breadcrumbHomeAlt && breadcrumbHomeAlt.closest('.breadcrumb-modern, .breadcrumb')) {
        breadcrumbHomeAlt.textContent = homeText;
    }
}

// Update Common Elements (search modal, cookie consent)
function updateCommonElements(common) {
    // Search modal
    if (common.search) {
        const searchInput = document.querySelector('.search-modal .search-input');
        if (searchInput) searchInput.placeholder = common.search.placeholder;
    }
    
    // Cookie consent
    if (common.cookie) {
        const cookieMessage = document.querySelector('.cookie-content p');
        const cookieLearnMore = document.querySelector('.cookie-link');
        const cookieAccept = document.querySelector('#acceptCookies');
        
        if (cookieMessage) {
            // Preserve the icon
            const icon = cookieMessage.querySelector('i, svg');
            cookieMessage.innerHTML = '';
            if (icon) {
                cookieMessage.appendChild(icon.cloneNode(true));
                cookieMessage.appendChild(document.createTextNode(' '));
            }
            cookieMessage.appendChild(document.createTextNode(common.cookie.message));
        }
        if (cookieLearnMore) cookieLearnMore.textContent = common.cookie.learnMore;
        if (cookieAccept) cookieAccept.textContent = common.cookie.accept;
    }
}

// Update Home Page
function escapeHtmlServiceText(text) {
    if (text == null) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildServiceCardBody(bullets, goal, goalLabel) {
    const label = goalLabel != null ? goalLabel : 'Goal';
    const lis = (bullets || []).map(b => `<li>${escapeHtmlServiceText(b)}</li>`).join('');
    return (
        `<ul class="service-bullets">${lis}</ul>` +
        `<p class="service-goal"><strong>${escapeHtmlServiceText(label)}:</strong> ${escapeHtmlServiceText(goal)}</p>`
    );
}

function updateHomePage(home) {
    // Hero section (old style)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `
            ${home.hero.title}<br>
            <span class="gradient-text">${home.hero.subtitle}</span><br>
            ${home.hero.since}
        `;
    }
    
    // Hero Bold section (new style)
    if (home.heroBold) {
        const heroBoldTitle = document.querySelector('.hero-title-bold');
        if (heroBoldTitle) {
            heroBoldTitle.innerHTML = `
                ${home.heroBold.line1}<br>
                <span class="gradient-text-brand">${home.heroBold.line2}</span> <br>
                ${home.heroBold.line3}
            `;
        }
        
        // Hero bold description
        const heroBoldSubtitle = document.querySelector('.hero-text-content .hero-subtitle');
        if (heroBoldSubtitle) heroBoldSubtitle.textContent = home.heroBold.description;
        
        // Hero bold stats
        const statCards = document.querySelectorAll('.hero-stats-unique .stat-card');
        const statKeys = [
            'established', 'projects', 'branches', 'experience',
            'cstDataCenter', 'localHosting', 'localDia', 'isoCerts'
        ];
        if (statCards.length && home.heroBold.stats) {
            statCards.forEach((card, index) => {
                const key = statKeys[index];
                const label = card.querySelector('.stat-label');
                if (label && key && home.heroBold.stats[key]) {
                    label.textContent = home.heroBold.stats[key];
                }
            });
        }
    }

    const orbLabelEls = document.querySelectorAll('.hero-tech-orb .data-label');
    if (orbLabelEls.length && Array.isArray(home.heroOrbLabels)) {
        home.heroOrbLabels.forEach((text, index) => {
            if (orbLabelEls[index]) orbLabelEls[index].textContent = text;
        });
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && !home.heroBold) heroSubtitle.textContent = home.hero.description;
    
    // Hero CTAs
    const heroCTAs = document.querySelectorAll('.hero-cta .btn span');
    if (heroCTAs[0]) heroCTAs[0].textContent = home.hero.cta1;
    if (heroCTAs[1]) heroCTAs[1].textContent = home.hero.cta2;
    
    // Scroll indicator
    const scrollText = document.querySelector('.scroll-indicator span');
    if (scrollText) scrollText.textContent = home.hero.scroll;
    
    // Hero stats
    const heroStatLabels = document.querySelectorAll('.hero-stats .stat-label');
    if (heroStatLabels[0]) heroStatLabels[0].textContent = home.hero.stats.years;
    if (heroStatLabels[1]) heroStatLabels[1].textContent = home.hero.stats.projects;
    if (heroStatLabels[2]) heroStatLabels[2].textContent = home.hero.stats.clients;
    
    // Why section
    const whyTag = document.querySelector('.why-section .section-tag');
    const whyTitle = document.querySelector('.why-section .section-title');
    const whyDesc = document.querySelector('.why-section .section-description');
    if (whyTag) whyTag.textContent = home.why.tag;
    if (whyTitle) whyTitle.textContent = home.why.title;
    if (whyDesc) whyDesc.textContent = home.why.description;
    
    // Why cards
    const whyCards = document.querySelectorAll('.why-card');
    const cardKeys = ['security', 'support', 'certified', 'vendor', 'track'];
    whyCards.forEach((card, index) => {
        if (cardKeys[index] && home.why.cards[cardKeys[index]]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) h3.textContent = home.why.cards[cardKeys[index]].title;
            if (p) p.textContent = home.why.cards[cardKeys[index]].description;
        }
    });
    
    // Services section
    const servicesTag = document.querySelector('.services-section .section-tag');
    const servicesTitle = document.querySelector('.services-section .section-title');
    const servicesDesc = document.querySelector('.services-section .section-description');
    if (servicesTag) servicesTag.textContent = home.services.tag;
    if (servicesTitle) servicesTitle.textContent = home.services.title;
    if (servicesDesc) servicesDesc.textContent = home.services.description;
    
    // Home page service cards
    if (home.serviceCards) {
        const serviceCards = document.querySelectorAll('.services-grid .service-card');
        serviceCards.forEach((card, index) => {
            const data = home.serviceCards[index];
            if (!data) return;
            const title = card.querySelector('h3');
            const body = card.querySelector('.service-card-body');
            const link = card.querySelector('.service-link');
            if (title) title.textContent = data.title;
            if (body) {
                if (data.bullets && data.goal != null) {
                    body.innerHTML = buildServiceCardBody(data.bullets, data.goal, data.goalLabel);
                } else if (data.description) {
                    body.innerHTML = `<p class="service-goal">${escapeHtmlServiceText(data.description)}</p>`;
                }
            }
            if (link) {
                if (data.href) link.href = data.href;
                const icon = link.querySelector('i, svg');
                link.innerHTML = data.link + ' ';
                if (icon) link.appendChild(icon.cloneNode(true));
            }
        });
    }
    
    // Stats section
    const statsTitle = document.querySelector('.stats-title');
    if (statsTitle) statsTitle.textContent = home.stats.title;
    
    const statLabels = document.querySelectorAll('.stats-section .stat-label');
    if (statLabels[0]) statLabels[0].textContent = home.stats.projects;
    if (statLabels[1]) statLabels[1].textContent = home.stats.clients;
    if (statLabels[2]) statLabels[2].textContent = home.stats.years;
    if (statLabels[3]) statLabels[3].textContent = home.stats.support;
    
    const testimonialsTagLabel = document.querySelector('.certifications-tag-label');
    if (testimonialsTagLabel && home.testimonials.tag) {
        testimonialsTagLabel.textContent = home.testimonials.tag;
    }

    const testimonialsTitle = document.querySelector('.testimonials-modern .testimonials-title');
    if (testimonialsTitle && home.testimonials.title) {
        testimonialsTitle.textContent = home.testimonials.title;
    }

    // Fallback for old testimonials
    const oldTestimonialsTag = document.querySelector('.testimonials-section .section-tag');
    const oldTestimonialsTitle = document.querySelector('.testimonials-section .section-title');
    if (oldTestimonialsTag) oldTestimonialsTag.textContent = home.testimonials.tag || '';
    if (oldTestimonialsTitle) oldTestimonialsTitle.textContent = home.testimonials.title || '';
    
    // CTA section
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDesc = document.querySelector('.cta-description');
    if (ctaTitle) ctaTitle.textContent = home.cta.title;
    if (ctaDesc) ctaDesc.textContent = home.cta.description;
    
    const ctaBtns = document.querySelectorAll('.cta-buttons .btn span');
    if (ctaBtns[0]) ctaBtns[0].textContent = home.cta.btn1;
    if (ctaBtns[1]) ctaBtns[1].textContent = home.cta.btn2;
    
    // Projects Carousel
    if (home.projectsCarousel) {
        const carouselTag = document.querySelector('.carousel-tag');
        const carouselHeader = document.querySelector('.carousel-header h2');
        
        if (carouselTag) carouselTag.textContent = home.projectsCarousel.tag;
        if (carouselHeader) {
            const pc = home.projectsCarousel;
            if (pc.title && pc.titleHighlight) {
                carouselHeader.innerHTML =
                    `${pc.title}<br><span class="gradient-text">${pc.titleHighlight}</span>`;
            } else if (pc.titleHighlight) {
                carouselHeader.innerHTML = `<span class="gradient-text">${pc.titleHighlight}</span>`;
            } else if (pc.title) {
                carouselHeader.innerHTML = pc.title;
            }
        }
        
        // Update carousel slides
        if (home.projectsCarousel.slides) {
            const slides = document.querySelectorAll('.carousel-slide');
            home.projectsCarousel.slides.forEach((slide, index) => {
                if (slides[index]) {
                    const badge = slides[index].querySelector('.slide-badge');
                    const title = slides[index].querySelector('.slide-content h3');
                    const desc = slides[index].querySelector('.slide-content p');
                    
                    if (badge) badge.textContent = slide.badge;
                    if (title) title.innerHTML = slide.title;
                    if (desc) desc.innerHTML = slide.description;
                    
                    // Update metrics
                    const metrics = slides[index].querySelectorAll('.metric');
                    if (metrics[0] && slide.metrics) {
                        const num1 = metrics[0].querySelector('.metric-num');
                        const txt1 = metrics[0].querySelector('.metric-txt');
                        if (num1) num1.textContent = slide.metrics.m1;
                        if (txt1) txt1.textContent = slide.metrics.m1Label;
                    }
                    if (metrics[1] && slide.metrics) {
                        const num2 = metrics[1].querySelector('.metric-num');
                        const txt2 = metrics[1].querySelector('.metric-txt');
                        if (num2) num2.textContent = slide.metrics.m2;
                        if (txt2) txt2.textContent = slide.metrics.m2Label;
                    }
                    if (metrics[2] && slide.metrics) {
                        const num3 = metrics[2].querySelector('.metric-num');
                        const txt3 = metrics[2].querySelector('.metric-txt');
                        if (num3) num3.textContent = slide.metrics.m3;
                        if (txt3) txt3.textContent = slide.metrics.m3Label;
                    }
                    
                    // Update tags
                    if (slide.tags) {
                        const tags = slides[index].querySelectorAll('.slide-tags span');
                        slide.tags.forEach((tag, i) => {
                            if (tags[i]) tags[i].textContent = tag;
                        });
                    }
                }
            });
        }
    }
    
    // Proof Section
    if (home.proofSection) {
        const proofTitle = document.querySelector('.proof-section .section-title');
        const proofDesc = document.querySelector('.proof-section .section-description');
        
        if (proofTitle) {
            proofTitle.innerHTML = `${home.proofSection.title}<br><span style="background: linear-gradient(135deg, #00C4E6, #FFB800); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${home.proofSection.titleHighlight}</span>`;
        }
        if (proofDesc) proofDesc.textContent = home.proofSection.description;
        
        // Proof cards - update badges, titles, descriptions
        const proofCards = document.querySelectorAll('.proof-section .project-card, .proof-card');
        home.proofSection.cards.forEach((card, index) => {
            if (proofCards[index]) {
                const badge = proofCards[index].querySelector('.proof-badge');
                const title = proofCards[index].querySelector('h3, .proof-title');
                const desc = proofCards[index].querySelector('p:not(.text-muted), .proof-desc');
                const tagSpans = proofCards[index].querySelectorAll('.proof-tags span');

                if (badge && card.badge) badge.textContent = card.badge;
                if (title) title.textContent = card.title;
                if (desc) desc.textContent = card.description;
                if (card.tags && tagSpans.length) {
                    card.tags.forEach((tagText, i) => {
                        if (tagSpans[i]) tagSpans[i].textContent = tagText;
                    });
                }
            }
        });
    }

    // Trust band (partner logos strip)
    if (home.trustBand?.html) {
        const trustLabel = document.querySelector('.trust-band .trust-band-label');
        if (trustLabel) trustLabel.innerHTML = home.trustBand.html;
    }
    
    // Tech Section
    if (home.techSection) {
        const techTitle = document.querySelector('.tech-section .section-title');
        const techDesc = document.querySelector('.tech-section .section-description');
        
        if (techTitle) {
            techTitle.innerHTML = `${home.techSection.title}<br><span style="background: linear-gradient(135deg, #00C4E6, #FFB800); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${home.techSection.titleHighlight}</span>`;
        }
        if (techDesc) techDesc.textContent = home.techSection.description;

        // Tech categories
        const techCategories = document.querySelectorAll('.tech-category');
        home.techSection.categories.forEach((category, index) => {
            if (techCategories[index]) {
                const catTitle = techCategories[index].querySelector('h3');
                if (catTitle) catTitle.textContent = category.title;

                const items = techCategories[index].querySelectorAll('.tech-category-items span');
                category.items.forEach((item, i) => {
                    if (items[i]) items[i].textContent = '• ' + item;
                });
                for (let i = category.items.length; i < items.length; i++) {
                    if (items[i]) items[i].textContent = '';
                }
            }
        });
        
        // CTA button in tech section
        const techCta = document.querySelector('.tech-section .btn-primary');
        if (techCta) techCta.textContent = home.techSection.ctaButton;
    }
    
    // Update modern footer
    if (home.footerModern) {
        updateModernFooter(home.footerModern);
    }
}

// Update Modern Footer (for all pages)
function updateModernFooter(footerModern) {
    if (!footerModern) return;
    
    // Footer tagline
    const tagline = document.querySelector('.footer-tagline-modern');
    if (tagline) tagline.textContent = footerModern.tagline;
    
    // Get all footer columns (excluding the brand column)
    const footerCols = document.querySelectorAll('.footer-col-modern');
    
    // Footer column headings and links
    if (footerModern.columns) {
        // Services column (first .footer-col-modern)
        if (footerCols[0]) {
            const heading = footerCols[0].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.services;
            const links = footerCols[0].querySelectorAll('.footer-links-modern a');
            if (footerModern.links) {
                if (links[0]) links[0].textContent = footerModern.links.dia;
                if (links[1]) links[1].textContent = footerModern.links.hosting;
                if (links[2]) links[2].textContent = footerModern.links.managed;
            }
        }
        
        // Solutions column (second .footer-col-modern)
        if (footerCols[1]) {
            const heading = footerCols[1].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.solutions;
            const links = footerCols[1].querySelectorAll('.footer-links-modern a');
            if (footerModern.links) {
                if (links[0]) links[0].textContent = footerModern.links.physicalSecurity;
                if (links[1]) links[1].textContent = footerModern.links.infrastructure;
                if (links[2]) links[2].textContent = footerModern.links.datacenter;
                if (links[3]) links[3].textContent = footerModern.links.communications;
                if (links[4]) links[4].textContent = footerModern.links.enduser;
                if (links[5]) links[5].textContent = footerModern.links.cybersecurity;
                if (links[6]) links[6].textContent = footerModern.links.licensing;
            }
        }
        
        // Company column (third .footer-col-modern)
        if (footerCols[2]) {
            const heading = footerCols[2].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.company;
            const links = footerCols[2].querySelectorAll('.footer-links-modern a');
            if (footerModern.links) {
                if (links[0]) links[0].textContent = footerModern.links.about;
                if (links[1]) links[1].textContent = footerModern.links.journey;
                if (links[2]) links[2].textContent = footerModern.links.partners;
                if (links[3]) links[3].textContent = footerModern.links.solutions;
                if (links[4]) links[4].textContent = footerModern.links.contact;
            }
        }
        
        // Connect column (fourth .footer-col-modern)
        if (footerCols[3]) {
            const heading = footerCols[3].querySelector('h4');
            if (heading) heading.textContent = footerModern.columns.connect;
        }
    }
    
    // Footer contact info
    if (footerModern.contactInfo) {
        const contactItems = document.querySelectorAll('.footer-contact-modern li');
        if (contactItems[0]) {
            // Location - first item
            const span = contactItems[0].querySelector('span:last-child');
            if (span) span.textContent = footerModern.contactInfo.location;
        }
        if (contactItems[1]) {
            // Phone - second item
            const link = contactItems[1].querySelector('a');
            if (link) link.textContent = footerModern.contactInfo.phone;
        }
        if (contactItems[2]) {
            // Email - third item
            const link = contactItems[2].querySelector('a');
            if (link) link.textContent = footerModern.contactInfo.email;
        }
        if (contactItems[3]) {
            // Support - fourth item
            const span = contactItems[3].querySelector('span:last-child');
            if (span) span.textContent = footerModern.contactInfo.support;
        }
    }
    
    // Copyright
    const copyright = document.querySelector('.footer-bottom-modern .footer-copyright');
    if (copyright && footerModern.copyright) copyright.textContent = footerModern.copyright;
    
    // Certifications
    if (footerModern.certs) {
        document.querySelectorAll('.cert-badge[data-cert]').forEach(badge => {
            const label = footerModern.certs[badge.dataset.cert];
            if (!label) return;
            const icon = badge.querySelector('i');
            badge.textContent = '';
            if (icon) badge.appendChild(icon);
            badge.appendChild(document.createTextNode(' ' + label));
        });
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
    }
}

// Update About Page
function updateAboutPage(about) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (about.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = about.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = about.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = about.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = about.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (about.heroModern.stats) {
            if (statNumbers[0] && about.heroModern.stats.stat1) statNumbers[0].textContent = about.heroModern.stats.stat1.number;
            if (statLabels[0] && about.heroModern.stats.stat1) statLabels[0].textContent = about.heroModern.stats.stat1.label;
            if (statNumbers[1] && about.heroModern.stats.stat2) statNumbers[1].textContent = about.heroModern.stats.stat2.number;
            if (statLabels[1] && about.heroModern.stats.stat2) statLabels[1].textContent = about.heroModern.stats.stat2.label;
            if (statNumbers[2] && about.heroModern.stats.stat3) statNumbers[2].textContent = about.heroModern.stats.stat3.number;
            if (statLabels[2] && about.heroModern.stats.stat3) statLabels[2].textContent = about.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = about.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = about.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = about.hero.subtitle;
    
    // Overview section
    const overviewTag = document.querySelector('.overview-section .section-tag');
    const overviewTitle = document.querySelector('.overview-section h2');
    const overviewParas = document.querySelectorAll('.overview-content p');
    if (overviewTag) overviewTag.textContent = about.overview.tag;
    if (overviewTitle) overviewTitle.textContent = about.overview.title;
    if (overviewParas[0]) overviewParas[0].textContent = about.overview.p1;
    if (overviewParas[1]) overviewParas[1].textContent = about.overview.p2;
    if (overviewParas[2]) overviewParas[2].textContent = about.overview.p3;
    
    // Timeline
    const timelineTag = document.querySelector('.timeline-section .section-tag');
    const timelineTitle = document.querySelector('.timeline-section .section-title');
    const timelineDesc = document.querySelector('.timeline-section .section-description');
    if (timelineTag) timelineTag.textContent = about.timeline.tag;
    if (timelineTitle) timelineTitle.textContent = about.timeline.title;
    if (timelineDesc) timelineDesc.textContent = about.timeline.description;
    
    // Timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    const years = ['1997', '2005', '2010', '2015', '2020', '2024'];
    timelineItems.forEach((item, index) => {
        if (years[index] && about.timeline.milestones[years[index]]) {
            const h3 = item.querySelector('h3');
            const textBlock = item.querySelector('.timeline-text');
            const p = item.querySelector('.timeline-content p');
            if (h3) h3.textContent = about.timeline.milestones[years[index]].title;
            const descHtml = about.timeline.milestones[years[index]].description;
            if (textBlock) {
                textBlock.innerHTML = descHtml;
            } else if (p) {
                p.innerHTML = descHtml;
            }
        }
    });
    
    // Regional offices map
    if (about.offices) {
        const officesTag = document.querySelector('.offices-section .section-tag');
        const officesTitle = document.querySelector('.offices-section .section-title');
        const officesDesc = document.querySelector('.offices-description');
        if (officesTag) officesTag.textContent = about.offices.tag;
        if (officesTitle) officesTitle.textContent = about.offices.title;
        if (officesDesc) officesDesc.textContent = about.offices.description;

        const locationPills = document.querySelectorAll('.offices-location-pill');
        if (locationPills[0] && about.offices.locations) {
            const riyadhSpan = locationPills[0].querySelector('span:not(.offices-location-role)');
            const hqSpan = locationPills[0].querySelector('.offices-location-role');
            if (riyadhSpan) riyadhSpan.textContent = about.offices.locations.riyadh;
            if (hqSpan) hqSpan.textContent = about.offices.locations.hq;
        }
        if (locationPills[1] && about.offices.locations) {
            const span = locationPills[1].querySelector('span:not(.offices-location-role)');
            if (span) span.textContent = about.offices.locations.jeddah;
        }
        if (locationPills[2] && about.offices.locations) {
            const span = locationPills[2].querySelector('span:not(.offices-location-role)');
            if (span) span.textContent = about.offices.locations.cairo;
        }
    }
    
    // Vision & Mission section
    if (about.visionMission) {
        const vmCards = document.querySelectorAll('.vm-card');
        if (vmCards[0]) {
            const title = vmCards[0].querySelector('h3');
            const desc = vmCards[0].querySelector('p');
            if (title) title.textContent = about.visionMission.vision.title;
            if (desc) desc.textContent = about.visionMission.vision.description;
        }
        if (vmCards[1]) {
            const title = vmCards[1].querySelector('h3');
            const desc = vmCards[1].querySelector('p');
            if (title) title.textContent = about.visionMission.mission.title;
            if (desc) desc.textContent = about.visionMission.mission.description;
        }
    }
    
    // Philosophy section
    if (about.philosophy) {
        const philosophySection = document.querySelector('.philosophy-section');
        if (philosophySection) {
            const tag = philosophySection.querySelector('.section-tag');
            const title = philosophySection.querySelector('.section-title');
            const desc = philosophySection.querySelector('.section-description');
            
            if (tag) tag.textContent = about.philosophy.tag;
            if (title) title.textContent = about.philosophy.title;
            if (desc) desc.textContent = about.philosophy.description;
            
            // Philosophy cards
            const philosophyCards = philosophySection.querySelectorAll('.philosophy-card');
            about.philosophy.items.forEach((item, index) => {
                if (philosophyCards[index]) {
                    const cardTitle = philosophyCards[index].querySelector('h3');
                    const cardDesc = philosophyCards[index].querySelector('p');
                    if (cardTitle) cardTitle.textContent = item.title;
                    if (cardDesc) cardDesc.textContent = item.description;
                    
                    // Feature list items
                    const listItems = philosophyCards[index].querySelectorAll('.philosophy-list li');
                    const feats = item.features || [];
                    listItems.forEach((li, i) => {
                        li.textContent = feats[i] != null ? feats[i] : '';
                    });
                }
            });
        }
    }
    
    // Values section
    const valuesTag = document.querySelector('.values-section .section-tag');
    const valuesTitle = document.querySelector('.values-section .section-title');
    if (valuesTag) valuesTag.textContent = about.values.tag;
    if (valuesTitle) valuesTitle.textContent = about.values.title;
    
    // Values cards (updated structure)
    if (about.values.items) {
        const valueItems = document.querySelectorAll('.value-item');
        about.values.items.forEach((item, index) => {
            if (valueItems[index]) {
                const h4 = valueItems[index].querySelector('h4');
                const p = valueItems[index].querySelector('p');
                if (h4) h4.textContent = item.title;
                if (p) p.textContent = item.description;
            }
        });
    }
}

// Shared helper for service-detail-section blocks (services & solutions pages)
function updateServiceDetailSection(sectionId, sectionData) {
    if (!sectionData) return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const tag = section.querySelector('.section-tag');
    const title = section.querySelector('.section-title');
    const desc = section.querySelector('.service-description');

    if (tag) tag.textContent = sectionData.tag || '';
    if (title) title.textContent = sectionData.title || sectionData.tag || '';
    if (desc) {
        if (sectionData.description) {
            desc.textContent = sectionData.description;
            desc.style.display = '';
        } else {
            desc.textContent = '';
            desc.style.display = 'none';
        }
    }

    if (sectionData.bullets && Array.isArray(sectionData.bullets)) {
        const ul = section.querySelector('.service-bullets');
        if (ul) {
            ul.innerHTML = sectionData.bullets
                .map(b => `<li>${escapeHtmlServiceText(b)}</li>`)
                .join('');
        }
    } else if (sectionData.features && Array.isArray(sectionData.features)) {
        const features = section.querySelectorAll('.feature-item');
        features.forEach((feature, index) => {
            if (sectionData.features[index]) {
                const h4 = feature.querySelector('h4');
                const p = feature.querySelector('p');
                if (h4) h4.textContent = sectionData.features[index].title;
                if (p) p.textContent = sectionData.features[index].description;
            }
        });
    }

    const goalEl = section.querySelector('.service-goal');
    if (goalEl) {
        if (sectionData.goal) {
            const lang = localStorage.getItem('language') || 'en';
            const goalLabel = lang === 'ar' ? 'الهدف:' : 'Goal:';
            goalEl.innerHTML = '<strong>' + goalLabel + '</strong> ' + sectionData.goal;
            goalEl.style.display = '';
        } else {
            goalEl.textContent = '';
            goalEl.style.display = 'none';
        }
    }
}

// Update Services Page
function updateServicesPage(services) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (services.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = services.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = services.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = services.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = services.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (services.heroModern.stats) {
            if (statNumbers[0] && services.heroModern.stats.stat1) statNumbers[0].textContent = services.heroModern.stats.stat1.number;
            if (statLabels[0] && services.heroModern.stats.stat1) statLabels[0].textContent = services.heroModern.stats.stat1.label;
            if (statNumbers[1] && services.heroModern.stats.stat2) statNumbers[1].textContent = services.heroModern.stats.stat2.number;
            if (statLabels[1] && services.heroModern.stats.stat2) statLabels[1].textContent = services.heroModern.stats.stat2.label;
            if (statNumbers[2] && services.heroModern.stats.stat3) statNumbers[2].textContent = services.heroModern.stats.stat3.number;
            if (statLabels[2] && services.heroModern.stats.stat3) statLabels[2].textContent = services.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = services.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = services.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = services.hero.subtitle;
    
    updateServiceDetailSection('dia', services.dia);
    updateServiceDetailSection('hosting', services.hosting);
    updateServiceDetailSection('managed', services.managed);
}

// Update Solutions Page
function updateSolutionsPage(solutions) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (solutions.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = solutions.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = solutions.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = solutions.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = solutions.hero.breadcrumb;
        
        // Hero stats (array of { number, label } or legacy stat1/stat2/stat3)
        const heroStatsRow = document.querySelector('.page-hero-modern .hero-stats-row');
        if (heroStatsRow && solutions.heroModern.stats) {
            const statItems = heroStatsRow.querySelectorAll('.hero-stat-item');
            const stats = solutions.heroModern.stats;
            if (Array.isArray(stats)) {
                stats.forEach((s, i) => {
                    if (!statItems[i]) return;
                    const num = statItems[i].querySelector('.hero-stat-number');
                    const lab = statItems[i].querySelector('.hero-stat-label');
                    if (num) num.textContent = s.number != null ? s.number : '';
                    if (lab && s.label != null) lab.textContent = s.label;
                    if (s.anchor && statItems[i].tagName === 'A') {
                        statItems[i].href = '#' + s.anchor;
                    }
                });
            } else {
                const statNumbers = heroStatsRow.querySelectorAll('.hero-stat-number');
                const statLabels = heroStatsRow.querySelectorAll('.hero-stat-label');
                if (statNumbers[0] && stats.stat1) statNumbers[0].textContent = stats.stat1.number;
                if (statLabels[0] && stats.stat1) statLabels[0].textContent = stats.stat1.label;
                if (statNumbers[1] && stats.stat2) statNumbers[1].textContent = stats.stat2.number;
                if (statLabels[1] && stats.stat2) statLabels[1].textContent = stats.stat2.label;
                if (statNumbers[2] && stats.stat3) statNumbers[2].textContent = stats.stat3.number;
                if (statLabels[2] && stats.stat3) statLabels[2].textContent = stats.stat3.label;
            }
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = solutions.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = solutions.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = solutions.hero.subtitle;
    
    // Solutions overview section
    if (solutions.overview) {
        const overviewTag = document.querySelector('.solutions-section:not(.sector-solutions-section) .section-tag');
        const overviewTitle = document.querySelector('.solutions-section:not(.sector-solutions-section) .section-title');
        const overviewDesc = document.querySelector('.solutions-section:not(.sector-solutions-section) .section-description');
        if (overviewTag) overviewTag.textContent = solutions.overview.tag;
        if (overviewTitle) {
            if (solutions.overview.titleHtml) overviewTitle.innerHTML = solutions.overview.titleHtml;
            else overviewTitle.textContent = solutions.overview.title || '';
        }
        if (overviewDesc) overviewDesc.textContent = solutions.overview.description;
    }
    
    updateServiceDetailSection('physicalsecurity', solutions.physicalsecurity);
    updateServiceDetailSection('infrastructure', solutions.infrastructure);
    updateServiceDetailSection('datacenter', solutions.datacenter);
    updateServiceDetailSection('communications', solutions.communications);
    updateServiceDetailSection('enduser', solutions.enduser);
    updateServiceDetailSection('cybersecurity', solutions.cybersecurity);
    updateServiceDetailSection('licensing', solutions.licensing);
    
    // Approach section
    if (solutions.approach) {
        const approachTag = document.querySelector('.approach-section .section-tag');
        const approachTitle = document.querySelector('.approach-section .section-title');
        if (approachTag) approachTag.textContent = solutions.approach.tag;
        if (approachTitle) approachTitle.textContent = solutions.approach.title;
        
        // Approach steps
        if (solutions.approach.steps && Array.isArray(solutions.approach.steps)) {
            const steps = document.querySelectorAll('.approach-step');
            steps.forEach((step, index) => {
                if (solutions.approach.steps[index]) {
                    const h3 = step.querySelector('h3');
                    const p = step.querySelector('p');
                    if (h3) h3.textContent = solutions.approach.steps[index].title;
                    if (p) p.textContent = solutions.approach.steps[index].description;
                }
            });
        }
    }
    
    // Differentiators section
    if (solutions.differentiators) {
        const diffSection = document.querySelector('.differentiators-section');
        if (diffSection) {
            const tag = diffSection.querySelector('.section-tag');
            const title = diffSection.querySelector('.section-title');
            if (tag) tag.textContent = solutions.differentiators.tag;
            if (title) title.textContent = solutions.differentiators.title;
            
            // Differentiator cards
            const diffCards = diffSection.querySelectorAll('.diff-card');
            if (solutions.differentiators.cards && Array.isArray(solutions.differentiators.cards)) {
                diffCards.forEach((card, index) => {
                    if (solutions.differentiators.cards[index]) {
                        const h3 = card.querySelector('h3');
                        const p = card.querySelector('p');
                        if (h3) h3.textContent = solutions.differentiators.cards[index].title;
                        if (p) p.textContent = solutions.differentiators.cards[index].description;
                    }
                });
            }
        }
    }
}

// Update Partners Page
function updatePartnersPage(partners) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (partners.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = partners.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = partners.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = partners.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = partners.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (partners.heroModern.stats) {
            if (statNumbers[0] && partners.heroModern.stats.stat1) statNumbers[0].textContent = partners.heroModern.stats.stat1.number;
            if (statLabels[0] && partners.heroModern.stats.stat1) statLabels[0].textContent = partners.heroModern.stats.stat1.label;
            if (statNumbers[1] && partners.heroModern.stats.stat2) statNumbers[1].textContent = partners.heroModern.stats.stat2.number;
            if (statLabels[1] && partners.heroModern.stats.stat2) statLabels[1].textContent = partners.heroModern.stats.stat2.label;
            if (statNumbers[2] && partners.heroModern.stats.stat3) statNumbers[2].textContent = partners.heroModern.stats.stat3.number;
            if (statLabels[2] && partners.heroModern.stats.stat3) statLabels[2].textContent = partners.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = partners.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = partners.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = partners.hero.subtitle;
    
    if (partners.clients) {
        const clientsSection = document.querySelector('.partners-clients');
        if (clientsSection) {
            const clientsTag = clientsSection.querySelector('.section-tag');
            const clientsTitle = clientsSection.querySelector('#partners-clients-heading');
            if (clientsTag) clientsTag.textContent = partners.clients.tag;
            if (clientsTitle) clientsTitle.textContent = partners.clients.title;
        }
    }

    // Partner categories - update headers
    if (partners.categories) {
        const categoryHeaders = document.querySelectorAll('.partner-category .category-header');
        const categoryKeys = ['infrastructure', 'security', 'dataProtection', 'cctv', 'cabling', 'accessControl', 'network', 'softwarePlatforms', 'unifiedComms'];
        
        categoryHeaders.forEach((header, index) => {
            const key = categoryKeys[index];
            if (partners.categories[key]) {
                const tag = header.querySelector('.section-tag');
                const title = header.querySelector('.section-title');
                if (tag) tag.textContent = partners.categories[key].tag;
                if (title) title.textContent = partners.categories[key].title;
            }
        });
    }
    
    // Partner cards - update content
    if (partners.partnerCards) {
        const partnerCards = document.querySelectorAll('.partner-card');
        const partnerKeys = ['hpe', 'huawei', 'lenovo', 'lenovoAlt', 'fortinet', 'paloAlto', 'sophos', 'kaspersky', 'veeam', 'veritas', 'commvault', 'acronis', 'cctvHikvision', 'cctvDahua', 'cctvHanwha', 'cctvBosch', 'cctvHoneywell', 'cctvAxis', 'cctvMilestone', 'cablingCommScope', 'cablingPanduit', 'cablingNexans', 'cablingCorning', 'cablingBelden', 'accessZKTeco', 'accessSuprema', 'accessHikvision', 'accessDahua', 'networkCisco', 'networkAruba', 'networkNetgear', 'networkHuawei', 'softwareMicrosoft', 'softwareAdobe', 'softwareAutoCAD', 'softwareEsri', 'ucYealink', 'ucYeastar', 'ucGrandstream', 'ucAvaya', 'ucCisco'];
        
        partnerCards.forEach((card, index) => {
            const key = partnerKeys[index];
            if (partners.partnerCards[key]) {
                const name = card.querySelector('h3');
                const desc = card.querySelector('p');
                if (name) name.textContent = partners.partnerCards[key].name;
                if (desc) desc.textContent = partners.partnerCards[key].description;
            }
        });
    }
    
    // Benefits section
    if (partners.benefits) {
        const benefitsHeader = document.querySelector('.benefits-section .section-header');
        if (benefitsHeader) {
            const tag = benefitsHeader.querySelector('.section-tag');
            const title = benefitsHeader.querySelector('.section-title');
            if (tag) tag.textContent = partners.benefits.tag;
            if (title) title.textContent = partners.benefits.title;
        }
        
        // Benefit cards
        if (partners.benefits.items) {
            const benefitCards = document.querySelectorAll('.benefit-card');
            partners.benefits.items.forEach((item, index) => {
                if (benefitCards[index]) {
                    const title = benefitCards[index].querySelector('h3');
                    const desc = benefitCards[index].querySelector('p');
                    if (title) title.textContent = item.title;
                    if (desc) desc.textContent = item.description;
                }
            });
        }
    }
    
    // Fallback intro section (if using old layout)
    const introTag = document.querySelector('.partners-intro .section-tag');
    const introTitle = document.querySelector('.partners-intro .section-title');
    const introDesc = document.querySelector('.partners-intro .section-description');
    if (introTag && partners.intro) introTag.textContent = partners.intro.tag;
    if (introTitle && partners.intro) introTitle.textContent = partners.intro.title;
    if (introDesc && partners.intro) introDesc.textContent = partners.intro.description;
}

// Update Contact Page
function updateContactPage(contact) {
    // Modern Hero - new selectors
    const heroTitleLines = document.querySelectorAll('.hero-title-modern .title-line');
    if (contact.heroModern) {
        if (heroTitleLines[0]) heroTitleLines[0].textContent = contact.heroModern.titleLine1;
        if (heroTitleLines[1]) heroTitleLines[1].textContent = contact.heroModern.titleLine2;
        
        const heroSubtitle = document.querySelector('.hero-subtitle-modern');
        if (heroSubtitle) heroSubtitle.textContent = contact.heroModern.subtitle;
        
        const breadcrumbCurrent = document.querySelector('.breadcrumb-modern .current');
        if (breadcrumbCurrent) breadcrumbCurrent.textContent = contact.hero.breadcrumb;
        
        // Hero stats
        const statNumbers = document.querySelectorAll('.hero-stat-number');
        const statLabels = document.querySelectorAll('.hero-stat-label');
        if (contact.heroModern.stats) {
            if (statNumbers[0] && contact.heroModern.stats.stat1) statNumbers[0].textContent = contact.heroModern.stats.stat1.number;
            if (statLabels[0] && contact.heroModern.stats.stat1) statLabels[0].textContent = contact.heroModern.stats.stat1.label;
            if (statNumbers[1] && contact.heroModern.stats.stat2) statNumbers[1].textContent = contact.heroModern.stats.stat2.number;
            if (statLabels[1] && contact.heroModern.stats.stat2) statLabels[1].textContent = contact.heroModern.stats.stat2.label;
            if (statNumbers[2] && contact.heroModern.stats.stat3) statNumbers[2].textContent = contact.heroModern.stats.stat3.number;
            if (statLabels[2] && contact.heroModern.stats.stat3) statLabels[2].textContent = contact.heroModern.stats.stat3.label;
        }
    }
    
    // Fallback for old hero selectors
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumb) breadcrumb.textContent = contact.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = contact.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = contact.hero.subtitle;
    
    // Form
    const formTitle = document.querySelector('.contact-form-wrapper .section-title');
    const formDesc = document.querySelector('.contact-form-wrapper .section-description');
    if (formTitle) formTitle.textContent = contact.form.title;
    if (formDesc) formDesc.textContent = contact.form.description;
    
    // Form fields - labels
    const labels = document.querySelectorAll('.contact-form label');
    if (labels[0]) labels[0].textContent = contact.form.fields.name;
    if (labels[1]) labels[1].textContent = contact.form.fields.email;
    if (labels[2]) labels[2].textContent = contact.form.fields.phone;
    if (labels[3]) labels[3].textContent = contact.form.fields.company;
    if (labels[4]) labels[4].textContent = contact.form.fields.service;
    if (labels[5]) labels[5].textContent = contact.form.fields.message;
    
    // Form fields - placeholders
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const companyInput = document.querySelector('#company');
    const messageInput = document.querySelector('#message');
    const serviceSelect = document.querySelector('#service');
    
    if (nameInput) nameInput.placeholder = contact.form.fields.namePlaceholder;
    if (emailInput) emailInput.placeholder = contact.form.fields.emailPlaceholder;
    if (phoneInput) phoneInput.placeholder = contact.form.fields.phonePlaceholder;
    if (companyInput) companyInput.placeholder = contact.form.fields.companyPlaceholder;
    if (messageInput) messageInput.placeholder = contact.form.fields.messagePlaceholder;
    
    // Service dropdown options (order matches contact.html <option> values)
    if (serviceSelect && contact.form.serviceOptions) {
        const options = serviceSelect.querySelectorAll('option');
        const serviceOptionKeys = [
            'physicalsecurity',
            'infrastructure',
            'datacenter',
            'communications',
            'enduser',
            'cybersecurity',
            'licensing',
            'other'
        ];
        if (options[0]) options[0].textContent = contact.form.fields.servicePlaceholder;
        serviceOptionKeys.forEach((key, i) => {
            const opt = options[i + 1];
            if (opt && contact.form.serviceOptions[key]) {
                opt.textContent = contact.form.serviceOptions[key];
            }
        });
    }
    
    // Submit button
    const submitBtn = document.querySelector('.contact-form button[type="submit"] span');
    if (submitBtn) submitBtn.textContent = contact.form.fields.submit;
    // Fallback for button without span
    const submitBtnAlt = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtnAlt && !submitBtn) submitBtnAlt.textContent = contact.form.fields.submit;
    
    // Contact Info Cards
    if (contact.infoCards) {
        const infoCards = document.querySelectorAll('.contact-info-card');
        
        // Office card (index 0)
        if (infoCards[0] && contact.infoCards.office) {
            const title = infoCards[0].querySelector('h3');
            const paras = infoCards[0].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.office.title;
            if (paras[0]) paras[0].textContent = contact.infoCards.office.line1;
            if (paras[1]) paras[1].textContent = contact.infoCards.office.line2;
            if (paras[2]) paras[2].textContent = contact.infoCards.office.line3;
        }
        
        // Phone card (index 1)
        if (infoCards[1] && contact.infoCards.phone) {
            const title = infoCards[1].querySelector('h3');
            const paras = infoCards[1].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.phone.title;
            // Keep phone number as-is (link), just update the note
            if (paras[1]) paras[1].textContent = contact.infoCards.phone.note;
        }
        
        // Email card (index 2)
        if (infoCards[2] && contact.infoCards.email) {
            const title = infoCards[2].querySelector('h3');
            const paras = infoCards[2].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.email.title;
            // Keep email address as-is (link), just update the note
            if (paras[1]) paras[1].textContent = contact.infoCards.email.note;
        }
        
        // Hours card (index 3)
        if (infoCards[3] && contact.infoCards.hours) {
            const title = infoCards[3].querySelector('h3');
            const paras = infoCards[3].querySelectorAll('p');
            if (title) title.textContent = contact.infoCards.hours.title;
            if (paras[0]) paras[0].textContent = contact.infoCards.hours.days;
            if (paras[1]) paras[1].textContent = contact.infoCards.hours.time;
        }
        
        // Social card
        if (contact.infoCards.social) {
            const socialCard = document.querySelector('.contact-social h3');
            if (socialCard) socialCard.textContent = contact.infoCards.social.title;
        }
    }
}

// Update IoT Tracking Page
function normalizeSaPhoneE164(phone) {
    const digits = String(phone || '').replace(/\D/g, '');
    if (digits.startsWith('966')) return digits;
    if (digits.startsWith('0')) return '966' + digits.slice(1);
    return '966' + digits;
}

function formatSaPhoneDisplay(phone) {
    const e164 = normalizeSaPhoneE164(phone);
    const local = e164.slice(3);
    if (local.length !== 9) return '+' + e164;
    return '+966 ' + local.slice(0, 2) + ' ' + local.slice(2, 5) + ' ' + local.slice(5);
}

function getRepInitial(name) {
    const trimmed = String(name || '').trim();
    if (!trimmed) return '?';
    return trimmed.charAt(0);
}

function renderSalesTeams(sec, salesTeams) {
    if (!sec || !salesTeams) return;

    const heading = sec.querySelector('.support-sales-teams-heading');
    const subheading = sec.querySelector('.support-sales-teams-subheading');
    if (heading) heading.textContent = salesTeams.heading || '';
    if (subheading) subheading.textContent = salesTeams.subheading || '';

    const roles = salesTeams.roles || {};
    const callLabel = salesTeams.callLabel || 'Call';
    const whatsappLabel = salesTeams.whatsappLabel || 'WhatsApp';

    (salesTeams.teams || []).forEach(team => {
        const card = sec.querySelector('.sales-team-card[data-team="' + team.id + '"]');
        if (!card) return;

        const titleEl = card.querySelector('.sales-team-title');
        const countEl = card.querySelector('.sales-team-count');
        const iconEl = card.querySelector('.sales-team-icon i');
        const listEl = card.querySelector('.sales-rep-list');

        if (titleEl) titleEl.textContent = team.title || '';
        if (countEl) countEl.textContent = String((team.contacts || []).length);
        if (iconEl && team.icon) iconEl.setAttribute('data-lucide', team.icon);

        if (!listEl) return;
        listEl.innerHTML = '';
        listEl.setAttribute('aria-label', team.title || '');

        (team.contacts || []).forEach(contact => {
            const e164 = normalizeSaPhoneE164(contact.phone);
            const telHref = 'tel:+' + e164;
            const waHref = 'https://wa.me/' + e164;
            const displayPhone = formatSaPhoneDisplay(contact.phone);
            const roleKey = contact.role;
            const showRole = roleKey && roles[roleKey];
            const roleText = showRole ? roles[roleKey] : '';

            const row = document.createElement('div');
            row.className = 'sales-rep-row';
            row.innerHTML =
                '<div class="sales-rep-avatar" aria-hidden="true">' + getRepInitial(contact.name) + '</div>' +
                '<div class="sales-rep-body">' +
                    '<div class="sales-rep-meta">' +
                        '<span class="sales-rep-name">' + contact.name + '</span>' +
                        (showRole ? '<span class="sales-rep-role">' + roleText + '</span>' : '') +
                    '</div>' +
                    '<a class="sales-rep-phone" href="' + telHref + '">' + displayPhone + '</a>' +
                    '<div class="sales-rep-actions">' +
                        '<a href="' + telHref + '" class="sales-rep-action sales-rep-action--call">' +
                            '<i data-lucide="phone" class="lucide-icon" aria-hidden="true"></i>' + callLabel +
                        '</a>' +
                        '<a href="' + waHref + '" class="sales-rep-action sales-rep-action--whatsapp" target="_blank" rel="noopener noreferrer">' +
                            '<i data-lucide="message-circle" class="lucide-icon" aria-hidden="true"></i>' + whatsappLabel +
                        '</a>' +
                    '</div>' +
                '</div>';
            listEl.appendChild(row);
        });
    });

    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

function updateIoTPage(iot) {
    if (!iot) return;

    // Document-level SEO (title + meta description swap per language)
    if (iot.meta) {
        if (iot.meta.title) document.title = iot.meta.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && iot.meta.description) metaDesc.setAttribute('content', iot.meta.description);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && iot.meta.title) ogTitle.setAttribute('content', iot.meta.title);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc && iot.meta.description) ogDesc.setAttribute('content', iot.meta.description);
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle && iot.meta.title) twTitle.setAttribute('content', iot.meta.title);
        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc && iot.meta.description) twDesc.setAttribute('content', iot.meta.description);
    }

    // Hero Section
    if (iot.hero) {
        const heroBadge = document.querySelector('.iot-floating-badge');
        const heroTitle = document.querySelector('.iot-hero-title span');
        const heroSubtitle = document.querySelector('.iot-hero-subtitle');
        
        if (heroBadge) heroBadge.textContent = iot.hero.badge;
        if (heroTitle) heroTitle.textContent = iot.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = iot.hero.subtitle;

        // Hero pillars (3 stacked service cards)
        if (Array.isArray(iot.hero.pillars)) {
            const pillarCards = document.querySelectorAll('.service-pillar-card');
            iot.hero.pillars.forEach((p, i) => {
                const card = pillarCards[i];
                if (!card) return;
                const t = card.querySelector('.service-pillar-title');
                const d = card.querySelector('.service-pillar-desc');
                if (t) t.textContent = p.title;
                if (d) d.textContent = p.description;
            });
        }

        // Hero stats removed from hero — updated in #raqeeb section via iot.raqeeb.stats

        // Hero buttons
        if (iot.hero.buttons) {
            const demoBtn = document.querySelector('.hero-cta-primary');
            const waBtn = document.querySelector('.btn-whatsapp');
            const featuresBtn = document.querySelector('.btn-iot-secondary');
            if (demoBtn) demoBtn.textContent = iot.hero.buttons.demo;
            if (waBtn && iot.hero.buttons.whatsapp) waBtn.textContent = iot.hero.buttons.whatsapp;
            if (featuresBtn) featuresBtn.textContent = iot.hero.buttons.features;
        }
    }

    // Trust strip (Elm partnership)
    if (iot.trustStrip) {
        const t1 = document.querySelector('.elm-trust-strip .elm-trust-line-1');
        const tl = document.querySelector('.elm-trust-strip .elm-trust-label');
        const t2 = document.querySelector('.elm-trust-strip .elm-trust-line-2');
        if (t1) t1.textContent = iot.trustStrip.line1;
        if (tl) tl.textContent = iot.trustStrip.elmLabel;
        if (t2) t2.textContent = iot.trustStrip.line2;
    }

    // Activation journey
    if (iot.activationJourney) {
        const sec = document.querySelector('.activation-journey');
        if (sec) {
            const tag = sec.querySelector('.activation-journey-tag');
            const title = sec.querySelector('.activation-journey-title');
            if (tag) tag.textContent = iot.activationJourney.tag;
            if (title) title.textContent = iot.activationJourney.title;
            const steps = sec.querySelectorAll('.activation-step');
            (iot.activationJourney.steps || []).forEach((s, i) => {
                const el = steps[i];
                if (!el) return;
                const st = el.querySelector('.activation-step-title');
                const sd = el.querySelector('.activation-step-desc');
                if (st) st.textContent = s.title;
                if (sd) sd.textContent = s.description;
            });
        }
    }

    // Client proof strip
    if (iot.clients) {
        const sec = document.querySelector('.iot-clients');
        if (sec) {
            const tag = sec.querySelector('.iot-clients-tag');
            const title = sec.querySelector('#iot-clients-heading');
            const desc = sec.querySelector('.iot-clients-desc');
            if (tag) tag.textContent = iot.clients.tag;
            if (title) title.textContent = iot.clients.title;
            if (desc) desc.textContent = iot.clients.description;
        }
    }

    // Elm Services Hub
    if (iot.elmHub) {
        const sec = document.querySelector('.elm-hub');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            const desc = sec.querySelector('.section-description');
            if (tag) tag.textContent = iot.elmHub.tag;
            if (title) title.textContent = iot.elmHub.title;
            if (desc) desc.textContent = iot.elmHub.description;

            const cards = sec.querySelectorAll('.elm-product-card');
            (iot.elmHub.cards || []).forEach((c, i) => {
                const card = cards[i];
                if (!card) return;
                const name = card.querySelector('.elm-product-name');
                const arabic = card.querySelector('.elm-product-arabic');
                const tagline = card.querySelector('.elm-product-tagline');
                const d = card.querySelector('.elm-product-desc');
                const cta = card.querySelector('.elm-product-cta');
                if (name) name.textContent = c.name;
                if (arabic) arabic.textContent = c.arabic;
                if (tagline) tagline.textContent = c.tagline;
                if (d) d.textContent = c.description;
                if (cta) cta.textContent = iot.elmHub.cardCta;
            });
        }
    }

    // Muqeem + pricing
    if (iot.muqeem) {
        updateServiceSection('.muqeem-section', iot.muqeem);
        const muqeemPricing = document.getElementById('muqeem-pricing');
        if (muqeemPricing && iot.muqeem.pricingTag) {
            const pTag = muqeemPricing.querySelector('.muqeem-pricing-tag');
            const pTitle = muqeemPricing.querySelector('.muqeem-pricing-title');
            const pNote = muqeemPricing.querySelector('.muqeem-pricing-note');
            const rTitle = muqeemPricing.querySelector('.muqeem-pricing-residents-title');
            const fTitle = muqeemPricing.querySelector('.muqeem-pricing-freeusers-title');
            const prTitle = muqeemPricing.querySelector('.muqeem-pricing-prices-title');
            if (pTag) pTag.textContent = iot.muqeem.pricingTag;
            if (pTitle) pTitle.textContent = iot.muqeem.pricingTitle;
            if (pNote) pNote.textContent = iot.muqeem.pricingNote;
            if (rTitle) rTitle.textContent = iot.muqeem.tableResidentsTitle;
            if (fTitle) fTitle.textContent = iot.muqeem.tableFreeUsersTitle;
            if (prTitle) prTitle.textContent = iot.muqeem.tablePricesTitle;

            muqeemPricing.querySelectorAll('[data-col="tier"]').forEach(el => { el.textContent = iot.muqeem.colTier; });
            muqeemPricing.querySelectorAll('[data-col="residents"]').forEach(el => { el.textContent = iot.muqeem.colResidents; });
            muqeemPricing.querySelectorAll('[data-col="basic"]').forEach(el => { el.textContent = iot.muqeem.packages[0].name; });
            muqeemPricing.querySelectorAll('[data-col="advanced"]').forEach(el => { el.textContent = iot.muqeem.packages[1].name; });
            muqeemPricing.querySelectorAll('[data-col="professional"]').forEach(el => { el.textContent = iot.muqeem.packages[2].name; });

            const chips = muqeemPricing.querySelector('.muqeem-pricing-tier-chips');
            if (chips && iot.muqeem.pricingTierAriaLabel) {
                chips.setAttribute('aria-label', iot.muqeem.pricingTierAriaLabel);
            }

            window.__muqeemPricingData = iot.muqeem;
            if (typeof window.renderMuqeemPricing === 'function') {
                window.renderMuqeemPricing();
            }
        }
    }

    // Tamm + pricing
    if (iot.tamm) {
        updateServiceSection('.tamm-section', iot.tamm);
        // Pricing table
        const pricing = document.querySelector('.tamm-pricing');
        if (pricing) {
            const pTag = pricing.querySelector('.section-tag');
            const pTitle = pricing.querySelector('.section-title');
            const pNote = pricing.querySelector('.tamm-pricing-note');
            if (pTag) pTag.textContent = iot.tamm.pricingTag;
            if (pTitle) pTitle.textContent = iot.tamm.pricingTitle;
            if (pNote) pNote.textContent = iot.tamm.pricingNote;
            // Table headers
            const colTier = pricing.querySelector('[data-col="tier"]');
            const colRange = pricing.querySelector('[data-col="range"]');
            const colPrice = pricing.querySelector('[data-col="price"]');
            if (colTier) colTier.textContent = iot.tamm.pricingTierLabel;
            if (colRange) colRange.textContent = iot.tamm.pricingRangeLabel;
            if (colPrice) colPrice.textContent = iot.tamm.pricingPriceLabel;
            // Notify the pricing slider JS to re-render rows in the current language
            window.__tammPricingData = iot.tamm;
            if (typeof window.renderTammPricing === 'function') {
                window.renderTammPricing();
            }
        }
    }
    
    // Rased Sub-Nav labels
    if (iot.rasedSubnav) {
        const subnavMap = [
            ['rased-platforms', iot.rasedSubnav.platforms],
            ['rased-features', iot.rasedSubnav.features],
            ['rased-packages', iot.rasedSubnav.packages],
            ['rased-outcomes', iot.rasedSubnav.outcomes]
        ];
        subnavMap.forEach(([target, label]) => {
            if (!label) return;
            const tab = document.querySelector('.rased-subnav-tab[data-target="' + target + '"]');
            if (!tab) return;
            const span = tab.querySelector('.rased-subnav-label');
            if (span) span.textContent = label;
        });
    }

    // Rased four-module row
    if (iot.rasedModules) {
        const block = document.getElementById('rased-modules');
        if (block) {
            const tag = block.querySelector('.rased-modules-tag');
            const title = block.querySelector('.rased-modules-title');
            const desc = block.querySelector('.rased-modules-desc');
            if (tag) tag.textContent = iot.rasedModules.tag;
            if (title) title.textContent = iot.rasedModules.title;
            if (desc) desc.textContent = iot.rasedModules.description;
            const cards = block.querySelectorAll('.rased-module-card');
            (iot.rasedModules.items || []).forEach((m, i) => {
                const card = cards[i];
                if (!card) return;
                const t = card.querySelector('.rased-module-title');
                const d = card.querySelector('.rased-module-desc');
                const l = card.querySelector('.rased-module-link');
                if (t) t.textContent = m.title;
                if (d) d.textContent = m.description;
                if (l) {
                    const icon = l.querySelector('i');
                    l.textContent = '';
                    l.appendChild(document.createTextNode(m.link + ' '));
                    if (icon) l.appendChild(icon);
                }
            });
        }
    }

    // Rased deep-dive (#rased only)
    if (iot.platformShowcase) {
        const showcaseSection = document.getElementById('rased');
        if (showcaseSection) {
            const header = showcaseSection.querySelector('.rased-master-header');
            if (header) {
                const tag = header.querySelector('.section-tag');
                const title = header.querySelector('.section-title');
                const desc = header.querySelector('.section-description');
                if (tag) tag.textContent = iot.platformShowcase.tag;
                if (title) title.textContent = iot.platformShowcase.title;
                if (desc) desc.textContent = iot.platformShowcase.description;
            }

            const platformCards = showcaseSection.querySelectorAll('#rased-platforms .platform-card');

            if (platformCards[0] && iot.platformShowcase.webDashboard) {
                const wd = iot.platformShowcase.webDashboard;
                const cardTitle = platformCards[0].querySelector('h3');
                const cardSubtitle = platformCards[0].querySelector('.platform-subtitle');
                const webImg = platformCards[0].querySelector('.elm-product-img');
                if (cardTitle) cardTitle.textContent = wd.title;
                if (cardSubtitle) cardSubtitle.textContent = wd.subtitle;
                if (webImg) webImg.setAttribute('alt', wd.title);

                const featureItems = platformCards[0].querySelectorAll('.platform-features li');
                (wd.features || []).forEach((feature, i) => {
                    if (featureItems[i]) {
                        const icon = featureItems[i].querySelector('i');
                        featureItems[i].textContent = '';
                        if (icon) featureItems[i].appendChild(icon);
                        featureItems[i].appendChild(document.createTextNode(' ' + feature));
                    }
                });

                const webCta = platformCards[0].querySelector('.platform-card-cta--web');
                if (webCta && wd.url) {
                    webCta.href = wd.url;
                    if (wd.ctaLabel) webCta.textContent = wd.ctaLabel;
                }
                const activateCta = platformCards[0].querySelector('.platform-card-cta--activate');
                if (activateCta && wd.activateLabel) activateCta.textContent = wd.activateLabel;
            }

            if (platformCards[1] && iot.platformShowcase.mobileApp) {
                const ma = iot.platformShowcase.mobileApp;
                const cardTitle = platformCards[1].querySelector('h3');
                const cardSubtitle = platformCards[1].querySelector('.platform-subtitle');
                const mobImg = platformCards[1].querySelector('.elm-product-img');
                if (cardTitle) cardTitle.textContent = ma.title;
                if (cardSubtitle) cardSubtitle.textContent = ma.subtitle;
                if (mobImg) mobImg.setAttribute('alt', ma.title);

                const featureItems = platformCards[1].querySelectorAll('.platform-features li');
                (ma.features || []).forEach((feature, i) => {
                    if (featureItems[i]) {
                        const icon = featureItems[i].querySelector('i');
                        featureItems[i].textContent = '';
                        if (icon) featureItems[i].appendChild(icon);
                        featureItems[i].appendChild(document.createTextNode(' ' + feature));
                    }
                });

                const activateCta = platformCards[1].querySelector('.platform-card-cta--activate');
                if (activateCta && ma.ctaLabel) activateCta.textContent = ma.ctaLabel;

                const storeBadges = platformCards[1].querySelector('.platform-store-badges');
                if (storeBadges) {
                    if (ma.storeBadgesAria) storeBadges.setAttribute('aria-label', ma.storeBadgesAria);
                    const iosBadge = storeBadges.querySelector('.platform-store-badge--ios');
                    const androidBadge = storeBadges.querySelector('.platform-store-badge--android');
                    if (iosBadge && ma.iosUrl) iosBadge.href = ma.iosUrl;
                    if (androidBadge && ma.androidUrl) androidBadge.href = ma.androidUrl;
                    const iosLabel = iosBadge && iosBadge.querySelector('.store-badge-label--ios');
                    const androidLabel = androidBadge && androidBadge.querySelector('.store-badge-label--android');
                    if (iosLabel && ma.iosBadgeLabel) iosLabel.textContent = ma.iosBadgeLabel;
                    if (androidLabel && ma.androidBadgeLabel) androidLabel.textContent = ma.androidBadgeLabel;
                }
            }
        }
    }

    // Raqeeb deep-dive (#raqeeb only)
    if (iot.raqeeb) {
        const raqeebSection = document.getElementById('raqeeb');
        if (raqeebSection) {
            const rq = iot.raqeeb;
            const tagEl = raqeebSection.querySelector('.raqeeb-master-tag');
            const titleEl = raqeebSection.querySelector('.raqeeb-master-title');
            const descEl = raqeebSection.querySelector('.raqeeb-master-desc');
            if (tagEl) tagEl.textContent = rq.tag;
            if (titleEl) titleEl.textContent = rq.title;
            if (descEl) descEl.textContent = rq.description;

            if (rq.subnav) {
                const subnavMap = [
                    ['raqeeb-platforms', rq.subnav.platforms],
                    ['raqeeb-capabilities', rq.subnav.capabilities],
                    ['raqeeb-outcomes', rq.subnav.outcomes],
                    ['raqeeb-preview', rq.subnav.preview]
                ];
                subnavMap.forEach(([target, label]) => {
                    if (!label) return;
                    const tab = raqeebSection.querySelector('.raqeeb-subnav-tab[data-target="' + target + '"]');
                    if (!tab) return;
                    const span = tab.querySelector('.raqeeb-subnav-label');
                    if (span) span.textContent = label;
                });
            }

            const ps = rq.platformShowcase;
            if (ps) {
                const platformCards = raqeebSection.querySelectorAll('#raqeeb-platforms .platform-card');
                if (platformCards[0] && ps.webDashboard) {
                    const wd = ps.webDashboard;
                    const cardTitle = platformCards[0].querySelector('h3');
                    const cardSubtitle = platformCards[0].querySelector('.platform-subtitle');
                    const webImg = platformCards[0].querySelector('.raqeeb-product-img');
                    if (cardTitle) cardTitle.textContent = wd.title;
                    if (cardSubtitle) cardSubtitle.textContent = wd.subtitle;
                    if (webImg) webImg.setAttribute('alt', wd.title);
                    const featureItems = platformCards[0].querySelectorAll('.platform-features li');
                    (wd.features || []).forEach((feature, i) => {
                        if (featureItems[i]) {
                            const icon = featureItems[i].querySelector('i');
                            featureItems[i].textContent = '';
                            if (icon) featureItems[i].appendChild(icon);
                            featureItems[i].appendChild(document.createTextNode(' ' + feature));
                        }
                    });
                    const webCta = platformCards[0].querySelector('.platform-card-cta--web');
                    if (webCta && wd.url) {
                        webCta.href = wd.url;
                        if (wd.ctaLabel) webCta.textContent = wd.ctaLabel;
                    }
                }
                if (platformCards[1] && ps.mobileApp) {
                    const ma = ps.mobileApp;
                    const cardTitle = platformCards[1].querySelector('h3');
                    const cardSubtitle = platformCards[1].querySelector('.platform-subtitle');
                    const mobImg = platformCards[1].querySelector('.raqeeb-product-img');
                    if (cardTitle) cardTitle.textContent = ma.title;
                    if (cardSubtitle) cardSubtitle.textContent = ma.subtitle;
                    if (mobImg) mobImg.setAttribute('alt', ma.title);
                    const featureItems = platformCards[1].querySelectorAll('.platform-features li');
                    (ma.features || []).forEach((feature, i) => {
                        if (featureItems[i]) {
                            const icon = featureItems[i].querySelector('i');
                            featureItems[i].textContent = '';
                            if (icon) featureItems[i].appendChild(icon);
                            featureItems[i].appendChild(document.createTextNode(' ' + feature));
                        }
                    });
                    const iosCta = platformCards[1].querySelector('.platform-card-cta--ios');
                    const androidCta = platformCards[1].querySelector('.platform-card-cta--android');
                    if (iosCta && ma.iosUrl) {
                        iosCta.href = ma.iosUrl;
                        if (ma.iosLabel) iosCta.textContent = ma.iosLabel;
                    }
                    if (androidCta && ma.androidUrl) {
                        androidCta.href = ma.androidUrl;
                        if (ma.androidLabel) androidCta.textContent = ma.androidLabel;
                    }
                }
            }

            if (rq.features) {
                const featuresSection = raqeebSection.querySelector('#raqeeb-capabilities');
                if (featuresSection) {
                    const fTag = featuresSection.querySelector('.section-tag');
                    const fTitle = featuresSection.querySelector('.section-title');
                    if (fTag) fTag.textContent = rq.features.tag;
                    if (fTitle) fTitle.textContent = rq.features.title;
                    const featureCards = featuresSection.querySelectorAll('.feature-card-iot');
                    (rq.features.items || []).forEach((item, index) => {
                        if (!featureCards[index]) return;
                        const cardTitle = featureCards[index].querySelector('h3');
                        if (cardTitle) cardTitle.textContent = item.title;
                        const listItems = featureCards[index].querySelectorAll('.feature-list-iot li');
                        (item.features || []).forEach((feature, i) => {
                            if (listItems[i]) {
                                const icon = listItems[i].querySelector('i');
                                listItems[i].textContent = '';
                                if (icon) listItems[i].appendChild(icon);
                                listItems[i].appendChild(document.createTextNode(' ' + feature));
                            }
                        });
                    });
                }
            }

            if (rq.value) {
                const valueSection = raqeebSection.querySelector('#raqeeb-outcomes');
                if (valueSection) {
                    const vTag = valueSection.querySelector('.section-tag');
                    const vTitle = valueSection.querySelector('.section-title');
                    const vDesc = valueSection.querySelector('.section-description');
                    if (vTag) vTag.textContent = rq.value.tag;
                    if (vTitle) vTitle.textContent = rq.value.title;
                    if (vDesc) vDesc.textContent = rq.value.description;
                    const valueCards = valueSection.querySelectorAll('.value-card-iot');
                    (rq.value.items || []).forEach((item, index) => {
                        if (!valueCards[index]) return;
                        const cardTitle = valueCards[index].querySelector('h3');
                        const cardDesc = valueCards[index].querySelector('p');
                        if (cardTitle) cardTitle.textContent = item.title;
                        if (cardDesc) cardDesc.textContent = item.description;
                    });
                }
            }

            if (rq.gallery) {
                const gallerySection = raqeebSection.querySelector('#raqeeb-preview');
                if (gallerySection) {
                    const gTag = gallerySection.querySelector('.section-tag');
                    const gTitle = gallerySection.querySelector('.section-title');
                    if (gTag) gTag.textContent = rq.gallery.tag;
                    if (gTitle) gTitle.textContent = rq.gallery.title;
                    const galleryImgs = gallerySection.querySelectorAll('.gallery-img');
                    (rq.gallery.items || []).forEach((item, index) => {
                        const img = galleryImgs[index];
                        if (!img) return;
                        const alt = typeof item === 'string' ? item : item.alt;
                        const src = typeof item === 'object' && item.src ? item.src : null;
                        if (alt) img.setAttribute('alt', alt);
                        if (src) img.src = src;
                    });
                }
            }
        }
    }
    
    // Rased official highlights (المميزات)
    if (iot.rasedHighlights) {
        const sec = document.getElementById('rased-features');
        if (sec) {
            const tag = sec.querySelector('.rased-highlights-tag');
            const title = sec.querySelector('.rased-highlights-title');
            if (tag) tag.textContent = iot.rasedHighlights.tag;
            if (title) title.textContent = iot.rasedHighlights.title;

            const cards = sec.querySelectorAll('.rased-highlight-card');
            (iot.rasedHighlights.items || []).forEach((item, i) => {
                const card = cards[i];
                if (!card) return;
                const num = card.querySelector('.rased-highlight-num');
                const cardTitle = card.querySelector('.rased-highlight-title');
                const desc = card.querySelector('.rased-highlight-desc');
                if (num) num.textContent = item.id || String(i + 1).padStart(2, '0');
                if (cardTitle) cardTitle.textContent = item.title;
                if (desc) desc.textContent = item.description || '';
            });
        }
    }

    // Rased packages & subscriptions (الباقات والاشتراكات)
    if (iot.rasedPricing) {
        const sec = document.getElementById('rased-packages');
        if (sec) {
            const tag = sec.querySelector('.rased-packages-tag');
            const title = sec.querySelector('.rased-packages-title');
            const desc = sec.querySelector('.rased-packages-desc');
            const notePrice = sec.querySelector('.rased-packages-note-price');
            const noteSub = sec.querySelector('.rased-packages-note-sub');
            const cta = sec.querySelector('.rased-packages-cta');
            if (tag) tag.textContent = iot.rasedPricing.tag;
            if (title) title.textContent = iot.rasedPricing.title;
            if (desc) desc.textContent = iot.rasedPricing.description;
            if (notePrice) notePrice.textContent = iot.rasedPricing.notePrice;
            if (noteSub) noteSub.textContent = iot.rasedPricing.noteSubscription;
            if (cta) cta.textContent = iot.rasedPricing.ctaLabel;

            const chips = sec.querySelector('.rased-packages-fleet-chips');
            if (chips && iot.rasedPricing.fleetAriaLabel) {
                chips.setAttribute('aria-label', iot.rasedPricing.fleetAriaLabel);
            }

            window.__rasedPricingData = iot.rasedPricing;
            if (typeof window.renderRasedPricing === 'function') {
                window.renderRasedPricing();
            }
        }
    }
    
    // Rased outcomes
    if (iot.value) {
        const valueSection = document.querySelector('#rased-outcomes');
        if (valueSection) {
            const tag = valueSection.querySelector('.section-tag');
            const title = valueSection.querySelector('.section-title');
            const desc = valueSection.querySelector('.section-description');
            
            if (tag) tag.textContent = iot.value.tag;
            if (title) title.textContent = iot.value.title;
            if (desc) desc.textContent = iot.value.description;
            
            // Value cards
            const valueCards = valueSection.querySelectorAll('.value-card-iot');
            iot.value.items.forEach((item, index) => {
                if (valueCards[index]) {
                    const cardTitle = valueCards[index].querySelector('h3');
                    const cardDesc = valueCards[index].querySelector('p');
                    if (cardTitle) cardTitle.textContent = item.title;
                    if (cardDesc) cardDesc.textContent = item.description;
                }
            });
        }
    }
    
    // Smart Gate
    if (iot.smartGate) {
        const sec = document.querySelector('.smart-gate-section');
        if (sec) {
            const tag = sec.querySelector('.section-header .section-tag');
            const title = sec.querySelector('.section-header .section-title');
            const desc = sec.querySelector('.smart-gate-desc');
            const para = sec.querySelector('.smart-gate-paragraph');
            if (tag) tag.textContent = iot.smartGate.tag;
            if (title) title.textContent = iot.smartGate.title;
            if (desc) desc.textContent = iot.smartGate.description;
            if (para) para.textContent = iot.smartGate.paragraph;

            if (iot.smartGate.highlights) {
                const hl = iot.smartGate.highlights;
                const hlSec = sec.querySelector('#smart-gate-features');
                if (hlSec) {
                    const hlTag = hlSec.querySelector('.smart-gate-highlights-tag');
                    const hlTitle = hlSec.querySelector('.smart-gate-highlights-title');
                    if (hlTag) hlTag.textContent = hl.tag;
                    if (hlTitle) hlTitle.textContent = hl.title;
                    const cards = hlSec.querySelectorAll('.smart-gate-highlight-card');
                    (hl.items || []).forEach((item, i) => {
                        const card = cards[i];
                        if (!card) return;
                        const num = card.querySelector('.smart-gate-highlight-num');
                        const ct = card.querySelector('.smart-gate-highlight-title');
                        const cd = card.querySelector('.smart-gate-highlight-desc');
                        if (num) num.textContent = item.id || String(i + 1).padStart(2, '0');
                        if (ct) ct.textContent = item.title;
                        if (cd) cd.textContent = item.description || '';
                    });
                }
            }

            if (iot.smartGate.services) {
                const sv = iot.smartGate.services;
                const svSec = sec.querySelector('#smart-gate-services');
                if (svSec) {
                    const svTag = svSec.querySelector('.smart-gate-services-tag');
                    const svTitle = svSec.querySelector('.smart-gate-services-title');
                    const svDesc = svSec.querySelector('.smart-gate-services-desc');
                    if (svTag) svTag.textContent = sv.tag;
                    if (svTitle) svTitle.textContent = sv.title;
                    if (svDesc) svDesc.textContent = sv.description;

                    const serviceCards = svSec.querySelectorAll('.smart-gate-service-card');
                    (sv.items || []).forEach((item, i) => {
                        const card = serviceCards[i];
                        if (!card) return;
                        const name = card.querySelector('.smart-gate-service-name');
                        if (name) name.textContent = item.name;
                        const listItems = card.querySelectorAll('.smart-gate-service-item span');
                        (item.features || []).forEach((f, fi) => {
                            if (listItems[fi]) listItems[fi].textContent = f;
                        });
                    });
                }
            }

            const cta = sec.querySelector('.smart-gate-cta');
            if (cta) cta.textContent = iot.smartGate.ctaLabel;
        }
    }

    // Official portal links
    if (iot.officialLinks) {
        const sec = document.querySelector('.official-links-section');
        if (sec) {
            const tag = sec.querySelector('.official-links-tag');
            const title = sec.querySelector('#official-links-heading');
            const desc = sec.querySelector('.official-links-desc');
            if (tag) tag.textContent = iot.officialLinks.tag;
            if (title) title.textContent = iot.officialLinks.title;
            if (desc) desc.textContent = iot.officialLinks.description;
            const links = sec.querySelectorAll('.official-link-card');
            (iot.officialLinks.portals || []).forEach((p, i) => {
                const link = links[i];
                if (!link) return;
                link.href = p.url;
                const name = link.querySelector('.official-link-name');
                if (name) name.textContent = p.name;
            });
        }
    }

    // ISO
    if (iot.iso) {
        const sec = document.querySelector('.iso-section');
        if (sec) {
            const tag = sec.querySelector('.iso-intro .section-tag');
            const title = sec.querySelector('.iso-intro .section-title');
            const desc = sec.querySelector('.iso-intro .section-description');
            if (tag) tag.textContent = iot.iso.tag;
            if (title) title.textContent = iot.iso.title;
            if (desc) desc.textContent = iot.iso.description;

            // Paragraphs (3)
            const paragraphs = sec.querySelectorAll('.iso-paragraph');
            (iot.iso.paragraphs || []).forEach((p, i) => {
                if (paragraphs[i]) paragraphs[i].textContent = p;
            });

            // Regional & sector schemes (HACCP, SASO, HALAL, BRC)
            const schemesBlock = sec.querySelector('#iso-schemes');
            if (schemesBlock) {
                const schTag = schemesBlock.querySelector('.iso-schemes-tag');
                const schTitle = schemesBlock.querySelector('.iso-schemes-title');
                const schDesc = schemesBlock.querySelector('.iso-schemes-desc');
                if (schTag && iot.iso.schemesTag) schTag.textContent = iot.iso.schemesTag;
                if (schTitle && iot.iso.schemesTitle) schTitle.textContent = iot.iso.schemesTitle;
                if (schDesc && iot.iso.schemesDescription) schDesc.textContent = iot.iso.schemesDescription;

                const schemeCards = schemesBlock.querySelectorAll('.iso-scheme-card');
                (iot.iso.schemes || []).forEach((s, i) => {
                    const card = schemeCards[i];
                    if (!card) return;
                    const code = card.querySelector('.iso-scheme-code');
                    const name = card.querySelector('.iso-scheme-name');
                    const desc = card.querySelector('.iso-scheme-desc');
                    const img = card.querySelector('.iso-scheme-logo img');
                    if (code) code.textContent = s.code;
                    if (name) name.textContent = s.name;
                    if (desc) desc.textContent = s.description;
                    if (img) {
                        if (s.image) img.src = s.image;
                        img.setAttribute('alt', s.code || s.name || '');
                    }
                });
            }

            // Standards header
            const stdTag = sec.querySelector('.iso-standards-tag') || sec.querySelector('.iso-standards .section-tag');
            const stdTitle = sec.querySelector('.iso-standards-title') || sec.querySelector('.iso-standards .section-title');
            const stdDesc = sec.querySelector('.iso-standards-desc') || sec.querySelector('.iso-standards .section-description');
            if (stdTag) stdTag.textContent = iot.iso.standardsTag;
            if (stdTitle) stdTitle.textContent = iot.iso.standardsTitle;
            if (stdDesc) stdDesc.textContent = iot.iso.standardsDescription;

            // Standards cards (label + description only — keep codes language-neutral)
            const cards = sec.querySelectorAll('.iso-standard-card');
            (iot.iso.standards || []).forEach((s, i) => {
                const card = cards[i];
                if (!card) return;
                const code = card.querySelector('.iso-standard-code');
                const name = card.querySelector('.iso-standard-name');
                const desc = card.querySelector('.iso-standard-desc');
                if (code) code.textContent = s.code;
                if (name) name.textContent = s.name;
                if (desc) desc.textContent = s.description;
            });

            // Category filter chips
            if (iot.isoCategories) {
                const chips = sec.querySelectorAll('.iso-filter-chip');
                chips.forEach(chip => {
                    const key = chip.getAttribute('data-category');
                    if (key && iot.isoCategories[key]) {
                        chip.textContent = iot.isoCategories[key];
                    }
                });
            }

            const isoCta = sec.querySelector('.iso-cta');
            if (isoCta) isoCta.textContent = iot.iso.ctaLabel;
        }
    }

    // Support CTA
    if (iot.support) {
        const sec = document.querySelector('.support-cta');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            const desc = sec.querySelector('.section-description');
            if (tag) tag.textContent = iot.support.tag;
            if (title) title.textContent = iot.support.title;
            if (desc) desc.textContent = iot.support.description;

            // Channels
            const chanKeys = ['phone', 'whatsapp', 'email', 'location'];
            chanKeys.forEach(key => {
                const ch = iot.support.channels && iot.support.channels[key];
                if (!ch) return;
                const channel = sec.querySelector(`.support-channel[data-channel="${key}"]`);
                if (!channel) return;
                const label = channel.querySelector('.support-channel-label');
                const value = channel.querySelector('.support-channel-value');
                if (label) label.textContent = ch.label;
                if (value) value.textContent = ch.value;
            });

            // Form labels + options + submit + note
            if (iot.support.form) {
                const f = iot.support.form;
                const formTitle = sec.querySelector('.support-form-title');
                if (formTitle) formTitle.textContent = f.title;
                const setLabel = (sel, txt) => { const el = sec.querySelector(sel); if (el) el.textContent = txt; };
                setLabel('label[for="support-name"]', f.name);
                setLabel('label[for="support-company"]', f.company);
                setLabel('label[for="support-phone"]', f.phone);
                setLabel('label[for="support-service"]', f.service);
                setLabel('label[for="support-message"]', f.message);
                const submit = sec.querySelector('.support-form-submit');
                if (submit) submit.textContent = f.submit;
                const note = sec.querySelector('.support-form-note');
                if (note) note.textContent = f.note;
                // Service options
                const select = sec.querySelector('#support-service');
                if (select && Array.isArray(f.serviceOptions)) {
                    const placeholder = select.querySelector('option[value=""]');
                    select.innerHTML = '';
                    if (placeholder) select.appendChild(placeholder);
                    f.serviceOptions.forEach(opt => {
                        const o = document.createElement('option');
                        o.value = opt;
                        o.textContent = opt;
                        select.appendChild(o);
                    });
                }
            }

            if (iot.support.salesTeams) {
                renderSalesTeams(sec, iot.support.salesTeams);
            }
        }
    }

    // FAQ
    if (iot.faq) {
        const sec = document.querySelector('.faq-section');
        if (sec) {
            const tag = sec.querySelector('.section-tag');
            const title = sec.querySelector('.section-title');
            if (tag) tag.textContent = iot.faq.tag;
            if (title) title.textContent = iot.faq.title;

            if (iot.faq.categories) {
                sec.querySelectorAll('.faq-filter-chip').forEach(chip => {
                    const key = chip.getAttribute('data-category');
                    if (key && iot.faq.categories[key]) chip.textContent = iot.faq.categories[key];
                });
            }

            const items = sec.querySelectorAll('.faq-item');
            (iot.faq.items || []).forEach((qa, i) => {
                const item = items[i];
                if (!item) return;
                if (qa.category) item.setAttribute('data-faq-category', qa.category);
                const q = item.querySelector('.faq-question-text');
                const a = item.querySelector('.faq-answer');
                if (q) q.textContent = qa.q;
                if (a) a.textContent = qa.a;
            });
        }
    }

    // Mobile sticky contact bar
    if (iot.mobileContact) {
        const callLabel = document.querySelector('.mobile-contact-call-label');
        const waLabel = document.querySelector('.mobile-contact-whatsapp-label');
        if (callLabel) callLabel.textContent = iot.mobileContact.call;
        if (waLabel) waLabel.textContent = iot.mobileContact.whatsapp;
    }

    // Refresh WhatsApp deep links for current language
    if (typeof window.getShabakahWhatsAppUrl === 'function') {
        const waUrl = window.getShabakahWhatsAppUrl();
        document.querySelectorAll('[data-whatsapp], .js-whatsapp-link').forEach(el => {
            el.setAttribute('href', waUrl);
            el.setAttribute('target', '_blank');
            el.setAttribute('rel', 'noopener noreferrer');
        });
    }

    // Update IOT Page Footer (different structure than modern footer)
    updateIoTFooter();
}

// Small helper for service sections that share the same shape: tag, title, description, features list with featuresLabel, callout, ctaLabel
function updateServiceSection(rootSelector, data) {
    const sec = document.querySelector(rootSelector);
    if (!sec) return;
    const tag = sec.querySelector('.section-tag');
    const title = sec.querySelector('.section-title');
    const desc = sec.querySelector('.service-desc');
    if (tag) tag.textContent = data.tag;
    if (title) title.textContent = data.title;
    if (desc) desc.textContent = data.description;

    const featLabel = sec.querySelector('.service-features-label');
    if (featLabel && data.featuresLabel) featLabel.textContent = data.featuresLabel;

    const items = sec.querySelectorAll('.service-feature-item .service-feature-text');
    (data.features || []).forEach((f, i) => {
        if (items[i]) items[i].textContent = f;
    });

    const callout = sec.querySelector('.service-callout');
    if (callout && data.callout) callout.textContent = data.callout;

    const cta = sec.querySelector('.service-cta');
    if (cta && data.ctaLabel) cta.textContent = data.ctaLabel;
}

// Update IOT Page Footer
function updateIoTFooter() {
    const lang = localStorage.getItem('language') || 'en';
    const t = translations[lang];
    
    // Footer tagline
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = t.footer.tagline;
    
    // Footer section titles
    const footerTitles = document.querySelectorAll('.footer-col .footer-title');
    if (footerTitles.length > 0) {
        if (footerTitles[0]) footerTitles[0].textContent = t.footer.sections.services;
        if (footerTitles[1]) footerTitles[1].textContent = t.footer.sections.company;
        if (footerTitles[2]) footerTitles[2].textContent = t.footer.sections.connect || 'Connect';
    }
    
    // Services links (order matches home services + footer HTML)
    const servicesLinks = document.querySelectorAll('.footer-col:nth-child(2) .footer-links a');
    if (servicesLinks.length > 0 && t.footer.links) {
        const serviceKeys = [
            'physicalSecurity',
            'infrastructure',
            'datacenter',
            'communications',
            'enduser',
            'cybersecurity',
            'licensing'
        ];
        servicesLinks.forEach((link, index) => {
            const key = serviceKeys[index];
            if (key && t.footer.links[key]) {
                link.textContent = t.footer.links[key];
            }
        });
    }
    
    // Company links
    const companyLinks = document.querySelectorAll('.footer-col:nth-child(3) .footer-links a');
    if (companyLinks.length > 0 && t.footer.links) {
        const companyKeys = ['about', 'solutions', 'partners', 'iotTracking', 'contact'];
        const companyTexts = [t.footer.links.about, 'Solutions', t.footer.links.partners, 'IOT Tracking', t.footer.links.contact];
        
        // Get the proper texts for Arabic
        if (lang === 'ar') {
            companyTexts[0] = 'من نحن';
            companyTexts[1] = 'الحلول';
            companyTexts[2] = 'الشركاء';
            companyTexts[3] = 'تتبع إنترنت الأشياء';
            companyTexts[4] = 'تواصل معنا';
        }
        
        companyLinks.forEach((link, index) => {
            if (companyTexts[index]) link.textContent = companyTexts[index];
        });
    }
    
    // Connect section - location text
    const connectSection = document.querySelector('.footer-col:nth-child(4)');
    if (connectSection) {
        const locationSpan = connectSection.querySelector('.footer-contact li:first-child span');
        if (locationSpan) {
            locationSpan.textContent = lang === 'ar' ? 'الأندلس مول، الرياض' : 'Andalus Mall, Riyadh';
        }
    }
    
    // Copyright
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.textContent = t.footer.copyright;
    
    // Certifications
    const certifications = document.querySelector('.certifications');
    if (certifications) certifications.textContent = t.footer.certified;
}

// Update Footer
function updateFooter(footer) {
    const footerTagline = document.querySelector('.footer-tagline');
    if (footerTagline) footerTagline.textContent = footer.tagline;
    
    const newsletterTitle = document.querySelector('.footer-newsletter h4');
    const newsletterDesc = document.querySelector('.footer-newsletter p');
    const newsletterInput = document.querySelector('.newsletter-input');
    const newsletterBtn = document.querySelector('.newsletter-form .btn');
    
    if (newsletterTitle) newsletterTitle.textContent = footer.newsletter.title;
    if (newsletterDesc) newsletterDesc.textContent = footer.newsletter.description;
    if (newsletterInput) newsletterInput.placeholder = footer.newsletter.placeholder;
    if (newsletterBtn) newsletterBtn.textContent = footer.newsletter.button;
    
    const copyright = document.querySelector('.copyright');
    if (copyright) copyright.textContent = footer.copyright;
    
    const certifications = document.querySelector('.certifications');
    if (certifications) certifications.textContent = footer.certified;
    
    // Footer section headings
    const footerHeadings = document.querySelectorAll('.footer-section h4');
    if (footerHeadings[1]) footerHeadings[1].textContent = footer.sections.services;
    if (footerHeadings[2]) footerHeadings[2].textContent = footer.sections.company;
    if (footerHeadings[3]) footerHeadings[3].textContent = footer.sections.resources;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initLanguageSystem);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        toggleLanguage,
        getCurrentLanguage: () => currentLanguage,
        translations
    };
}
