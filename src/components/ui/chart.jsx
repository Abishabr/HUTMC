import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef(
  ({ id, className, children, config, ...props }, ref) => {
    const chartId = `chart-${id || Math.random().toString(36).substr(2, 9)}`;

    return (
      <div
        data-chart={chartId}
        ref={ref}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartContext.Provider value={{ config }}>
          <RechartsPrimitive.ResponsiveContainer>
            {children}
          </RechartsPrimitive.ResponsiveContainer>
        </ChartContext.Provider>
      </div>
    );
  }
);
ChartContainer.displayName = "ChartContainer";

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(
  ({ active, payload, className, ...props }, ref) => {
    const { config } = useChart();

    if (!active || !payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] gap-0.5 rounded-lg border bg-background p-2 text-sm shadow-lg",
          className
        )}
        {...props}
      >
        {payload.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: config[item.name]?.color || item.color,
              }}
            />
            <div className="flex flex-col">
              <span className="text-muted-foreground">
                {config[item.name]?.label || item.name}
              </span>
              <span className="font-medium">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { config } = useChart();

    if (!Object.keys(config).length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-4", className)}
        {...props}
      >
        {Object.entries(config).map(([key, item]) => (
          <div key={key} className="flex items-center gap-2">
            <div
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: item.color || item.theme?.light,
              }}
            />
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegendContent";

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  THEMES,
};
