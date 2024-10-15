import React, { Children } from "react";

export default function EachUtils({ data, render }: any) {
  return Children.toArray(data.map((item: any, index: any) => render(item, index)));
}
