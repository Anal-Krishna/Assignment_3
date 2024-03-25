document.addEventListener('DOMContentLoaded', () => {

    //student information

    const studentInfo = document.getElementById('studentInfo');
    studentInfo.innerHTML = `<p>Student ID: 200552815 - Name: Anal Krishna Paruthiyazhuth Sabu </p>`;

    // Pizza

    class Pizza {
        constructor(size, crust, ingredients) {
            this.size = size;
            this.crust = crust;
            this.ingredients = ingredients;
        }

        getDescription() {
            return `Size: ${this.size}, Crust: ${this.crust}, Ingredients: ${this.ingredients.join(', ')}`;
        }
    }

    //form

    document.getElementById('pizzaOrderForm').addEventListener('submit', function(e) {
        e.preventDefault();

        // values form

        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;
        const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(ingredient => ingredient.value);

        // ingredient

        if (ingredients.length === 0) {
            alert('Please select at least one ingredient.');
            return;
        }

        // Creating a Pizza

        const pizza = new Pizza(size, crust, ingredients);
        document.getElementById('orderSummary').innerHTML = `<h3>Order Summary:</h3><p>${pizza.getDescription()}</p>`;
    });
});
