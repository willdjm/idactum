import { FloatingWhatsApp } from 'react-floating-whatsapp'
import whats from "../../assets/logowhats.png";


export function Whatsapp(){
    return(
        <div>
            <dir>
            <FloatingWhatsApp
            phoneNumber="+55 11 94567 6016"
            accountName="iDactum"
            chatMessage="Olá, seja bem vindo, qual sua dúvida?"
            statusMessage="Inteligencia de dados"
            placeholder="Digite sua mensagem"
            allowEsc='true'
            allowClickAway='true'
            notification
            notificationSound
            darkMode='true'
            chatboxClassName="aaaaaaaaaaaa"
            avatar={whats}
        
            />
            </dir>
        </div>

    );
}