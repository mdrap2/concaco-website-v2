import { Lock, FileCheck, History } from "lucide-react";

export const Security = () => {
  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "HIPAA-compliant platform",
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "End-to-end encrypted video and file sharing",
    },
    {
      icon: <History className="h-6 w-6" />,
      title: "Audit logs for accountability",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-textDark sm:text-4xl">
            Your Patients' Privacy Is Our Priority
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Concaco is designed to meet the highest standards of data protection and compliance.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
            >
              <div className="rounded-full bg-teal/10 p-4 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-textDark">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};