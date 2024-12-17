import { MessageSquare, Globe, Smartphone } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Real-time Collaboration",
      description: "Instant communication between medical teams for quick decision making.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cross-location Access",
      description: "Connect with healthcare providers regardless of their location.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Ready",
      description: "Available on iOS and Android for collaboration on the go.",
    },
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-textDark sm:text-4xl">
            Why Choose Concaco?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Designed by medical professionals, for medical professionals.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-4 inline-block rounded-xl bg-primary p-3 text-white">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-textDark">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};