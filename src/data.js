const introInfo = {
    name: 'Zainuz Zuha',
    title: 'Mahasiswa Pengangguran',
    location: 'Jepara, Indonesia',
    image: 'ec.jpg',
}

//dynamic icon
const socialMediaInfo = [{
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/z-zuha/',
        username: 'zainuz zuha',
        displayName: 'linkedin.com/z-zuha'
    },

    {
        name: 'github',
        link: 'https://github.com/zain-design',
        username: 'zain-design',
        displayName: 'github.com/zain-design'
    }
]


const contactInfo = [
    {
        name: 'envelope',
        context: 'zainuzzuha@gmail.com',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:zainuzzuha@gmail.com'
    },
    {
        name: 'phone-square',
        context: '+62082121212803',
        size: '23px',
        style: "font-size:23px;margin-right: 10px;",
        link: 'tel:+6282121212803'
    },
]

const summaryInfo = 
    'Hallo, nama saya Zainuz Zuha. saya adalah mahasiswa Universitas Muria Kudus semester 6 program studi Teknik Informatika. Saya sangat tertarik dengan bidang literasi dan teknologi. Saya mendalami pemograman web khususnya Front-end Development. saya menguasai HTML5, CSS3 dan Javascript ES6. Saya menguasai frame work VUe js, namun juga memiliki pengalaman dengan framework lain seperti Code Igniter dan Laravel sebagai back-end.'


//desc v-html 
const experinceInfo = [
    {
        workAt: 'Freelancer',
        position: 'Layouter',
        duration: '2019 – Present',
        description: 'berkerja sebagai layouter majalah bebas',
        techs: ["Adobe Indesign", "CorelDraw"]
    },
    {
        workAt: 'Penakampus.online',
        position: 'web Admin',
        duration: 'jan 2021 - des 2021',
        description: 'memanage halaman portal berita LPM pena kampus.',
        techs: ["Blogger", "xml"]
    },
    {
        workAt: 'LPK Widi Course',
        position: 'Full Stack Developer',
        duration: 'Jan 2022 - feb 2022',
        description: 'mengerjakan aplikasi penerimaan peserta didik baru.',
        techs: ["Code Igniter"]
    },
    {
        workAt: 'LPM Pena Kampus',
        position: 'Pimpinan Umum',
        duration: 'Jan 2022 - Present',
        description: 'Sebagai ketua organisasi kemahasiswaan yang memiliki fokus bidang kejurnalistikan.',
        techs: ["Leadership"]
    },
]

const educationInfo = [
    {
        school: 'Pondok Pesantren Ali Maksum',
        location: 'Bantul, Yogyakarta',
        title: 'Santri',
        duration: '2012-2019',
        description: '',
    },
    {
        school: 'Multimedia University',
        location: 'Malaysia',
        title: 'BSc in Technology Information',
        duration: '2021',
        description: '',
    },
    {
        school: 'Universitas Muria Kudus',
        location: 'Kudus, Indonesia',
        title: 'Student',
        duration: '2019 - Present',
        description: '',
    },
]

const volunteerInfo = [
    // {
    //     organisation: 'The English Studio Language School',
    //     title: 'Student',
    //     duration: 'July 2018 - Sep 2018',
    //     description: 'London,UK',
    // },
    {
        organisation: 'UKM Jurnalistik',
        title: 'Organization Manager',
        duration: '2019 - present',
        description: '',
    }, {
        organisation: 'Developer Student Community by Google',
        title: 'member',
        duration: '2020 - present',
        description: '',
    }
]


const certificateInfo = [
    {
        organisation: 'Dicoding',
        title: 'sertifikat roadmap front-end developer',
        duration: 'Feb,2021',
        description: '',
    },
    {
        organisation: 'Kominfo',
        title: 'entrepeneur content creator',
        duration: 'sep 2021',
        description: '',
    },
]

const projectInfo = [{
        title: 'Project 1',
        meta: 'Propulsion Engineer',
        description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
        images: [{
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
            }
        ]
    },
    {
        title: 'Project 1',
        meta: 'Propulsion Engineer',
        description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
        images: [{
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
            }
        ]
    }
]


const skillInfo = [
    {
        name: 'Javascript',
        rate: 90,
    },
    {
        name: 'Html/CSS',
        rate: 90,
    },{
        name: 'Php',
        rate: 55,
    }, 
    {
        name: 'VueJS',
        rate: 90,
    },
    {
        name: 'Apps Script',
        rate: 85,
    },
    {
        name: 'Python',
        rate: 50,
    },
    
]

const otherSkillInfo = ['CorelDraw', 'Indesign', 'office', 'git', 'nodeJs', 'Notion']

const proSkillInfo = ['Leadership','Komunikasi yang baik','Cepat belajar','Strong problem solver',]

// 0,1,2,3,4,5
const languageInfo = [{
        name: 'Bahasa Indonesia',
        rate: 5,
        level: 'Native',
    },
    {
        name: 'English',
        rate: 4,
        level: 'Intermediete',
    },
    {
        name: 'Arab',
        rate: 1,
        level: 'Elementary',
    }
]



const interestInfo = [{
        name: 'writer',
        description: "menulis baik fiksi dan essay",
    },
    {
        name: 'Bersepeda',
        description: "",
    },
    {
        name: 'Book reviewer',
        description: "10+ buku telah direview",
    },
    {
        name: 'DIY',
        description: "",
    },
]

export default {
    introInfo: introInfo,
    socialMediaInfo: socialMediaInfo,
    experinceInfo: experinceInfo,
    educationInfo: educationInfo,
    projectInfo: projectInfo,
    skillInfo: skillInfo,
    certificateInfo: certificateInfo,
    volunteerInfo: volunteerInfo,
    languageInfo: languageInfo,
    contactInfo: contactInfo,
    interestInfo: interestInfo,
    summaryInfo: summaryInfo,
    otherSkillInfo: otherSkillInfo,
    proSkillInfo: proSkillInfo
}
