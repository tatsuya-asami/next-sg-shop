// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { DayOfWeek, Hours } from "../../types";

type Data = {
  name: string;
  waitingNumber: number;
  dayOfWeek: DayOfWeek;
  hours: Hours;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "美味しいお店",
    waitingNumber: 5,
    dayOfWeek: "Sunday",
    hours: 13,
  });
}
