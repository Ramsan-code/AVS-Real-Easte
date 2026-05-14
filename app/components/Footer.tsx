import Link from 'next/link';
import { NAV_LINKS } from '../utils/constants';

export function Footer() {
  return (
    <footer className="bg-brand-forest text-brand-cloud py-12 border-t border-brand-forest/20" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-brand-lime mb-6">AVS RealEstate</h3>
            <p className="text-brand-cloud/70 leading-relaxed max-w-sm">
              Your trusted partner in finding premium housing, prime shop buildings, and lucrative development places.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-brand-cloud/70 hover:text-brand-lime transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <address className="not-italic text-brand-cloud/70 space-y-3">
              <p>123 Real Estate Blvd, Suite 400</p>
              <p>Metropolis, NY 10001</p>
              <p>contact@avsrealestate.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="border-t border-brand-cloud/10 pt-8 flex justify-center text-sm text-brand-cloud/50">
          <p>&copy; {new Date().getFullYear()} AVS RealEstate Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
