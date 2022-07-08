import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CountDownCircle from "../elements/CountDownCircle";

const SectionCard = ({ content, countDownTime }) => {
  return (
    <Card className="section-card">
      <CardContent className="flex items-center">
        {countDownTime && <CountDownCircle countDownTime={countDownTime} />}
        <div>{content}</div>
      </CardContent>
    </Card>
  );
};

export default SectionCard;
