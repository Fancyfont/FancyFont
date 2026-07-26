import { ToolDefinition } from '../types';

export function updateSeoMetadata(tool?: ToolDefinition | null, categoryName?: string) {
  if (typeof document === 'undefined') return;

  const siteName = 'Fonti Studio';
  const currentUrl = window.location.href;

  updateCanonicalUrl(currentUrl);

  if (tool) {
    // Tool Specific Meta
    const pageTitle = `${tool.metaTitle} | ${siteName}`;
    document.title = pageTitle;

    updateMetaTag('description', tool.metaDescription);
    updateMetaTag('keywords', tool.keywords.join(', '));

    // OpenGraph & Twitter
    updateMetaProperty('og:title', pageTitle);
    updateMetaProperty('og:description', tool.metaDescription);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('twitter:title', pageTitle);
    updateMetaProperty('twitter:description', tool.metaDescription);

    // JSON-LD Schema (SoftwareApplication, FAQPage, HowTo, BreadcrumbList)
    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebApplication',
          'name': tool.name,
          'url': currentUrl,
          'applicationCategory': 'UtilitiesApplication',
          'operatingSystem': 'All',
          'description': tool.metaDescription,
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          },
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'ratingCount': '12400',
            'bestRating': '5',
            'worstRating': '1'
          }
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': window.location.origin
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': tool.category,
              'item': `${window.location.origin}/${tool.category}`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': tool.name,
              'item': currentUrl
            }
          ]
        },
        ...(tool.faqs && tool.faqs.length > 0 ? [{
          '@type': 'FAQPage',
          'mainEntity': tool.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.answer
            }
          }))
        }] : []),
        ...(tool.howToUseSteps && tool.howToUseSteps.length > 0 ? [{
          '@type': 'HowTo',
          'name': `How to use ${tool.name}`,
          'step': tool.howToUseSteps.map((step, idx) => ({
            '@type': 'HowToStep',
            'position': idx + 1,
            'text': step
          }))
        }] : [])
      ]
    };

    injectJsonLd(jsonLdData);
  } else if (categoryName) {
    const pageTitle = `${categoryName} Fonts & Generators | ${siteName}`;
    document.title = pageTitle;
    const catDesc = `Free online ${categoryName} tools. Generate fancy text styles, copy unicode symbols, emojis, and transform text formats easily with 100% compatibility.`;
    
    updateMetaTag('description', catDesc);
    updateMetaTag('keywords', `${categoryName.toLowerCase()} font generator, ${categoryName.toLowerCase()} fancy text, ${categoryName.toLowerCase()} unicode`);
    
    updateMetaProperty('og:title', pageTitle);
    updateMetaProperty('og:description', catDesc);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('twitter:title', pageTitle);
    updateMetaProperty('twitter:description', catDesc);

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': window.location.origin
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': categoryName,
              'item': currentUrl
            }
          ]
        }
      ]
    };

    injectJsonLd(jsonLdData);
  } else {
    // Homepage Meta
    const pageTitle = `Fancy Text Generator (Copy & Paste) - 100+ Aesthetic Fonts & Symbols | ${siteName}`;
    document.title = pageTitle;
    const homeDesc = 'Free #1 Fancy Text Generator & Font Changer. 100+ aesthetic font styles, copy & paste cursive, bold, gothic, Instagram bio fonts, TikTok text generator, cool symbols, kaomoji & glitch text.';
    
    updateMetaTag('description', homeDesc);
    updateMetaTag('keywords', 'fancy text generator, font generator, instagram fonts, copy and paste fonts, cursive font generator, cool text generator, unicode symbols, kaomoji, discord symbols, zalgo text, bio font changer, text converter');

    updateMetaProperty('og:title', pageTitle);
    updateMetaProperty('og:description', homeDesc);
    updateMetaProperty('og:url', currentUrl);
    updateMetaProperty('twitter:title', pageTitle);
    updateMetaProperty('twitter:description', homeDesc);

    const jsonLdData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          'name': siteName,
          'url': window.location.origin,
          'potentialAction': {
            '@type': 'SearchAction',
            'target': `${window.location.origin}/?s={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'How do copy and paste fonts work on Instagram & TikTok?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Our Fancy Text Generator converts your regular keyboard text into special Unicode character symbols. Because Unicode characters are universal standards, you can copy and paste them directly into Instagram bios, TikTok captions, Discord usernames, and WhatsApp messages without installing any font files!'
              }
            },
            {
              '@type': 'Question',
              'name': 'Is Fonti Studio 100% free to use?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Yes! Fonti Studio is completely 100% free with unlimited generation and instant 1-click copy functionality. No sign-up or software installation required.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Which font styles are available in Fonti Studio?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Fonti Studio includes over 100 font styles including Cursive Script, Gothic Fraktur, Bold Serif, Double Struck, Circled Bubble Text, Squared Block Text, Small Caps, Subscript, Zalgo Glitch Text, Gaming Bio Symbols, and Decorative Wings.'
              }
            }
          ]
        }
      ]
    };

    injectJsonLd(jsonLdData);
  }
}

function updateCanonicalUrl(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function updateMetaTag(name: string, content: string) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function updateMetaProperty(property: string, content: string) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function injectJsonLd(schemaObj: Record<string, unknown>) {
  let script = document.getElementById('fonti-schema-jsonld') as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = 'fonti-schema-jsonld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemaObj, null, 2);
}

