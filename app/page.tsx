import Hero from "./_components/Hero";

export default async function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-full">
      <Hero />
    </div>
  );
}
