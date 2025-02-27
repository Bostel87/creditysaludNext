import React from "react";
import YouTube from "react-youtube";


// export default class Video extends React.Component {
//     render() {
//         const opts = {
//             height: "390",
//             width: "640",
//             playerVars: {
//                 autoplay: 1,
//             },
//         };

//         return (
//             <div>
//                 <h3>GeeksforGeeks - Youtube</h3>
//                 <YouTube videoId="sTnm5jvjgjM" 
//                     opts={opts} onReady={this._onReady} />
//             </div>
//         );
//     }

//     _onReady(event: { target: { pauseVideo: () => void } }) {
//         event.target.pauseVideo();
//     }
// }
export default function Video() {
    return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <YouTube videoId="0-SBrOOCqbk"/>
        {/* <iframe src="https://www.youtube.com/watch?v=0-SBrOOCqbk"  allowFullScreen /> */}
    </div>
}