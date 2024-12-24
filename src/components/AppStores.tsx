import { Apple, PlayCircle } from "lucide-react";

export const AppStores = () => {
  return (
    <div id="app-stores" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-textDark sm:text-4xl">
          Get Started with Concaco Today
        </h2>
        <p className="mt-4 text-lg text-gray-600 mb-8">
          Download Concaco now and transform the way your medical team
          collaborates.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Apple className="h-6 w-6" />
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="https://apps.apple.com/us/app/concaco/id6739583920?platform=iphone"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <PlayCircle className="h-6 w-6" />
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-lg font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
