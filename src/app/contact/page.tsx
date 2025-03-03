"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, ExternalLink, ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';


export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        if (data.previewUrl) {
          setPreviewUrl(data.previewUrl);
        }
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred while sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bgg-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-orange-500/20 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 md:pt-0 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-200 backdrop-blur-sm border border-zinc-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2"></span>
              <span className="text-sm font-medium text-black">Let's work together</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold  mb-6 leading-tight">
              <span className='text-black'>Get in Touch with <span className="text-amber-400">Our Team</span></span>
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
              Ready to elevate your business with cutting-edge technology solutions? We're here to help you achieve operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg shadow-orange-500/20 flex items-center">
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="pb-20 pt-10 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl text-amber-500 font-bold mb-2">Contact Information</h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full mb-6"></div>
                  <p className="text-gray-500 mb-8">
                    Reach out to us through any of these channels. Our team is ready to assist you with your business needs.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start p-5 rounded-xl bg-white border shadow-sm border-zinc-200 hover:border-orange-500/50 transition-colors duration-300">
                    <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-3 rounded-lg mr-5">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-orange-500 mb-1">Our Location</h3>
                      <p className="text-gray-500">Mumbai - Thane</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-5 rounded-xl bg-white shadow-sm border border-zinc-200 hover:border-orange-500/50 transition-colors duration-300">
                    <div className="bg-gradient-to-br from-amber-500 to-yellow-500 p-3 rounded-lg mr-5">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-orange-500 mb-1">Phone</h3>
                      <p className="text-gray-500">+91 85911 28405</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start p-5 rounded-xl bg-white shadow-sm border border-zinc-200 hover:border-orange-500/50 transition-colors duration-300">
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-lg mr-5">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-orange-500 mb-1">Email</h3>
                      <p className="text-gray-500">wecare@infigtl.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3 bg-white backdrop-blur-sm rounded-2xl p-8 border border-zinc-200 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-500 mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <div className="bg-gray-100 border border-zinc-200 shadow-sm rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-orange-500 mb-3">Thank you!</h3>
                    <p className="text-gray-400 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                    
                    {previewUrl && (
                      <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                        <p className="text-gray-300 mb-2">Since this is a development environment, you can view the email here:</p>
                        <a 
                          href={previewUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-orange-400 hover:text-orange-300 flex items-center justify-center"
                        >
                          View Email
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setPreviewUrl('');
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 font-medium flex items-center justify-center mx-auto"
                    >
                      Send another message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-900/20 text-red-400 p-4 rounded-lg border border-red-800">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-base font-medium text-gray-500 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-zinc-200 text-black placeholder-gray-400 outline-none focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-base font-medium text-gray-500 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-zinc-200 text-black placeholder-gray-400 outline-none focus:ring-orange-500 focus:border-orange-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    
                    <div>
                      <label htmlFor="message" className="block text-base font-medium text-gray-500 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-zinc-200 text-black placeholder-gray-400 outline-none focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex cursor-pointer items-center justify-center px-6 py-4 rounded-lg text-white font-medium transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-orange-700 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}