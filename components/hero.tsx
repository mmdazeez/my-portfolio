"use client";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero({ data }: { data: any }) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        {data.basics.name}
      </h1>

      <p className="text-xl text-blue-400 mb-6">
        {data.basics.label}
      </p>

      <p className="text-slate-400 max-w-2xl mb-10">
        {data.basics.summary}
      </p>

      <div className="flex gap-4">
        <Button className="bg-blue-600 text-white">
          View Experience <ArrowRight size={18} />
        </Button>
        <Button variant="outline">
          Download Resume <Download size={18} />
        </Button>
      </div>
    </section>
  );
}