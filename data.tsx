import { BookText, CodeSquare, HomeIcon, UserRound, Github,Linkedin, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech ,Brain,BarChart,ServerCog,MessageSquare,Code,X} from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@devdata4689",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/ismael-centeno-gonzales-1b7190128/",
    },
    {
        id: 3,
        logo: <X size={30} strokeWidth={1} />,
        src: "#!",
    },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/JICGstatistics",
    },
    {
        id: 5,
        logo: <Twitch size={30} strokeWidth={1} />,
        src: "#!",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },

];

export const dataAboutPage = [
    {
        id: 1,
        title: "Data Science",
        subtitle: "Banco Internacional Del Perú-Interbank",
        description: "Actualmente tengo más de 4 años de experiencia en el Banco , especializado en el desarrollo de modelos de riesgo (admisión, comportamental, buró, cobranzas), segmentación de clientes y procesos de calibración de modelos. He contribuido en la generación de leads de alto valor, optimizando la adquisición de clientes y al mismo tiempo minimizando el riesgo de incumplimiento.",
        date: "Jul-21 ",
    },
    {
        id: 2,
        title: "Machine Learning Engineering",
        subtitle: "Parque Arauco DPE",
        description: "Consultor con Parque Arauco en Perú liderando la implementación de modelos de series de tiempo en AWS. Diseñé una arquitectura cloud (Data Lake, Redshift, Glue, Lambda, EMR) para consolidar datos y ejecutar modelos en tiempo real, anticipando la demanda y optimizando la estrategia comercial.",
        date: "Nov 2022",
    },
    {
        id: 3,
        title: "Data Science",
        subtitle: "Experian Perú",
        description: "Me desempeñé en el desarrollo de modelos   abarcando  problemamticas de  segmentación, credit scoring, modelos de admisión, sistemas de recomendación e investigación de mercados, impulsando la optimización de la gestión del riesgo y la generación de valor estratégico para el negocio.",
        date: "Jul 2019",
    },
    {
        id: 4,
        title: "Data Science Junior",
        subtitle: "Dúo Negocios",
        description: "Me desempeñé en la consolidación de datos desde múltiples fuentes, abordando su limpieza y estandarización para habilitar su uso en modelos de machine learning (regresión, clasificación y sistemas de recomendación)",
        date: "Nov 2018",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 5,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 6,
        text: "Empresas en las que he colaborado",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 100,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
  {
    icon: <Brain />, 
    title: "Inteligencia Artificial",
    description: "Soluciones de IA para automatizar procesos y tomar mejores decisiones.",
},
{
    icon: <BarChart />, 
    title: "Machine Learning",
    description: "Modelos predictivos y de recomendación que impulsan tu negocio.",
},
{
    icon: <ServerCog />, 
    title: "MLOps",
    description: "Despliegue y monitoreo de modelos con máxima eficiencia.",
},
{
    icon: <MessageSquare />, 
    title: "Modelos de Lenguaje (LLM)",
    description: "Chatbots y aplicaciones generativas adaptadas a tu empresa.",
},
{
    icon: <Code />, 
    title: "Backend Python & Rust",
    description: "Desarrollo backend seguro, escalable y de alto rendimiento.",
},
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema Operativos",
        images:[{image:"/windows.png",name:"Windows"},
            {image:"/linux.png",name:"Linux"},
        ],
      
    },
    {
        id: 2,
        title: "Gestion de Versiones",
        images:[{image:"/git.png",name:"Git"},
            {image:"/github.png",name:"GitHub"}],
        },
     {
        id: 3,
        title: "Programación",
        images:[{image:"/piton.png",name:"Python"},
            {image:"/rust.png",name:"Rust"},
        {image:"/java.png",name:"Java"}],
            
        },
     {
        id: 4,
        title: "Gestores  Base  Datos",
        images:[{image:"/sqlserver.png",name:"SQL Server"},
            {image:"/mysql.png",name:"MySQL"},
           
        ],
        },
     {
        id: 5,
        title: "Tecnologia Cloud",
        images:[{image:"/aws.png",name:""},
            {image:"/azure.png",name:"Azure"},
             {image:"/gcp.png",name:"GCP"}
        
        ],
        },
    {
        id: 6,
        title: "Inteligencia Artificial",
        images:[{image:"/tensor.png",name:"TensorFlow"},
            {image:"/pytorch.png",name:"Pytorch"}],
        },
        {
        id: 7,
        title: "Desarrollo Web",
        images:[{image:"/html.png",name:"HTML"},
            {image:"/css.png",name:"CSS"},
            {image:"/JS.png",name:"JS"},
            {image:"/react.png",name:"React"}
        
        ],
        },
    
];

