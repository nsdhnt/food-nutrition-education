import { useEffect, useState } from "react";
import styles from "../../components/FoodSelect/foodSelect.module.css";


type SelectedFood = {
  id: number;
  name: string;
  nutrition: {
    calcium: number;
    vitaminC: number;
    protein: number;
    carbohydrates: number;
    vitaminA: number;
    iron: number;
  };
};


function FoodSelect() {
  const [selectedFoods, setSelectedFoods] = useState<SelectedFood[]>([]);
  console.log(selectedFoods);

  function addFood(food: SelectedFood) {
    if (selectedFoods.length < 2 && !selectedFoods.some((item) => item.id === food.id)) {
      setSelectedFoods((prev) => [...prev, food]);
    }
  }

  function removeFood(id: number) {
    setSelectedFoods((prev) => 
      prev.filter((food) => food.id !== id)
    );
  }

  function toggleFood(food: SelectedFood) {
    if (selectedFoods.some((selectedFood) => selectedFood.id === food.id)) {
      removeFood(food.id);
    }
    else {
      addFood(food);
    }
  }
  
  const foods = [
    {
      id: 1,
      name: "たまご",
      nutrition: {
        calcium: 1,
        vitaminC: 0,
        protein: 5,
        carbohydrates: 0,
        vitaminA: 2,
        iron: 2,
      },
    },
    {
      id: 2,
      name: "牛乳",
      nutrition: {
        calcium: 5,
        vitaminC: 0,
        protein: 3,
        carbohydrates: 1,
        vitaminA: 1,
        iron: 0,
      },
    },
    {
      id: 3,
      name: "じゃがいも",
      nutrition: {
        calcium: 0,
        vitaminC: 3,
        protein: 1,
        carbohydrates: 5,
        vitaminA: 0,
        iron: 1,
      },
    },
    {
      id: 4,
      name: "にんじん",
      nutrition: {
        calcium: 1,
        vitaminC: 2,
        protein: 0,
        carbohydrates: 1,
        vitaminA: 5,
        iron: 1,
      },
    },
    {
      id: 5,
      name: "ほうれん草",
      nutrition: {
        calcium: 2,
        vitaminC: 4,
        protein: 1,
        carbohydrates: 0,
        vitaminA: 4,
        iron: 5,
      },
    },
    {
      id: 6,
      name: "とり肉",
      nutrition: {
        calcium: 0,
        vitaminC: 0,
        protein: 5,
        carbohydrates: 0,
        vitaminA: 0,
        iron: 1,
      },
    },
    {
      id: 7,
      name: "チーズ",
      nutrition: {
        calcium: 5,
        vitaminC: 0,
        protein: 4,
        carbohydrates: 0,
        vitaminA: 2,
        iron: 0,
      },
    },
    {
      id: 8,
      name: "トマト",
      nutrition: {
        calcium: 0,
        vitaminC: 4,
        protein: 0,
        carbohydrates: 1,
        vitaminA: 2,
        iron: 0,
      },
    },
  ];

  const [charaSerif, setCharaSerif] = useState(
    <>
      まずはたまごを<br />
      いれてみよう!
    </>
  );

  function changeSerif () {
    if (selectedFoods.length === 0) {
      setCharaSerif(
        <>
          まずはたまごを<br />
          いれてみよう!
        </>
      );
    }
    else if (
      selectedFoods.some((food) => food.name === "たまご") &&
      selectedFoods.some((food) => food.name === "牛乳")
    ) {
      setCharaSerif(
        <>
          ばっちり！<br />
          「つぎへ」をおしてね。
        </>
      );
    }
    else if (selectedFoods.some((food) => food.name !== "たまご" && food.name !== "牛乳")) {
      setCharaSerif(
        <>
          それは使わないよ！<br />
          他の食材をえらんでみよう！
        </>
      );
    }
    else if (selectedFoods.some((food) => food.name === "たまご")) {
      setCharaSerif(
        <>
          いいね！つぎは<br />
          牛乳をいれてね。
        </>
      );
    }
    else if (selectedFoods.some((food) => food.name === "牛乳")) {
      setCharaSerif(
        <>
          いいね！つぎは<br />
          たまごをいれてね。
        </>
      );
    }
    else {
      setCharaSerif(
        <>
          それは使わないよ！<br />
          他の食材をえらんでみよう！
        </>
      );
    }
  }

  useEffect(() => {
    changeSerif();
  }, [selectedFoods]);

  return(
    <>
      <div className={styles.scene}>
        <div className={styles.dishInfo}>
          <h2>たまごやき</h2>
          <p>
            {/* まずはたまごを<br />
            いれてみよう! */}
            {charaSerif}
          </p>
        </div>
        <div className={styles.tray}>
          <p 
            onClick={() => removeFood(selectedFoods[0]?.id)}
            className={styles.plate}
          >
            {selectedFoods[0]?.name ?? "+"}
          </p>
          <p 
            onClick={() => removeFood(selectedFoods[1]?.id)}
            className={styles.plate}
          >
            {selectedFoods[1]?.name ?? "+"}
          </p>
        </div>
        <div className={styles.nextBtn}>
          <button
          >つぎへ
          </button>
        </div>
      </div>
      <div className={styles.foodList}>
        {foods.map((food) => (
          <button
            onClick={() => {
              toggleFood(food);
            }}
            className={styles.foodCard}
            key={food.id}
          >
            {food.name}
          </button>
        ))}
      </div>
    </>
  );
} 

export default FoodSelect;