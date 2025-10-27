const logotext = "Fendy";
const meta = {
    title: "Efendi",
    description: "I’m Efendidata scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Efendi",
    animated: {
        first: "I miss you sa",
        second: "shopefully what we want will be achieved",
        third: "don't forget to contact me, okay",
    },
    description: "Saya seorang Frash Graduate lulusan Sarjana Teknologi dengan minat yang kuat dalam pengembangan web dan Dsign UI/UX . Saya berpengalaman dalam dukungan aplikasi, pemrosesan data, dan visualisasi informasi. Latar belakang saya di bidang sistem informasi telah memperkuatkreativitas, komunikasi, dan kemampuan kerja tim saya. Saya senang membangun situs web, aplikasi, dan desain sambil terus mengeksplorasi teknologi.",
    your_img_url: require("./assets/images/me.jpg"),
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Saya seorang Frash Graduate lulusan Sarjana Teknologi dengan minat yang kuat dalam pengembangan web dan . Saya berpengalaman dalam dukungan aplikasi, pemrosesan data, dan visualisasi informasi. Latar belakang saya di bidang sistem informasi telah memperkuat kreativitas, komunikasi, dan kemampuan kerja tim saya. Saya senang membangun situs web, aplikasi, dan desain sambil terus mengeksplorasi teknologi. ",
};
const worktimeline = [{
        jobtitle: " Badan Pusat Statistik ( INTERN )",
        where: "| Kota Subulussalam ",
        date: "2023",
    },
    {
        jobtitle: "Himpunan Mahasiswa Teknologi Informasi (HIMATIF)  ",
        where: "| Universitas Teuku Umar",
        date: "2023",
    },
    {
        jobtitle: "Himpunan Mahasiswa Kota Subulussalam (HIMASUB)",
        where: " | Aceh Barat ",
        date: "2023",
    },
     {
        jobtitle: "Himpunan Mahasiswa Pencak Silat (UKM) ",
        where: " | Univeristas Teuku Umar  ",
        date: "2021",
    }, 
];

const skills = [{
        name: "Python",
        value: 60,
    },
    {
        name: "Canva",
        value: 90,
    },
    {
        name: "Javascript",
        value: 65,
    },
    {
        name: "React",
        value: 75,
    },
    {
        name: "Figma",
        value: 80,
    },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Saya mampu merancang antarmuka pengguna yang sederhana, responsif, dan mudah digunakan dengan fokus pada pengalaman pengguna yang optimal.",
  },
  {
    title: "Web Design",
    description:
      "Saya berpengalaman dalam membangun tampilan website menggunakan HTML, CSS, dan React, serta memastikan desainnya konsisten dan modern.",
  },
  {
    title: "Frontend Development",
    description:
      "Mampu mengubah desain menjadi website interaktif menggunakan React.js dan JavaScript, serta menjaga performa dan struktur kode agar efisien.",
  },
];

const dataportfolio = [
   {
    img: "assets/images/projects/project1.jpg",
    title: "Sistem Informasi Desa Namo Buaya",
    description: "Menggunakan metode AES 128-bit berbasis web, untuk keamanan data administrasi desa.",
    link: "#",
  },
  {
     img: "assets/images/projects/project2.jpg",
    description: "Analisis penggunaan aplikasi Asana untuk meningkatkan manajemen waktu pegawai. ",
    link: "#",
  },
  {
   img: "assets/images/projects/project3.jpg",
    description: "Perancangan dan pengembangan web untuk desa Namo Buaya berbasis OpenSID.",
    link: "#",
  },
  {
     img: "assets/images/projects/project4.jpg",
    description: "Perancangan dan Pengembangan aplikasi web untuk pemilik kost daerah meurebo, Aceh Barat.",
    link: "#",
  },
  {
    img: "assets/images/projects/project5.jpg",
    description: "Eksperimen UI dengan efek hover dinamis.",
    link: "#",
  },
  {
    img: "assets/images/projects/project6.jpg",
    description: "Portofolio Web Pribadi",
    link: "#",
  },
];


const contactConfig = {
    YOUR_EMAIL: "efendi.tif20@gmail.com",
    YOUR_FONE: "0813-5132-6229",
    description: "Saya selalu terbuka untuk berdiskusi, berkolaborasi, atau sekadar berbagi ide baru. Jika kamu memiliki proyek, pertanyaan, atau peluang kerja sama, jangan ragu untuk menghubungi saya.Setiap pesan akan saya tanggapi dengan senang hati. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Fennn14",
    facebook: "https://facebook.com/fendysyahputra",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};