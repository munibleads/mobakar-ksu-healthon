"use client"

import * as React from "react"
import { ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"

export interface ChartConfig {
  [key: string]: {
    label: string
    color: string
  }
}

interface ChartContextValue {
  config?: ChartConfig
}

const ChartContext = React.createContext<ChartContextValue>({})

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: ChartConfig
  children: React.ReactElement
}

function ChartContainer({
  children,
  config,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <ChartContext.Provider value={{ config }}>
      <div className={cn("w-full h-[300px]", className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

// Simple tooltip content component for our use case
function ChartTooltipContent({ active, payload, label }: any) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg border bg-card p-2 shadow-sm">
      <div className="grid grid-flow-col gap-2">
        <div className="font-medium">{label}</div>
      </div>
      <div className="flex flex-col gap-0.5">
        {payload.map((item: any, index: number) => (
          <div
            key={index}
            className="grid grid-flow-col items-center justify-between gap-2"
          >
            <div className="flex items-center gap-1">
              <div
                className="size-1.5 rounded-full"
                style={{ backgroundColor: item.fill || item.color }}
              />
              <div>{item.name}</div>
            </div>
            <div>{item.value.toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ChartContainer, ChartTooltipContent } 