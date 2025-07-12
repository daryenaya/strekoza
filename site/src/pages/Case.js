import React from 'react';

export default function Case() {
    return (
        <div className="case-page">

            <div className="work-preview">
                <div className="placeholder">{"{ сайты }"}</div>
            </div>
            <div className="works-grid">

                {/* Карточка 1 */}
                <div className="work-card">
                    <div className="work-preview">
                    </div>
                    <div className="work-portfolio-image">
                        <a
                            href="https://www.behance.net/gallery/230084755/lending-onlajn-kursov-po-programmirovani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case3.png')}
                                alt="дизайн лендинга"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н л<i>е</i>ндин<i>г</i>а</h2>
                        <p className="work-subtitle">{"{ онлайн-курсов по программированию }"}</p>
                        <div className="work-year">2025</div>
                    </div>
                </div>

                {/* Карточка 2 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            href="https://www.behance.net/gallery/220685593/sajt-dlja-advokata-iz-moskvy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case1.png')}
                                alt="дизайн сайта для адвоката"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н с<i>а</i>йта</h2>
                        <p className="work-subtitle">{"{ для адвоката г. Москвы }"}</p>
                        <div className="work-year">2025</div>
                    </div>
                </div>

                 {/* Карточка 3 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case4.png')}
                                alt="дизайн сайта Harmony HR"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н с<i>а</i>йта</h2>
                        <p className="work-subtitle">{"{ для  HR-компании Harmony HR }"}</p>
                        <div className="work-year">2025</div>
                    </div>
                </div>

                {/* Карточка 4 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            href="https://www.behance.net/gallery/229994777/veb-sajt-dlja-salona-krasoty-ETO-SAd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case2.png')}
                                alt="дизайн сайта ETO SАД"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н с<i>а</i>йта</h2>
                        <p className="work-subtitle">{"{ для салона красоты ETO SAД. }"}</p>
                        <div className="work-year">2025</div>
                    </div>
                </div>



            </div>

            <div className="work-preview">
                <div className="placeholder">{"{ презентации }"}</div>
            </div>
            <div className="works-grid">

                {/* Карточка 1 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            href="https://www.behance.net/gallery/213661441/prezentacija-dlja-konferencii-po-psihologii"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case5.png')}
                                alt="дизайн презентации КАК БЫТЬ ОК"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н п<i>р</i>езе<i>н</i>тации</h2>
                        <p className="work-subtitle">{"{ для  проект-конференции по психологии }"}</p>
                        <div className="work-year">2024</div>
                    </div>
                </div>

                {/* Карточка 2 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case6.png')}
                                alt="дизайн презентации о стрессе "
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н п<i>р</i>езе<i>н</i>тации</h2>
                        <p className="work-subtitle">{"{ для  вебинара о влиянии стресса }"}</p>
                        <div className="work-year">2024</div>
                    </div>
                </div>

                {/* Карточка 3 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case7.png')}
                                alt="дизайн презентации для Альфа-Банк"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н п<i>р</i>езе<i>н</i>тации</h2>
                        <p className="work-subtitle">{"{ для  неформального мероприятия в Альфа-Банке }"}</p>
                        <div className="work-year">2024</div>
                    </div>
                </div>

            </div>

            <div className="work-preview">
                <div className="placeholder">{"{полиграфия }"}</div>
            </div>
            <div className="works-grid">

                {/* Карточка 1 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case8.png')}
                                alt="баннер для репетитора"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н б<i>а</i>нне<i>р</i>а</h2>
                        <p className="work-subtitle">{"{ для рекламы услуг детского репетитора }"}</p>
                        <div className="work-year">2024</div>
                    </div>
                </div>

                 {/* Карточка 2 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case9.png')}
                                alt="баннеры для NIKKO"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н б<i>а</i>нне<i>р</i>ов</h2>
                        <p className="work-subtitle">{"{ для химчистки NIKKO }"}</p>
                        <div className="work-year">2024</div>
                    </div>
                </div>

                 {/* Карточка 3 */}
                <div className="work-card">

                    <div className="work-portfolio-image">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="image-link"
                        >
                            <img
                                src={require('../assets/image/case10.png')}
                                alt="открытка для NIKKO"
                            />
                        </a>
                    </div>
                    <div className="work-info">
                        <h2 className="work-title"><i>д</i>иза<i>й</i>н откр<i>ы</i>тк<i>и</i></h2>
                        <p className="work-subtitle">{"{ для химчистки NIKKO }"}</p>
                        <div className="work-year">2024</div>
                    </div>
                </div>

                </div>

        </div>
    );
}