import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Package, Users, TrendingUp, Warehouse, LogOut } from "lucide-react";

const Dashboard = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-card">
      <nav className="bg-sidebar border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-sidebar-foreground">Rider Stock Sync</h1>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => navigate("/products")} className="text-sidebar-foreground">
              Products
            </Button>
            <Button variant="ghost" onClick={signOut} className="text-sidebar-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Admin Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's your business overview.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0.00</div>
              <p className="text-xs text-muted-foreground">No sales yet</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Products</CardTitle>
              <Package className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Total products</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Riders</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Registered riders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Warehouse Stock</CardTitle>
              <Warehouse className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Items in warehouse</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your inventory and operations</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Button
              onClick={() => navigate("/products")}
              className="h-24 flex-col gap-2"
              variant="outline"
            >
              <Package className="h-6 w-6" />
              Manage Products
            </Button>
            <Button
              onClick={() => {}}
              className="h-24 flex-col gap-2"
              variant="outline"
            >
              <Warehouse className="h-6 w-6" />
              Warehouse Stock
            </Button>
            <Button
              onClick={() => {}}
              className="h-24 flex-col gap-2"
              variant="outline"
            >
              <Users className="h-6 w-6" />
              Distribute to Riders
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;