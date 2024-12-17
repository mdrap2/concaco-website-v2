import { Hospital, Shield, Users } from "lucide-react";

export const Hero = () => {
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
              Connected Case Conferences
              <span className="block text-coral">for Medical Teams</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Empower your medical team with secure, seamless collaboration. Connect instantly with healthcare providers across locations to deliver better patient outcomes.
            </p>
            <div className="mt-8 flex gap-4 sm:justify-center lg:justify-start">
              <a href="#" className="rounded-md bg-coral px-8 py-3 text-white hover:bg-coral/90 transition-colors">
                Get Started
              </a>
              <a href="#features" className="rounded-md border border-coral px-8 py-3 text-coral hover:bg-coral/10 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:col-span-6 lg:mt-0">
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Hospital className="h-8 w-8 text-teal" />
                  <p className="text-gray-600">Connect across medical practices</p>
                </div>
                <div className="flex items-center gap-4">
                  <Shield className="h-8 w-8 text-teal" />
                  <p className="text-gray-600">Secure communication platform</p>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-8 w-8 text-teal" />
                  <p className="text-gray-600">Collaborative case management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};