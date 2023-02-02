import React, { Component } from "react";
import Table from "./Table";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 0,
      cart: [],
    };

    this.changeCategory = this.changeCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  products = [
    {
      name: "Books",
      items: [
        {
          Titel: "1984",
          Author: "George Orwell ",
          Year: 1961,
          Pages: 328,
          Publisher: "Amazon",
        },
        {
          Titel: "2001: a Space Odyssey",
          Author: "Arthur C. Clarke",
          Year: 0,
          Pages: 296,
          Publisher: "Ace",
        },
        {
          Titel: "Brave New World",
          Author: "Aldous Huxley",
          Year: 1931,
          Pages: 288,
          Publisher: "Harper Perennial",
        },
        {
          Titel: "Cloud Atlas",
          Author: "David Mitchell",
          Year: 0,
          Pages: 509,
          Publisher: "Random House",
        },
        {
          Titel: "Dune",
          Author: "Frank Herbert",
          Year: 0,
          Pages: 896,
          Publisher: "Ace",
        },
        {
          Titel: "Fahrenheit 451",
          Author: "Ray Bradbury",
          Year: 0,
          Pages: 249,
          Publisher: "Simon & Schuster",
        },
        {
          Titel: "Frankenstein",
          Author: "Mary Shelley",
          Year: 1818,
          Pages: 166,
          Publisher: "Dover Publications",
        },
        {
          Titel: "I, Robot",
          Author: "Isaac Asimov",
          Year: 0,
          Pages: 256,
          Publisher: "Del Rey",
        },
        {
          Titel: "H. P. Lovecraft: Tales",
          Author: "H. P. Lovecraft",
          Year: 0,
          Pages: 850,
          Publisher: "Library of America",
        },
        {
          Titel: "Solaris",
          Author: "Stanislaw Lem",
          Year: 0,
          Pages: 224,
          Publisher: "Mariner",
        },
        {
          Titel: "The Hobbit",
          Author: "J. R. R. Tolkien",
          Year: 0,
          Pages: 300,
          Publisher: "Houghton Mifflin Harcourt",
        },
        {
          Titel: "The Lord of the Rings",
          Author: "J. R. R. Tolkien",
          Year: 0,
          Pages: 1178,
          Publisher: "Mariner",
        },
        {
          Titel: "The Time Machine",
          Author: "H. G. Wells",
          Year: 0,
          Pages: 104,
          Publisher: "Public",
        },
        {
          Titel: "Twenty Thousand Leagues Under the Sea",
          Author: "Jules Verne",
          Year: 0,
          Pages: 212,
          Publisher: "Public",
        },
        {
          Titel: "Alice's Adventures in Wonderland & Through the Looking-Glass",
          Author: "Lewis Carroll",
          Year: 1862,
          Pages: 272,
          Publisher: "Bantam Classics",
        },
        {
          Titel: "The Little Prince",
          Author: "Antoine de Saint-Exupéry",
          Year: 1943,
          Pages: 112,
          Publisher: "HMH Books",
        },
      ],
    },
    {
      name: "Audio-Books",
      items: [
        {
          Titel: "1984",
          Author: "George Orwell ",
          Year: 1961,
          Duration: 682,
          Narrator: "Simon Prebble",
        },
        {
          Titel: "2001: a Space Odyssey",
          Author: "Arthur C. Clarke",
          Year: 0,
          Duration: 402,
          Narrator: "Dick Hill",
        },
        {
          Titel: "Brave New World",
          Author: "Aldous Huxley",
          Year: 1931,
          Duration: 480,
          Narrator: "Michael York",
        },
        {
          Titel: "Cloud Atlas",
          Author: "David Mitchell",
          Year: 0,
          Duration: 1188,
          Narrator: "Scott Brick",
        },
        {
          Titel: "Dune",
          Author: "Frank Herbert",
          Year: 0,
          Duration: 1262,
          Narrator: "Scott Brick",
        },
        {
          Titel: "Fahrenheit 451",
          Author: "Ray Bradbury",
          Year: 0,
          Duration: 301,
          Narrator: "Tim Robbins",
        },
        {
          Titel: "Frankenstein",
          Author: "Mary Shelley",
          Year: 1818,
          Duration: 515,
          Narrator: "Jim Donaldson",
        },
        {
          Titel: "I, Robot",
          Author: "Isaac Asimov",
          Year: 0,
          Duration: 500,
          Narrator: "Scott Brick",
        },
        {
          Titel: "Solaris",
          Author: "Stanislaw Lem",
          Year: 0,
          Duration: 482,
          Narrator: "Alessandro Juliani",
        },
        {
          Titel: "The Hobbit",
          Author: "J. R. R. Tolkien",
          Year: 0,
          Duration: 625,
          Narrator: "Andy Serkis",
        },
        {
          Titel: "The Time Machine",
          Author: "H. G. Wells",
          Year: 0,
          Duration: 247,
          Narrator: "Alan Munro",
        },
        {
          Titel: "Alice's Adventures in Wonderland & Through the Looking-Glass",
          Author: "Lewis Carroll",
          Year: 1862,
          Duration: 335,
          Narrator: "Kevin Theis",
        },
      ],
    },
  ];

  changeCategory() {
    this.setState((currentState) => {
      return {
        category: currentState.category === 0 ? 1 : 0,
      };
    });
  }

  addToCart(product) {
    this.setState((currentState) => {
      return {
        cart: [...currentState.cart, product],
      };
    });
  }

  removeFromCart(i) {
    this.setState((currentState) => {
      const TEMP_ARRAY = currentState.cart.filter((value, index) => {
        return i != index;
      });
      return {
        cart: TEMP_ARRAY,
      };
    });
  }

  render() {
    return (
      <main>
        <button onClick={this.changeCategory}>Change List</button>

        <h2>{this.products[this.state.category].name}</h2>
        <Table
          data={this.products[this.state.category].items}
          addToCart={this.addToCart}
        />

        {this.state.cart.length > 0 && (
          <>
            <h3>Cart</h3>
            <table>
              <thead>
                <th>Author</th>
                <th>Titel</th>
                <th></th>
              </thead>
              <tbody>
                {this.state.cart.map((el, index) => {
                  return (
                    <tr>
                      <td>{el.Author}</td>
                      <td>{el.Titel}</td>
                      <td
                        className="button"
                        onClick={() => {
                          this.removeFromCart(index);
                        }}
                      >
                        Delete
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </main>
    );
  }
}

export default Main;
