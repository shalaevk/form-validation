import { useState, useRef, useEffect } from "react";
// import { StateForm } from "./stateForm";
import { RefForm } from "./refForm";
import "./App.css";

function App() {
  return (
    <>
      <RefForm />
      <br />
      <br />
    </>
  );
}

export default App;

var twoSum = function (nums, target) {
  const numToIndexMap = new Map(); // Создаем хеш-таблицу для хранения числа и его индекса

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Находим значение, которое нужно найти, чтобы достичь цели

    if (numToIndexMap.has(complement)) {
      const complementIndex = numToIndexMap.get(complement);
      return [complementIndex, i]; // Возвращаем индексы пары чисел
    }

    numToIndexMap.set(nums[i], i); // Добавляем текущее число и его индекс в хеш-таблицу
  }

  return null; // Если нет подходящей пары чисел
};
