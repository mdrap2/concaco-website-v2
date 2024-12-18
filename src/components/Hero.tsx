import { ArrowRight, CircleHelp, Play, ShieldQuestion } from "lucide-react";
import { QuestionOutlined } from "@ant-design/icons";

export const Hero = () => {
  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAppStores = (e: React.MouseEvent) => {
    e.preventDefault();
    const appStoresSection = document.getElementById("app-stores");
    appStoresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <img
                src="/lovable-uploads/be352f3d-2422-47cb-8f41-9bfb93f4e1eb.png"
                alt="Concaco Logo"
                className="h-16 sm:h-20"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-textDark sm:text-5xl md:text-6xl">
              Connected Case Conferences.
              <span className="block text-coral">Simplified.</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Effortlessly connect medical teams, streamline case discussions,
              and improve patient outcomes—all with top-tier security.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <a
                href="#app-stores"
                onClick={scrollToAppStores}
                className="rounded-md bg-coral px-8 py-3 text-white hover:bg-coral/90 transition-colors flex items-center justify-center gap-2"
              >
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#features"
                onClick={scrollToFeatures}
                className="rounded-md border border-coral px-8 py-3 text-coral hover:bg-coral/10 transition-colors flex items-center justify-center gap-2"
              >
                Why Concaco
                <QuestionOutlined className="h-5 w-5" />
                {/* <Play className="h-5 w-5" /> */}
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <img
                src="/lovable-uploads/e339c222-f72b-4f66-8fa0-23a6765b36d2.png"
                alt="Modern conference room with natural light, plants, and minimalist design"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
