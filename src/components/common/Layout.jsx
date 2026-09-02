import { NavLink } from "react-router-dom";

export default function Layout({ title, children }) {
  const navItems = [
    { to: "/admin", label: "Overview" },
    { to: "/admin/monitoring", label: "Live monitoring" },
    { to: "/admin/exams", label: "Exams" },
    { to: "/student", label: "Student dashboard" },
    { to: "/exam/demo", label: "Exam" },
  ];

  return (
    <div className="shell">
      <aside className="sidebar">
        <h2>Axiom Exams</h2>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content-area">
        <header className="page-header">
          <h1>{title}</h1>
        </header>
        {children}
      </main>
    </div>
  );
}
