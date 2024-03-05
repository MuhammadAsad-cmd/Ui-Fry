import BlogArticles from '@/app/components/BlogArticles/BlogArticles'
import Blog from '@/app/components/BlogHeroSection/Blog'
import Faq from '@/app/components/Faq/Faq'
import Footer from '@/app/components/Footer/Footer'
import HeaderTwo from '@/app/components/Header/HeaderTwo'
import Request from '@/app/components/RequestAppoint/Request'
import Hero from '@/app/components/ServiceHeroSection/Hero'
import Specialist from '@/app/components/Specialist/Specialist'
import Welcome from '@/app/components/Welcome/Welcome'

const page = () => {
  return (
    <>
       <div className="linear pt-10">
        <HeaderTwo />
        <Blog />
      </div>
      <BlogArticles/>
      <Welcome />
      <Specialist />
      <Faq />
      <Footer />
    </>
  )
}

export default page
