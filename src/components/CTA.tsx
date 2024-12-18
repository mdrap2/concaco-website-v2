import { Link } from "react-router-dom";

export const CTA = () => {
  const scrollToAppStores = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("app-stores");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Case Conferences?</h2>
          <p className="text-xl text-gray-600 mb-8">Join medical teams worldwide using Concaco to improve patient outcomes.</p>
          <button
            onClick={scrollToAppStores}
            className="bg-coral text-white px-8 py-3 rounded-md hover:bg-coral/90 transition-colors"
          >
            Get Started
          </button>
          <div className="mt-8 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-coral transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};