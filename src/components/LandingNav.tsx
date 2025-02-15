import { Home, User, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

 const LandingNav = () => {
    const navItems = [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Login', url: '/login', icon: User },
      
        { name: 'SignUp', url: '/signup', icon: FileText }
      ]
    
      return <NavBar items={navItems} />
}

export default LandingNav;