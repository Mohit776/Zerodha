import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand + Social */}
        <div>
        
          <img src="/Images/logo.svg " className="h-6" alt="" />
          <p className="text-sm mt-2 text-gray-500">
            © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <Twitter className="w-5 h-5 cursor-pointer hover:text-blue-500" />
            <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-700" />
            <Youtube className="w-5 h-5 cursor-pointer hover:text-red-600" />
            
            <FaWhatsapp className="w-5 h-5 cursor-pointer hover:text-green-500" />
            <FaTelegram className="w-5 h-5 cursor-pointer hover:text-sky-500" />
          </div>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Open demat account</li>
            <li>Minor demat account</li>
            <li>NRI demat account</li>
            <li>Commodity</li>
            <li>Dematerialisation</li>
            <li>Fund transfer</li>
            <li>MTF</li>
            <li>Referral program</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Contact us</li>
            <li>Support portal</li>
            <li>How to file a complaint?</li>
            <li>Status of your complaints</li>
            <li>Bulletin</li>
            <li>Circular</li>
            <li>Z-Connect blog</li>
            <li>Downloads</li>
          </ul>
        </div>

        {/* Company + Quick Links */}
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Quick links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 pb-10 text-xs text-gray-500 space-y-2">
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India.
        </p>
        <p>
          For any complaints pertaining to securities broking please write to{" "}
          <span className="text-blue-600">complaints@zerodha.com</span>, for DP
          related to <span className="text-blue-600">dp@zerodha.com</span>.
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on{" "}
          <span className="text-blue-600">SEBI SCORES</span>: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
      </div>
    </footer>
  );
}
