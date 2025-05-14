// app/components/landing/Footer.tsx
import Link from 'next/link';
import React from 'react';

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Seu Micro SaaS de PDF</h5>
            <p className="text-sm">Simplificando a extração de dados de PDFs para todos.</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Links Rápidos</h5>
            <ul className="space-y-2">
              <li><Link href="/#features"><button className="hover:text-white transition-colors">Recursos</button></Link></li>
              <li><Link href="/pricing"><button className="hover:text-white transition-colors">Preços</button></Link></li>
              <li><Link href="/app"><button className="hover:text-white transition-colors">Login</button></Link></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy"><button className="hover:text-white transition-colors">Política de Privacidade</button></Link></li>
              <li><Link href="/terms-of-service"><button className="hover:text-white transition-colors">Termos de Serviço</button></Link></li>
              <li><Link href="/contact"><button className="hover:text-white transition-colors">Contato</button></Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} SeuDominioAqui.com. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
