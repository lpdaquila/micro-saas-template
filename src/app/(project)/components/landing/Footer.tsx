import Link from "next/link";

export function Footer() {
    return (
  <footer className="bg-gray-800 text-gray-400 py-8">
    <div className="container mx-auto px-6 text-center">
      <div className="mb-4">
        <Link href="/privacy-policy" legacyBehavior><a className="px-3 hover:text-white">Política de Privacidade</a></Link>
        <Link href="/terms-of-service" legacyBehavior><a className="px-3 hover:text-white">Termos de Serviço</a></Link>
        <Link href="/contact" legacyBehavior><a className="px-3 hover:text-white">Contato</a></Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Seu Micro SaaS de PDF. Todos os direitos reservados.</p>
    </div>
  </footer>
)
};

export default Footer;
