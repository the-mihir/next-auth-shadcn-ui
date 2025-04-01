
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { AreaChart, Bar, BarChart, Line, LineChart } from "lucide-react";

export default function DashboardPage() {
  const { user } = useAuth();
  
  return (
    <div className="space-y-8 animate-in slide-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.name}!
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Performance metrics for the past 30 days.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] w-full bg-secondary/30 rounded-md flex items-center justify-center">
              <AreaChart className="h-8 w-8 text-muted-foreground/60" />
              <span className="ml-2 text-muted-foreground">Chart data will appear here</span>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your recent interactions and updates.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {activity.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.timestamp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const cards = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    description: "+20.1% from last month",
    icon: LineChart,
  },
  {
    title: "Subscriptions",
    value: "+2350",
    description: "+180.1% from last month",
    icon: BarChart,
  },
  {
    title: "Active Now",
    value: "+573",
    description: "+201 since last hour",
    icon: AreaChart,
  },
  {
    title: "Conversion Rate",
    value: "24.3%",
    description: "+1.3% from last week",
    icon: Bar,
  },
];

const activities = [
  {
    id: 1,
    title: "You logged in from a new device",
    timestamp: "Just now",
  },
  {
    id: 2,
    title: "Your subscription was renewed",
    timestamp: "2 hours ago",
  },
  {
    id: 3,
    title: "Your profile was updated",
    timestamp: "1 day ago",
  },
];
