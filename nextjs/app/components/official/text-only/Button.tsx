import styles from "./Button.module.css";

type Props = {
  children: string;
};

export function Button(props: Props) {
  return <button className={styles.component}>{props.children}</button>;
}
