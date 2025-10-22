export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center gap-2">
      <h1 className="text-5xl font-light text-slate-200 animate-move-in-left">
        Hello, I'm <span className="text-teal-400 font-normal">José</span>.
      </h1>
      <h2 className="text-5xl font-light text-slate-200 animate-move-in-right">
        I'm a full stack web engineer.
      </h2>
    </main>
  );
}
