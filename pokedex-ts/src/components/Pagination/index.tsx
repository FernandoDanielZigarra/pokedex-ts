import styles from "./styles.module.scss";

interface Props {
  maxItemsInPage: number;
  page: number;
  nextPage: () => void;
  previusPage: () => void;
  maxItems: number;
}

export const Pagination = ({
  maxItemsInPage,
  page,
  nextPage,
  previusPage,
  maxItems,
}: Props) => {
  const lastPage = Math.ceil(maxItems / maxItemsInPage);



  return (
    <div className={styles.pagination}>
      <button disabled={page === 1} onClick={previusPage}>
        &lt;
      </button>
      <span>{page}</span>
      <button disabled={page === lastPage} onClick={nextPage}>
        &gt;
      </button>
    </div>
  );
};
