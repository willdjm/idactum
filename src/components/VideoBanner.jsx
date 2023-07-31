
import videobanner from "../assets/video-banner.mp4";

export function VideoBanner(){
    return(
        <div id='/'>
            <dir>
            <video className="w-full h-auto max-w-full" loop autoPlay muted>
            <source src={videobanner} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            </dir>
        </div>

    );
}