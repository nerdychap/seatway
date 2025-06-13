import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-3 text-gray-800">Seatsway</h3>
            <p className="text-sm text-gray-600">
              Your trusted destination for event tickets. Discover and book your next experience with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-indigo-600 hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600 hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-indigo-600 hover:underline">FAQ</Link></li>
              <li><Link href="/events" className="text-gray-600 hover:text-indigo-600 hover:underline">All Events</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-gray-600 hover:text-indigo-600 hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-600 hover:text-indigo-600 hover:underline">Privacy Policy</Link></li>
              <li><Link href="/refund" className="text-gray-600 hover:text-indigo-600 hover:underline">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-semibold text-gray-700 mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Facebook SVG Icon */}
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* Twitter SVG Icon */}
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.452 0 1.971.995 3.713 2.513 4.728-.926-.029-1.795-.285-2.557-.706v.052c0 2.758 1.952 5.056 4.545 5.584-.475.129-.976.198-1.497.198-.365 0-.722-.035-1.072-.103.724 2.26 2.823 3.908 5.31 3.954-1.938 1.518-4.377 2.422-6.997 2.422-.453 0-.899-.026-1.336-.078 2.509 1.608 5.492 2.542 8.692 2.542 10.418 0 16.121-8.633 16.121-16.12 0-.246-.006-.491-.017-.735a11.542 11.542 0 002.847-2.949z" />
                </svg>
              </a>
              {/* Instagram SVG Icon */}
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-indigo-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4c2.209 0 4 1.79 4 4s-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Seatsway. All rights reserved.
        </div>
      </div>
    </footer>
  );
}