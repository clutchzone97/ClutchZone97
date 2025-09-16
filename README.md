# ClutchZone - منصة بيع السيارات والعقارات

منصة متكاملة لبيع وشراء السيارات والعقارات مع واجهة مستخدم سهلة الاستخدام ولوحة تحكم للإدارة.

## المميزات

- عرض وتصفح السيارات والعقارات
- لوحة تحكم للإدارة
- رفع وعرض الصور باستخدام Cloudinary
- تخزين البيانات في MongoDB
- دعم اللغتين العربية والإنجليزية
- حاسبة التقسيط
- نموذج طلب الشراء

## التقنيات المستخدمة

### الواجهة الأمامية (Frontend)
- React.js
- Tailwind CSS
- React Query
- React Router
- i18next للترجمة

### الخادم (Backend)
- Node.js
- Express.js
- MongoDB مع Mongoose
- Cloudinary لتخزين الصور
- JWT للمصادقة

## متطلبات التشغيل

- Node.js (الإصدار 14 أو أحدث)
- npm أو yarn
- حساب MongoDB
- حساب Cloudinary

## طريقة التشغيل

### إعداد الخادم (Backend)

1. انتقل إلى مجلد الخادم:
   ```
   cd server
   ```

2. قم بتثبيت الاعتماديات:
   ```
   npm install
   ```

3. قم بإنشاء ملف `.env` باستخدام المتغيرات من ملف `.env.example`:
   ```
   cp .env.example .env
   ```

4. قم بتعديل ملف `.env` بإضافة بيانات الاتصال الخاصة بك.

5. قم بتشغيل الخادم:
   ```
   npm start
   ```

### إعداد الواجهة الأمامية (Frontend)

1. انتقل إلى مجلد العميل:
   ```
   cd client
   ```

2. قم بتثبيت الاعتماديات:
   ```
   npm install
   ```

3. قم بإنشاء ملف `.env` باستخدام المتغيرات من ملف `.env.example`:
   ```
   cp .env.example .env
   ```

4. قم بتعديل ملف `.env` بإضافة عنوان API الخاص بك.

5. قم بتشغيل تطبيق الواجهة الأمامية:
   ```
   npm run dev
   ```

## النشر على Vercel

### نشر الخادم (Backend)

1. قم بإنشاء حساب على [Vercel](https://vercel.com) إذا لم يكن لديك حساب.

2. قم بتثبيت Vercel CLI:
   ```
   npm install -g vercel
   ```

3. انتقل إلى مجلد الخادم وقم بتنفيذ:
   ```
   vercel
   ```

4. اتبع التعليمات لإكمال عملية النشر.

5. قم بإضافة متغيرات البيئة في لوحة تحكم Vercel.

### نشر الواجهة الأمامية (Frontend)

1. انتقل إلى مجلد العميل وقم بتنفيذ:
   ```
   vercel
   ```

2. اتبع التعليمات لإكمال عملية النشر.

3. قم بإضافة متغير البيئة `VITE_API_URL` في لوحة تحكم Vercel وضبطه على عنوان URL الخاص بالخادم المنشور.

## النشر على GitHub

1. قم بإنشاء مستودع جديد على GitHub.

2. قم بتهيئة Git في المجلد المحلي:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

## الترخيص

هذا المشروع مرخص بموجب [MIT License](LICENSE).