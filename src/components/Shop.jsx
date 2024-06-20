import React from "react";
import { Card } from "./Card";
export const Shop = () => {
  const resto = [
    {
      img: "",
      tatle: "",
      type: "",
    },
  ];
  return (
    <div>
      <Card img={resto[0].img} title={resto[0].title} type={resto[0].type} />
      <Card img={resto[1].img} title={resto[1].title} type={resto[1].type} />
      <Card img={resto[2].img} title={resto[2].title} type={resto[2].type} />
      <Card img={resto[3].img} title={resto[3].title} type={resto[3].type} />
      <Card img={resto[4].img} title={resto[4].title} type={resto[4].type} />
      <Card img={resto[5].img} title={resto[5].title} type={resto[5].type} />
    </div>
  );
};
