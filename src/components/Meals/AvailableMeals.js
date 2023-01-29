import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Chicken Cheese Burger',
        description: 'Juicy chicken burger topped with cheddar cheese Dynamo sauce',
        price: 230,
    },
    {
        id: 'm2',
        name: 'Crab Burger',
        description: 'A german specialty!',
        price: 220,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 250,
    },
    {
        id: 'm4',
        name: 'Fish Burger',
        description: 'Soft buns filled with the most delicate fish ready to be devoured ',
        price: 200,
    },
];
const AvailableMeals = () => {

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(burger => <MealItem key={burger.id} burger={burger}/>)}
                </ul>
            </Card>
        </section>
    )
};
export default AvailableMeals;