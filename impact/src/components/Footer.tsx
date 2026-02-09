import './Footer.css';
import logoFull from '../assets/logo-full.png';

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer section-dark">
            <div className="footer__container container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <img
                            src={logoFull}
                            alt="Impact Channel"
                            className="footer__logo"
                        />
                        <p className="footer__description">
                            Especialistas en Retail & Trade Marketing. Llevamos tu marca al siguiente nivel con soluciones integrales de visibilidad y gestión.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h3 className="footer__title">Navegación</h3>
                        <ul className="footer__list">
                            <li><button onClick={() => scrollToSection('inicio')} className="footer__link">Inicio</button></li>
                            <li><button onClick={() => scrollToSection('servicios')} className="footer__link">Servicios</button></li>
                            <li><button onClick={() => scrollToSection('know-how')} className="footer__link">Know-How</button></li>
                            <li><button onClick={() => scrollToSection('proceso')} className="footer__link">Proceso</button></li>
                            <li><button onClick={() => scrollToSection('contacto')} className="footer__link">Contacto</button></li>
                        </ul>
                    </div>

                    <div className="footer__contact">
                        <h3 className="footer__title">Contacto</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <span className="footer__icon">📍</span>
                                <span>C/ Ejemplo 123, Madrid</span>
                            </li>
                            <li className="footer__item">
                                <span className="footer__icon">📧</span>
                                <a href="mailto:info@impactchannel.es" className="footer__link">info@impactchannel.es</a>
                            </li>
                            <li className="footer__item">
                                <span className="footer__icon">📱</span>
                                <a href="tel:+34912345678" className="footer__link">+34 912 345 678</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} Impact Channel. Todos los derechos reservados.
                    </p>
                    <div className="footer__legal">
                        <a href="#" className="footer__link-sm">Aviso Legal</a>
                        <a href="#" className="footer__link-sm">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
