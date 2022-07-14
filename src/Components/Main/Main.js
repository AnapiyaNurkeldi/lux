import '../Main/Main.css';

import Header from '../Header/Header';
import TheEnd from '../TheEnd/TheEnd';

import bgMain from '../../img/image 1.png';
import instagram from '../../img/Instagram.png';
import telegram from '../../img/Telegram.png';
import whatsapp from '../../img/WhatsApp.png';
import rec from '../../img/Rectangle 197.png';
import rectwo from '../../img/Rectangle 189.png';
import arrau from '../../img/Arrow 11.png';
import recthree from '../../img/Rectangle 167.png';
import recfour from '../../img/Rectangle 190.png';
import recfive from '../../img/Rectangle 191.png';
import recsix from '../../img/Rectangle 192.png';
import recsev from '../../img/Rectangle 193.png';
import receight from '../../img/Rectangle 196.png';
import recnine from '../../img/Rectangle 195.png';
import jungle from '../../img/Jungle.png';
import grouponeoneseven from '../../img/Group 117.png';
// import grouponeoneeight from '../../img/Group 118.png';
// import grouponeonenine from '../../img/img/Group 119.png';

const Main = () => {
    return(
        <div className='main'>
            <div className='first-main'>
            

            <div className='rectengle'></div>
            <img src={bgMain} className="bgimg"></img>
            <Header/>

            <div className='MainText'>
                <h1 className='Text'>
                Luxury <br></br>bali <br></br>group
                </h1>
            </div>

            <div className='social'>
                <img src={instagram} className="ins"></img>
                <img src={telegram} className='teleg'></img>
                <img src={whatsapp} className='whats'></img>
            </div>
        </div>
        <div className="AllBoxes">
            <h2 className='about-boxes'>
            МЫ ТАМ, ГДЕ СБЫВАЮТСЯ МЕЧТЫ О ВЕЛИКОЛЕПНОМ ОТДЫХЕ 
            </h2>

            <p className='all-about-boxes'>
            Генерация рыбатекста происходит довольно просто: есть несколько фиксированных наборов фраз и словочетаний, из которых в опредёленном порядке формируются предложения. Предложения складываются в абзацы – и вы наслаждетесь очередным бредошедевром.
            </p>

            <div className='boxes'>
                <div className='rectengle1'>
                    <p className='number'>01</p>
                    <h2 className='name-lux'>luxury <br></br>cars</h2>
                    <p className='more'>Подробнее</p>
                    <img src={arrau} className="array"></img>
                    <img src={rec} className="rec1"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle2'>
                    <p className='number2'>02</p>
                    <h2 className='name-lux2'>luxury <br></br>villas </h2>
                    <p className='more2'>Подробнее</p>
                    <img src={arrau} className="array2"></img>
                    <img src={rectwo} className="rec2"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle3'>
                    <p className='number3'>03</p>
                    <h2 className='name-lux3'>luxury <br></br>yachts</h2>
                    <p className='more3'>Подробнее</p>
                    <img src={arrau} className="array3"></img>
                    <img src={recthree} className="rec3"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle4'>
                    <p className='number4'>04</p>
                    <h2 className='name-lux4'>private <br></br>jet</h2>
                    <p className='more4'>Подробнее</p>
                    <img src={arrau} className="array4"></img>
                    <img src={recfour} className="rec4"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle5'>
                    <p className='number5'>05</p>
                    <h2 className='name-lux5'>police <br></br>escort</h2>
                    <p className='more5'>Подробнее</p>
                    <img src={arrau} className="array5"></img>
                    <img src={recfive} className="rec5"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle6'>
                    <p className='number6'>06</p>
                    <h2 className='name-lux6'>bodyguards</h2>
                    <p className='more6'>Подробнее</p>
                    <img src={arrau} className="array6"></img>
                    <img src={recsix} className="rec6"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle7'>
                    <p className='number7'>07</p>
                    <h2 className='name-lux7'>helicopter<br></br> tours</h2>
                    <p className='more7'>Подробнее</p>
                    <img src={arrau} className="array7"></img>
                    <img src={recsev} className="rec7"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle8'>
                    <p className='number8'>08</p>
                    <h2 className='name-lux8'>visa</h2>
                    <p className='more8'>Подробнее</p>
                    <img src={arrau} className="array8"></img>
                    <img src={receight} className="rec8"></img>
                </div>
            </div>
            <div className='boxes'>
                <div className='rectengle9'>
                    <p className='number9'>09</p>
                    <h2 className='name-lux9'>entertainments</h2>
                    <p className='more9'>Подробнее</p>
                    <img src={arrau} className="array9"></img>
                    <img src={recnine} className="rec9"></img>
                </div>
            </div>
        </div>
        <div className='talk-with-us'>
            <div className='send-message'>
                <div className='rectangle2'></div>
                <h1 className='we-close'>Мы ближе, чем вам кажется</h1>
                <img src={jungle} className="jungle"></img>
                <div className='write-here'>
                    <h1 className='head-talk'>Давайте обсудим ваш отпуск</h1>
                    <p className='text-about-it'>Генерация рыбатекста происходит довольно просто: есть несколько фиксированных наборов фраз и словочетаний</p>
                    
                        <input type="text" placeholder='Имя' className='input-name'></input>
                        <input type="text" placeholder='Номер телефона WHATSAPP' className='input-name'></input>
                        <input type="list" placeholder='Услуга' className='input-name'></input>
                        <div className="send-btn">
                            <div className="retengleforntm">
                            </div>  
                            <p className='send-btn-name'>Отправить</p>
                        </div>
                        
                </div>
            </div>
        </div>

        <div className='for-you'>
                <h2 className='who-likes'>Для тех, кто ценит высокие стандарты</h2>

                <img src={grouponeoneseven} className="morgen"></img>
                {/* <img src={grouponeoneeight} className="wilsacom"></img> */}
                {/* <img src={grouponeonenine} className="elday"></img> */}
        </div>


        <div className="TheEnd">
            <TheEnd/>
        </div>
        
    </div>
    )
}

export default Main;