import styles from "./styles.module.scss";

interface Props {
  resultAbility: any;
}

export const AbilitiesList = ({ resultAbility }: Props) => {
  
  
  return (
    <div className={styles.abilities}>
      {
        resultAbility.map((ability:any) => (
          <>
          <span>{ability.name}</span>
          </>
        ))
      }
      
    </div>
  );
};
