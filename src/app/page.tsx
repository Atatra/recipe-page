import Image from "next/image";

const page = () => {
  return (
    <>
      <article
        className="flex justify-center flex-col rounded-3xl
      sm:mx-[15%] sm:my-[5%]">

        <header className="flex">
          <img src="/images/image-omelette.jpeg"
            className="sm:rounded-xl sm:max-w-[94%] sm:m-[3%]"
          />
        </header>

        <div className={"flex-wrap break-words sm:max-w-[94%] m-[3%]"}>

          <h1 className={"font-youngSerif text-4xl pt-7"}>Simple Omelette Recipe</h1>

          <p className="font-outfit font-light mt-6">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with your
            choice of cheese, vegetables, or meats.
          </p>

          <section className="font-outfit font-light mt-6 p-5 rounded-xl"
            style={{ backgroundColor: "hsl(330, 100%, 98%)" }}>
            <h3 className="font-semibold text-xl"
              style={{ color: "hsl(332, 51%, 32%)" }}>
              Preparation time
            </h3>
            <ul className="prep-list mt-1">
              <li><strong className="font-semibold">Total</strong>: Approximately 10 minutes</li>
              <li><strong className="font-semibold">Preparation</strong>: 5 minutes</li>
              <li><strong className="font-semibold">Cooking</strong>: 5 minutes</li>
            </ul>
          </section>

          <section className="font-outfit font-light mt-6">
            <h2 className="font-youngSerif text-2xl"
              style={{ color: "hsl(14, 45%, 36%)" }}
            >
              Ingredients
            </h2>
            <ul className="prep-list ingr-list mt-2">
              <li>2-3 large eggs</li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
          </section>

          <hr className="mt-8" />

          <section className="font-outfit font-light mt-6">
            <h2 className="font-youngSerif text-2xl"
              style={{ color: "hsl(14, 45%, 36%)" }}
            >
              Instructions
            </h2>
            <ol className="instr-list mt-2">
              <li><strong className="font-semibold">Beat the eggs</strong>:
                In a bowl, beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water or milk for a fluffier texture.
              </li>
              <li><strong className="font-semibold">Heat the pan</strong>:
                Place a non-stick frying pan over medium heat and add butter or oil.
              </li>
              <li><strong className="font-semibold">Add fillings (optional)</strong>:
                When the eggs begin to set at the edges but are still slightly runny in the
                middle, sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li><strong className="font-semibold">Fold and serve</strong>:
                As the omelette continues to cook, carefully lift one edge and fold it over
                the fillings. Let it cook for another minute, then slide it onto a plate.
              </li>
              <li><strong className="font-semibold">Enjoy</strong>:
                Serve hot, with additionnal salt and pepper if needed.
              </li>
            </ol>
          </section>

          <hr className="mt-8" />

          <section className="font-outfit font-light mt-6">
            <h2 className="font-youngSerif text-2xl"
              style={{ color: "hsl(14, 45%, 36%)" }}>
              Nutrition
            </h2>
            <p className="mt-2">The table below shows nutritional values per serving without the additional fillings.</p>

            <table >
              <tbody>
                <tr>
                  <td className="th-data">Calories</td>
                  <td className="td-data">227kcal</td>
                </tr>
                <tr>
                  <td className="th-data">Carbs</td>
                  <td className="td-data">0g</td>
                </tr>
                <tr>
                  <td className="th-data">Protein</td>
                  <td className="td-data">20g</td>
                </tr>
                <tr>
                  <td className="th-data">Fat</td>
                  <td className="td-data">22g</td>
                </tr>
              </tbody>
            </table>

          </section>

        </div>

      </article>

      <footer>
        Challenge by
      </footer>
    </>
  )
}

export default page