import { FileText, ExternalLink, Calendar, Users, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const PublicationsSection = () => {
  const publications = [
    {
      id: 1,
      title: "Cloud Based Automated Control System Workshops and Rooms for Controlling Parameters",
      authors: "Rishabh Kumar Mandal, Dinesh Kumar, Ravinder Singh, Pragya Anup, Shekhar Chamoli, Pinki Singh",
      journal: "IEEE Conference on Advances in Computer Science, Electrical, Electronics, and Communication Technologies (CE2CT)",
      year: "2025",
      status: "Published",
      description: "The guarantee accurate control of crucial variables like temperature, humidity, pressure, and equipment efficiency, these systems make use of IoT devices, AI techniques, and big data analytics. Through sophisticated data perspectives, the cloud-based strategy enables predictive maintenance, improves flexibility, and lowers operating expenses. Stakeholders may make prompt, data-driven choices from anywhere with remote access to control rooms. These seminars provide practical experience with cloud-controlled settings and function as training and development centres. The system's flexibility to meet a range of industrial demands is further enhanced by its compatibility with external tools and equipment. ",
      link: "https://doi.org/10.1109/CE2CT64011.2025.10939521",
      type: "Conference Paper"
    },
    {
      id: 2,
      title: "A Comparative Analysis of Artificial Intelligence and Business Intelligence Using Big Data Analytics",
      authors: "Rishabh Kumar Mandal, Bhagatah chandra Marella, Gopi Chand Vegineni, Sireesha Addankani, Ehsaan Ellahi, Arun kumar",
      journal: "IEEE Conference on Advances in Computer Science, Electrical, Electronics, and Communication Technologies (CE2CT)",
      year: "2025",
      status: "Published",
      description: " Using big data-driven approaches to optimize talent recruitment is essential for improved decisions in the cutthroat world of BI. The efficacy of many machine learning algorithms to increase recruiting performance and accuracy is compared in this investigation. For optimizing, cross-validating, and hyperparameter modification were employed. The Random Forest (RF) algorithm has the greatest accuracy (92.9%), trailed by the Gradient Boosting Classifying system ($mathbf{92.6 }$) and the neural network (NNs) models (${92}.7 $).",
      link: "https://doi.org/10.1109/CE2CT64011.2025.10939850",
      type: "Conference Paper"
    },
    {
      id: 3,
      title: "AI Tongue Diagnosis: Expert System with LLMs for Abdominal Disease Detection through Mobile App",
      authors: "Rishabh Kumar Mandal, Gaurav kumar, Khushi Kumari, Azad Singh, Dr Nee; Mani",
      journal: "Springer Conference on Mind, Brain, and Consciousness (MBCC 2025)",
      year: "2025",
      status: "Paper Selected",
      description: "This research bridges the gap in personalized health assessment by proposing a hybrid AI expert system, called Expert Therapist, that integrates tongue image analysis with a rule based questionnaire to enhance diagnostic accuracy. The system uses a two-inference engine based on a Large Language Model (LLM) to organize expert knowledge into questionnaires and incorporates holistic therapeutic plans based on Ayurvedic principles",
      link: "https://iksmha.iitmandi.ac.in/mbcc/2025/",
      type: "Conference Paper"
    },
    {
      id: 4,
      title: "AI-Driven Multi Chambered Filtration System",
      authors: "Rishabh Kumar Mandal, Akanksha Chauhan",
      
      year: "2025",
      status: "Published",
      description: "Innovative patent of an intelligent multi-chambered water filtration system using AI algorithms for optimal filtration efficiency and water quality monitoring.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=arsTVWgAAAAJ&citation_for_view=arsTVWgAAAAJ:d1gkVwhDpl0C",
      type: "Patent"
    },
    {
      id: 5,
      title: "Hi-Tech Waste Segregator",
      authors: "Rishabh Kumar Mandal, Development Team",
     
      year: "2024",
      status: "Published",
      description: "Published patent for an automated waste segregation system utilizing computer vision and machine learning for efficient waste classification and management.",
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=arsTVWgAAAAJ&citation_for_view=arsTVWgAAAAJ:u-x6o8ySG0sC",
      type: "Patent"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'Under Review':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <section id="publications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-ocean-400 bg-clip-text text-transparent">
            Publications & Patents
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Research contributions in academic publications and IPR claims for Tech Property in the feild of technology and innovation
          </p>
          
          
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div
                key={pub.id}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-ocean-400/50 transition-all duration-500 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <FileText className="text-ocean-300 mr-3" size={24} />
                    <span className="text-ocean-300 font-medium">{pub.type}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(pub.status)}`}>
                    {pub.status}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 hover:text-ocean-300 transition-colors">
                  {pub.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-white/70">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{pub.authors}</span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{pub.journal} • {pub.year}</span>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {pub.description}
                </p>

                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-ocean-500/20 hover:bg-ocean-500/30 text-ocean-300 rounded-lg transition-colors duration-300 text-sm font-medium rounded-hover"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Read Publication
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
