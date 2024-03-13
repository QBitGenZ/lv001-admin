import React from "react";
export default function TableRow({product}) {
  return (
    <tr>
      <td>{product?.user}</td>
      <td>{product?.product_name}</td>
      <td>{product?.created_at}</td>
      <td className={product?.status}>{product?.status}</td>
    </tr>
  );
}
