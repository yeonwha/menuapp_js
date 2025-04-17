import Header from "@/components/Header";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container m-6"><Header /></div>
        <main className="flex justify-center container mx-2 px-4">
          <Form />
        </main>
        <Footer />
      </div>
    </>
  );
}
