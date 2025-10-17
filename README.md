# Yates Funeral Home - Pre-Planning Guide Funnel

A Next.js lead generation funnel for Yates Funeral Home, designed to capture leads through Facebook Ads and deliver a free pre-planning guide via email.

## Features

- **Meta Pixel Integration** - Track PageView, Lead, and CompleteRegistration events
- **Resend Email Integration** - Automated email delivery to leads and notifications to staff
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **TypeScript** - Full type safety throughout the application
- **SEO Optimized** - Proper meta tags and semantic HTML

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then update the following variables:

```env
# Meta Pixel ID (from your Facebook Ads Manager)
NEXT_PUBLIC_META_PIXEL_ID=your_actual_pixel_id

# Resend API Key (from resend.com)
RESEND_API_KEY=re_your_actual_api_key

# Email addresses
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=info@yatesfuneralhome.com
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the funnel.

### 4. Deploy to Vercel

The easiest way to deploy is with Vercel:

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Important:** Add your environment variables in the Vercel dashboard under Project Settings → Environment Variables.

## Getting Your API Keys

### Meta Pixel ID

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Select your pixel or create a new one
3. Copy the Pixel ID (it's a string of numbers)
4. Add it to your `.env.local` file

### Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (or use their test domain for development)
3. Generate an API key from the dashboard
4. Add it to your `.env.local` file

## Funnel Flow

1. **Landing Page** (`/`) - Visitor sees benefits of pre-planning and fills out form
2. **Form Submission** - Data sent to `/api/submit` endpoint
3. **Email Delivery** - Lead receives guide via Resend, staff gets notification
4. **Thank You Page** (`/thank-you`) - Confirmation with conversion tracking

## Meta Pixel Events

The funnel tracks these events:

- `PageView` - Automatically tracked on all pages
- `Lead` - Tracked when form is successfully submitted
- `CompleteRegistration` - Tracked when user lands on thank you page

## Customization

### Adding the Actual PDF Guide

Currently, the email template mentions the guide but doesn't attach it. To add the actual PDF:

1. Upload your PDF to the `/public` folder (e.g., `/public/pre-planning-guide.pdf`)
2. Update the API route at `app/api/submit/route.ts` to attach the file using Resend's attachment feature:

```typescript
const leadEmail = await resend.emails.send({
  from: fromEmail,
  to: email,
  subject: "Your Free Pre-Planning Guide from Yates Funeral Home",
  html: `...`,
  attachments: [
    {
      filename: 'pre-planning-guide.pdf',
      path: './public/pre-planning-guide.pdf',
    },
  ],
});
```

### Updating Colors and Branding

The design uses slate colors. To match Yates Funeral Home branding:

1. Update `tailwind.config.ts` to add custom colors
2. Replace color classes throughout the components
3. Add logo to `/public` folder and update layout

### Phone Number

Update the phone number in `app/thank-you/page.tsx` (currently shows `tel:+15551234567`)

## Project Structure

```
├── app/
│   ├── api/
│   │   └── submit/
│   │       └── route.ts          # Form submission API endpoint
│   ├── thank-you/
│   │   └── page.tsx               # Thank you page with conversion tracking
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout with Meta Pixel
│   └── page.tsx                   # Main landing page
├── components/
│   ├── MetaPixel.tsx              # Meta Pixel integration
│   └── PrePlanningForm.tsx        # Lead capture form
├── public/                        # Static assets
├── .env.example                   # Example environment variables
└── package.json
```

## Testing

Before going live:

1. Test form submission with a real email address
2. Verify Meta Pixel events in Facebook Events Manager
3. Check that both lead and notification emails are received
4. Test on mobile devices
5. Run a small test campaign before full launch

## Support

For issues or questions, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Resend Documentation](https://resend.com/docs)
- [Meta Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
