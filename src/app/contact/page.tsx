"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This would normally be handled by a server action or API route
    console.log(values);
    alert("Message sent successfully! We will get back to you soon.");
    form.reset();
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-10 mix-blend-luminosity bg-cover bg-center" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Get in <span className="text-accent">Touch</span></h1>
            <p className="text-xl max-w-2xl mx-auto text-primary-foreground/80">
              Have questions about admissions or programs? We're here to help. Reach out to our dedicated support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info (Left) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're always open to hear from you. Whether you have a question about our curriculum, admissions process, or campus facilities, our team is ready to answer all your questions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/50">
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Address</h3>
                  <p className="text-muted-foreground">Bahria Foundation College,<br />Wah Cantt, Punjab, Pakistan</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                    <Phone size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+92 123 4567890<br />+92 098 7654321</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@bfc-wah.edu.pk<br />admissions@bfc-wah.edu.pk</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-2">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-lg">Office Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday<br />8:00 AM - 4:00 PM</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-muted rounded-2xl overflow-hidden mt-8 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13264.444265434444!2d72.71360055!3d33.78363715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa64016b3f7e5%3A0xc3f6a2b1f8b4c7a0!2sWah%20Cantt%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1717540000000!5m2!1sen!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </motion.div>

            {/* Contact Form (Right) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card p-10 rounded-3xl shadow-xl border border-border/50 h-fit"
            >
              <h2 className="text-3xl font-bold mb-8 text-foreground">Send us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background/50 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-background/50 h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Admission Inquiry" className="bg-background/50 h-12" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="bg-background/50 min-h-[150px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base group">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
