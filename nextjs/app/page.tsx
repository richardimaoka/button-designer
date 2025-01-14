import { Main } from "./components/ui/main/Main";
import { SideBar } from "./components/ui/sidebar/SideBar";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <SideBar />
      <Main />
    </div>
  );
}
