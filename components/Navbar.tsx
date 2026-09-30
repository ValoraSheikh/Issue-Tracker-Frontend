import { Link } from "react-router-dom";
import { Button } from "./ui/button" // or standard button/links

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              MyBrand
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>
            <Link to="/about" className="transition-colors hover:text-primary">About</Link>
            <Link to="/services" className="transition-colors hover:text-primary">Services</Link>
            <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

        </div>
      </div>
    </header>
  )
}
