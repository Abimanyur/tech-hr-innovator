import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-32 h-32 bg-accent/20 rounded-3xl rotate-45 floating-shape" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[25%] w-24 h-24 bg-accent/10 rounded-2xl floating-shape" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-[15%] w-40 h-40 bg-accent/15 rounded-3xl rotate-12 floating-shape" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-[5%] w-20 h-20 bg-accent/10 rounded-xl floating-shape" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 glass-card rounded-full text-sm font-medium text-accent mb-4">
              MBA HR | Tech-Enabled Professional
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Abimayu R
            </h1>
            
            <div className="text-2xl md:text-3xl text-muted-foreground font-light">
              Creative Skillset
            </div>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Bridging HR strategy with technology, design, and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
                <a href="/resume.pdf" download="Abimayu_R_Resume.pdf">
                  Download Resume
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold" asChild>
                <a href="#contact">
                  Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Placeholder for Profile */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto glass-card rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-48 h-48 mx-auto bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-6xl">👨‍💼</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Professional Profile Photo
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-2xl rotate-12 floating-shape" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-xl -rotate-12 floating-shape" style={{ animationDelay: "1s" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default Hero;
