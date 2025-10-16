import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut, ShoppingCart } from "lucide-react";

const POS = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-card">
      <nav className="bg-sidebar border-b border-sidebar-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-sidebar-foreground">Point of Sale</h1>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => navigate("/")} className="text-sidebar-foreground">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button variant="ghost" onClick={signOut} className="text-sidebar-foreground">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6" />
              Sales Terminal
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">
              POS functionality will be implemented here. You'll be able to:
            </p>
            <ul className="mt-4 space-y-2 text-left max-w-md mx-auto">
              <li>• View your assigned stock</li>
              <li>• Create sales transactions</li>
              <li>• Return products to warehouse</li>
              <li>• View transaction history</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default POS;