

export default function Header(){
    return(
        <div>
            <button className="detail-tag">Breaking News</button>
            <h1 className="main-title font">Fire crews battle Nanakuli wildfire</h1>
            <div className="clearfix mb-3 mb-md-5">
             <div className="meta-info-detail pt-2 float-start">
               <p className="author mb-2 custom_byline update-font">By Star-Advertiser staff</p>
               <p className="post-meta">
                 <em>
                   <span className="pub-date update-font">July 7, 2025</span>
                   {' • '}
                   <span className="text-danger">
                     Last updated 9:27 p.m.
                   </span>
                 </em>
               </p>
             </div>
           </div>
           
        </div>
    )
}