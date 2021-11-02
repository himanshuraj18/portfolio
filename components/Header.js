import Link from 'next/link'

export default function Header() {
    return (
        <div className="w-full bg-transparent py-2">
            <ul className="flex flex-row text-black font-medium text-lg">
                <li className="mx-4">
                    Himanshu Raj
                </li>
                <li className="ml-auto mx-4">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="mx-4">
                    <Link href="#education">
                        Education
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="#experience">
                        Experience
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="#projects">
                        Projects
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="#skills">
                        Skills
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="#activities">
                        Activities
                    </Link>
                </li>
                <li className="mx-4">
                    <Link href="#contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
  }