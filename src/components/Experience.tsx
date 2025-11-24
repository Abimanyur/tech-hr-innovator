import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="text-accent">Experience</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-10 space-y-6 animate-fade-in-up">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">HR Intern</h3>
                  <p className="text-xl text-accent font-medium">Magic Bus India Foundation</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>March 2025 – April 2025</span>
                  </div>
                </div>
                
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    • Assisted HR functions like talent acquisition, documentation and employee engagement
                  </p>
                  <p className="text-sm italic">
                    Additional responsibilities and achievements to be updated upon internship completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
