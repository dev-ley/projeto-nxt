"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  // Verifica se o caminho atual corresponde à rota específica
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/'; // Verifica se o pathname é exatamente a raiz
    }
    return pathname.startsWith(path); // Para outros caminhos, verifica se começa com o caminho específico
  };

  return (
    <nav className="flex space-x-4 p-4 bg-gray-200">
      <Link href="/" className={isActive('/') ? 'text-blue-500 font-bold' : 'text-gray-500'}>
        Inicio
      </Link>
      <Link href="/products" className={isActive('/products') ? 'text-blue-500 font-bold' : 'text-gray-500'}>
        | Produtos
      </Link>
      <Link href="/users" className={isActive('/users') ? 'text-blue-500 font-bold' : 'text-gray-500'}>
        | Usuarios
      </Link>
    </nav>
  );
};

export default Navbar;
