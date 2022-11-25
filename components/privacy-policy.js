



function Privacypolicy(){
    const [privacy, setprivacy] = useState(null);

    useEffect(() => {
        Privacypolicy().then(() => {
          sethomepagesliderWidget(getWidgetsHomePageSlider());
        });
      }, []);
    return(
        <div>
        hiiiii Privacypolicy</div>
    )

}
export default Privacypolicy;