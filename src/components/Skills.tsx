import { Briefcase, Code, Palette } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "HR Skills",
      skills: ["ATS (Ceipal)", "LinkedIn Recruitment", "Naukri", "Payroll Basics", "Talent Acquisition", "Employee Engagement"],
      color: "from-accent/20 to-accent/5",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Skills",
      skills: ["HTML & CSS", "JavaScript", "Node.js", "Python", "Java", "C++", "OOP Concepts", "AI Tools", "Open-source"],
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Skills",
      skills: ["Photoshop", "Illustrator", "Canva", "Premiere Pro", "DaVinci Resolve", "CapCut"],
      color: "from-pink-500/20 to-pink-500/5",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-accent">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 space-y-6 hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-accent mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
