import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendValue,
  color = "orange",
  loading = false 
}) {
  // Color variants
  const colorClasses = {
    orange: {
      bg: "bg-orange-100",
      icon: "text-orange-600",
      gradient: "from-orange-500 to-orange-600"
    },
    blue: {
      bg: "bg-blue-100",
      icon: "text-blue-600",
      gradient: "from-blue-500 to-blue-600"
    },
    green: {
      bg: "bg-green-100",
      icon: "text-green-600",
      gradient: "from-green-500 to-green-600"
    },
    purple: {
      bg: "bg-purple-100",
      icon: "text-purple-600",
      gradient: "from-purple-500 to-purple-600"
    },
    red: {
      bg: "bg-red-100",
      icon: "text-red-600",
      gradient: "from-red-500 to-red-600"
    },
    yellow: {
      bg: "bg-yellow-100",
      icon: "text-yellow-600",
      gradient: "from-yellow-500 to-yellow-600"
    }
  };

  const colors = colorClasses[color] || colorClasses.orange;

  // Determine trend direction
  const isPositive = trend === "up";
  const isNegative = trend === "down";

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className={`w-14 h-14 ${colors.bg} rounded-lg`}></div>
        </div>
        <div className="h-8 bg-gray-200 rounded w-32 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-20"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 group">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wide">
          {title}
        </h3>
        
        {/* Icon */}
        <div className={`${colors.bg} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
          {Icon && <Icon className={`${colors.icon}`} size={24} />}
        </div>
      </div>

      {/* Value */}
      <div className="mb-3">
        <p className="text-3xl font-bold text-gray-800">
          {value}
        </p>
      </div>

      {/* Trend */}
      {(trend && trendValue) && (
        <div className="flex items-center gap-2">
          {isPositive && (
            <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <TrendingUp size={14} />
              <span className="text-xs font-semibold">{trendValue}</span>
            </div>
          )}
          
          {isNegative && (
            <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <TrendingDown size={14} />
              <span className="text-xs font-semibold">{trendValue}</span>
            </div>
          )}
          
          <span className="text-xs text-gray-500">vs last month</span>
        </div>
      )}

      {/* Optional gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none`}></div>
    </div>
  );
}