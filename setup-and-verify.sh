#!/bin/bash

# 🚀 Next.js Migration - Installation & Verification Script
# Run this script after migration to ensure everything is set up correctly

echo "=================================================="
echo "🎉 Udawalawe Elegarden Hotel - Next.js Setup"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print status
print_status() {
    if [ $1 -eq 0 ]; then
        echo -e "${GREEN}✅ $2${NC}"
    else
        echo -e "${RED}❌ $2${NC}"
    fi
}

# 1. Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node -v 2>/dev/null)
if [ $? -eq 0 ]; then
    print_status 0 "Node.js installed: $node_version"
else
    print_status 1 "Node.js not found. Please install Node.js 18.x or higher"
    exit 1
fi
echo ""

# 2. Check npm version
echo "📦 Checking npm version..."
npm_version=$(npm -v 2>/dev/null)
if [ $? -eq 0 ]; then
    print_status 0 "npm installed: $npm_version"
else
    print_status 1 "npm not found"
    exit 1
fi
echo ""

# 3. Check required files
echo "📂 Checking project structure..."
required_files=(
    "package.json"
    "next.config.js"
    "jsconfig.json"
    ".eslintrc.json"
    "pages/_app.js"
    "pages/_document.js"
    "pages/index.js"
)

all_files_exist=true
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        print_status 0 "$file exists"
    else
        print_status 1 "$file missing"
        all_files_exist=false
    fi
done
echo ""

if [ "$all_files_exist" = false ]; then
    echo -e "${RED}❌ Some required files are missing. Please check the migration.${NC}"
    exit 1
fi

# 4. Install dependencies
echo "📥 Installing dependencies..."
echo -e "${YELLOW}This may take a few minutes...${NC}"
npm install
if [ $? -eq 0 ]; then
    print_status 0 "Dependencies installed successfully"
else
    print_status 1 "Failed to install dependencies"
    exit 1
fi
echo ""

# 5. Check if Next.js is installed
echo "🔍 Verifying Next.js installation..."
if [ -f "node_modules/.bin/next" ]; then
    next_version=$(node_modules/.bin/next --version 2>/dev/null)
    print_status 0 "Next.js installed: $next_version"
else
    print_status 1 "Next.js not found in node_modules"
    exit 1
fi
echo ""

# 6. Build test
echo "🏗️  Testing production build..."
echo -e "${YELLOW}This will take a few minutes...${NC}"
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    print_status 0 "Production build successful"
else
    print_status 1 "Production build failed - check console for errors"
    echo ""
    echo "Run 'npm run build' to see detailed error messages"
    exit 1
fi
echo ""

# 7. Check pages
echo "📄 Verifying pages..."
pages=(
    "pages/index.js"
    "pages/about.js"
    "pages/contact.js"
    "pages/Gallery.js"
    "pages/RoomDetails.js"
    "pages/Restaurant.js"
    "pages/SafariTours.js"
    "pages/SeasonalTours.js"
    "pages/UdawalaweSafariTours.js"
)

for page in "${pages[@]}"; do
    if [ -f "$page" ]; then
        print_status 0 "$page"
    else
        print_status 1 "$page missing"
    fi
done
echo ""

# 8. Check components
echo "🧩 Verifying components..."
components=(
    "src/components/CustomNavbar.jsx"
    "src/components/Footer.jsx"
    "src/components/FloatingButtons.jsx"
    "src/components/MainCarousel.jsx"
)

for component in "${components[@]}"; do
    if [ -f "$component" ]; then
        print_status 0 "$component"
    else
        print_status 1 "$component missing"
    fi
done
echo ""

# 9. Summary
echo "=================================================="
echo "✨ Setup Complete!"
echo "=================================================="
echo ""
echo "🎯 Next Steps:"
echo ""
echo "1. Start development server:"
echo "   npm run dev"
echo ""
echo "2. Open browser:"
echo "   http://localhost:3000"
echo ""
echo "3. Test all pages:"
echo "   ✅ Home, About, Contact, Gallery"
echo "   ✅ Rooms, Restaurant, Safari Tours"
echo ""
echo "4. Deploy when ready:"
echo "   - Push to GitHub"
echo "   - Import in Vercel"
echo "   - Deploy! 🚀"
echo ""
echo "=================================================="
echo "📚 Documentation:"
echo "   - MIGRATION_SUMMARY.md - Quick overview"
echo "   - QUICKSTART.md - Quick start guide"
echo "   - MIGRATION_README.md - Full documentation"
echo "=================================================="
echo ""
echo -e "${GREEN}🎉 Success! Your Next.js migration is ready!${NC}"
echo ""
