import Header from "@/components/Header";
import Form from "@/components/Form";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container m-6"><Header /></div>
        <main className="inline-block justify-center container mx-8 px-4">
          <div className="flex justify-center">
          <Form />
          </div>
          <div className="container my-4">
          <List />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
