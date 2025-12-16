export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6">
        <p className="text-lg font-semibold text-primary">TopPhoneParts.lk</p>
        <p className="text-sm text-gray-600">Wholesale & Retail Mobile Phone Parts</p>
        <p className="text-xs text-gray-500">
          © {year} TopPhoneParts.lk. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
