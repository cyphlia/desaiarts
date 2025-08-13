import React from 'react';
import { MapPin, Phone, Mail, Clock, Award, Users, AlignCenter } from 'lucide-react';
import { useAbout } from '../context/AboutContext';

const About = () => {
  const { aboutInfo } = useAbout();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <b>About Desai Arts</b>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2000gap-1200000">
            {/* Company Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Desai Arts stands in the symbol of cultural heritage of the Hindu Religion build by a sole conductor Amit Desai for his creative harmonies.
                  From the streets of Lalbaug and Parel, since childhood Amit Shivaji Desai has been engulfed in a sea of creativity. 
                  He not only has countless experiences in Art Direction, but also has personally helped many notable communities in Parel and Lalbaug during the celebrations of Ganesh chathurthi.
                  Be it mandap designing, decorating the Ganesh Idol, or to provide extreme supervision and visualisations for his creative models, he has done it all. 
                  This has been a dream in the making for him to work so closely and personally let his creativity flow through the means of Desai Arts. 
                  While a very young-budding project for now, we hope to catch the nature of your enthusiasm and grow together in the joy of Lord Ganesh. 
                  For any ideas, collaborations or help feel free to reach out to us.             
                </p>
                <h1 style={{ textAlign: "center" }}>
                  <b>!!! गणपती बाप्पा मोरया !!!</b>
                </h1>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
                  </div>
                  <p className="text-gray-700">{aboutInfo.experience}</p>
                </div>
              </div>
            </div>
          </div>
            
        </div>
      </section>
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-10 md:p-12">
        <h2 className="text-4xl font-bold text-white mb-12 text-center relative pb-4">
          Get In Touch
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white rounded-full"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Left - Address */}
          <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <div className="bg-white p-3 rounded-full shadow-lg mr-5 flex-shrink-0">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Address</h4>
              <p className="text-white/90">Manse Maidan, Sector -2, Next to Ambe Mata Mandir, New Panvel - 410206, Maharashtra</p>
            </div>
          </div>

          {/* Top Right - Phone */}
          <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <div className="bg-white p-3 rounded-full shadow-lg mr-5 flex-shrink-0">
              <Phone className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Phone</h4>
              <p className="text-white/90 hover:text-white transition-colors">
                <a href="tel:9967535744">Amit Desai - 9967535744</a>
              </p>
            </div>
          </div>

          {/* Bottom Left - Email */}
          <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <div className="bg-white p-3 rounded-full shadow-lg mr-5 flex-shrink-0">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Email</h4>
              <p className="text-white/90 hover:text-white transition-colors">
                <a href="mailto:amit.s.desai7@gmail.com">amit.s.desai7@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Bottom Right - Working Hours */}
          <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
            <div className="bg-white p-3 rounded-full shadow-lg mr-5 flex-shrink-0">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg mb-1">Working Hours</h4>
              <p className="text-white/90">10:00 am to 11:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default About;