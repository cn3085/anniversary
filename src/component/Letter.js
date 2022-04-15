import { Transition } from "semantic-ui-react";
import styles from './Letter.module.css'
export default function Letter({isShowLetter, letterDispatch}){
    return (
        <div class={styles.letter_area} onClick={() => {letterDispatch()}}>
            <Transition
                visible={isShowLetter}
                animation={"fade up"}
                duration={2000}
            >
                <div class={styles.wrapper}>
                    <div class={styles.form__contact}>
                        <div>
                            안녕 쭈야! 사랑해<br/>
                            벌써 우리 2주년이다 시간 참 빨라 그치?
                            아직 오래 만났다는 느낌은 안 드는데 벌써 2년이라구? 싶어.
                            그래서 되돌아 생각해보면 여기저기 많이도 다녔고 추억도 많이 쌓았고
                            그 시간만큼 서로에 대해서도 더 많이 알게된 것 같다는 걸 새삼 느껴.
                            그럼에도 아직 같이 보낼 시간이 아주아주 많이 남았기 때문에 2년이란 시간이
                            짧게 느껴지는 거겠지? if 일지는 몰라도 말이여🤔 아무튼 서로 익숙하면서도 편하고,
                            그러면서도 설레는 그 지금의 마음이 나는 참 좋아. 언제나 서로의 곁에서 함께하고 늘 서로의
                            편이고 가장 편안한 사이지만 그 마음이 당연하지 않고 함께함에 감사한 마음으로 사랑했으면 좋겠어.
                            이번 2주년 뭔가 특별한 선물을 주고 싶어서 요렇게 해봤는디 마음에 드는 선물이었음 좋겠다잉..
                            디자인은 너무 어려워잉😰<br/>
                            아무튼! 우리는 2년 전 오늘 처음 손을 잡았고 그때의 우리가 지금 이렇게 함께 있다.
                            또 다가올 3주년까지 잘부탁하고 늘 변치않는 맘으로 쭈 옆에 있을게.<br/>
                            사랑해 내 사랑 내 쭈영아!😍
                            <div class={styles.letter_today}>2022-04-16 쭈사랑 쭈탱구</div>
                            {/* <p>Hey, Stranger!</p>
                            <p>My name is <span class={styles.form__field} data-placeholder="your name" tabindex="1" contenteditable></span> and I'm writting tou you since I'm interested in <span class="form__field field--message" data-placeholder="your message" tabindex="2" contenteditable></span>.</p>
                            <p>This is my <span class="form__field field--email" data-placeholder="email address" tabindex="3" contenteditable></span>.</p>
                            <p>Hope to get in touch soon. Cheers!</p> */}
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}