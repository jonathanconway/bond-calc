export interface Bond {
  readonly code: string;
  readonly matures: Date;
  readonly coupon: number;
  readonly price: number;
  readonly adjFace: number;
  readonly yieldToMaturity: number;
}
