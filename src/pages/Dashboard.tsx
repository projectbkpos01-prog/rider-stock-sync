import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, TrendingUp, Users } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalTransactions: 0,
    totalProducts: 0,
    activeRiders: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [transactionsResult, productsResult, ridersResult] = await Promise.all([
        supabase
          .from("transactions")
          .select("total_amount"),
        supabase
          .from("products")
          .select("id", { count: "exact", head: true }),
        supabase
          .from("user_roles")
          .select("id", { count: "exact", head: true })
          .eq("role", "rider"),
      ]);

      const totalRevenue = transactionsResult.data?.reduce((sum, t) => sum + Number(t.total_amount), 0) || 0;

      setStats({
        totalRevenue,
        totalTransactions: transactionsResult.data?.length || 0,
        totalProducts: productsResult.count || 0,
        activeRiders: ridersResult.count || 0,
      });
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Total Revenue",
      value: `Rp ${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      gradient: "gradient-success",
    },
    {
      title: "Transactions",
      value: stats.totalTransactions.toString(),
      icon: TrendingUp,
      gradient: "gradient-primary",
    },
    {
      title: "Products",
      value: stats.totalProducts.toString(),
      icon: Package,
      gradient: "gradient-primary",
    },
    {
      title: "Active Riders",
      value: stats.activeRiders.toString(),
      icon: Users,
      gradient: "gradient-success",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your warehouse operations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.gradient}`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Transaction history and distribution logs will be displayed here.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;