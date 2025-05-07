import ContactForm from '../components/contactpage/ContactForm'
import ContactHeader from '../components/contactpage/contactHeader'
import Faqs from '../components/contactpage/Faqs'
import Newsletter from '../components/homepage/Newsletter'

const ContactPage = () => {
  return (
    <div>
        <ContactHeader />
        <ContactForm />
        <Newsletter />
        <Faqs />
    </div>
  )
}

export default ContactPage