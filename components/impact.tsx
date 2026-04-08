export default function Impact() {
  const metrics = [
    { label: "Cost Savings", value: "$110K+" },
    { label: "Cycle Time Reduction", value: "20%" },
    { label: "Throughput Increase", value: "15%" },
    { label: "Rework Reduction", value: "80%" },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {metrics.map((m, i) => (
          <div key={i}>
            <h3 className="text-3xl text-white font-bold">
              {m.value}
            </h3>
            <p className="text-slate-400">{m.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}