import { Calendar, Network, CheckSquare } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="h-8 w-8 text-teal" />,
      title: "Create a Conference",
      description: "Set up a new case conference in seconds.",
    },
    {
      icon: <Network className="h-8 w-8 text-teal" />,
      title: "Invite Your Team",
      description: "Easily invite specialists, nurses, and other healthcare professionals.",
    },
    {
      icon: <CheckSquare className="h-8 w-8 text-teal" />,
      title: "Collaborate Securely",
      description: "Discuss, share, and plan with all necessary patient data in one place.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-textDark sm:text-4xl">
            Three Simple Steps to Better Collaboration
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="flex justify-center mb-6">
                <div className="rounded-full bg-teal/10 p-4">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-textDark mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-teal/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};