"use client";

export default function Experience({ data }: { data: any }) {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-white mb-10">
        Experience
      </h2>

      <div className="space-y-8">
        {data.experience.map((job: any, index: number) => (
          <div key={index} className="bg-slate-900 p-6 rounded-lg">
            <h3 className="text-xl text-white font-bold">
              {job.role}
            </h3>
            <p className="text-slate-400">
              {job.company} | {job.location}
            </p>
            <p className="text-blue-400 text-sm mb-4">
              {job.dates}
            </p>

            <ul className="list-disc pl-5 text-slate-400 space-y-2">
              {job.bullets.map((b: string, i: number) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}