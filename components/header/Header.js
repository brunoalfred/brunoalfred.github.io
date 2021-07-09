import styles from './Header.module.css';


export default function Header() {
    return (

        <nav className={styles.global}>
            <div>
                <ul>

                    <li>Home</li>
                    <li>Contact</li>
                    <li>Projects</li>
                    <li></li>


                </ul>
            </div>
        </nav>

    );
};

export { Header }