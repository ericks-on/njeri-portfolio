import Link from "next/link";
import { FaGithub, FaInstagram, FaKaggle, FaLinkedinIn } from "react-icons/fa";

export default function HomeSummary() {
    const socials = {
        github: "https://www.github.com/njeri-mb",
        linkedin: "https://www.linkedin.com/in/njeri-mburu-datascientist",
    }
    return (
        <div className="flex flex-col px-6 gap-6 md:w-3/5 ">
            <h1 className="text-6xl md:text-8xl text-yellow-500">
                <strong>Hey there!</strong>
            </h1>
            <div className="flex">
                <div className="flex gap-4 justify-center items-center">
                    <span className="text-3xl md:text-8xl">I&apos;m </span>
                    <div className="p-1 relative rounded-lg animate-bounce ease-in-out bg-gradient-to-r from-green-500 via-blue-500 to-purple-500">
                        <div className="bg-background flex gap-4 rounded-lg p-2">
                            <span className="text-blue-500 flex gap-4">
                                <span className="text-xl md:text-4xl">N</span>
                                <span className="text-xl md:text-4xl">j</span>
                                <span className="text-xl md:text-4xl">e</span>
                                <span className="text-xl md:text-4xl">r</span>
                                <span className="text-xl md:text-4xl">i</span>
                            </span>
                            <span className="text-blue-500 flex gap-4 text-2xl md:text-4xl">
                                Mburu
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
                <p className="text-4xl border-green-500 border rounded p-2">
                    <strong>Data Scientist</strong>
                </p>


                <p className="text-4xl text-yellow-500 border-green-500 border rounded p-2">
                    <strong>Data Analyst</strong>
                </p>
            </div>
            <div>
                <p className="text-2xl">
                A results-driven Data Scientist with a background in Computer Science
                and a robust foundation in data analysis, machine learning, and predictive analytics.
                </p>
            </div>
            {/* socials icons with link */}
            <div className="flex gap-4">
                <Link href={socials.github} className="h-16 w-16" target="blank">
                    <FaGithub   className="h-16 w-16"/>
                </Link>
                <Link href={socials.linkedin} className="h-16 w-16" target="blank">
                    <FaLinkedinIn  className="h-16 w-16"/>
                </Link>
            </div>
            <div className="flex gap-4">
                <div className="shadow rounded-md p-2 shadow-blue-500 flex items-center justify-center w-48">
                    <Link href="/contact">
                        <p>Contact me</p>
                    </Link>
                </div>

                <div className="shadow rounded-md p-2 shadow-blue-500 flex items-center justify-center w-48">
                    <a href="/docs/Resume.docx" target="_blank">
                        <p>Resume</p>
                    </a>
                </div>
            </div>
            

        </div>
    );
}
