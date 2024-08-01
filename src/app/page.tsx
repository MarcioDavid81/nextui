import Header from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Header />
      <section className="w-full h-screen flex items-center justify-center">
        <h1 className="text-blue-500">Página HOME</h1>
      </section>
    </>
  );
}
