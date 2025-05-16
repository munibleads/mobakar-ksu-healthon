import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, HeartPulseIcon, UsersIcon, ActivityIcon, HospitalIcon, UserCheckIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  icon: React.ReactNode
  trend?: {
    value: string
    isPositive: boolean
    label?: string
  }
  status?: {
    label: string
    variant: "default" | "success" | "warning" | "danger"
  }
}

const MetricCard = ({ title, value, subtitle, icon, trend, status }: MetricCardProps) => {
  const getBadgeVariant = (variant: string) => {
    switch(variant) {
      case "success": return "bg-green-100 text-green-800 hover:bg-green-100"
      case "warning": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
      case "danger": return "bg-red-100 text-red-800 hover:bg-red-100"
      default: return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    }
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md bg-gradient-to-b from-white to-slate-50/50">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <div className="flex items-center space-x-2">
          {status && (
            <Badge variant="outline" className={`${getBadgeVariant(status.variant)} border-none`}>
              {status.label}
            </Badge>
          )}
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="outline" className={trend.isPositive ? "bg-green-100 text-green-800 border-none" : "bg-red-100 text-red-800 border-none"}>
              <ArrowUpIcon className={`mr-1 h-4 w-4 ${trend.isPositive ? "rotate-0" : "rotate-180"}`} />
              {trend.value}
            </Badge>
            <span className="text-xs text-muted-foreground">{trend.label || "from last month"}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export function MetricsCards() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Population"
        subtitle="Eligible for screening"
        value="2.8M+"
        icon={<UsersIcon className="h-4 w-4 text-blue-600" />}
        trend={{
          value: "15%",
          isPositive: true,
          label: "vs. last quarter"
        }}
        status={{
          label: "On Track",
          variant: "success"
        }}
      />
      <MetricCard
        title="Early Detections"
        subtitle="Stage 1 & 2 cases"
        value="23,758"
        icon={<HeartPulseIcon className="h-4 w-4 text-rose-600" />}
        trend={{
          value: "32%",
          isPositive: true,
          label: "increase in detection"
        }}
        status={{
          label: "Exceeding",
          variant: "success"
        }}
      />
      <MetricCard
        title="Screenings Done"
        subtitle="Last 30 days"
        value="275K"
        icon={<UserCheckIcon className="h-4 w-4 text-emerald-600" />}
        trend={{
          value: "12.3%",
          isPositive: true,
          label: "above target"
        }}
        status={{
          label: "High Volume",
          variant: "success"
        }}
      />
      <MetricCard
        title="Coverage Rate"
        subtitle="National average"
        value="78%"
        icon={<HospitalIcon className="h-4 w-4 text-amber-600" />}
        trend={{
          value: "8%",
          isPositive: true,
          label: "vs. last year"
        }}
        status={{
          label: "above target",
          variant: "success"
        }}
      />
    </div>
  )
} 
