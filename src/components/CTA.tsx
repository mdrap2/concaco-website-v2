import { ArrowRight } from "lucide-react";

export const CTA = () => {
  const scrollToAppStores = (e: React.MouseEvent) => {
    e.preventDefault();
    const appStoresSection = document.getElementById('app-stores');
    if (appStoresSection) {
      appStoresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#e96e31]">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform your medical team collaboration?
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#app-stores"
                onClick={scrollToAppStores}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-[#e96e31] hover:bg-gray-50"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};