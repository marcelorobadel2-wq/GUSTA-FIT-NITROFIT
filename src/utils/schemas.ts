import { FAQItem } from '../types';

export const getCourseSchema = () => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Gusta Fitness Pilates em Casa",
  "description": "Curso completo de Pilates solo para praticar em casa.",
  "provider": {
    "@type": "Organization",
    "name": "Gusta Fitness",
    "sameAs": "https://gustafitness.com"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2347"
  },
  "offers": {
    "@type": "Offer",
    "category": "Paid",
    "priceCurrency": "BRL",
    "price": "297.00"
  }
});

export const getFAQSchema = (items: FAQItem[]) => JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": items.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
});