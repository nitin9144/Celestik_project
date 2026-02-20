# CELESTIK - Testing Guide

## 🧪 Manual Testing Checklist

Use this guide to test all features of the CELESTIK prototype.

### Prerequisites
- App running locally: `npm run dev`
- Browser open at: `http://localhost:5173/`
- Developer console open (F12)

---

## 1️⃣ HOME PAGE TESTING (/)

### Hero Section
- [ ] Page loads without errors
- [ ] CELESTIK branding displays correctly (split text with mandala in middle)
- [ ] Hero section background is dark cosmic color
- [ ] Text colors are gold/amber
- [ ] Responsive: Works on mobile, tablet, desktop
- [ ] Tagline visible: "Not magic. Just stardust and algorithms."

### How It Works Section
- [ ] Title "HOW IT WORKS" visible with decorative line
- [ ] 3 step cards display:
  - [ ] Step 1: "Upload Your Palm"
  - [ ] Step 2: "AI Analyzes Patterns"
  - [ ] Step 3: "Receive Your Report"
- [ ] Cards have icons (Sparkles, Zap)
- [ ] Numbered circles (1, 2, 3) visible
- [ ] Hover effect on cards (border/shadow change)
- [ ] Layout: 3 columns on desktop, 1 column on mobile

### Trust Section
- [ ] Title "WHY TRUST CELESTIK" visible
- [ ] 3 trust cards display:
  - [ ] "Secure Payment" with lock icon
  - [ ] "Private Data" with database icon
  - [ ] "No Future Predictions" with shield icon
- [ ] Each card has description text
- [ ] Trust badge at bottom visible
- [ ] Background gradient correct

### Astrology Coming Soon Section
- [ ] Stars animate (pulsing/bouncing)
- [ ] Title "ASTROLOGY COMING SOON" visible
- [ ] Teaser card displays features
- [ ] "Join the Cosmic Waitlist" button visible
- [ ] Button color is purple (different from amber)
- [ ] Clicking button navigates to /astrology

### Fixed CTA Button
- [ ] "START YOUR READING" button visible at bottom-right
- [ ] Button has pulsing animation
- [ ] Clicking button navigates to /palmistry
- [ ] Button is amber colored
- [ ] Button stays fixed while scrolling

---

## 2️⃣ PALMISTRY PAGE TESTING (/palmistry)

### Page Load
- [ ] Page loads correctly
- [ ] Cosmic background visible
- [ ] Decorative border frame visible
- [ ] Corner decorations on 4 corners visible

### Form Fields

#### Full Name Input
- [ ] Input field visible with label "FULL NAME"
- [ ] Can type text
- [ ] Placeholder text visible
- [ ] Focus styling works
- [ ] Error message appears if empty and try to submit
- [ ] Clearing input removes error

#### Gender Dropdown
- [ ] Dropdown visible with label "GENDER"
- [ ] Default says "Select gender"
- [ ] Options available: Male, Female, Other
- [ ] Can select each option
- [ ] Focus styling works
- [ ] Error message appears if not selected

#### Age Input
- [ ] Number input visible with label "AGE"
- [ ] Can type numbers
- [ ] Min value: 18, Max value: 120
- [ ] Typing age < 18 shows error: "Please enter a valid age (18-120)"
- [ ] Typing age > 120 shows error
- [ ] Empty field shows error

### Palm Image Upload

#### Drag & Drop
- [ ] Upload zone visible with upload icon
- [ ] Text says "Drag and drop your palm image here"
- [ ] Zone has dashed border
- [ ] Border turns amber when dragging file over it
- [ ] Dropping image loads it
- [ ] Non-image files rejected with error

#### Click to Browse
- [ ] "SELECT IMAGE" button visible
- [ ] Clicking opens file browser
- [ ] Selecting image from file browser loads it
- [ ] Only image files accepted

#### Image Preview
- [ ] After upload, shows image preview
- [ ] Preview shown in frame with border
- [ ] "Image uploaded successfully" message appears
- [ ] "Change Image" button visible
- [ ] Clicking "Change Image" allows re-uploading
- [ ] Image removed from form after change

### Form Submission
- [ ] All fields empty → "Proceed to Payment" disabled or shows errors
- [ ] Missing Full Name → Error shown
- [ ] Missing Gender → Error shown
- [ ] Missing Age → Error shown
- [ ] Missing Palm Image → Error shown
- [ ] All fields filled → Can submit
- [ ] Clicking "Proceed to Payment" navigates to /payment
- [ ] Form data stored in sessionStorage

### Back Button
- [ ] "Back to Palmistry" button visible
- [ ] Clicking goes back to previous page

