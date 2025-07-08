import YouTubeEmbed from "../props/YouTubeEmbed";

export default function Live (){
    return(
        <div className="container mb-5 font">
            <div className="row lg-margin">
                <div className="col-12 col-lg-8 border-end mb-5 mb-lg-0 ">
                    <div className="row" >
                       <div className="row">
                          <YouTubeEmbed
                            playlistId="PL4hYTOAQ-Qk4vjQm5q6qrwlhMgnCF6_7s"
                            thumbnailUrl="https://i.ytimg.com/vi/er92wIXcOAI/maxresdefault.jpg"
                            title="Star News Live"
                            headingLink="https://www.youtube.com/playlist?list=PL4hYTOAQ-Qk4vjQm5q6qrwlhMgnCF6_7s"
                            headingText="Star News Live"
                          />

                          <YouTubeEmbed
                            playlistId="PL4hYTOAQ-Qk7-vnTcYPB6cmJj30ZjUJf7"
                            thumbnailUrl="https://i.ytimg.com/vi/gryxEYK3_H8/maxresdefault.jpg"
                            title="Crave"
                            headingLink="https://www.youtube.com/playlist?list=PL4hYTOAQ-Qk7-vnTcYPB6cmJj30ZjUJf7"
                            headingText="Crave"
                          />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}