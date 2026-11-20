import { useState } from "react";
// import styles from "../Cooking/cooking.module.css";
import FoodSelect from "../../components/FoodSelect/foodSelect";
import CookingMethod from "../../components/CookingMethod/cookingMethod";


// type SelectedFood = {
//   id: number;
//   name: string;
//   nutrition: {
//     calcium: number;
//     vitaminC: number;
//     protein: number;
//     carbohydrates: number;
//     vitaminA: number;
//     iron: number;
//   };
// };


function Cooking() {
  // 調理ステップ
  const [step, setStep] = useState<number>(1);

  return(
    <>
      {step === 1 && (
        <FoodSelect />
      )}
      {step === 2 && (
        <CookingMethod />
      )}
    </>
  );
} 

export default Cooking;