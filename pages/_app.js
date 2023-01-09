import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss'
import Head from "next/head";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Footer_bar from '../components/Footer_bar';
import Breadcrumb from "../components/Breadcrumb";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [currentpath, setcurrentpath] = useState("")
  const [displayBreadCrumb, setdisplayBreadCrumb] = useState(false)
  const legacyPaths = ["/", "/about", "/contact"]

  const router = useRouter()
  const checkBreadcrumbvisibility = () => {
    const urldata = location.pathname.split("/").filter(d => d.length)
    setcurrentpath(location.pathname);
    if (legacyPaths.includes(currentpath)) {
      setdisplayBreadCrumb(true)
    } else if (urldata.includes("training") || urldata.includes("blog")){
       setdisplayBreadCrumb(!(urldata.length>1))
    } else {
      setdisplayBreadCrumb(false)
    }
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', checkBreadcrumbvisibility)
  }, [router.events]);


  useEffect(() => {
    checkBreadcrumbvisibility();
  }, []);


  return( 
  <>
  <Head>

<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>eklakshya</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</Head>
<Navbar href="/" src = "/logo.png" height = "20%" width = "20%"/>
{ displayBreadCrumb && <Breadcrumb /> }
<Component {...pageProps} />
  <Footer/>
  <Footer_bar/>
  </>)
}

export default MyApp
