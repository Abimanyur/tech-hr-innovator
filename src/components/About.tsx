import { GraduationCap } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "MBA-HR",
      institution: "Meenakshi Academy of Higher Education & Research",
      year: "2024–2026",
    },
    {
      degree: "B.Com General",
      institution: "Alpha Arts & Science College",
      year: "2021–2024",
    },
    {
      degree: "HSC",
      institution: "St. Mary's MHSS",
      year: "2020–2021",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="text-accent">Me</span>
          </h2>
          
          <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8 animate-fade-in-up">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I am an <span className="text-foreground font-semibold">MBA HR graduate</span> with strong technical and creative skills. I work with ATS tools like <span className="text-accent">Ceipal</span> and manage recruitment platforms such as <span className="text-accent">LinkedIn</span> and <span className="text-accent">Naukri</span>.
              </p>
              
              <p>
                I'm skilled in graphic designing using <span className="text-foreground">Photoshop, Illustrator & Canva</span>, and proficient in video editing software like <span className="text-foreground">Premiere Pro, DaVinci Resolve, and CapCut</span>.
              </p>
              
              <p>
                I have coding knowledge in <span className="text-foreground">HTML, CSS, JavaScript, Node.js, Python, Java, and C++</span> with strong <span className="text-accent">OOP concept expertise</span>.
              </p>
              
              <p>
                Passionate about <span className="text-accent">AI, open-source tech</span>, and applying technology to HR solutions. My career goal is to become a <span className="text-foreground font-semibold">top-level HR leader</span> with deep tech integration.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="pt-8 border-t border-border">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-6 border-l-2 border-accent/30 last:border-l-0 last:pb-0"
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent" />
                    <div className="space-y-1">
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-accent font-medium">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
