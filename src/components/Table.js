import React from "react";
import TableRow from "./TableRow";

function Table(props) {
  /*****************
   *
   * props:
   * - data: Produkt-Array
   * - addToCart: addToCart-Function
   *
   *****************/

  const KEYS_ARRAY = Object.keys(props.data[0]);

  return (
    <table>
      <thead>
        <tr>
          {KEYS_ARRAY.map((value) => {
            return <th>{value}</th>;
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((value, index) => {
          return (
            <TableRow product={value} i={index} addToCart={props.addToCart} />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
