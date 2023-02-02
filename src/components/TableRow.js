import React from "react";

function TableRow(props) {
  /*****************
   *
   * props:
   * - product: Produkt-Object
   * - i: index
   * - addToCart: addToCart-Function
   *
   *****************/

  const VALUES_ARRAY = Object.values(props.product);

  return (
    <tr className={props.i % 2 ? "odd" : undefined}>
      {VALUES_ARRAY.map((value) => {
        return <td>{value}</td>;
      })}
      <td
        className="button"
        onClick={() => {
          props.addToCart(props.product);
        }}
      >
        Add to Cart
      </td>
    </tr>
  );
}

export default TableRow;
