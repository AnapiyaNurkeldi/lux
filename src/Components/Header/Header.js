import '../Header/Header.css';
import logo from '../../img/Vector.png';

const Header = () => {
    return(
        <div className='header'>
            <div className='buttons'>
                <div className='home'>Главная</div>
                <div className='services'>Услуги</div>
                <div className='our-clients'>Наши гости</div>
                <div className='about-us'>О нас</div>
                <div className='contacts'>Контакты</div>
            </div>

            <div className='logotype'>
                <img src={logo} className="logo"></img>
            </div>

            <div className='contact'>
                <div>
                +43 (208) 555-01-12
                </div>
            </div>

            <div className='change-lang'>
                <div className='ru'>
                    RU
                </div>
                <div className='en'>
                    EN
                </div>
                <div className="in">
                    IN
                </div>
            </div>
        </div>
    )
}

export default Header;