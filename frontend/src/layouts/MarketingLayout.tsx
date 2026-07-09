import { Link, Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
export function MarketingLayout() {
  return (
    <div>
      <header className="container flex h-20 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-700">
          NeuroFlow Analytics
        </Link>
        <nav className="flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium text-slate-700">
            Entrar
          </Link>
          <Button asChild>
            <Link to="/cadastro">Começar agora</Link>
          </Button>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
