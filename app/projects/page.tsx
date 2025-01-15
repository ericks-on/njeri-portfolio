import Image from "next/image";
import { FaLink } from "react-icons/fa";

export default function Projects() {
    const projects = [
        {
          title: "Toy Sales Analytics",
          description: "Developed a Power BI dashboard segmented by branch, product, time, customer, and order, providing actionable insights. Optimized sales trends and performance tracking through Python-based data preprocessing, analysis, and visualization, enhancing decision-making with dynamic and clear reporting.",
          link: "https://github.com/OjuokOchi/TOY-SALES-ANALYTICS",
          techStack: ["Python", "Power BI", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
          image: "/images/analytics.jpg" 
        },
        {
          title: "NLP: AI-Generated Text Detection",
          description: "Created a machine learning model for detecting AI-generated text using various algorithms. Integrated the model into a Flask-based web application.",
          link: "https://github.com/ericks-on/NLP-Ai_generated_Text_detection",
          techStack: ["Python", "NLP", "Scikit-learn", "TensorFlow", "Flask", "NLTK", "Pandas"],
          image: "/images/aitext.jpg" 
        },
        {
          title: "Coffee Data Analysis and modeling project",
          description: "Predicted domestic coffee consumption by analyzing production data. Used engineered features to improve model accuracy.",
          link: "https://github.com/njeri-mb/Coffee-Data-Analysis-and-Modeling",
          techStack: ["Python", "Linear Regression", "Grid Search", "Scikit-Learn", "Matplotlib", "Pandas"],
          image: "/images/coffee.webp" 
        }
      ];
      
    return (
        <div className="pt-20 flex flex-col gap-6">
            <h1 className="text-6xl text-center">Projects</h1>
            <div className="flex flex-wrap justify-center h-">
                {projects.map((project, index) => (
                    <div key={index} className="w-full md:w-1/3 h-1/2 p-4">
                        <div className="shadow-blue-500 shadow rounded-lg p-4 h-full">
                            <Image 
                                src={project.image}
                                alt={project.title}
                                width={640}
                                height={640}
                                className="w-full h-48 object-cover object-center" />
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">{project.title}</h2>
                                <p className="mt-2 text-gray-600">{project.description}</p>
                                <div className="mt-4 flex items-center gap-2">
                                    <a href={project.link} target="blank" className="text-blue-500 hover:underline">View on GitHub</a>
                                    <FaLink className="inline-block ml-2" />
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span key={index} className="mr-2 border border-green-500 rounded-full px-2 py-1 text-sm">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>

    );
}