import React, { useState } from "react";

import classes from "./Menu.module.css";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import MenuChanger from "../../components/MenuChanger/MenuChanger";
import MenuCategory from "../../container/MenuCategory/MenuCategory";

const Menu = () => {
  const [foodCategory, setFoodCategory] = useState("meals");

  const renderMenu = () => {
    let menuSections = [];

    switch (foodCategory) {
      case "meals":
        menuSections = [
          {
            title: "entrances",
            items: [
              {
                name: "small green",
                price: "8.25",
                desc: "Lettuce mix and house dressing",
              },
              {
                name: "small caesar",
                price: "10.75",
                desc:
                  "Romaine lettuce, capers, bacon, Parmesan, croutons, and anchovy dressing",
              },
              {
                name: "fried chicken & honey",
                price: "11.75",
                desc: "Thyme honey glaze and spicy mayo",
              },
              {
                name: "duck wings",
                price: "13.25",
                desc: "6 crispy wings, Asian or Buffalo sauce",
              },
              {
                name: "salmon tartar",
                price: "14.25",
                desc:
                  "Citrus, zest and juice, herbs and extra virgin olive oil",
              },
              {
                name: "classic beef tartar",
                price: "14.25",
                desc: "Capers, shallot and fresh herbs",
              },
            ],
          },
          {
            title: "dishes",
            items: [
              {
                name: "Mac 'n' cheese",
                price: "17.75",
                desc: "Macaroni, 4 cheese sauce and chilli crumble",
              },
              {
                name: "halloumi",
                price: "18.50",
                desc:
                  "Seared halloumi, vegetables, celeriac purée, pesto, sunflower seeds and black olive crumble",
              },
              {
                name: "goat cheese salad",
                price: "19.25",
                desc:
                  "Mixed greens, beets, sunflower seeds, dried crabberries, candied walnuts, and maple dressing",
              },
              {
                name: "duck confit poutine",
                price: "19.25",
                desc:
                  "Fries, cheese curds, duck confit, red cabbage, caramelized onions, green peas and gravy",
              },
              {
                name: "piri-piri fried chicken",
                price: "19.75",
                desc: "4 pieces, coleslaw and fries",
              },
              {
                name: "veggies burger",
                price: "19.75",
                desc:
                  "Sweet potato and black bean patty, Cheddar, avocado, arugula, spicy mayo, beet buns and fries",
              },
              {
                name: "haddock burger",
                price: "19.75",
                desc:
                  "Pickeled vegetables, bacon, lettuce, wasabi mayo and fries",
              },
              {
                name: "bacon & cheddar cheeseburger",
                price: "19.75",
                desc:
                  "Sriracha fried onions, lettuce, horseradish mayo and fries",
              },
              {
                name: "fish & chips",
                price: "22.25",
                desc: "Crispy cod, coleslaw, tartar sauce and fries",
              },
            ],
          },
          {
            title: "dessert",
            items: [
              {
                name: "creme brulee",
                price: "8.25",
              },
              {
                name: "carrot cake",
                price: "8.25",
              },
              {
                name: "chocolate melting cake",
                price: "8.75",
              },
            ],
          },
        ];
        return <MenuCategory menuSections={menuSections} />;
      case "drinks":
        menuSections = [
          {
            title: "cocktail",
            items: [
              {
                name: "stawberry sangria",
                price: "12.25",
                desc:
                  "Brugal Rum, white wine, sparkling water, ginger syrup, srawberries",
              },
              {
                name: "cucumber fix",
                price: "12.25",
                desc:
                  "Cazadores Tequila, mint kombucha, honey syrup, fresh lime juice, cucumber",
              },
              {
                name: "mcgill caribbean punch",
                price: "12.25",
                desc:
                  "Brugal Rum, fire cider, orgeat syrup, fresh lime juice, sea buckthron berries",
              },
              {
                name: "lavender basil ricky",
                price: "12.25",
                desc:
                  "Wild Turkey Bourbon, lavender syrup, sparkling water, fresh lime juice, basil",
              },
              {
                name: "labrador tea martini",
                price: "12.25",
                desc:
                  "Romeao's Gin, Chartreuse, Maple Labrador tea syrup, fresh lime juice",
              },
              {
                name: "old fashioned",
                price: "12.25",
                desc:
                  "Canadian Rye, Calvados, brown sugar, candied orange, angostura",
              },
            ],
          },
          {
            title: "whites",
            items: [
              {
                name: "VIOGNIER / SAUVIGNON BLANC",
                price: "35",
                desc: "Languedoc, France, Pierrick Harang",
              },
              {
                name: "SAUVIGNON BLANC / MUSCAT",
                price: "39",
                desc: "Languedoc, France, Domaine Reine Juliette",
              },
              {
                name: "CHABLIS",
                price: "70",
                desc: "Bourgogne, France, Clotilde Davenne",
              },
            ],
          },
          {
            title: "red",
            items: [
              {
                name: "CABERNET SAUVIGNON / MERLOT",
                price: "39",
                desc: "Languedoc, France, Chateau Cascadais",
              },
              {
                name: "CORBIÈRES",
                price: "50",
                desc: "Languedoc, France, Château Cascadais, Prestige",
              },
              {
                name: "MINERVOIS",
                price: "39",
                desc: "Languedoc, France, Château La Grave, Expressions",
              },
            ],
          },
          {
            title: "other",
            items: [
              {
                name: "coke",
                price: "3.50",
              },
              {
                name: "coke diet",
                price: "3.50",
              },
              {
                name: "sprite",
                price: "3.75",
              },
              {
                name: "ginger ale",
                price: "3.00",
              },
              {
                name: "limonata",
                price: "2.75",
              },
              {
                name: "ice lemon tea",
                price: "3.25",
              },
            ],
          },
        ];
        return <MenuCategory menuSections={menuSections} />;
      default:
        return null;
    }
  };

  return (
    <section id="menu" className={classes.Menu}>
      <SectionHeader title="menu" />
      <MenuChanger
        setFoodCategory={(foodCategory) => setFoodCategory(foodCategory)}
      />
      <div className={classes.Container}>
        <p>Available every weekends</p>
        <div id="menuStart" className={classes.Close}>
          <p>Pub opens at 8 a.m. and closes at 11 p.m.</p>
          <p>Visit the blackboard in the main hall to check discounted items</p>
        </div>
        {renderMenu()}
      </div>
    </section>
  );
};

export default Menu;
