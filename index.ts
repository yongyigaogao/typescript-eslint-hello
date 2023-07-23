import { Food } from "@/src/lib/food";

const world = "world";

const food = new Food();

export function hello(who: string = world): string {
  console.log(food);
  return `Hello ${who}! `;
}

hello();