### Responsive Design
- [ ] On mobile: Fields stack vertically
- [ ] On tablet: 2-column grid
- [ ] On desktop: 2-column grid maintained
- [ ] Images scale appropriately
- [ ] Text readable on all sizes
- [ ] Buttons large enough for touch

---

## 3️⃣ PAYMENT PAGE TESTING (/payment)

### Page Load
- [ ] Page loads correctly
- [ ] Shows previously entered data
- [ ] Back button visible

### User Details Card
- [ ] Shows "YOUR DETAILS" section
- [ ] Name field shows entered name
- [ ] Age field shows entered age
- [ ] Palm image thumbnail shows uploaded image
- [ ] Data correctly retrieved from sessionStorage

### What You Get Section
- [ ] "WHAT YOU'LL RECEIVE" section visible
- [ ] 3 benefits listed with lightning icons:
  - [ ] "Personality Insights..."
  - [ ] "Emotional Archetypes..."
  - [ ] "Life Path Themes..."
- [ ] Formatting looks good

### Price Section
- [ ] "VERIFICATION AMOUNT" label visible
- [ ] Large "₹1" text visible
- [ ] Tagline "Secure payment • Instant verification" visible

### Payment Button
- [ ] "Pay ₹1 & Generate Report" button visible
- [ ] Has zap icon and text
- [ ] Clicking button shows loading state
- [ ] Button text changes to "Processing..."
- [ ] Spinner appears during processing
- [ ] Button disabled during processing (grayed out)
- [ ] After 2 seconds, navigates to /report-processing

### Trust Badge
- [ ] Security badge visible at bottom
- [ ] Text readable: "Your data is secure..."

### Navigation
- [ ] Back button at top goes back to /palmistry
- [ ] Form data persists if you go back and return

---

## 4️⃣ REPORT PROCESSING PAGE TESTING (/report-processing)

### Page Load
- [ ] Page loads automatically after payment
- [ ] Shows "COSMIC ANALYSIS IN PROGRESS"
- [ ] Subtitle visible

### Progress Bar
- [ ] Progress bar visible (0% initially)
- [ ] Bar animates smoothly
- [ ] Percentage text updates: 0% → 25% → 50% → 75% → 100%
- [ ] Takes 8 seconds total
- [ ] Bar uses gradient background

### Processing Steps
- [ ] 4 steps visible in list:
  1. [ ] "Analyzing palm lines..."
  2. [ ] "Detecting personality archetypes..."
  3. [ ] "Generating cosmic profile..."
  4. [ ] "Compiling your stardust report..."
- [ ] Each step appears at correct color:
  - [ ] Pending steps: gray with number
  - [ ] Active step: amber with spinner
  - [ ] Completed steps: green with checkmark
- [ ] Steps progress in order

### Animations
- [ ] Processing takes ~8 seconds total
- [ ] Each step has 2-second duration
- [ ] Smooth transitions between steps
- [ ] Pulsing dots animation visible
- [ ] Text visible: "Connecting with the cosmic threads..."

### Auto Redirect
- [ ] After 8 seconds, auto-navigates to /report-ready
- [ ] No manual action needed
- [ ] Loading state completes before redirect

---

## 5️⃣ REPORT READY PAGE TESTING (/report-ready)

### Page Load
- [ ] Page loads correctly
- [ ] Shows form data from sessionStorage
- [ ] Sparkles icon animating at top

### Header
- [ ] Title: "YOUR STARDUST REPORT IS READY"
- [ ] Subtitle: "Your cosmic truth awaits"
- [ ] Personalized greeting: "Greetings, [Full Name]"
- [ ] Age display: "Age [age]"

### Report Sections
- [ ] 3 sections visible with star icons

#### Personality Insights
- [ ] Star icon visible
- [ ] Title: "PERSONALITY INSIGHTS"
- [ ] Description text readable
- [ ] Sample insights provided

#### Emotional Archetypes
- [ ] Star icon visible
- [ ] Title: "EMOTIONAL ARCHETYPES"
- [ ] Archetype names visible: "The Visionary", "The Nurturer"
- [ ] Description text readable

#### Life Path Themes
- [ ] Star icon visible
- [ ] Title: "LIFE PATH THEMES"
- [ ] Theme descriptions visible
- [ ] Formatting consistent with other sections

### Palm Image Display
- [ ] Labeled "YOUR ANALYZED PALM"
- [ ] Shows uploaded palm image
- [ ] Image displayed in frame
- [ ] Image scaling appropriate

### Download Button
- [ ] "Download Report" button visible with icon
- [ ] Clicking button triggers download
- [ ] File downloads to default folder
- [ ] File named appropriately

