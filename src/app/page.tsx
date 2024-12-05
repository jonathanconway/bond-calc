import { DateTime } from "luxon";
import { fetchBonds } from "./fetch-bonds";
import * as styles from "./page.css";

export default async function Home() {
  const bonds = await fetchBonds();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>BondCalc</h1>
      </header>
      <main className={styles.main}>
        <div>
          <table className={styles.bondTable}>
            <thead>
              <tr className={styles.bondTableHeaderRow}>
                <th className={styles.bondTableHeaderCell}>Code</th>
                <th className={styles.bondTableHeaderCell}>Matures</th>
                <th className={styles.bondTableHeaderCell}>Coupon</th>
                <th className={styles.bondTableHeaderCell}>Price</th>
                <th className={styles.bondTableHeaderCell}>Adj. Face</th>
                <th className={styles.bondTableHeaderCell}>
                  Yield to Maturity
                </th>
              </tr>
            </thead>
            <tbody>
              {bonds.map(
                ({
                  code,
                  matures,
                  coupon,
                  price,
                  adjFace,
                  yieldToMaturity,
                }) => (
                  <tr key={code} className={styles.bondTableRow}>
                    <td className={styles.bondTableCell}>{code}</td>
                    <td className={styles.bondTableCell}>
                      {DateTime.fromJSDate(matures).toFormat("MM/yyyy")}
                    </td>
                    <td className={styles.bondTableCell}>{coupon}</td>
                    <td className={styles.bondTableCell}>{price}</td>
                    <td className={styles.bondTableCell}>{adjFace}</td>
                    <td className={styles.bondTableCell}>{yieldToMaturity}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
