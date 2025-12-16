import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold text-primary">TopPhoneParts.lk</div>
        <nav aria-label="Main">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-primary" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
