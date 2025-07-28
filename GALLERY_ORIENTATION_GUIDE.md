# Photography Gallery Orientation Guide

## How to Use the New Mixed Layout System

Your photography galleries now support **three different container orientations** to prevent image stretching:

### 🔧 **Available Orientations:**

1. **`landscape`** - 4:3 aspect ratio (wider than tall)
   - Best for: Horizontal photos, landscapes, architecture
   - Container: 4 units wide × 3 units tall

2. **`portrait`** - 3:4 aspect ratio (taller than wide)
   - Best for: Vertical photos, portraits, tall buildings
   - Container: 3 units wide × 4 units tall

3. **`square`** - 1:1 aspect ratio (equal width and height)
   - Best for: Square crops, Instagram-style photos
   - Container: Equal width and height

### 📝 **How to Assign Orientations:**

In each gallery file (aesthetics.html, city-lights.html, etc.), find the photo data array and add an `orientation` property:

```javascript
const aestheticsPhotos = [
    {
        src: "your-image-url",
        title: "Photo Title",
        description: "Photo description",
        orientation: "landscape"  // ← Add this line
    },
    {
        src: "your-image-url",
        title: "Another Photo",
        description: "Description",
        orientation: "portrait"   // ← Or this for vertical photos
    }
];
```

### 🎯 **Layout Result:**

- **Desktop**: Exactly 2 photos per row with mixed orientations
- **Mobile**: Single column, all orientations preserved
- **No Stretching**: Images fit naturally within their assigned containers
- **Professional Look**: Mix of different aspect ratios creates visual interest

### 🛠️ **Updated Files:**

✅ **CSS Framework**: `css/photography.css` - supports all three orientations
✅ **Aesthetics Gallery**: Mixed orientations already configured
✅ **City Lights Gallery**: Mixed orientations configured
✅ **Animals Gallery**: Mixed orientations configured
✅ **Utility Functions**: All galleries now use `c-at_max` for natural proportions

### 📋 **Next Steps for You:**

1. **Review each photo** in your collections
2. **Assign the best orientation** for each image:
   - Wide photos → `"landscape"`
   - Tall photos → `"portrait"`
   - Square photos → `"square"`
3. **Update the photo data arrays** in each gallery file
4. **Test the layout** to ensure photos look natural

### 💡 **Pro Tips:**

- **Mix orientations** in each row for visual variety
- **Group similar photos** by keeping some consistency
- **Default to landscape** if you're unsure (will use landscape if orientation is missing)
- **Test on mobile** to ensure single-column layout works well

This new system gives you **complete control** over how each photo is displayed while maintaining a clean 2-photos-per-row layout!
