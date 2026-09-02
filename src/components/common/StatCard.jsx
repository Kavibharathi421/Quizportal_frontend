export default function StatCard({ title, value }) {
  return (
    <div className="card stat-card">
      <small>{title}</small>
      <strong>{value}</strong>
    </div>
  );
}
