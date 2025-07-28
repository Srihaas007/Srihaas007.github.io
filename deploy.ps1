# Deploy to GitHub Pages

# Add all changes
Write-Host "Adding all changes to git..." -ForegroundColor Green
git add .

# Commit changes
$commitMessage = "🚀 Major portfolio revamp: Modern UI, dynamic content, new projects"
Write-Host "Committing changes with message: $commitMessage" -ForegroundColor Green
git commit -m $commitMessage

# Push to main branch
Write-Host "Pushing to main branch..." -ForegroundColor Green
git push origin main

Write-Host "✅ Portfolio successfully deployed to GitHub Pages!" -ForegroundColor Green
Write-Host "🌐 Your site will be available at: https://srihaas007.github.io" -ForegroundColor Cyan
Write-Host "📱 Photography gallery: https://srihaas007.github.io/photography.html" -ForegroundColor Cyan

# Optional: Open the live site
$openSite = Read-Host "Would you like to open the live site? (y/n)"
if ($openSite -eq "y" -or $openSite -eq "Y") {
    Start-Process "https://srihaas007.github.io"
}
