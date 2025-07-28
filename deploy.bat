@echo off
echo 🚀 Deploying portfolio to GitHub Pages...
echo.

echo Adding all changes to git...
git add .

echo.
echo Committing changes...
git commit -m "🚀 Major portfolio revamp: Modern UI, dynamic content, new projects"

echo.
echo Pushing to main branch...
git push origin main

echo.
echo ✅ Portfolio successfully deployed to GitHub Pages!
echo 🌐 Your site will be available at: https://srihaas007.github.io
echo 📱 Photography gallery: https://srihaas007.github.io/photography.html
echo.

pause
