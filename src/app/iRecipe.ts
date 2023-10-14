
export interface IRecipe {
    id: number,
    title: string,
    readyInMinutes: number,
    image: string,
    summary: string
}

export interface IRecipes {
    recipes: [IRecipe]
}