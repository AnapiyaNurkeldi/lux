import '../TheEnd/TheEnd.css';
import lastlogo from '../../img/LastLogo.png';
const TheEnd = () => {
    return (
        <div className="the-end">
            <div className="div-width"></div>
            <div className="div-top"></div>
            <div className='div-left'></div>
            <div className="div-last">

            </div>
            <div className="end-buttons">
            <div className='homeend'>Главная</div>
                <div className='servicesend'>Правила аренды</div>
                <div className='our-clientsend'>Наши гости</div>
                <div className='about-usend'>О нас</div>
                <div className='contactsend'>Контакты</div>

            </div>

            <div className="contactusend">
                <p className="numberend">+43 (208) 555-01-12</p>
                <p className="emailend">debra.holt@example.com</p>
            </div>

            <div className="logoend">
                <img className="endlogo" src={lastlogo}></img>
                <p className="was-did">Разрботано командой
                                        Luxury bali group</p>
            </div>

            <div className="socialend">
                <div className="instagramend">instagram</div>
                <div className="telegramend">telegram</div>
                <div className="whatsappend">whatsapp</div>
                <div className="telegramchannelend">
                telegram чат
                </div>
            </div>
        </div>
    )
}

export default TheEnd;