import { useEffect, useState } from "react";
import {
  getwidgetsData,
  getWidgetsAbout,
  getWidgetsLatestNews,
  getWidgetsWebsiteTags,
  getWidgetsSocialMediaLinks
} from "./http-service";
import { useRouter } from 'next/router'


function Footer() {
  const [aboutWidget, setAboutWidget] = useState(null);
  const [latestNewsWidget, setlatestNewsWidget] = useState(null);
  const [websiteTagsWidget, setwebsiteTagsWidget] = useState(null);
  const [socialMediaLinkWidget, setsocialMediaLinkWidget] = useState(null);
  const router = useRouter()

  useEffect(() => {
    getwidgetsData().then(() => {
      setAboutWidget(getWidgetsAbout());
      setlatestNewsWidget(getWidgetsLatestNews());
      setwebsiteTagsWidget(getWidgetsWebsiteTags());
      setsocialMediaLinkWidget(getWidgetsSocialMediaLinks())
    });
  }, []);

  return (
  
  

    <div className="footer_container">
      
      <div className="about">
        <h5 style={{color:'whitesmoke'}}>{aboutWidget?.title} </h5>
        <br></br>
  
        <h4 >eklakshya</h4>

        {aboutWidget?.content.map((d, i) =>    !d.show &&  (
          <p className="ekl-description" key={i} dangerouslySetInnerHTML={{ __html: d.description }}></p>
        ))}
        
        <br />
       <div className="social_media_links">
       <br />
        {socialMediaLinkWidget?.content.map((d, i) =>d.show &&  (
          <a key={i} target="__blank" onClick={() => router.push(d.link)}  id="FooterSocialMediaLinks" className={d.icon}></a>
          
        ))}
       </div>
        
      </div>
      <div className="latest_news">
        <h5 style={{color:'white'}}>{latestNewsWidget?.title} </h5> <br />
        {latestNewsWidget?.content.map((d, i) => !d.show  &&(
          <p className="ekl-description" key={i} dangerouslySetInnerHTML={{ __html: d.description }}></p>
        ))}
      </div>
      <br></br>
    
      <div className="website_tags">
        <h5 style={{color:'white'}}>{websiteTagsWidget?.title}</h5> <br />
        {websiteTagsWidget?.content.map((d, i) =>  !d.show &&(
          <button onClick={() => router.push(d.link)} className="websitelinks" key={i}>
            {d.title}
          </button>
        ))}
      </div>
    </div>
  
      
    
  );
}
export default Footer;
