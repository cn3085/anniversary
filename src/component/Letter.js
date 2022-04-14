import { Transition } from "semantic-ui-react";
import styles from './Letter.module.css'
export default function Letter({isShowLetter}){
    return (
        <div class={styles.letter_area}>
            <Transition
                visible={isShowLetter}
                animation={"fade up"}
                duration={2000}
            >
                <div class={styles.wrapper}>
                    <h1>Letter-like form with inline fields</h1>
                    <form class={styles.form__contact}>
                        <fieldset>
                        <p>Hey, Stranger!</p>
                        <p>My name is <span class={styles.form__field} data-placeholder="your name" tabindex="1" contenteditable></span> and I'm writting tou you since I'm interested in <span class="form__field field--message" data-placeholder="your message" tabindex="2" contenteditable></span>.</p>
                        <p>This is my <span class="form__field field--email" data-placeholder="email address" tabindex="3" contenteditable></span>.</p>
                        <p>Hope to get in touch soon. Cheers!</p>
                        <button type="submit" class="button button--xlarge" tabindex="4">Send message &#187;</button>
                        </fieldset>
                    </form>
                </div>
            </Transition>
        </div>
    )
}