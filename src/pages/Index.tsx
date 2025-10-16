import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, LayoutDashboard, LogOut } from "lucide-react";

const Index = () => {
  const { user, isAdmin, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user && isAdmin) {
      navigate("/dashboard");
    }
  }, [user, isAdmin, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-primary/5">
      <nav className="bg-sidebar border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-sidebar-foreground">Rider Stock Sync</h1>
          <Button variant="ghost" onClick={signOut} className="text-sidebar-foreground">
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Welcome to Rider Stock Sync</h2>
            <p className="text-lg text-muted-foreground">
              Your complete solution for warehouse management and point of sale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {isAdmin && (
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/dashboard")}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <LayoutDashboard className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Admin Dashboard</CardTitle>
                  <CardDescription>
                    Manage products, warehouse stock, distributions, and view reports
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    Go to Dashboard
                  </Button>
                </CardContent>
              </Card>
            )}

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/pos")}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Point of Sale</CardTitle>
                <CardDescription>
                  Process sales transactions and manage your stock
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Open POS
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;