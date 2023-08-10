import Link from "next/link"
import Image from "next/image"
import Logo from './dojo-logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image 
          src={Logo}
          alt='Dojo Helpdesk Logo'
          widht={80}
          quality={100} //this is the best quality
          placeholder='blur' //it creates a blury while the image loads
        />
        <h1>Helpdesk</h1>
        <Link href='/'>Home</Link>
        <Link href='/tickets'>Tickets</Link>
    </nav>
  )
}
