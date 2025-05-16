"use client"

import { TrendingUp, ChevronRight } from "lucide-react"
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  LabelList, 
  XAxis, 
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Enhanced region data with percentages and better formatting
const regionData = [
  { 
    region: "Riyadh", 
    screenings: 225000, 
    target: 250000,
    percentage: 90,
    status: "high" 
  },
  { 
    region: "Makkah", 
    screenings: 160000,
    target: 200000,
    percentage: 80,
    status: "medium" 
  },
  { 
    region: "Eastern", 
    screenings: 153000,
    target: 180000,
    percentage: 85,
    status: "high" 
  },
  { 
    region: "Madinah", 
    screenings: 96000,
    target: 120000, 
    percentage: 80,
    status: "medium"
  },
  { 
    region: "Asir", 
    screenings: 75000,
    target: 100000,
    percentage: 75,
    status: "medium"
  },
  { 
    region: "Qassim", 
    screenings: 68000,
    target: 90000,
    percentage: 76,
    status: "medium"
  }
]

// Custom bar color function based on performance status
const getBarColor = (entry: any) => {
  switch(entry.status) {
    case "high":
      return "#10b981"; // green-500
    case "medium":
      return "#0ea5e9"; // sky-500
    case "low":
      return "#f59e0b"; // amber-500
    default:
      return "#6366f1"; // indigo-500
  }
};

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  
  const data = payload[0].payload;
  
  return (
    <div className="p-3 bg-white rounded-lg shadow-md border border-slate-100">
      <p className="font-medium text-sm">{data.region} Region</p>
      <div className="flex justify-between gap-6 mt-2">
        <div>
          <p className="text-xs text-slate-500">Screenings</p>
          <p className="font-semibold">{data.screenings.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Target</p>
          <p className="font-semibold">{data.target.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-slate-500">Completion</p>
          <p className="font-semibold text-green-600">{data.percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export function RegionalChart() {
  return (
    <div className="flex flex-col">
      <ResponsiveContainer width="100%" height={180}>
        <BarChart
          data={regionData}
          margin={{ top: 20, right: 10, left: 0, bottom: 5 }}
          barSize={28}
        >
          <defs>
            {regionData.map((entry, index) => (
              <linearGradient 
                key={`gradient-${entry.region}`} 
                id={`gradient-${entry.region}`} 
                x1="0" y1="0" x2="0" y2="1"
              >
                <stop offset="0%" stopColor={getBarColor(entry)} stopOpacity={0.9} />
                <stop offset="100%" stopColor={getBarColor(entry)} stopOpacity={0.6} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            dataKey="region" 
            tickLine={false} 
            axisLine={false}
            tick={{ fill: '#666', fontSize: 11 }}
            dy={5}
          />
          <YAxis 
            tickFormatter={(value) => `${(value / 1000)}k`}
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#666', fontSize: 11 }}
            width={30}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }} />
          <Bar 
            dataKey="screenings" 
            name="Screenings"
            radius={[4, 4, 0, 0]}
            fill="#8884d8"
            animationDuration={1500}
          >
            {regionData.map((entry, index) => (
              <defs key={`cell-${index}`}>
                <linearGradient id={`colorUv${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={getBarColor(entry)} stopOpacity={0.9}/>
                  <stop offset="95%" stopColor={getBarColor(entry)} stopOpacity={0.6}/>
                </linearGradient>
              </defs>
            ))}
            {regionData.map((entry, index) => (
              <Bar 
                key={`bar-${index}`}
                dataKey="screenings"
                fill={`url(#colorUv${index})`}
                radius={[4, 4, 0, 0]}
              />
            ))}
            <LabelList
              dataKey="percentage"
              position="top"
              formatter={(value: number) => `${value}%`}
              style={{ fontSize: 11, fontWeight: 'bold', fill: '#666' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex items-center justify-between border-t border-slate-100 pt-2 mt-1 mb-2">
        <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
          <TrendingUp className="h-3 w-3" /> 
          <span>12.4% increase this quarter</span>
        </div>
        <Button variant="ghost" size="sm" className="h-6 text-xs text-blue-600 px-2 py-0">
          Details
          <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      </div>

      <div className="border-t border-slate-100 pt-2">
        <div className="text-xs font-medium text-slate-600 mb-1.5">Top Regions by Completion Rate</div>
        <div className="grid grid-cols-3 gap-1 text-xs">
          <div className="col-span-1 font-medium">Region</div>
          <div className="col-span-1 text-center font-medium">Screenings</div>
          <div className="col-span-1 text-right font-medium">Completion</div>
        </div>
        
        {regionData.slice(0, 3).map((region, index) => (
          <div key={index} className="grid grid-cols-3 gap-1 text-xs py-1 border-b border-slate-50">
            <div className="col-span-1 flex items-center">
              <div 
                className="w-1.5 h-1.5 rounded-full mr-1.5"
                style={{ backgroundColor: getBarColor(region) }}
              ></div>
              {region.region}
            </div>
            <div className="col-span-1 text-center">
              {(region.screenings / 1000).toFixed(0)}k
            </div>
            <div className="col-span-1 text-right font-medium" style={{ color: getBarColor(region) }}>
              {region.percentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 