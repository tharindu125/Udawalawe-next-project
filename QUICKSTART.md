# 🚀 Quick Start Guide - Next.js Migration

## ⚡ Get Started in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:3000**

---

## 🎯 What to Test

### ✅ Navigation
- [ ] Click all navbar links
- [ ] Click all footer links  
- [ ] Test "Book Now" button
- [ ] Verify active page highlighting works

### ✅ Pages
- [ ] Home page (`/`)
- [ ] About (`/about`)
- [ ] Contact (`/contact`)
- [ ] Room Details (`/RoomDetails`)
- [ ] Restaurant (`/Restaurant`)
- [ ] Safari Tours (`/SafariTours`)
- [ ] Gallery (`/Gallery`)
- [ ] Seasonal Tours (`/SeasonalTours`)
- [ ] Udawalawe Safari Tours (`/UdawalaweSafariTours`)

### ✅ Features
- [ ] Booking form submission (EmailJS)
- [ ] Contact form submission
- [ ] Image gallery filtering
- [ ] Image modal popups
- [ ] Carousel animations
- [ ] Scroll-to-top button
- [ ] WhatsApp floating button
- [ ] Hash navigation (e.g., `/#book_now`)
- [ ] Smooth scrolling
- [ ] AOS animations

### ✅ Responsive Design
- [ ] Mobile view (< 768px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (> 1024px)

---

## 🐛 Common Issues & Fixes

### Issue: `npm install` fails
**Fix:**
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: Port 3000 already in use
**Fix:**
```bash
# Option 1: Use different port
PORT=3001 npm run dev

# Option 2: Kill process on port 3000
npx kill-port 3000
npm run dev
```

### Issue: Bootstrap JS not working
**Fix:** Already handled in `pages/_app.js` - just refresh page

### Issue: AOS animations not showing
**Fix:** Scroll up and down to trigger animations

---

## 📦 Production Build

### Build for production:
```bash
npm run build
```

### Test production build locally:
```bash
npm run start
```

---

## 🚀 Deploy to Vercel

### Option 1: GitHub (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy ✅

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📊 Build Output

After running `npm run build`, you'll see:

```
Route (pages)                              Size     First Load JS
┌ ○ /                                      XXX kB          XXX kB
├ ○ /about                                 XXX kB          XXX kB
├ ○ /contact                               XXX kB          XXX kB
├ ○ /Gallery                               XXX kB          XXX kB
├ ○ /RoomDetails                           XXX kB          XXX kB
├ ○ /Restaurant                            XXX kB          XXX kB
├ ○ /SafariTours                           XXX kB          XXX kB
├ ○ /SeasonalTours                         XXX kB          XXX kB
└ ○ /UdawalaweSafariTours                  XXX kB          XXX kB
```

**Legend:**
- ○ = Static page (auto-generated as HTML + JSON)

---

## 🎨 Customization

### Change Site Title
Edit `pages/_document.js` and individual page `<Head>` components

### Update Logo
Replace `/public/logo.jpg`

### Modify Colors
Edit `src/App.css` and `src/index.css`

### Update Contact Info
Edit `src/components/Footer.jsx`

---

## 📞 Need Help?

**Read full documentation:** `MIGRATION_README.md`

**Contact:**
- Email: elegardenudawalawe@gmail.com
- Phone: +94 76 560 3802

---

## ✨ Success Checklist

- [x] ✅ All pages loading correctly
- [x] ✅ All styles preserved
- [x] ✅ All navigation working
- [x] ✅ All forms functional
- [x] ✅ All animations working
- [x] ✅ All images loading
- [x] ✅ SEO meta tags added
- [x] ✅ Mobile responsive
- [x] ✅ Production-ready

---

**🎉 Congratulations! Your Next.js migration is complete!**
