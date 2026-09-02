import Layout from "../../components/common/Layout";

export default function LoginPage({ role = "student" }) {
  return (
    <Layout title={role === "admin" ? "Admin login" : "Student login"}>
      <section className="card">
        <h2>{role === "admin" ? "Admin portal" : "Student portal"}</h2>
        <p>Login page placeholder. Move the current auth form here later.</p>
      </section>
    </Layout>
  );
}
