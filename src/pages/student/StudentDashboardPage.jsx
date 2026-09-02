import Layout from "../../components/common/Layout";
import StatCard from "../../components/common/StatCard";

export default function StudentDashboardPage() {
  return (
    <Layout title="My overview">
      <div className="stats-grid">
        <StatCard title="Completed" value="8" />
        <StatCard title="Pending" value="2" />
        <StatCard title="Average" value="88%" />
      </div>
    </Layout>
  );
}
