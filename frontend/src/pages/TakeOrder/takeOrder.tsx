import styles from "../TakeOrder/takeOrder.module.css";
import { useState } from "react";

type SelectedFood = {
  id: number;
  name: string;
  nutrition: {
    calcium: number;
    vitaminC: number;
  };
};

function TakeOrder() {
  const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([]);
  console.log(selectedFoods);
  

  const foods = [
    {
      id: 1, 
      name: "バナナ",
      nutrition: {
        calcium: 0,
        vitaminC: 1
      }
    },
    {
      id: 2, 
      name: "りんご",
      nutrition: {
        calcium: 0,
        vitaminC: 2
      }
    },
    {
      id: 3, 
      name: "みかん",
      nutrition: {
        calcium: 0,
        vitaminC: 5
      }
    },
    {
      id: 4, 
      name: "ヨーグルト",
      nutrition: {
        calcium: 4,
        vitaminC: 0
      }
    },
    {
      id: 5, 
      name: "牛乳",
      nutrition: {
        calcium: 5,
        vitaminC: 0
      }
    },
    {
      id: 6, 
      name: "チーズ",
      nutrition: {
        calcium: 5,
        vitaminC: 0
      }
    },
    {
      id: 7, 
      name: "トマト",
      nutrition: {
        calcium: 0,
        vitaminC: 3
      }
    },
  ];
  // console.log(foods);

  // カルシウムの栄養値
  const totalCalcium = selectedFoods.reduce(
    (sum, food) => sum + food.nutrition.calcium,
    0
  );

  // ビタミンCの栄養値
  const totalVitaminC = selectedFoods.reduce(
    (sum, food) => sum + food.nutrition.vitaminC,
    0
  );

  function addFood(food) {
    if (selectedFoods.length < 3 && !selectedFoods.some((item) => item.id === food.id)) {
      setSelectedFoods((prev) => [...prev, food]);
    }
  }

  function removeFood(id: number) {
    setSelectedFoods((prev) => 
      prev.filter((food) => food.id !== id)
    );
  }

  function toggleFood(food: any) {
    // console.log(foods);
    if(selectedFoods.some((selectedFood) => selectedFood.id === food.id)) {
      // console.log(food);
      removeFood(food.id);
    } else {
      addFood(food);
    }
  }

  function handleTake() {
    if(
      4 <= totalCalcium && totalCalcium <= 9 
      && 4 <= totalVitaminC && totalVitaminC <= 9
    ) {
      console.log("クリア！");
    } else if(selectedFoods.length !== 3) {
      console.log("3つ選んでね!");
    } else {
      console.log("失敗！");
    }
  }

  
  return (
    <>
      <div className={styles.top}>
        <div className={styles.tray}>
          <p onClick={() => removeFood(selectedFoods[0]?.id)} className={styles.plate}>{selectedFoods[0]?.name ?? "+"}</p>
          <p onClick={() => removeFood(selectedFoods[1]?.id)} className={styles.plate}>{selectedFoods[1]?.name ?? "+"}</p>
          <p onClick={() => removeFood(selectedFoods[2]?.id)} className={styles.plate}>{selectedFoods[2]?.name ?? "+"}</p>
        </div>        
        <div className={styles.nutrition}>
          <h2>くまおのちゅうもん</h2>
          <div className={styles.gaugeBox}>
            <div className={styles.gaugeLabel}>
              <p>カルシウム</p>
              <span>{totalCalcium}</span>
            </div>
            <div className={styles.gauge}>
              <div className={styles.condition}></div>
              <div
                className={styles.gaugeFill}
                style={{width: `${(totalCalcium / 14) * 100}%`}}>
              </div>
            </div>
          </div>
          <div className={styles.gaugeBox}>
            <div className={styles.gaugeLabel}>
              <p>ビタミンC</p>
              <span>{totalVitaminC}</span>
            </div>
            <div className={styles.gauge}>
              <div className={styles.condition}></div>
              <div
                className={styles.gaugeFill}
                style={{width: `${(totalVitaminC / 14) * 100}%`}}>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.takeOrder}>
        <button onClick={handleTake}>ていきょうする</button>
      </div>
      <div className={styles.foodList}>
        {foods.map((food) => (
          <button
            onClick={() => {
              // addFood(food);
              toggleFood(food);
            }}
            className={styles.foodCard} 
            key={food.id}>{food.name}
          </button>
        ))}
      </div>
    </>
  )
}

export default TakeOrder