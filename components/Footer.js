import { useEffect, useState } from "react";
import {
  getwidgetsData,
  getWidgetsAbout,
  getWidgetsLatestNews,
  getWidgetsWebsiteTags,
  getWidgetsSocialMediaLinks
} from "./http-service";

function Footer() {
  const [aboutWidget, setAboutWidget] = useState(null);
  const [latestNewsWidget, setlatestNewsWidget] = useState(null);
  const [websiteTagsWidget, setwebsiteTagsWidget] = useState(null);
  const [socialMediaLinkWidget, setsocialMediaLinkWidget] = useState(null);

  useEffect(() => {
    getwidgetsData().then(() => {
      setAboutWidget(getWidgetsAbout());
      setlatestNewsWidget(getWidgetsLatestNews());
      setwebsiteTagsWidget(getWidgetsWebsiteTags());
      setsocialMediaLinkWidget(getWidgetsSocialMediaLinks())
    });
  }, []);

  return (
    <div className="waves">
  

    <div className="footer_container">
      
      <div className="about">
        <h5 style={{color:'whitesmoke'}}>{aboutWidget?.title} </h5>
        {/* <br/> */}
        <h4 >eklakshya</h4>

        {aboutWidget?.content.map((d, i) =>    !d.show &&  (
          <p key={i} dangerouslySetInnerHTML={{ __html: d.description }}></p>
        ))}
        
        <br />
       <div className="social_media_links">
       <br />
        {socialMediaLinkWidget?.content.map((d, i) =>d.show &&  (
          <a key={i} target="__blank" href="https://google.com/" id="FooterSocialMediaLinks" className={d.icon}></a>
          
        ))}
       </div>
        
      </div>
      <div className="latest_news">
        <h5 style={{color:'white'}}>{latestNewsWidget?.title} </h5> <br />
        {latestNewsWidget?.content.map((d, i) => !d.show  &&(
          <p key={i} dangerouslySetInnerHTML={{ __html: d.description }}></p>
        ))}
      </div>
      <div className="website_tags">
        <h5 style={{color:'white'}}>{websiteTagsWidget?.title}</h5> <br />
        {websiteTagsWidget?.content.map((d, i) =>  !d.show &&(
          <a href={ d.link} className="websitelinks" key={i}>
            {d.title}
          </a>
        ))}
      </div>
    </div>
    </div>
      
    
  );
}
export default Footer;
