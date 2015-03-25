
**Kata Supermarket**
===================

We want create a supermarket scanner.

The supermarket have the next products at these prices:

| Product   | Price |
| :-------: |:-----:|
| A         | 84$   |
| B         | 13$   |
| C         | 62$   |
| D         | 64$   |
| E         | 2$    |
| F         | 59$   |

The scanner can get the products with one or several string(s) that these ones can be contain one or several product(s):
	
	```

	"C"
	```

	and/or

	```

	"ACDFAAAF"
	```

> **Tip:** The prices are fixed and you can saves in a private array or similar. Obtaining price is not the exercise objective.

##Exercise 1

The scanner should return a list/array with the data of all the products scanned:

- Product
- Unitary Price
- Number of products
- Price of all these products

For example:

Input:

> "AABCFA"
> "DF"
> "FFF"

Output:

> | Product   | Unitary Price | Number of products  | Total      |
> | :-------: |:-------------:| :-----------------: | :--------: |
> | A         | 84$           |    3                |  252$      |
> | B         | 13$           |    1                |  13$       |
> | C         | 62$           |    1                |  62$       |
> | D         | 64$           |    1                |  64$       |
> | F         | 59$           |    5                |  295$      |


> **Tip:** The output format is not important, can be a array, list,...

##Exercise 2
Using SupplementMarketInterface, calculate the tax of every product.

Add the percentage and price of the tax in the output.

##Exercise 3
Using the same intarfece SupplementMarketInterface, calculate the offerts (like 2x1, 3x2) of every product.

Add the number of the products free in every line.