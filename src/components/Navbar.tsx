import { Link } from "react-router-dom"
import { Logo } from "./Logo"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0">
            <Logo />
          </Link>
          <div className="hidden md:block ml-10">
            <span className="text-xl font-semibold">Finance Tracker</span>
          </div>
          <div className="ml-4 flex items-center space-x-4">
            <Link to="/user/register">
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link to="/user/login">
              <Button>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

