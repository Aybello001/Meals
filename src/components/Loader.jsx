import { FaUtensils } from "react-icons/fa";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          {/* Pulsing circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-orange-200 rounded-full animate-ping opacity-20"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-orange-300 rounded-full animate-pulse opacity-40"></div>
          </div>
          
          {/* Icon */}
          <div className="relative w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
            <FaUtensils className="text-white text-4xl animate-bounce" />
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Niger<span className="text-orange-600">Meals</span>
        </h2>
        <p className="text-gray-600 mb-6">Preparing your delicious meals...</p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full animate-progress"></div>
        </div>

        {/* Dots Animation */}
        <div className="flex gap-2 justify-center mt-6">
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></span>
          <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}