import { useState, useMemo } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, User, LogIn, UserPlus, Heart, LogOut, Settings, Home, GraduationCap, Hotel, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthModal from "./AuthModal";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const categories = [
  {
    id: "immobilier",
    label: "Immobilier",
    icon: Home,
    path: "/biens",
    matchPaths: ["/", "/biens", "/publier", "/vendre"],
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-600",
  },
  {
    id: "etudiant",
    label: "Étudiants",
    icon: GraduationCap,
    path: "/etudiants",
    matchPaths: ["/etudiants"],
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-500",
  },
  {
    id: "hotel",
    label: "Hôtels",
    icon: Hotel,
    path: "/hotels",
    matchPaths: ["/hotels"],
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-600",
  },
];

export default function Header() {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<"login" | "signup">("login");
  const { user, isAuthenticated, logout } = useAuth();

  const activeCategory = useMemo(() => {
    for (const cat of categories) {
      if (cat.matchPaths.includes(location)) return cat;
    }
    if (location.startsWith("/biens")) return categories[0];
    return categories[0];
  }, [location]);

  const openLoginModal = () => { setAuthModalTab("login"); setAuthModalOpen(true); };
  const openSignupModal = () => { setAuthModalTab("signup"); setAuthModalOpen(true); };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.2" opacity="0.45"/>
                <path d="M12 3.5L5.5 11h13L12 3.5z" fill="white" opacity="0.95"/>
                <rect x="7.5" y="11" width="9" height="7" rx="0.8" fill="white" opacity="0.9"/>
                <rect x="10" y="13.5" width="4" height="4.5" rx="0.6" fill="#0D9488"/>
                <line x1="12" y1="1.5" x2="12" y2="2.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="12" y1="21.5" x2="12" y2="22.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="1.5" y1="12" x2="2.5" y2="12" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                <line x1="21.5" y1="12" x2="22.5" y2="12" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-bold text-lg text-gray-900">safari<span className="text-emerald-600">.cd</span></span>
          </Link>

          {/* Category Tabs — Desktop (centered) */}
          <nav className="hidden md:flex items-center gap-1">
            {categories.map((cat) => {
              const isActive = activeCategory.id === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setLocation(cat.path)}
                  className={cn(
                    "flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all",
                    isActive ? `${cat.bg} ${cat.color}` : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </button>
              );
            })}
          </nav>

          {/* Right side — minimal */}
          <div className="flex items-center gap-2">
            {/* Publish CTA */}
            <Link href="/publier">
              <Button size="sm" className="hidden sm:flex bg-emerald-600 hover:bg-emerald-700 text-white text-sm h-8 px-3 gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                Publier
              </Button>
            </Link>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-gray-700">
                  {isAuthenticated ? (
                    <Avatar className="h-7 w-7">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xs">
                        {user?.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                {isAuthenticated ? (
                  <>
                    <div className="px-2 py-1.5 text-sm font-medium">
                      {user?.name}
                      <div className="text-xs text-gray-500 font-normal">{user?.email}</div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer"><Home className="mr-2 h-4 w-4" />Mes annonces</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer"><Heart className="mr-2 h-4 w-4" />Favoris</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer"><Settings className="mr-2 h-4 w-4" />Paramètres</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer text-red-600" onClick={logout}>
                      <LogOut className="mr-2 h-4 w-4" />Déconnexion
                    </DropdownMenuItem>
                  </>
                ) : (
                  <>
                    <DropdownMenuItem className="cursor-pointer" onClick={openLoginModal}>
                      <LogIn className="mr-2 h-4 w-4" />Se connecter
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer" onClick={openSignupModal}>
                      <UserPlus className="mr-2 h-4 w-4" />Créer un compte
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden h-8 w-8 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — compact */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          {/* Category tabs */}
          <div className="grid grid-cols-3">
            {categories.map((cat) => {
              const isActive = activeCategory.id === cat.id;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setLocation(cat.path); setMobileMenuOpen(false); }}
                  className={cn(
                    "flex flex-col items-center gap-1 py-3 text-xs font-medium border-b-2 transition-colors",
                    isActive
                      ? `${cat.color} ${cat.bg} ${cat.border}`
                      : "text-gray-400 border-transparent"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Links + auth */}
          <div className="p-3 space-y-1">
            <Link href="/publier">
              <button onClick={() => setMobileMenuOpen(false)} className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-gray-700 active:bg-gray-50">
                Publier une annonce
              </button>
            </Link>
            <Link href="/a-propos">
              <button onClick={() => setMobileMenuOpen(false)} className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-500 active:bg-gray-50">
                À propos
              </button>
            </Link>
            <Link href="/contact">
              <button onClick={() => setMobileMenuOpen(false)} className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-500 active:bg-gray-50">
                Contact
              </button>
            </Link>
          </div>

          {/* Auth row */}
          {!isAuthenticated && (
            <div className="px-3 pb-3 flex gap-2">
              <Button variant="outline" className="flex-1 h-9 text-sm" onClick={() => { openLoginModal(); setMobileMenuOpen(false); }}>
                Connexion
              </Button>
              <Button className="flex-1 h-9 text-sm bg-emerald-600 hover:bg-emerald-700" onClick={() => { openSignupModal(); setMobileMenuOpen(false); }}>
                Inscription
              </Button>
            </div>
          )}
        </div>
      )}

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} defaultTab={authModalTab} />
    </header>
  );
}