### Share Button
- [ ] "Share Reading" button visible with icon
- [ ] Clicking opens share dialog (if supported by browser)
- [ ] Fallback alert shows if share not supported
- [ ] Share message shows: "I just discovered my cosmic truth..."

### Astrology Coming Soon Section
- [ ] Purple gradient card visible
- [ ] "ASTROLOGY COMING SOON" title visible
- [ ] Features listed
- [ ] "Join Waitlist" button visible
- [ ] Clicking button navigates to /astrology

### Navigation Options
- [ ] "Back to Home" button visible
- [ ] Clicking goes to /
- [ ] Other navigation options available

---

## 6️⃣ ASTROLOGY PAGE TESTING (/astrology)

### Content
- [ ] Page loads
- [ ] "ASTROLOGY Coming Soon" message visible
- [ ] Decorative elements visible
- [ ] Navigation button to palmistry works

---

## 7️⃣ RESPONSIVE DESIGN TESTING

### Mobile (< 768px)
- [ ] Test on device or browser dev tools (375px width)
- [ ] All content visible
- [ ] Text readable without zoom
- [ ] Buttons large enough to tap
- [ ] Forms stack vertically
- [ ] Images scale appropriately

### Tablet (768px - 1024px)
- [ ] Test at 768px width
- [ ] 2-column layouts appear
- [ ] Content balanced
- [ ] Spacing optimized

### Desktop (> 1024px)
- [ ] Full multi-column layouts
- [ ] Hover effects work
- [ ] All animations smooth

---

## 8️⃣ BROWSER COMPATIBILITY TESTING

Test in these browsers:
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (if on Mac)
- [ ] Mobile Safari (if on iOS)
- [ ] Chrome Mobile (if on Android)

Verify:
- [ ] No console errors
- [ ] All features work
- [ ] Layout looks correct
- [ ] Animations smooth

---

## 9️⃣ PERFORMANCE TESTING

### Page Load
- [ ] Home page loads < 2 seconds
- [ ] Initial interaction < 100ms
- [ ] No layout shift issues

### Animations
- [ ] Progress bar smooth (60fps target)
- [ ] Step transitions smooth
- [ ] Button effects smooth

### Storage
- [ ] SessionStorage used correctly
- [ ] Data persists across pages
- [ ] No console warnings about storage

---

## 🔟 DATA FLOW TESTING

### Complete User Journey
1. [ ] Start at home page
2. [ ] Click "START YOUR READING"
3. [ ] Navigate to palmistry page
4. [ ] Fill form completely
5. [ ] Click "Proceed to Payment"
6. [ ] Verify data shows on payment page
7. [ ] Click "Pay ₹1"
8. [ ] Wait for processing
9. [ ] Auto-navigate to report ready
10. [ ] Verify report shows correct data
11. [ ] Verify download works
12. [ ] Verify share works
13. [ ] Navigate back to home
14. [ ] Click back button to test back action
15. [ ] All navigation works

### Data Persistence
- [ ] Form data available on payment page
- [ ] Data persists if navigate back
- [ ] Data clears on page refresh (expected)
- [ ] No errors in console during flow

---

## ⚠️ ERROR HANDLING TESTING

### Form Validation
- [ ] Submit with all empty fields → Shows all errors
- [ ] Submit with invalid age → Shows specific error
- [ ] Submit with no image → Shows specific error
- [ ] Fix error and resubmit → Works

### Edge Cases
- [ ] Upload very large image → Handles gracefully
- [ ] Upload non-image file → Shows error
- [ ] Type special characters in name → Accepts
- [ ] Refresh during processing → Handles gracefully

---

## 📝 Test Result Summary

### Pass Requirements (✅)
- [ ] All pages load without errors
- [ ] Form validation works completely
- [ ] Complete user flow works
- [ ] Responsive design works on all sizes
- [ ] Animations are smooth
- [ ] Navigation is intuitive
- [ ] No console errors

### Optional Enhancements
- [ ] Add more validation rules
- [ ] Implement backend API
- [ ] Add more animations
- [ ] Add loading skeleton screens

---

## 🐛 Bug Report Template

If you find issues:

```
Title: [Brief description]
Page: [Which page]
Browser: [Chrome/Firefox/Safari]
Device: [Mobile/Tablet/Desktop]
Steps to Reproduce:
1. ...
2. ...
3. ...
Expected: [What should happen]
Actual: [What actually happens]
Console Error: [Yes/No, copy if yes]
```

---

**Testing Status**: Ready for user testing ✅
**Date Tested**: [Fill with date]
**Tester**: [Your name]
