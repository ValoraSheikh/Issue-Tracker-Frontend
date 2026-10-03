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
            <Link to="/projects" className="transition-colors hover:text-primary">Projects</Link>
            <Link to="/profile" className="transition-colors hover:text-primary">Profile</Link>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-sm font-medium hover:text-primary">
              Log in
            </Link>
            <Button>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>

        </div>
      </div>
    </header>
  )
}
