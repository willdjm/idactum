import { FloatingWhatsApp } from 'react-floating-whatsapp'
import whats from "../assets/whats.webp";


export function Whatsapp(){
    return(
        <div>
            <dir>
            <FloatingWhatsApp
            phoneNumber="+55 11 94567 6016"
            accountName="iDactum"
            chatMessage="Bem vindo a iDactum"
            statusMessage="Inteligencia de dados"
            placeholder="Digite sua mensagem"
            allowEsc='true'
            allowClickAway='true'
            notification
            notificationSound
            avatar={whats}
            />
            </dir>
        </div>
    );
}