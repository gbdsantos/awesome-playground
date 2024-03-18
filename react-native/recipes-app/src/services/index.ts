import * as recipes from "./recipes-service"
import * as ingredientes from "./ingredients-service"
import * as preparations from "./preparations-service"

export const services = {
  recipes,
  ingredientes,
  preparations,

  storage: {
    imagePath: "",
  },
}
