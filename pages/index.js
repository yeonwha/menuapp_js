import Header from "@/components/Header";
import Form from "@/components/Form";
import List from "@/components/List";
import Footer from "@/components/Footer";
import DiscountSelect from "@/components/DiscountSelect";
import { useState } from "react"

export default function Home() {
  const [foodList, setFoodList] = useState([
    {id: 1, category: "Main", name: "Pasta", price: 21.99, checked: false },
    {id: 2, category: "Main", name: "Cheese burger", price: 11.49, checked: false},
    {id: 3, category: "Main", name: "Salad", price: 14.99, checked: false},
    {id: 4, category: "Dessert", name: "Chocolate icecream", price: 6.99, checked: false},
    {id: 5, category: "Dessert", name: "Vanilia cake", price: 8.49, checked: false},
    {id: 6, category: "Drink", name: "Zero sprite", price: 3.49, checked: false},
    {id: 7, category: "Drink", name: "Ginger ale", price: 3.49, checked: false},
    {id: 8, category: "Drink", name: "Cappucino", price: 2.99, checked: false},
  ]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="container m-6"><Header /></div>
        <main className="inline-block justify-center container mx-8 px-4">
          <div className="flex justify-center">
          <Form />
          </div>
          <div className="container my-4">
          <List key={() => (foodList.length + 1)} foodList={foodList} setFoodList={setFoodList}/>
          </div>
          <div className="flex justify-center">
          <DiscountSelect ket={() => (foodList.length + 1)} foodList={foodList}/>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
