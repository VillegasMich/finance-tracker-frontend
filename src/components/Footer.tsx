import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"
import { Facebook, Twitter, Instagram } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo />
            </Link>
            <span className="ml-4 text-xl font-semibold">Finance Tracker</span>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><Link to="/about" className="text-sm hover:underline">About</Link></li>
              <li><Link to="/contact" className="text-sm hover:underline">Contact</Link></li>
              <li><Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:underline">Terms of Service</Link></li>
            </ul>
          </nav>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
        </div>
        <div className="border-t py-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Finance Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
