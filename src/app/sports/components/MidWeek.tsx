import Image from "next/image";

export default function MidWeek(){
    return(
        <div>
            <div className="textwidget">
                              <a
                                title="Flip through MidWeek online"
                                href="https://midweek-hi.newsmemory.com/?editionStart=MidWeek"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Image
                                  className="mb-2"
                                  src="https://sa-media.s3.us-east-1.amazonaws.com/images/mw-latest-edition-300x100.gif"
                                  alt="Flip through MidWeek online"
                                  width={300}
                                  height={100}
                                  unoptimized
                                />
                                <span className="visually-hidden">Opens in a new tab</span>
                              </a>
                            </div>
        </div>
    )
}