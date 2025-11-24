import { Sparkles, FolderKanban } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Emerging <span className="text-accent">Projects</span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Current Project */}
          <div className="glass-card rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up">
            <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
              <FolderKanban className="w-6 h-6 text-accent" />
            </div>
            
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-semibold text-accent">
                IN PROGRESS
              </div>
              <h3 className="text-2xl font-bold">MBA HR Final Semester Project</h3>
              <p className="text-muted-foreground">
                Currently working on comprehensive HR research project integrating technology solutions.
              </p>
            </div>
          </div>

          {/* Future Projects */}
          <div className="glass-card rounded-3xl p-8 space-y-4 hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-blue-400" />
            </div>
            
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-xs font-semibold text-blue-400">
                COMING SOON
              </div>
              <h3 className="text-2xl font-bold">HR Tech Experiments</h3>
              <p className="text-muted-foreground">
                Upcoming projects in web development and HR technology integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
