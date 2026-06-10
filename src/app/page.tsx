"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSmallSizeLargeTitles"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Best Sellers",
          id: "#best-sellers",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "Why Crêpella",
          id: "#why-us",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "Location",
          id: "#location",
        },
      ]}
      brandName="Crêpella"
      button={{
        text: "Order Now",
        href: "https://wa.me/212708207209",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "downward-rays-animated",
      }}
      logoText="Crêpella"
      description="Sweet Moments, Fresh Taste"
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Order Now",
          href: "https://wa.me/212708207209",
        },
      ]}
      buttonAnimation="opacity"
      videoSrc="http://img.b2bpic.net/free-photo/bottom-half-view-berry-cake-white-oval-plate-red-shawl-grey-surface_140725-102508.jpg"
      videoAriaLabel="Cinematic video of Crêpella desserts and coffee"
      mediaAnimation="blur-reveal"
      imageSrc="http://img.b2bpic.net/free-photo/bottom-half-view-berry-cake-white-oval-plate-red-shawl-grey-surface_140725-102508.jpg"
      imageAlt="slow motion dessert preparation cinematic"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "crepes",
          brand: "Crêpella",
          name: "Gourmet Crêpes",
          price: "Starting from 45 MAD",
          rating: 5,
          reviewCount: "240",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-sweet-pastries-sliced-inside-plate-dark-space_140725-79516.jpg",
          imageAlt: "Delicious gourmet crepes with various toppings",
        },
        {
          id: "pancakes",
          brand: "Crêpella",
          name: "Fluffy Pancakes",
          price: "Starting from 50 MAD",
          rating: 5,
          reviewCount: "180",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-pancakes-with-honey-fruits-light-surface-sweet-fruit-cake_140725-82096.jpg",
          imageAlt: "Stack of fluffy pancakes with berries and syrup",
        },
        {
          id: "waffles",
          brand: "Crêpella",
          name: "Crispy Waffles",
          price: "Starting from 55 MAD",
          rating: 5,
          reviewCount: "210",
          imageSrc: "http://img.b2bpic.net/free-photo/square-belgian-waffles-with-loquat-fruits-honey_114579-10552.jpg",
          imageAlt: "Golden crispy waffles with chocolate and fruits",
        },
        {
          id: "coffee",
          brand: "Crêpella",
          name: "Specialty Coffee",
          price: "Starting from 25 MAD",
          rating: 5,
          reviewCount: "300",
          imageSrc: "http://img.b2bpic.net/free-photo/hot-cup-cappuccino-with-cinnamon_140725-7516.jpg",
          imageAlt: "Artistically prepared specialty coffee with latte art",
        },
        {
          id: "desserts",
          brand: "Crêpella",
          name: "Signature Desserts",
          price: "Starting from 60 MAD",
          rating: 5,
          reviewCount: "290",
          imageSrc: "http://img.b2bpic.net/free-photo/trio-gourmet-bites_23-2151942395.jpg",
          imageAlt: "Assortment of elegant signature desserts",
        },
        {
          id: "juices",
          brand: "Crêpella",
          name: "Fresh Juices",
          price: "Starting from 30 MAD",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-immunity-boosting-foods-with-citrus-ginger_23-2149211501.jpg",
          imageAlt: "Variety of vibrant fresh squeezed juices",
        },
      ]}
      title="Our Signature Menu"
      description="Indulge in our exquisite selection of Crêpes, Waffles, Pancakes, and specialty coffee, crafted to perfection for your sweet cravings."
    />
  </div>

  <div id="best-sellers" data-section="best-sellers">
      <FeatureCardTwentyNine
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      features={[
        {
          title: "Chocolate Dream Crêpe",
          description: "A rich crêpe filled with melted Belgian chocolate and fresh strawberries.",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-brazilian-food-arrangement-top-view_23-2148875206.jpg",
          imageAlt: "Chocolate Dream Crepe",
          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=06t7wt",
          buttonText: "View Item",
        },
        {
          title: "Berries & Cream Waffle",
          description: "Crispy waffle topped with mixed berries, whipped cream, and a hint of maple syrup.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-girl-sitting-caffe-eating-breakfast-waffle-with-chocolate-sauce-banana-slices-strawberries-green-ceramic-plate-photographed-her-breakfast_114579-1686.jpg",
          imageAlt: "Berries and Cream Waffle",
          titleImageSrc: "http://img.b2bpic.net/free-vector/set-logo-badge-design-vectors_53876-35203.jpg",
          buttonText: "View Item",
        },
        {
          title: "Caramel Macchiato",
          description: "Our signature blend of espresso, steamed milk, vanilla syrup, and caramel drizzle.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-with-cinnamon-side-view_141793-3253.jpg",
          imageAlt: "Caramel Macchiato",
          titleImageSrc: "http://img.b2bpic.net/free-vector/pancakes-badge-pastry-background_23-2147504407.jpg",
          buttonText: "View Item",
        },
        {
          title: "Pistachio Paradise Pancake",
          description: "Fluffy pancakes adorned with pistachio cream, crushed pistachios, and white chocolate.",
          imageSrc: "http://img.b2bpic.net/free-photo/cottage-cheese-pancakes-syrniki-curd-fritters-with-frozen-berries-blackberry-powdered-sugar-vintage-plate-gourmet-breakfast_114579-1694.jpg",
          imageAlt: "Pistachio Paradise Pancake",
          titleImageSrc: "http://img.b2bpic.net/free-photo/coffee-break-time-leisure-concept_53876-124485.jpg",
          buttonText: "View Item",
        },
      ]}
      title="Our Best Sellers"
      description="Discover the most loved items at Crêpella, cherished by our customers for their exquisite taste and premium quality."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentyNine
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Cozy Ambiance",
          description: "Experience our warm and inviting interior designed for your comfort.",
          imageSrc: "http://img.b2bpic.net/free-photo/dessert-served-glass-with-fruits-top_140725-3588.jpg",
          imageAlt: "Cozy cafe interior with warm lighting",
          titleImageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=lwnqid",
          buttonText: "Explore",
        },
        {
          title: "Artisan Craft",
          description: "Watch our skilled baristas and chefs craft your favorite desserts and beverages.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-hand-barista-cafe-making-coffee-barista-with-coffee_169016-60217.jpg",
          imageAlt: "Barista preparing coffee with latte art",
          titleImageSrc: "http://img.b2bpic.net/free-vector/restaurant-logo-food-business-template-branding-design-vector_53876-154123.jpg",
          buttonText: "Discover",
        },
        {
          title: "Culinary Delights",
          description: "A visual feast of our delicious crêpes, waffles, pancakes, and specialty drinks.",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-appetizers-with-cutlery_23-2148322818.jpg",
          imageAlt: "Assortment of delicious desserts and coffee",
          titleImageSrc: "http://img.b2bpic.net/free-vector/text-master-kitchen-retro-typography_53876-115089.jpg",
          buttonText: "See Menu",
        },
        {
          title: "Happy Moments",
          description: "Capturing the joy and sweet moments shared by our beloved customers.",
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-cup_74190-2977.jpg",
          imageAlt: "Customers enjoying coffee and desserts at Crêpella",
          titleImageSrc: "http://img.b2bpic.net/free-photo/tagliatelle-pasta-with-black-truffle-nest-shaped-bowl_84443-94448.jpg",
          buttonText: "Join Us",
        },
      ]}
      title="Interactive Cozy Gallery"
      description="Step into our world of sweet indulgence and discover the charm of Crêpella through our visual gallery. Hover to zoom!"
    />
  </div>

  <div id="why-us" data-section="why-us">
      <SplitAbout
      textboxLayout="default"
      useInvertedBackground={true}
      imagePosition="right"
      title="Why Choose Crêpella?"
      description="At Crêpella, we are dedicated to crafting unforgettable sweet moments. Our passion for perfection shines through every dish and drink we serve."
      bulletPoints={[
        {
          title: "Premium Ingredients",
          description: "We source only the finest, freshest ingredients to ensure exceptional taste and quality.",
        },
        {
          title: "Artisan Craftsmanship",
          description: "Our chefs and baristas are masters of their craft, creating culinary works of art.",
        },
        {
          title: "Cozy Atmosphere",
          description: "Relax in our luxurious and inviting space, perfect for any occasion.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/ingredients-cake_23-2147758361.jpg"
      imageAlt="Crêpella kitchen with chef preparing ingredients"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "A delightful experience!",
          quote: "Crêpella is my go-to place for the best crêpes in Témara. The ambiance is cozy, and the service is always exceptional. A true gem!",
          name: "Nadia A.",
          role: "Regular Customer",
          imageSrc: "http://img.b2bpic.net/free-photo/dreamy-beautiful-woman-student-sitting-cafe-with-books-magazines-smiling-holding-phone-thinking_176420-12422.jpg",
        },
        {
          id: "2",
          title: "Unforgettable flavors!",
          quote: "The waffles here are simply divine! Perfectly crispy and topped with fresh ingredients. Every visit is a treat for the senses.",
          name: "Karim B.",
          role: "Food Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/fashionable-hipster-guy-sitting-with-woman-cafe_273609-6828.jpg",
        },
        {
          id: "3",
          title: "Perfect spot for gatherings.",
          quote: "We love coming to Crêpella with friends. The variety of desserts and coffees caters to everyone, and the atmosphere makes us feel at home.",
          name: "Sarah & Omar",
          role: "Couple",
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-young-caucasian-redhead-woman-with-cute-smile-hair-bun-laughing-cheerfully-nice-chat-with-unrecognizable-brunette-girl-gray-hat_273609-2058.jpg",
        },
        {
          id: "4",
          title: "My daily dose of happiness.",
          quote: "Their specialty coffee is a must-try. The perfect blend to start my day or for an afternoon pick-me-up. Always consistent and delicious.",
          name: "Fatima Z.",
          role: "Coffee Lover",
          imageSrc: "http://img.b2bpic.net/free-photo/cute-young-woman-outdoor_624325-2553.jpg",
        },
        {
          id: "5",
          title: "Kids love it here!",
          quote: "Finding a place that caters to both adults and kids is rare. Crêpella's pancakes are a huge hit with my children, and I adore their desserts.",
          name: "Hassan M.",
          role: "Happy Parent",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-family-sitting-table_23-2148625927.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Hear from those who have experienced the unique charm and delightful tastes of Crêpella."
    />
  </div>

  <div id="location" data-section="location">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Visit Us in Témara"
      description="Find Crêpella at Av. Ibn Rochd, Témara 12000, Morocco. We look forward to welcoming you! You can also reach us at +212 708 207 209 or fill out the form."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone Number",
          required: false,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 4,
        required: false,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-hands-holding-smartphone_23-2149270100.jpg"
      imageAlt="Google Maps location of Crêpella in Témara"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Crêpella",
          items: [
            {
              label: "About Us",
              href: "#why-us",
            },
            {
              label: "Our Menu",
              href: "#menu",
            },
            {
              label: "Best Sellers",
              href: "#best-sellers",
            },
            {
              label: "Gallery",
              href: "#gallery",
            },
          ],
        },
        {
          title: "Visit Us",
          items: [
            {
              label: "Location",
              href: "#location",
            },
            {
              label: "Opening Hours",
              href: "#",
            },
            {
              label: "Get Directions",
              href: "https://www.google.com/maps/search/Av.+Ibn+Rochd,+T%C3%A9mara+12000,+Morocco",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Call Us: +212 708 207 209",
              href: "tel:+212708207209",
            },
            {
              label: "WhatsApp Us",
              href: "https://wa.me/212708207209",
            },
            {
              label: "Email Us",
              href: "mailto:info@crepella.com",
            },
          ],
        },
      ]}
      bottomLeftText="© 2024 Crêpella. All rights reserved."
      bottomRightText="Crafted with passion in Témara."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
