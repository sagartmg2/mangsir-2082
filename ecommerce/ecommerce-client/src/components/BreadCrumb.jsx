function BreadCrumb({ title }) {
  return (
    <header className="bg-slate-50">
      <div className="container py-10">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Home . <span className="text-secondary">{title}</span>
        </p>
      </div>
    </header>
  );
}

export default BreadCrumb;
