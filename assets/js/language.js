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
            megaMenu: {
                infrastructure: {
                    title: 'IT Infrastructure',
                    description: 'Enterprise-grade infrastructure solutions',
                    link: 'Learn More →'
                },
                datacenter: {
                    title: 'Data Center Solutions',
                    description: 'Private cloud and certified data center build-out',
                    link: 'Learn More →'
                },
                physicalSecurity: {
                    title: 'Physical Security Systems',
                    description: 'CCTV, access control, and perimeter protection',
                    link: 'Learn More →'
                },
                communications: {
                    title: 'Unified Communications & Collaboration',
                    description: 'Voice, video, messaging, and meeting platforms',
                    link: 'Learn More →'
                },
                licensing: {
                    title: 'Software Licensing',
                    description: 'Cloud and enterprise licensing solutions',
                    link: 'Learn More →'
                },
                enduser: {
                    title: 'End-User Devices',
                    description: 'Device supply and unified endpoint management',
                    link: 'Learn More →'
                },
                cybersecurity: {
                    title: 'Integrated Security & Business Continuity',
                    description: 'NGFW, EDR, IAM/PAM, and backup resilience',
                    link: 'Learn More →'
                },
                managed: {
                    title: 'Managed Services',
                    description: '24/7 operations, monitoring, and technical support',
                    link: 'Learn More →'
                },
                isp: {
                    title: 'ISP Services',
                    description: 'DIA, hosting, and mission-critical connectivity',
                    link: 'Learn More →'
                }
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
            serviceCards: [
                {
                    title: 'IT Infrastructure',
                    bullets: [
                        'Copper & fiber cabling infrastructure',
                        'Network active solutions (LAN/WLAN)',
                        'SD-WAN for branch connectivity and performance optimization',
                        'Network monitoring & management systems'
                    ],
                    goal: 'Deliver next-generation IT network infrastructure with secure, high-speed performance across your business.',
                    link: 'Learn More'
                },
                {
                    title: 'Data Center Solutions',
                    bullets: [
                        'Building data centers to certified standards',
                        'Server, storage & backup design and implementation',
                        'Deploying virtualization solutions'
                    ],
                    goal: 'Provide a fully integrated, optimized environment to run business systems.',
                    link: 'Learn More'
                },
                {
                    title: 'Physical Security Systems',
                    bullets: [
                        'CCTV surveillance systems',
                        'Access control systems',
                        'Barrier gates for people and vehicle access control'
                    ],
                    goal: 'Ensure full control and monitoring for your business environment.',
                    link: 'Learn More'
                },
                {
                    title: 'Unified Communications & Collaboration',
                    bullets: [
                        'Advanced IP telephony with centralized call management',
                        'Centralized secure cloud VoIP for branches',
                        'Fully integrated solutions for voice, video, messaging, and meetings'
                    ],
                    goal: 'Enable efficient communication across teams and branches at minimal cost while improving productivity.',
                    link: 'Learn More'
                },
                {
                    title: 'Software Licensing',
                    bullets: [
                        'Supply & install original licenses: Microsoft, Adobe, and others',
                        'Supply & activate cloud licenses: Microsoft 365, Azure, and others'
                    ],
                    goal: 'Deliver genuine licenses with a fast, reliable activation process.',
                    link: 'Learn More'
                },
                {
                    title: 'End-User Devices',
                    bullets: [
                        'Supply & install devices from Dell, HP, Lenovo with vendor warranty & support',
                        'Centralized endpoint management with Intune, VMware Workspace ONE, ManageEngine, and modern tools'
                    ],
                    goal: 'Provide end-user devices tailored to your business with unified management.',
                    link: 'Learn More'
                },
                {
                    title: 'Integrated Security & Business Continuity',
                    bullets: [
                        'Next-generation firewalls & IDS/IPS',
                        'Endpoint protection & EDR',
                        'Identity & access management (IAM / PAM)',
                        'Backup and recovery systems'
                    ],
                    goal: 'Protect core systems and data by securing your IT environment and ensuring business continuity.',
                    link: 'Learn More'
                },
                {
                    title: 'Managed Services',
                    bullets: [
                        'Remote and on-site operation & support with rapid response',
                        'Flexible engagement models (part-time, full-time, seasonal)',
                        'Skilled staff: network engineers, IT support, cybersecurity specialists',
                        'Preventive and corrective maintenance for infrastructure and systems',
                        'Reporting to measure service levels and SLA compliance'
                    ],
                    goal: 'Reduce workload and operating costs while maintaining the highest technical efficiency.',
                    link: 'Learn More'
                },
                {
                    title: 'ISP Services',
                    bullets: [
                        'Dedicated Internet Access (DIA), enterprise connectivity, hosting, and 24/7 technical support for mission-critical operations'
                    ],
                    goal: 'Deliver reliable, high-performance connectivity and hosting that supports continuity and digital growth.',
                    link: 'Learn More'
                }
            ],
            stats: {
                title: 'Delivering Excellence at Scale',
                projects: 'Projects Delivered',
                clients: 'Trusted Clients',
                years: 'Years of Excellence',
                support: '24/7 Operations Support'
            },
            testimonials: {
                title: 'Shabakah Certifications'
            },
            cta: {
                title: 'Ready to Transform Your Technology Infrastructure?',
                description: "Let's discuss how SHABAKAH can empower your organization with enterprise-grade ICT & ISP solutions",
                btn1: 'Start a Conversation',
                btn2: 'View All Services'
            }
        },

        // ============ ABOUT PAGE ============
        about: {
            hero: {
                breadcrumb: 'About Us',
                title: 'About SHABAKAH',
                subtitle: '28 Years of ICT & ISP Excellence, Innovation, and Trust'
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
                        description: 'Attained ISO 27001 (Information Security) and ISO 22301 (Business Continuity) certifications, reinforcing our commitment to excellence. ISO certificates: ISO 27001 / ISO 20000 / ISO 9001.'
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
            philosophy: {
                tag: 'How We Work',
                title: 'Engineering Philosophy',
                description: 'Guiding principles that define every solution we deliver',
                cards: {
                    security: {
                        title: 'Security-by-Design',
                        description: 'Security is not an afterthought—it\'s embedded in every layer of our solutions. From initial architecture to ongoing operations, we implement defense-in-depth strategies that protect your most critical assets.',
                        items: [
                            'Zero-trust architecture principles',
                            'Multi-layered defense mechanisms',
                            'Continuous security monitoring',
                            'Compliance-first approach'
                        ]
                    },
                    availability: {
                        title: 'High Availability',
                        description: 'Mission-critical systems demand exceptional reliability. We engineer solutions with redundancy, failover, and disaster recovery capabilities to ensure your operations never stop.',
                        items: [
                            '99.99% uptime SLA commitments',
                            'Redundant infrastructure design',
                            'Automated failover systems',
                            '24/7/365 monitoring & support'
                        ]
                    },
                    compliance: {
                        title: 'Compliance Excellence',
                        description: 'Navigating regulatory requirements is complex. We ensure your infrastructure meets all relevant standards, from NCA requirements to international frameworks.',
                        items: [
                            'NCA compliance expertise',
                            'ISO 27001 & 22301 certified processes',
                            'Data sovereignty adherence',
                            'Audit-ready documentation'
                        ]
                    },
                    separation: {
                        title: 'Operational Separation',
                        description: 'Clear boundaries between development, testing, and production environments ensure stability, security, and controlled change management across your entire infrastructure.',
                        items: [
                            'Segregated environments',
                            'Role-based access controls',
                            'Change management protocols',
                            'Comprehensive testing procedures'
                        ]
                    }
                }
            },
            values: {
                tag: 'Our Values',
                title: 'What Drives Us',
                excellence: {
                    title: 'Excellence',
                    description: 'Unwavering commitment to the highest standards in every solution we deliver'
                },
                security: {
                    title: 'Security',
                    description: 'Security-first approach embedded in every aspect of our operations'
                },
                innovation: {
                    title: 'Innovation',
                    description: 'Continuous adoption of emerging technologies to stay ahead'
                },
                integrity: {
                    title: 'Integrity',
                    description: 'Transparent, ethical business practices that build lasting trust'
                }
            }
        },

        // ============ SERVICES PAGE ============
        services: {
            hero: {
                breadcrumb: 'Services',
                title: 'Provide ICT & ISP Solutions',
                subtitle: 'Enterprise-Grade Technology Services Designed for Mission-Critical Operations'
            },
            infrastructure: {
                tag: 'IT Infrastructure',
                title: 'Enterprise IT Infrastructure Solutions',
                description: 'Build resilient, scalable, and high-performance infrastructure that powers your digital transformation. Our comprehensive IT infrastructure services ensure your technology foundation is robust, secure, and future-ready.',
                features: {
                    network: {
                        title: 'Network Infrastructure Design & Implementation',
                        description: 'Enterprise-grade networking solutions with redundancy and high availability'
                    },
                    datacenter: {
                        title: 'Data Center Architecture',
                        description: 'Tier III compliant data center design, build, and management'
                    },
                    compute: {
                        title: 'Compute & Storage Solutions',
                        description: 'Scalable server and storage infrastructure for mission-critical workloads'
                    },
                    virtualization: {
                        title: 'Virtualization & Hyperconverged Infrastructure',
                        description: 'Efficient resource utilization with enterprise virtualization platforms'
                    }
                }
            },
            cybersecurity: {
                tag: 'Cybersecurity',
                title: 'Advanced Cybersecurity & Business Continuity',
                description: 'Protect your organization from evolving cyber threats with comprehensive security solutions designed for the modern threat landscape.',
                features: {
                    soc: {
                        title: '24/7 Security Operations Center (SOC)',
                        description: 'Continuous monitoring and threat detection'
                    },
                    endpoint: {
                        title: 'Endpoint Protection',
                        description: 'Advanced threat prevention for all devices'
                    },
                    compliance: {
                        title: 'Compliance & Governance',
                        description: 'NCA, ISO 27001, and industry compliance'
                    },
                    dr: {
                        title: 'Disaster Recovery & Business Continuity',
                        description: 'Resilient backup and recovery solutions'
                    }
                }
            },
            cloud: {
                tag: 'Data Center & Cloud',
                title: 'Private Cloud & Data Center Services',
                description: 'Enterprise-grade data center infrastructure and private cloud solutions with guaranteed uptime and performance SLAs.'
            },
            communications: {
                tag: 'Unified Communications',
                title: 'Integrated Communication Platforms',
                description: 'Modern communication and collaboration tools that enhance productivity and streamline operations.'
            },
            enduser: {
                tag: 'End-User Computing',
                title: 'Desktop & Device Management',
                description: 'Comprehensive endpoint management and user experience optimization.'
            },
            licensing: {
                tag: 'Software Licensing',
                title: 'Cloud & Enterprise Licensing Solutions',
                description: 'Cost-effective software asset management and licensing optimization.'
            }
        },

        // ============ SOLUTIONS PAGE ============
        solutions: {
            hero: {
                breadcrumb: 'Solutions',
                title: 'Industry-Specific Solutions',
                subtitle: 'Tailored ICT & ISP Solutions for Your Sector'
            },
            government: {
                title: 'Government Solutions',
                description: 'Digital transformation solutions aligned with Vision 2030 objectives'
            },
            enterprise: {
                title: 'Enterprise Solutions',
                description: 'Scalable technology infrastructure for large organizations'
            },
            healthcare: {
                title: 'Healthcare Solutions',
                description: 'HIPAA-compliant IT systems for healthcare providers'
            },
            education: {
                title: 'Education Solutions',
                description: 'Digital learning platforms and campus connectivity'
            }
        },

        // ============ PARTNERS PAGE ============
        partners: {
            hero: {
                breadcrumb: 'Partners',
                title: 'Technology Partners',
                subtitle: 'Collaborating with Global Technology Leaders'
            },
            intro: {
                tag: 'Strategic Partnerships',
                title: 'Best-of-Breed Technology Solutions',
                description: 'Our vendor-agnostic approach allows us to partner with the world\'s leading technology providers, ensuring you receive the best solutions for your specific needs.'
            },
            categories: {
                infrastructure: 'Infrastructure',
                security: 'Security',
                software: 'Software',
                cloud: 'Cloud & Data Center'
            }
        },

        // ============ CONTACT PAGE ============
        contact: {
            hero: {
                breadcrumb: 'Contact',
                title: 'Get In Touch',
                subtitle: 'Let\'s Discuss How SHABAKAH Can Empower Your Organization'
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
                    company: 'Company / Organization',
                    companyPlaceholder: 'Your Organization',
                    service: 'Service Interest',
                    servicePlaceholder: 'Select a service',
                    message: 'Message *',
                    messagePlaceholder: 'Tell us about your project or requirements...',
                    submit: 'Send Message'
                },
                serviceOptions: {
                    infrastructure: 'IT Infrastructure',
                    datacenter: 'Data Center Solutions',
                    physicalsecurity: 'Physical Security Systems',
                    communications: 'Unified Communications & Collaboration',
                    licensing: 'Software Licensing',
                    enduser: 'End-User Devices',
                    cybersecurity: 'Integrated Security & Business Continuity',
                    managed: 'Managed Services',
                    isp: 'ISP Services',
                    other: 'Other'
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
                infrastructure: 'IT Infrastructure',
                datacenter: 'Data Center & Cloud',
                cybersecurity: 'Cybersecurity',
                communications: 'Unified Communications',
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
            megaMenu: {
                infrastructure: {
                    title: 'البنية التحتية لتقنية المعلومات',
                    description: 'حلول بنية تحتية على مستوى المؤسسات',
                    link: 'اعرف المزيد ←'
                },
                datacenter: {
                    title: 'حلول مراكز البيانات',
                    description: 'سحابة خاصة وبناء مراكز بيانات معتمدة',
                    link: 'اعرف المزيد ←'
                },
                physicalSecurity: {
                    title: 'أنظمة الأمن المادي',
                    description: 'CCTV والتحكم بالدخول وحماية المحيط',
                    link: 'اعرف المزيد ←'
                },
                communications: {
                    title: 'الاتصالات الموحدة والتعاون',
                    description: 'صوت وفيديو ورسائل واجتماعات',
                    link: 'اعرف المزيد ←'
                },
                licensing: {
                    title: 'ترخيص البرمجيات',
                    description: 'حلول الترخيص السحابي والمؤسسي',
                    link: 'اعرف المزيد ←'
                },
                enduser: {
                    title: 'أجهزة المستخدم النهائي',
                    description: 'توريد أجهزة وإدارة موحدة لنقاط النهاية',
                    link: 'اعرف المزيد ←'
                },
                cybersecurity: {
                    title: 'الأمن المتكامل واستمرارية الأعمال',
                    description: 'جدران حماية وEDR وهوية ونسخ احتياطي',
                    link: 'اعرف المزيد ←'
                },
                managed: {
                    title: 'الخدمات المُدارة',
                    description: 'تشغيل على مدار الساعة ومراقبة ودعم فني',
                    link: 'اعرف المزيد ←'
                },
                isp: {
                    title: 'خدمات مزود خدمة الإنترنت (ISP)',
                    description: 'DIA واستضافة واتصال للمهام الحيوية',
                    link: 'اعرف المزيد ←'
                }
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
                title: 'تقديم حلول تقنية المعلومات وخدمات الـ ISP',
                description: 'خدمات تقنية شاملة من البداية إلى النهاية مصممة للعمليات الحيوية على مستوى المؤسسات'
            },
            serviceCards: [
                {
                    title: 'البنية التحتية لتقنية المعلومات',
                    bullets: [
                        'بنية كابلات نحاسية وألياف بصرية',
                        'حلول شبكات نشطة (LAN/WLAN)',
                        'SD-WAN لربط الفروع وتحسين الأداء',
                        'أنظمة مراقبة وإدارة الشبكات'
                    ],
                    goal: 'تقديم بنية شبكات حديثة بأداء عالٍ وآمن عبر كامل المؤسسة.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'حلول مراكز البيانات',
                    bullets: [
                        'بناء مراكز بيانات وفق معايير معتمدة',
                        'تصميم وتنفيذ الخوادم والتخزين والنسخ الاحتياطي',
                        'نشر حلول افتراضية'
                    ],
                    goal: 'توفير بيئة متكاملة ومحسّنة لتشغيل أنظمة الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'أنظمة الأمن المادي',
                    bullets: [
                        'أنظمة مراقبة بالفيديو (CCTV)',
                        'أنظمة التحكم في الدخول',
                        'بوابات وحواجز لمرور الأشخاص والمركبات'
                    ],
                    goal: 'ضمان التحكم والمراقبة الكاملة لبيئة أعمالك.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'الاتصالات الموحدة والتعاون',
                    bullets: [
                        'هاتف IP متقدم مع إدارة مركزية للمكالمات',
                        'صوت عبر IP سحابي آمن ومركزي للفروع',
                        'حلول متكاملة للصوت والفيديو والمراسلة والاجتماعات'
                    ],
                    goal: 'تمكين تواصل فعّال بين الفروع والفرق بتكلفة منخفضة وزيادة الإنتاجية.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'ترخيص البرمجيات',
                    bullets: [
                        'توريد وتركيب تراخيص أصلية: Microsoft وAdobe وغيرها',
                        'توريد وتفعيل تراخيص سحابية: Microsoft 365 وAzure وغيرها'
                    ],
                    goal: 'تقديم تراخيص أصلية مع تفعيل سريع وموثوق.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'أجهزة المستخدم النهائي',
                    bullets: [
                        'توريد وتركيب أجهزة من Dell وHP وLenovo مع ضمان ودعم المورّد',
                        'إدارة مركزية للنقاط الطرفية عبر Intune وWorkspace ONE وManageEngine'
                    ],
                    goal: 'توفير أجهزة ملائمة لاحتياجات أعمالك مع إدارة موحدة.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'الأمن المتكامل واستمرارية الأعمال',
                    bullets: [
                        'جدران نارية من الجيل التالي وأنظمة كشف/منع التسلل',
                        'حماية نقاط النهاية وEDR',
                        'إدارة الهوية والصلاحيات (IAM / PAM)',
                        'أنظمة النسخ الاحتياطي والاستعادة'
                    ],
                    goal: 'حماية الأنظمة والبيانات الأساسية وضمان استمرارية الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'الخدمات المُدارة',
                    bullets: [
                        'تشغيل ودعم عن بُعد وفي الموقع مع استجابة فورية',
                        'نماذج عمل مرنة (دوام جزئي أو كامل أو موسمي)',
                        'كوادر فنية: مهندسو شبكات ودعم تقني وأمن سيبراني',
                        'صيانة وقائية وتصحيحية للبنية والأنظمة',
                        'تقارير لمستوى الخدمة والتزام اتفاقيات SLA'
                    ],
                    goal: 'تخفيف عبء التشغيل والتكاليف مع أعلى كفاءة تقنية.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                },
                {
                    title: 'خدمات مزود خدمة الإنترنت (ISP)',
                    bullets: [
                        'وصول إنترنت مخصص (DIA)، اتصالات مؤسسية، استضافة، ودعم فني على مدار الساعة للعمليات الحيوية'
                    ],
                    goal: 'توفير اتصال واستضافة عالية الأداء وموثوقية تدعم النمو الرقمي واستمرارية الأعمال.',
                    goalLabel: 'الهدف',
                    link: 'اعرف المزيد'
                }
            ],
            stats: {
                title: 'تقديم التميز على نطاق واسع',
                projects: 'مشروع منجز',
                clients: 'عميل موثوق',
                years: 'عاماً من التميز',
                support: 'دعم العمليات على مدار الساعة'
            },
            testimonials: {
                title: 'شهادات شبكة'
            },
            cta: {
                title: 'هل أنت مستعد لتحويل بنيتك التحتية التقنية؟',
                description: 'دعنا نناقش كيف يمكن لشبكة تمكين مؤسستك بحلول تقنية معلومات واتصالات على مستوى المؤسسات',
                btn1: 'ابدأ محادثة',
                btn2: 'عرض جميع الخدمات'
            }
        },

        // ============ صفحة من نحن ============
        about: {
            hero: {
                breadcrumb: 'من نحن',
                title: 'عن شبكة',
                subtitle: '28 عاماً من التميز والابتكار والثقة في مجال تقنية المعلومات'
            },
            overview: {
                tag: 'قصتنا',
                title: 'رواد التميز التقني منذ عام 1997',
                p1: 'بدأت شركة شبكة للتقنية المتكاملة رحلتها في عام 1997 كواحدة من الشركات الرائدة في مجال توفير خدمات الإنترنت في المملكة العربية السعودية. على مدى ما يقارب ثلاثة عقود، تطورنا لنصبح مزود حلول تقنية معلومات واتصالات شامل، نخدم احتياجات البنية التحتية الحيوية عبر القطاعين الحكومي والمؤسسي.',
                p2: 'اليوم، تُعد شبكة شريكاً موثوقاً للمؤسسات التي تسعى للحصول على حلول تقنية على مستوى المؤسسات. تمتد خبرتنا لتشمل البنية التحتية لتقنية المعلومات، وحلول الأمن المتكامل واستمرارية الأعمال، ومراكز البيانات، والاتصالات الموحدة، والخدمات المُدارة، وكلها مُقدمة بالتزام ثابت بالأمان والموثوقية والابتكار.',
                p3: 'مع أكثر من 50,000 مشروع منجز و 2,500 عميل راضٍ، نواصل قيادة التحول الرقمي في جميع أنحاء المملكة، متوافقين مع أهداف رؤية السعودية 2030 للتقدم التقني.'
            },
            timeline: {
                tag: 'رحلتنا',
                title: 'معالم التميز',
                description: 'جدول زمني للابتكار والنمو والالتزام الثابت بالتميز التقني',
                milestones: {
                    1997: {
                        title: 'التأسيس وإطلاق خدمات الإنترنت',
                        description: 'تأسست شبكة كواحدة من الشركات الرائدة في توفير خدمات الإنترنت في المملكة العربية السعودية، مُوفرة الاتصال للشركات في جميع أنحاء المملكة.'
                    },
                    2005: {
                        title: 'توسع حلول المؤسسات',
                        description: 'توسعت محفظة الخدمات لتشمل البنية التحتية لتقنية المعلومات للمؤسسات، والشبكات، وخدمات تكامل الأنظمة.'
                    },
                    2010: {
                        title: 'تأسيس مركز بيانات للاستضافة',
                        description: 'أنشأنا مرافق استضافة محلية متطورة لمراكز البيانات، تقدم خدمات السحابة الخاصة والاستضافة المشتركة وفق معايير Tier II.'
                    },
                    2015: {
                        title: 'الحصول على شهادات ISO',
                        description: 'حصلنا على شهادات ISO 27001 (أمن المعلومات) و ISO 22301 (استمرارية الأعمال)، مما يعزز التزامنا بالتميز. الشهادات: ISO 27001 / ISO 20000 / ISO 9001.'
                    },
                    2020: {
                        title: 'شريك التحول الرقمي',
                        description: 'أصبحنا شريكاً تقنياً رئيساً يدعم مبادرات التحول الرقمي لرؤية السعودية 2030 عبر القطاعين الحكومي والمؤسسي.'
                    },
                    2024: {
                        title: 'توسيع نطاق خدماتنا',
                        description: 'نوسع خدماتنا لتشمل الأنظمة الذكية وأنظمة التتبع وخدمات استشارات ISO والخدمات المُدارة.'
                    }
                }
            },
            philosophy: {
                tag: 'كيف نعمل',
                title: 'فلسفة الهندسة',
                description: 'المبادئ التوجيهية التي تحدد كل حل نقدمه',
                cards: {
                    security: {
                        title: 'الأمان بالتصميم',
                        description: 'الأمان ليس فكرة لاحقة - بل هو مدمج في كل طبقة من حلولنا. من البنية الأولية إلى العمليات الجارية، نطبق استراتيجيات الدفاع المتعمق لحماية أهم أصولك.',
                        items: [
                            'مبادئ بنية الثقة المعدومة',
                            'آليات دفاع متعددة الطبقات',
                            'مراقبة أمنية مستمرة',
                            'نهج الامتثال أولاً'
                        ]
                    },
                    availability: {
                        title: 'التوافر العالي',
                        description: 'الأنظمة الحيوية تتطلب موثوقية استثنائية. نهندس حلولاً بها تكرار وتحويل فشل وقدرات استرداد كوارث لضمان عدم توقف عملياتك أبداً.',
                        items: [
                            'التزامات SLA بنسبة 99.99٪ من وقت التشغيل',
                            'تصميم بنية تحتية متكررة',
                            'أنظمة تحويل فشل آلية',
                            'مراقبة ودعم 24/7/365'
                        ]
                    },
                    compliance: {
                        title: 'التميز في الامتثال',
                        description: 'التنقل في المتطلبات التنظيمية معقد. نضمن أن بنيتك التحتية تلبي جميع المعايير ذات الصلة، من متطلبات الهيئة الوطنية للأمن السيبراني إلى الأطر الدولية.',
                        items: [
                            'خبرة الامتثال للهيئة الوطنية للأمن السيبراني',
                            'عمليات معتمدة بـ ISO 27001 و 22301',
                            'الالتزام بسيادة البيانات',
                            'توثيق جاهز للتدقيق'
                        ]
                    },
                    separation: {
                        title: 'الفصل التشغيلي',
                        description: 'حدود واضحة بين بيئات التطوير والاختبار والإنتاج تضمن الاستقرار والأمان وإدارة التغيير المضبوطة عبر بنيتك التحتية بأكملها.',
                        items: [
                            'بيئات منفصلة',
                            'ضوابط الوصول القائمة على الأدوار',
                            'بروتوكولات إدارة التغيير',
                            'إجراءات اختبار شاملة'
                        ]
                    }
                }
            },
            values: {
                tag: 'قيمنا',
                title: 'ما يحركنا',
                excellence: {
                    title: 'التميز',
                    description: 'التزام ثابت بأعلى المعايير في كل حل نقدمه'
                },
                security: {
                    title: 'الأمان',
                    description: 'نهج الأمان أولاً مُدمج في كل جانب من جوانب عملياتنا'
                },
                innovation: {
                    title: 'الابتكار',
                    description: 'اعتماد مستمر للتقنيات الناشئة للبقاء في المقدمة'
                },
                integrity: {
                    title: 'النزاهة',
                    description: 'ممارسات تجارية شفافة وأخلاقية تبني ثقة دائمة'
                }
            }
        },

        // ============ صفحة الخدمات ============
        services: {
            hero: {
                breadcrumb: 'الخدمات',
                title: 'حلول تقنية شاملة',
                subtitle: 'خدمات تقنية على مستوى المؤسسات مصممة للعمليات الحيوية'
            },
            infrastructure: {
                tag: 'البنية التحتية لتقنية المعلومات',
                title: 'حلول البنية التحتية لتقنية المعلومات للمؤسسات',
                description: 'بناء بنية تحتية مرنة وقابلة للتوسع وعالية الأداء تدعم تحولك الرقمي. تضمن خدماتنا الشاملة للبنية التحتية لتقنية المعلومات أن يكون أساسك التقني قوياً وآمناً وجاهزاً للمستقبل.',
                features: {
                    network: {
                        title: 'تصميم وتنفيذ البنية التحتية للشبكات',
                        description: 'حلول شبكات على مستوى المؤسسات مع التكرار والتوافر العالي'
                    },
                    datacenter: {
                        title: 'هندسة مركز البيانات',
                        description: 'تصميم وبناء وإدارة مراكز بيانات متوافقة مع Tier III'
                    },
                    compute: {
                        title: 'حلول الحوسبة والتخزين',
                        description: 'بنية تحتية قابلة للتوسع للخوادم والتخزين لأحمال العمل الحيوية'
                    },
                    virtualization: {
                        title: 'البنية التحتية الافتراضية والمتقاربة للغاية',
                        description: 'استخدام فعال للموارد مع منصات افتراضية على مستوى المؤسسات'
                    }
                }
            },
            cybersecurity: {
                tag: 'الأمن السيبراني',
                title: 'الأمن السيبراني المتقدم واستمرارية الأعمال',
                description: 'احمِ مؤسستك من التهديدات السيبرانية المتطورة مع حلول أمنية شاملة مصممة للمشهد التهديدي الحديث.',
                features: {
                    soc: {
                        title: 'مركز عمليات الأمن على مدار الساعة (SOC)',
                        description: 'مراقبة مستمرة واكتشاف التهديدات'
                    },
                    endpoint: {
                        title: 'حماية نقاط النهاية',
                        description: 'منع التهديدات المتقدمة لجميع الأجهزة'
                    },
                    compliance: {
                        title: 'الامتثال والحوكمة',
                        description: 'الامتثال للهيئة الوطنية للأمن السيبراني و ISO 27001 والصناعة'
                    },
                    dr: {
                        title: 'التعافي من الكوارث واستمرارية الأعمال',
                        description: 'حلول نسخ احتياطي واستعادة مرنة'
                    }
                }
            },
            cloud: {
                tag: 'مركز البيانات والحوسبة السحابية',
                title: 'خدمات السحابة الخاصة ومركز البيانات',
                description: 'بنية تحتية لمراكز البيانات وحلول سحابية خاصة على مستوى المؤسسات مع ضمانات وقت التشغيل والأداء.'
            },
            communications: {
                tag: 'الاتصالات الموحدة',
                title: 'منصات الاتصال المتكاملة',
                description: 'أدوات اتصال وتعاون حديثة تعزز الإنتاجية وتبسط العمليات.'
            },
            enduser: {
                tag: 'حوسبة المستخدم النهائي',
                title: 'إدارة أجهزة سطح المكتب والأجهزة',
                description: 'إدارة شاملة لنقاط النهاية وتحسين تجربة المستخدم.'
            },
            licensing: {
                tag: 'ترخيص البرمجيات',
                title: 'حلول الترخيص السحابي والمؤسسي',
                description: 'إدارة أصول البرمجيات فعالة من حيث التكلفة وتحسين الترخيص.'
            }
        },

        // ============ صفحة الحلول ============
        solutions: {
            hero: {
                breadcrumb: 'الحلول',
                title: 'حلول خاصة بالصناعة',
                subtitle: 'حلول تقنية مخصصة لقطاعك'
            },
            government: {
                title: 'حلول حكومية',
                description: 'حلول التحول الرقمي المتوافقة مع أهداف رؤية 2030'
            },
            enterprise: {
                title: 'حلول مؤسسية',
                description: 'بنية تحتية تقنية قابلة للتوسع للمؤسسات الكبيرة'
            },
            healthcare: {
                title: 'حلول الرعاية الصحية',
                description: 'أنظمة تقنية متوافقة مع HIPAA لمقدمي الرعاية الصحية'
            },
            education: {
                title: 'حلول التعليم',
                description: 'منصات التعلم الرقمي واتصال الحرم الجامعي'
            }
        },

        // ============ صفحة الشركاء ============
        partners: {
            hero: {
                breadcrumb: 'الشركاء',
                title: 'شركاء التكنولوجيا',
                subtitle: 'التعاون مع قادة التكنولوجيا العالميين'
            },
            intro: {
                tag: 'شراكات استراتيجية',
                title: 'حلول تقنية من أفضل الفئات',
                description: 'يسمح لنا نهجنا المستقل عن الموردين بالشراكة مع كبار مزودي التكنولوجيا في العالم، مما يضمن حصولك على أفضل الحلول لاحتياجاتك المحددة.'
            },
            categories: {
                infrastructure: 'البنية التحتية',
                security: 'الأمن',
                software: 'البرمجيات',
                cloud: 'الحوسبة السحابية ومركز البيانات'
            }
        },

        // ============ صفحة التواصل ============
        contact: {
            hero: {
                breadcrumb: 'تواصل معنا',
                title: 'تواصل معنا',
                subtitle: 'دعنا نناقش كيف يمكن لشبكة تمكين مؤسستك'
            },
            form: {
                title: 'أرسل لنا رسالة',
                description: 'املأ النموذج أدناه وسيتواصل معك فريقنا خلال 24 ساعة',
                fields: {
                    name: 'الاسم الكامل *',
                    namePlaceholder: 'اسمك',
                    email: 'البريد الإلكتروني *',
                    emailPlaceholder: 'your.email@company.com',
                    phone: 'رقم الهاتف',
                    phonePlaceholder: '+966 XX XXX XXXX',
                    company: 'الشركة / المؤسسة',
                    companyPlaceholder: 'مؤسستك',
                    service: 'الخدمة المطلوبة',
                    servicePlaceholder: 'اختر خدمة',
                    message: 'الرسالة *',
                    messagePlaceholder: 'أخبرنا عن مشروعك أو متطلباتك...',
                    submit: 'إرسال الرسالة'
                },
                serviceOptions: {
                    infrastructure: 'البنية التحتية لتقنية المعلومات',
                    datacenter: 'حلول مراكز البيانات',
                    physicalsecurity: 'أنظمة الأمن المادي',
                    communications: 'الاتصالات الموحدة والتعاون',
                    licensing: 'ترخيص البرمجيات',
                    enduser: 'أجهزة المستخدم النهائي',
                    cybersecurity: 'الأمن المتكامل واستمرارية الأعمال',
                    managed: 'الخدمات المُدارة',
                    isp: 'خدمات مزود خدمة الإنترنت (ISP)',
                    other: 'أخرى'
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
                    time: 'الأحد - الخميس: 8:00 صباحاً - 5:00 مساءً'
                }
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
                infrastructure: 'البنية التحتية لتقنية المعلومات',
                datacenter: 'مركز البيانات والحوسبة السحابية',
                cybersecurity: 'الأمن السيبراني',
                communications: 'الاتصالات الموحدة',
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
    return 'index';
}

// Update navigation
function updateNavigation(nav) {
    // Main nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.includes('index')) link.textContent = nav.home;
        if (href && href.includes('about')) link.textContent = nav.about;
        if (href && href.includes('services')) {
            const text = link.textContent.trim();
            if (text === 'Services' || text === 'الخدمات') link.textContent = nav.services;
        }
        if (href && href.includes('solutions')) link.textContent = nav.solutions;
        if (href && href.includes('partners')) link.textContent = nav.partners;
        if (href && href.includes('contact')) link.textContent = nav.contact;
    });
    
    // Mega menu items
    const megaItems = document.querySelectorAll('.mega-menu-item');
    if (megaItems.length > 0) {
        megaItems.forEach((item, index) => {
            const keys = ['infrastructure', 'datacenter', 'physicalSecurity', 'communications', 'licensing', 'enduser', 'cybersecurity', 'managed', 'isp'];
            if (keys[index] && nav.megaMenu[keys[index]]) {
                const h4 = item.querySelector('h4');
                const p = item.querySelector('p');
                const link = item.querySelector('.mega-link');
                if (h4) h4.textContent = nav.megaMenu[keys[index]].title;
                if (p) p.textContent = nav.megaMenu[keys[index]].description;
                if (link) link.textContent = nav.megaMenu[keys[index]].link;
            }
        });
    }
}

// Update Home Page
function escapeHtmlLangServiceText(text) {
    if (text == null) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildServiceCardBodyLangJs(bullets, goal, goalLabel) {
    const label = goalLabel != null ? goalLabel : 'Goal';
    const lis = (bullets || []).map(b => `<li>${escapeHtmlLangServiceText(b)}</li>`).join('');
    return (
        `<ul class="service-bullets">${lis}</ul>` +
        `<p class="service-goal"><strong>${escapeHtmlLangServiceText(label)}:</strong> ${escapeHtmlLangServiceText(goal)}</p>`
    );
}

function updateHomePage(home) {
    console.log('🔄 Updating home page content...');
    
    // Hero section
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = `
            ${home.hero.title}<br>
            <span class="gradient-text">${home.hero.subtitle}</span><br>
            ${home.hero.since}
        `;
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = home.hero.description;
    
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
    
    // Why cards - ALL 5 cards
    const whyCards = document.querySelectorAll('.why-card');
    const cardKeys = ['security', 'support', 'certified', 'vendor', 'track'];
    console.log('📦 Found', whyCards.length, 'why cards');
    whyCards.forEach((card, index) => {
        if (cardKeys[index] && home.why.cards[cardKeys[index]]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) {
                h3.textContent = home.why.cards[cardKeys[index]].title;
                console.log('✅ Updated card', index, ':', home.why.cards[cardKeys[index]].title);
            }
            if (p) p.textContent = home.why.cards[cardKeys[index]].description;
        }
    });
    
    // Services section header
    const servicesTag = document.querySelector('.services-section .section-tag');
    const servicesTitle = document.querySelector('.services-section .section-title');
    const servicesDesc = document.querySelector('.services-section .section-description');
    if (servicesTag) servicesTag.textContent = home.services.tag;
    if (servicesTitle) servicesTitle.textContent = home.services.title;
    if (servicesDesc) servicesDesc.textContent = home.services.description;
    
    // Service cards - home.serviceCards (9 cards, bullets + goal)
    const serviceCards = document.querySelectorAll('.service-card');
    console.log('🔧 Found', serviceCards.length, 'service cards');
    if (home.serviceCards && home.serviceCards.length) {
        serviceCards.forEach((card, index) => {
            const data = home.serviceCards[index];
            if (!data) return;
            const h3 = card.querySelector('h3');
            const body = card.querySelector('.service-card-body');
            const link = card.querySelector('.service-link');
            if (h3) h3.textContent = data.title;
            if (body && data.bullets && data.goal != null) {
                body.innerHTML = buildServiceCardBodyLangJs(data.bullets, data.goal, data.goalLabel);
            } else if (body && data.description) {
                body.innerHTML = `<p class="service-goal">${escapeHtmlLangServiceText(data.description)}</p>`;
            }
            if (link) {
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
    
    // Testimonials
    const testimonialsTag = document.querySelector('.testimonials-section .section-tag');
    const testimonialsTitle = document.querySelector('.testimonials-section .section-title');
    if (testimonialsTag) testimonialsTag.textContent = home.testimonials.tag || '';
    if (testimonialsTitle) testimonialsTitle.textContent = home.testimonials.title || '';
    
    // CTA section
    const ctaTitle = document.querySelector('.cta-title');
    const ctaDesc = document.querySelector('.cta-description');
    if (ctaTitle) ctaTitle.textContent = home.cta.title;
    if (ctaDesc) ctaDesc.textContent = home.cta.description;
    
    const ctaBtns = document.querySelectorAll('.cta-buttons .btn span');
    if (ctaBtns[0]) ctaBtns[0].textContent = home.cta.btn1;
    if (ctaBtns[1]) ctaBtns[1].textContent = home.cta.btn2;
    
    console.log('✅ Home page update complete!');
}

// Update About Page
function updateAboutPage(about) {
    console.log('🔄 Updating About page...');
    
    // Breadcrumb
    const breadcrumbHome = document.querySelector('.breadcrumb a');
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumbHome) breadcrumbHome.textContent = currentLanguage === 'ar' ? 'الرئيسية' : 'Home';
    if (breadcrumb) breadcrumb.textContent = about.hero.breadcrumb;
    
    // Hero
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
    
    // Timeline items - ONLY translate text, preserve ALL CSS structure
    const timelineItems = document.querySelectorAll('.timeline-item');
    const years = ['1997', '2005', '2010', '2015', '2020', '2024'];
    console.log('📅 Found', timelineItems.length, 'timeline items');
    timelineItems.forEach((item, index) => {
        if (years[index] && about.timeline.milestones[years[index]]) {
            // Only update h3 and p text inside .timeline-content, don't touch structure
            const h3 = item.querySelector('.timeline-content h3');
            const p = item.querySelector('.timeline-content p');
            if (h3) {
                h3.textContent = about.timeline.milestones[years[index]].title;
                console.log('✅ Updated timeline', years[index], ':', about.timeline.milestones[years[index]].title);
            }
            if (p) p.textContent = about.timeline.milestones[years[index]].description;
        }
    });
    
    // Engineering Philosophy section
    const philosophyTag = document.querySelector('.philosophy-section .section-tag');
    const philosophyTitle = document.querySelector('.philosophy-section .section-title');
    const philosophyDesc = document.querySelector('.philosophy-section .section-description');
    if (philosophyTag) philosophyTag.textContent = about.philosophy.tag;
    if (philosophyTitle) philosophyTitle.textContent = about.philosophy.title;
    if (philosophyDesc) philosophyDesc.textContent = about.philosophy.description;
    
    // Philosophy cards - ONLY translate text content
    const philosophyCards = document.querySelectorAll('.philosophy-card');
    const philosophyKeys = ['security', 'availability', 'compliance', 'separation'];
    philosophyCards.forEach((card, index) => {
        if (philosophyKeys[index] && about.philosophy.cards[philosophyKeys[index]]) {
            const cardData = about.philosophy.cards[philosophyKeys[index]];
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const listItems = card.querySelectorAll('.philosophy-list li');
            
            if (h3) h3.textContent = cardData.title;
            if (p) p.textContent = cardData.description;
            
            listItems.forEach((li, liIndex) => {
                if (cardData.items[liIndex]) {
                    li.textContent = cardData.items[liIndex];
                }
            });
        }
    });
    
    // Values section
    const valuesTag = document.querySelector('.values-section .section-tag');
    const valuesTitle = document.querySelector('.values-section .section-title');
    if (valuesTag) valuesTag.textContent = about.values.tag;
    if (valuesTitle) valuesTitle.textContent = about.values.title;
    
    // Value items - translate all 4 items
    const valueItems = document.querySelectorAll('.value-item');
    const valueTranslations = currentLanguage === 'ar' ? [
        { title: 'التميز', desc: 'السعي لتحقيق أعلى المعايير في كل ما نقوم به' },
        { title: 'النزاهة', desc: 'العمل بشفافية وصدق ومبادئ أخلاقية' },
        { title: 'الابتكار', desc: 'تبني التقنيات المتطورة والحلول الإبداعية' },
        { title: 'الشراكة', desc: 'بناء علاقات طويلة الأمد قائمة على النجاح المتبادل' }
    ] : [
        { title: 'Excellence', desc: 'Pursuing the highest standards in everything we do' },
        { title: 'Integrity', desc: 'Operating with transparency, honesty, and ethical principles' },
        { title: 'Innovation', desc: 'Embracing cutting-edge technologies and creative solutions' },
        { title: 'Partnership', desc: 'Building long-term relationships based on mutual success' }
    ];
    
    valueItems.forEach((item, index) => {
        if (valueTranslations[index]) {
            const h4 = item.querySelector('h4');
            const p = item.querySelector('p');
            if (h4) h4.textContent = valueTranslations[index].title;
            if (p) p.textContent = valueTranslations[index].desc;
        }
    });
    
    // Vision & Mission section
    const visionCards = document.querySelectorAll('.vm-card');
    const vmTranslations = currentLanguage === 'ar' ? [
        {
            title: 'رؤيتنا',
            desc: 'أن نكون الشريك الأول المفضل للحلول التقنية على مستوى المؤسسات في المملكة العربية السعودية ومنطقة الشرق الأوسط، معترف بنا للتميز والابتكار والثقة.'
        },
        {
            title: 'مهمتنا',
            desc: 'تقديم حلول تقنية معلومات واتصالات وخدمات إنترنت (ISP) متطورة تمكّن مؤسساتنا من تحقيق أهدافها من خلال بنية تحتية آمنة وموثوقة ومستقبلية.'
        }
    ] : [
        {
            title: 'Our Vision',
            desc: 'To be the preferred enterprise technology solutions partner in Saudi Arabia and the Middle East, recognized for excellence, innovation, and trust.'
        },
        {
            title: 'Our Mission',
            desc: 'To deliver cutting-edge ICT & ISP solutions that empower organizations to achieve their goals through secure, reliable, and future-ready infrastructure.'
        }
    ];
    
    visionCards.forEach((card, index) => {
        if (vmTranslations[index]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            if (h3) h3.textContent = vmTranslations[index].title;
            if (p) p.textContent = vmTranslations[index].desc;
        }
    });
    
    console.log('✅ About page update complete!');
}

// Update Services Page
function updateServicesPage(services) {
    console.log('🔄 Updating Services page...');
    
    const breadcrumbHome = document.querySelector('.breadcrumb a');
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumbHome) breadcrumbHome.textContent = currentLanguage === 'ar' ? 'الرئيسية' : 'Home';
    if (breadcrumb) breadcrumb.textContent = services.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = services.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = services.hero.subtitle;
    
    // Infrastructure section
    const infraTag = document.querySelector('#infrastructure .section-tag');
    const infraTitle = document.querySelector('#infrastructure .section-title');
    const infraDesc = document.querySelector('#infrastructure .service-description');
    if (infraTag) infraTag.textContent = services.infrastructure.tag;
    if (infraTitle) infraTitle.textContent = services.infrastructure.tag;
    if (infraDesc) infraDesc.textContent = services.infrastructure.description;
    
    // Infrastructure features
    const infraFeatures = document.querySelectorAll('#infrastructure .feature-item');
    const infraFeatureTranslations = currentLanguage === 'ar' ? [
        { title: 'تصميم وتنفيذ البنية التحتية للشبكات', desc: 'حلول شبكات على مستوى المؤسسات مع التكرار والتوافر العالي' },
        { title: 'حلول الخوادم والتخزين', desc: 'بنية تحتية قابلة للتوسع للحوسبة والتخزين مخصصة لأحمال عملك' },
        { title: 'البنية التحتية الافتراضية والمتقاربة للغاية', desc: 'منصات بنية تحتية حديثة تزيد من الكفاءة والمرونة' },
        { title: 'مراقبة وإدارة البنية التحتية', desc: 'مراقبة استباقية وتحسين للأداء الأمثل' }
    ] : [
        { title: 'Network Infrastructure Design & Implementation', desc: 'Enterprise-grade networking solutions with redundancy and high availability' },
        { title: 'Server & Storage Solutions', desc: 'Scalable compute and storage infrastructure tailored to your workloads' },
        { title: 'Virtualization & Hyperconverged Infrastructure', desc: 'Modern infrastructure platforms maximizing efficiency and agility' },
        { title: 'Infrastructure Monitoring & Management', desc: 'Proactive monitoring and optimization for peak performance' }
    ];
    
    infraFeatures.forEach((feature, index) => {
        if (infraFeatureTranslations[index]) {
            const h4 = feature.querySelector('h4');
            const p = feature.querySelector('p');
            if (h4) h4.textContent = infraFeatureTranslations[index].title;
            if (p) p.textContent = infraFeatureTranslations[index].desc;
        }
    });
    
    // Data Center section
    const dcTag = document.querySelector('#datacenter .section-tag');
    const dcTitle = document.querySelector('#datacenter .section-title');
    const dcDesc = document.querySelector('#datacenter .service-description');
    if (dcTag) dcTag.textContent = currentLanguage === 'ar' ? 'حلول مراكز البيانات' : 'Data Center Solutions';
    if (dcTitle) dcTitle.textContent = currentLanguage === 'ar' ? 'حلول مراكز البيانات' : 'Data Center Solutions';
    if (dcDesc) dcDesc.textContent = currentLanguage === 'ar' ? 
        'نشر مراكز بيانات على مستوى المؤسسات وبنية تحتية سحابية خاصة توفر أداء استثنائي وموثوقية وأمان لتطبيقاتك وبياناتك الحيوية.' :
        'Deploy enterprise-class data centers and private cloud infrastructure that deliver exceptional performance, reliability, and security for your mission-critical applications and data.';
    
    const dcFeatures = document.querySelectorAll('#datacenter .feature-item');
    const dcFeatureTranslations = currentLanguage === 'ar' ? [
        { title: 'هندسة ونشر السحابة الخاصة', desc: 'بنية تحتية سحابية آمنة ومتوافقة مع تحكم كامل' },
        { title: 'تصميم وبناء مركز البيانات', desc: 'مرافق مركز بيانات Tier III/IV مع أنظمة احتياطية' },
        { title: 'تكامل السحابة الهجينة', desc: 'تكامل سلس بين البيئات المحلية والسحابية' },
        { title: 'التعافي من الكوارث واستمرارية الأعمال', desc: 'حلول شاملة للتعافي من الكوارث تضمن مرونة الأعمال' }
    ] : [
        { title: 'Private Cloud Architecture & Deployment', desc: 'Secure, compliant cloud infrastructure with full control' },
        { title: 'Data Center Design & Build', desc: 'Tier III/IV data center facilities with redundant systems' },
        { title: 'Hybrid Cloud Integration', desc: 'Seamless integration between on-premises and cloud environments' },
        { title: 'Disaster Recovery & Business Continuity', desc: 'Comprehensive DR solutions ensuring business resilience' }
    ];
    
    dcFeatures.forEach((feature, index) => {
        if (dcFeatureTranslations[index]) {
            const h4 = feature.querySelector('h4');
            const p = feature.querySelector('p');
            if (h4) h4.textContent = dcFeatureTranslations[index].title;
            if (p) p.textContent = dcFeatureTranslations[index].desc;
        }
    });
    
    // Cybersecurity section
    const cyberTag = document.querySelector('#cybersecurity .section-tag');
    const cyberTitle = document.querySelector('#cybersecurity .section-title');
    const cyberDesc = document.querySelector('#cybersecurity .service-description');
    if (cyberTag) cyberTag.textContent = currentLanguage === 'ar' ? 'الأمن المتكامل واستمرارية الأعمال' : 'Integrated Security & Business Continuity';
    if (cyberTitle) cyberTitle.textContent = currentLanguage === 'ar' ? 'الأمن المتكامل واستمرارية الأعمال' : 'Integrated Security & Business Continuity';
    if (cyberDesc) cyberDesc.textContent = currentLanguage === 'ar' ? 
        'احمِ مؤسستك بحلول أمن سيبراني شاملة متوافقة مع معايير الهيئة الوطنية للأمن السيبراني. ممارسات أمنية معتمدة من ISO 27001 و ISO 22301 تضمن أن تبقى أعمالك آمنة ومرنة.' :
        'Protect your organization with comprehensive cybersecurity solutions aligned with NCA standards. ISO 27001 and ISO 22301 certified security practices ensuring your business remains secure and resilient.';
    
    const cyberFeatures = document.querySelectorAll('#cybersecurity .feature-item');
    const cyberFeatureTranslations = currentLanguage === 'ar' ? [
        { title: 'تقييم الأمن والامتثال', desc: 'الامتثال لإطار عمل الهيئة الوطنية للأمن السيبراني والمعايير الأمنية الدولية' },
        { title: 'مركز عمليات الأمن (SOC) على مدار الساعة', desc: 'مراقبة مستمرة للتهديدات واستجابة للحوادث' },
        { title: 'حماية نقاط النهاية والشبكات', desc: 'دفاع متعدد الطبقات ضد التهديدات المتقدمة' },
        { title: 'خطط استمرارية الأعمال', desc: 'استراتيجيات شاملة للتعافي من الكوارث' }
    ] : [
        { title: 'Security Assessment & Compliance', desc: 'NCA framework compliance and international security standards' },
        { title: '24/7 Security Operations Center (SOC)', desc: 'Continuous threat monitoring and incident response' },
        { title: 'Endpoint & Network Protection', desc: 'Multi-layered defense against advanced threats' },
        { title: 'Business Continuity Planning', desc: 'Comprehensive disaster recovery strategies' }
    ];
    
    cyberFeatures.forEach((feature, index) => {
        if (cyberFeatureTranslations[index]) {
            const h4 = feature.querySelector('h4');
            const p = feature.querySelector('p');
            if (h4) h4.textContent = cyberFeatureTranslations[index].title;
            if (p) p.textContent = cyberFeatureTranslations[index].desc;
        }
    });
    
    console.log('✅ Services page update complete!');
}

// Update Solutions Page
function updateSolutionsPage(solutions) {
    console.log('🔄 Updating Solutions page...');
    
    const breadcrumbHome = document.querySelector('.breadcrumb a');
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumbHome) breadcrumbHome.textContent = currentLanguage === 'ar' ? 'الرئيسية' : 'Home';
    if (breadcrumb) breadcrumb.textContent = solutions.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = solutions.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = solutions.hero.subtitle;
    
    // Solution cards
    const solutionCards = document.querySelectorAll('.solution-card');
    const solutionTranslations = currentLanguage === 'ar' ? [
        { title: 'حلول حكومية', desc: 'حلول التحول الرقمي المتوافقة مع أهداف رؤية 2030', link: 'اعرف المزيد' },
        { title: 'حلول مؤسسية', desc: 'بنية تحتية تقنية قابلة للتوسع للمؤسسات الكبيرة', link: 'اعرف المزيد' },
        { title: 'حلول الرعاية الصحية', desc: 'أنظمة تقنية متوافقة مع HIPAA لمقدمي الرعاية الصحية', link: 'اعرف المزيد' },
        { title: 'حلول التعليم', desc: 'منصات التعلم الرقمي واتصال الحرم الجامعي', link: 'اعرف المزيد' },
        { title: 'حلول مالية', desc: 'أنظمة آمنة ومتوافقة للخدمات المالية', link: 'اعرف المزيد' },
        { title: 'حلول الطاقة والمرافق', desc: 'بنية تحتية قوية للعمليات الحيوية', link: 'اعرف المزيد' }
    ] : [
        { title: 'Government Solutions', desc: 'Digital transformation solutions aligned with Vision 2030 objectives', link: 'Learn More' },
        { title: 'Enterprise Solutions', desc: 'Scalable technology infrastructure for large organizations', link: 'Learn More' },
        { title: 'Healthcare Solutions', desc: 'HIPAA-compliant IT systems for healthcare providers', link: 'Learn More' },
        { title: 'Education Solutions', desc: 'Digital learning platforms and campus connectivity', link: 'Learn More' },
        { title: 'Financial Solutions', desc: 'Secure and compliant systems for financial services', link: 'Learn More' },
        { title: 'Energy & Utilities', desc: 'Robust infrastructure for mission-critical operations', link: 'Learn More' }
    ];
    
    solutionCards.forEach((card, index) => {
        if (solutionTranslations[index]) {
            const h3 = card.querySelector('h3');
            const p = card.querySelector('p');
            const link = card.querySelector('a');
            if (h3) h3.textContent = solutionTranslations[index].title;
            if (p) p.textContent = solutionTranslations[index].desc;
            if (link) {
                const linkText = link.childNodes[0];
                if (linkText) linkText.textContent = solutionTranslations[index].link + ' ';
            }
        }
    });
    
    console.log('✅ Solutions page update complete!');
}

// Update Partners Page
function updatePartnersPage(partners) {
    console.log('🔄 Updating Partners page...');
    
    const breadcrumbHome = document.querySelector('.breadcrumb a');
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumbHome) breadcrumbHome.textContent = currentLanguage === 'ar' ? 'الرئيسية' : 'Home';
    if (breadcrumb) breadcrumb.textContent = partners.hero.breadcrumb;
    
    const pageTitle = document.querySelector('.page-title');
    const pageSubtitle = document.querySelector('.page-subtitle');
    if (pageTitle) pageTitle.textContent = partners.hero.title;
    if (pageSubtitle) pageSubtitle.textContent = partners.hero.subtitle;
    
    const introTag = document.querySelector('.partners-intro .section-tag');
    const introTitle = document.querySelector('.partners-intro .section-title');
    const introDesc = document.querySelector('.partners-intro .section-description');
    if (introTag) introTag.textContent = partners.intro.tag;
    if (introTitle) introTitle.textContent = partners.intro.title;
    if (introDesc) introDesc.textContent = partners.intro.description;
    
    // Partner category titles
    const categoryTitles = document.querySelectorAll('.partner-category h3');
    const categoryTranslations = currentLanguage === 'ar' ? [
        'شركاء البنية التحتية',
        'شركاء الأمن',
        'شركاء البرمجيات',
        'شركاء السحابة ومركز البيانات'
    ] : [
        'Infrastructure Partners',
        'Security Partners',
        'Software Partners',
        'Cloud & Data Center Partners'
    ];
    
    categoryTitles.forEach((title, index) => {
        if (categoryTranslations[index]) {
            title.textContent = categoryTranslations[index];
        }
    });
    
    console.log('✅ Partners page update complete!');
}

// Update Contact Page
function updateContactPage(contact) {
    console.log('🔄 Updating Contact page...');
    
    const breadcrumbHome = document.querySelector('.breadcrumb a');
    const breadcrumb = document.querySelector('.breadcrumb span:last-child');
    if (breadcrumbHome) breadcrumbHome.textContent = currentLanguage === 'ar' ? 'الرئيسية' : 'Home';
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
    
    // Form fields
    const labels = document.querySelectorAll('.contact-form label');
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');
    
    if (labels[0]) labels[0].textContent = contact.form.fields.name;
    if (labels[1]) labels[1].textContent = contact.form.fields.email;
    if (labels[2]) labels[2].textContent = contact.form.fields.phone;
    if (labels[3]) labels[3].textContent = contact.form.fields.company;
    if (labels[4]) labels[4].textContent = contact.form.fields.service;
    if (labels[5]) labels[5].textContent = contact.form.fields.message;
    
    if (inputs[0]) inputs[0].placeholder = contact.form.fields.namePlaceholder;
    if (inputs[1]) inputs[1].placeholder = contact.form.fields.emailPlaceholder;
    if (inputs[2]) inputs[2].placeholder = contact.form.fields.phonePlaceholder;
    if (inputs[3]) inputs[3].placeholder = contact.form.fields.companyPlaceholder;
    
    // Service select dropdown
    const serviceSelect = document.querySelector('#service');
    if (serviceSelect) {
        const serviceOptions = currentLanguage === 'ar' ? [
            'اختر خدمة...',
            'البنية التحتية لتقنية المعلومات',
            'حلول مراكز البيانات',
            'أنظمة الأمن المادي',
            'الاتصالات الموحدة والتعاون',
            'ترخيص البرمجيات',
            'أجهزة المستخدم النهائي',
            'الأمن المتكامل واستمرارية الأعمال',
            'الخدمات المُدارة',
            'خدمات مزود خدمة الإنترنت (ISP)',
            'أخرى'
        ] : [
            'Select a service...',
            'IT Infrastructure',
            'Data Center Solutions',
            'Physical Security Systems',
            'Unified Communications & Collaboration',
            'Software Licensing',
            'End-User Devices',
            'Integrated Security & Business Continuity',
            'Managed Services',
            'ISP Services',
            'Other'
        ];
        
        const options = serviceSelect.querySelectorAll('option');
        options.forEach((option, index) => {
            if (serviceOptions[index]) {
                option.textContent = serviceOptions[index];
            }
        });
    }
    
    const messageField = document.querySelector('.contact-form textarea');
    if (messageField) messageField.placeholder = contact.form.fields.messagePlaceholder;
    
    const submitBtn = document.querySelector('.contact-form button[type="submit"] span');
    if (submitBtn) submitBtn.textContent = contact.form.fields.submit;
    
    // Contact info cards
    const contactInfoCards = document.querySelectorAll('.contact-info-card');
    const infoCardTranslations = currentLanguage === 'ar' ? [
        { title: 'مكتبنا', text: 'الموقع: الأندلس مول', text2: 'الورود، شارع العليا', text3: 'الرياض 12215، المملكة العربية السعودية' },
        { title: 'الهاتف', text: '(+966) 920033465', muted: 'الدعم متاح 24/7' },
        { title: 'البريد الإلكتروني', text: 'info@shabakah.sa', muted: 'سنرد خلال 24 ساعة' },
        { title: 'ساعات العمل', text: 'الأحد - الخميس', muted: '8:00 صباحاً - 5:00 مساءً (GMT+3)' }
    ] : [
        { title: 'Our Office', text: 'Located in: Andalus Mall', text2: 'Al Wurud, Olaya Street', text3: 'Riyadh 12215, Saudi Arabia' },
        { title: 'Phone', text: '(+966) 920033465', muted: '24/7 Support Available' },
        { title: 'Email', text: 'info@shabakah.sa', muted: 'We\'ll respond within 24 hours' },
        { title: 'Business Hours', text: 'Sunday - Thursday', muted: '8:00 AM - 5:00 PM (GMT+3)' }
    ];
    
    contactInfoCards.forEach((card, index) => {
        if (infoCardTranslations[index]) {
            const h3 = card.querySelector('h3');
            const paragraphs = card.querySelectorAll('p');
            
            if (h3) h3.textContent = infoCardTranslations[index].title;
            
            if (index === 0) {
                // Office card with 3 paragraphs
                if (paragraphs[0]) paragraphs[0].textContent = infoCardTranslations[index].text;
                if (paragraphs[1]) paragraphs[1].textContent = infoCardTranslations[index].text2;
                if (paragraphs[2]) paragraphs[2].textContent = infoCardTranslations[index].text3;
            } else if (index === 1 || index === 2) {
                // Phone and Email - keep link text but translate muted text
                const mutedText = card.querySelector('.text-muted');
                if (mutedText) mutedText.textContent = infoCardTranslations[index].muted;
            } else if (index === 3) {
                // Business hours
                if (paragraphs[0]) paragraphs[0].textContent = infoCardTranslations[index].text;
                const mutedText = card.querySelector('.text-muted');
                if (mutedText) mutedText.textContent = infoCardTranslations[index].muted;
            }
        }
    });
    
    // Social media section
    const socialTitle = document.querySelector('.contact-social h3');
    if (socialTitle) socialTitle.textContent = currentLanguage === 'ar' ? 'تابعنا' : 'Follow Us';
    
    console.log('✅ Contact page update complete!');
}

// Update Footer
function updateFooter(footer) {
    console.log('🔄 Updating footer...');
    
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
    const footerTitles = document.querySelectorAll('.footer-title');
    console.log('📄 Found', footerTitles.length, 'footer titles');
    if (footerTitles[0]) footerTitles[0].textContent = footer.sections.services;
    if (footerTitles[1]) footerTitles[1].textContent = footer.sections.company;
    if (footerTitles[2]) footerTitles[2].textContent = footer.sections.resources;
    if (footerTitles[3]) footerTitles[3].textContent = footer.sections.connect;
    
    // Footer links - Services column
    const serviceLinks = document.querySelectorAll('.footer-col:nth-child(2) .footer-links a');
    const serviceTranslations = currentLanguage === 'ar' ? [
        'البنية التحتية لتقنية المعلومات',
        'حلول مراكز البيانات',
        'أنظمة الأمن المادي',
        'الاتصالات الموحدة والتعاون',
        'ترخيص البرمجيات',
        'أجهزة المستخدم النهائي',
        'الأمن المتكامل واستمرارية الأعمال',
        'الخدمات المُدارة',
        'خدمات مزود خدمة الإنترنت (ISP)'
    ] : [
        'IT Infrastructure',
        'Data Center Solutions',
        'Physical Security Systems',
        'Unified Communications & Collaboration',
        'Software Licensing',
        'End-User Devices',
        'Integrated Security & Business Continuity',
        'Managed Services',
        'ISP Services'
    ];
    
    serviceLinks.forEach((link, index) => {
        if (serviceTranslations[index]) {
            link.textContent = serviceTranslations[index];
        }
    });
    
    // Footer links - Company column
    const companyLinks = document.querySelectorAll('.footer-col:nth-child(3) .footer-links a');
    const companyTranslations = currentLanguage === 'ar' ? [
        'من نحن',
        'قصتنا',
        'القيادة',
        'الشركاء',
        'تواصل معنا'
    ] : [
        'About Us',
        'Our Story',
        'Leadership',
        'Partners',
        'Contact'
    ];
    
    companyLinks.forEach((link, index) => {
        if (companyTranslations[index]) {
            link.textContent = companyTranslations[index];
        }
    });
    
    // Footer links - Resources column
    const resourceLinks = document.querySelectorAll('.footer-col:nth-child(4) .footer-links a');
    const resourceTranslations = currentLanguage === 'ar' ? [
        'الحلول',
        'المدونة والأفكار',
        'دراسات الحالة',
        'الدعم'
    ] : [
        'Solutions',
        'Blog & Insights',
        'Case Studies',
        'Support'
    ];
    
    resourceLinks.forEach((link, index) => {
        if (resourceTranslations[index]) {
            link.textContent = resourceTranslations[index];
        }
    });
    
    // Footer contact info
    const contactSpans = document.querySelectorAll('.footer-contact span');
    const contactTranslations = currentLanguage === 'ar' ? [
        'الرياض، المملكة العربية السعودية',
        null, // phone stays same
        null, // email stays same
        'دعم على مدار الساعة متاح'
    ] : [
        'Riyadh, Saudi Arabia',
        null,
        null,
        '24/7 Support Available'
    ];
    
    contactSpans.forEach((span, index) => {
        if (contactTranslations[index]) {
            span.textContent = contactTranslations[index];
        }
    });
    
    console.log('✅ Footer update complete!');
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
