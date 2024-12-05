import { DateTime } from "luxon";

export function calculateYieldToMaturity({
  coupon,
  matures,
}: // adjFace,
{
  readonly coupon: number;
  readonly matures: Date;
  // readonly adjFace: number;
}) {
  const now = new Date();
  const nowDateTime = DateTime.fromJSDate(now);
  const maturesDateTime = DateTime.fromJSDate(matures);

  const years = maturesDateTime.diff(nowDateTime).years;

  console.log({ matures, years });

  return years * coupon;
}
