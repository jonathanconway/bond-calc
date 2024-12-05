import { cache } from "react";
import { FetchBondsResponse } from "./fetch-bonds-response";
import { Bond } from "./models/bond";
import { fetchBondsMock } from "./fetch-bonds-mock";
import { pause } from "./utils/pause";
import { calculateYieldToMaturity } from "./models/yield-to-maturity";

async function fetchBonds_() {
  // const bondsResponse = await fetch(
  //   "https://asx.api.markitdigital.com/asx-research/1.0/bonds/government/exchange-traded-indexed?height=241&width=930"
  // );
  // const bondsResponseJson = (await bondsResponse.json()) as FetchBondsResponse;

  const bondsResponseJson = JSON.parse(fetchBondsMock) as FetchBondsResponse;

  await pause(2_000);

  return bondsResponseJson.data.items.map(mapBondsResponseItemToBond);
}

function mapBondsResponseItemToBond(
  item: FetchBondsResponse["data"]["items"][0]
): Bond {
  const code = item.symbol;
  const coupon = item.couponPercent;
  const matures = new Date(item.dateMaturity);
  const adjFace = item.faceValue;
  const price = item.priceLast;
  const yieldToMaturity = calculateYieldToMaturity({ coupon, matures });

  return {
    code,
    coupon,
    matures,
    adjFace,
    price,
    yieldToMaturity,
  };
}

export const fetchBonds = cache(fetchBonds_);
