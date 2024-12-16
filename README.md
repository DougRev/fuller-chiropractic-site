# Fuller Chiropractic Website

## Overview
This project is a website for **Fuller Chiropractic**, a trusted provider of chiropractic care and wellness services in Brownsburg, Indiana. The site showcases various treatments, including laser therapy, detox footbaths, chiropractic care, and introduces users to Dr. Garry Fuller and his team. It also features an admin dashboard for managing alerts and messages.

---

## Features

### 1. **Landing Page**
   - Hero section with a dynamic background image.
   - Sections highlighting services, testimonials, and FAQs.

### 2. **Service Pages**
   - Individual pages for services like Laser Therapy, Detox Footbath, and Chiropractic Care.
   - Each page includes a hero section, detailed descriptions, and call-to-action buttons.

### 3. **Meet the Doctor Page**
   - Dedicated page introducing Dr. Garry Fuller, his qualifications, and his approach to chiropractic care.
   - Includes a personalized message and call-to-action.

### 4. **Admin Dashboard**
   - Allows admin users to manage alerts, messages, and users.
   - Role-based authentication for secure access.

### 5. **Contact Page**
   - Simple contact form for inquiries.
   - Integrated with Firebase for real-time messaging.

---

## Technology Stack

### Frontend
- **React**: Component-based framework for building the UI.
- **Tailwind CSS**: For responsive styling.
- **React Router**: For managing page navigation.

### Backend
- **Firebase**:
   - **Hosting**: Deploying the production build.
   - **Firestore**: Storing alerts, messages, and user data.
   - **Storage**: Hosting images for the site.
   - **Authentication**: Securing the admin login.

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v8 or higher)
- **Firebase CLI**

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/fuller-chiropractic.git
   cd fuller-chiropractic
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Log in to Firebase CLI:
     ```bash
     firebase login
     ```
   - Initialize Firebase:
     ```bash
     firebase init
     ```

4. Start the development server:
   ```bash
   npm start
   ```
   Access the site at [http://localhost:3000](http://localhost:3000).

5. Build and deploy the app:
   ```bash
   npm run build
   firebase deploy
   ```

---

## File Structure

```plaintext
src/
|-- components/
|   |-- HeroSection.js
|   |-- OverlayServiceBoxes.js
|   |-- StatsBanner.js
|   |-- FAQ.js
|-- pages/
|   |-- LandingPage.js
|   |-- ChiropracticCare.js
|   |-- LaserTherapy.js
|   |-- DetoxFootbath.js
|   |-- MeetTheDoctorPage.js
|   |-- AdminDashboard.js
|   |-- AdminLogin.js
|-- utils/
|   |-- firebaseConfig.js
|-- App.js
|-- index.js
|-- tailwind.config.js
```

---

## Deployment
The app is deployed on Firebase Hosting. Follow these steps to redeploy:
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```
3. Access the live site via the provided Firebase URL.

---

## Future Enhancements
- Add a blog section for SEO purposes.
- Implement analytics to monitor site traffic and user engagement.
- Enhance the admin dashboard with reporting features.

---

## Contributors
- **Lead Developer**: [Your Name]
- **Designer**: [Optional Contributor]

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Contact
For questions or inquiries, contact us at **info@fullerchiropractic.com** or visit our website.