# ساخت APK فیت سنتر با GitHub Actions

این پروژه برای ساخت APK با GitHub Actions آماده شده است.

## روش استفاده

1. کل محتویات این پروژه را در یک Repository جدید GitHub قرار دهید.
2. Repository را روی Branch اصلی (`main`) Push کنید.
3. از تب **Actions** وارد workflow با نام **Build FIT CENTER Android APK** شوید.
4. برای اجرای دستی، گزینه **Run workflow** را بزنید.
5. بعد از پایان موفق Build، از بخش **Artifacts** فایل `fitcenter-apk` را دریافت کنید.

## نکته

این workflow برای تحویل سریع یک APK قابل نصب از نسخه فعلی برنامه تنظیم شده و از `assembleDebug` استفاده می‌کند. برای انتشار در Google Play یا ساخت نسخه Release امضاشده، مرحله امضای Android باید جداگانه تنظیم شود.
