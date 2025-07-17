# 游戏图片目录说明

## 📁 目录结构

```
public/images/games/
├── eggy-car.jpg          # Eggy Car游戏图片
├── run3.jpg              # Run3游戏图片
├── space-wars.jpg        # Space Wars游戏图片
├── card-master.jpg       # Card Master游戏图片
├── placeholder.svg       # 占位符图片
└── README.md            # 说明文档
```

## 🖼️ 图片要求

### 格式支持
- ✅ JPG/JPEG
- ✅ PNG
- ✅ WebP
- ✅ SVG
- ✅ AVIF

### 尺寸建议
- **推荐尺寸**: 400x300 像素 (4:3 比例)
- **最小尺寸**: 200x150 像素
- **最大文件**: 500KB 以下

### 命名规范
- 使用小写字母和连字符
- 与游戏文件夹名称对应
- 例如：`eggy-car.jpg`, `run3.png`

## 🎮 添加新游戏图片

### 1. 准备图片
- 确保图片清晰，能够代表游戏内容
- 建议使用游戏截图或官方图标
- 压缩图片以提高加载速度

### 2. 添加到目录
```bash
# 将图片复制到目录
cp /path/to/your-game-image.jpg public/images/games/your-game-name.jpg
```

### 3. 更新游戏数据
在 `lib/game-data.ts` 中更新相应游戏的 `image` 字段：
```typescript
{
  id: 5,
  title: "Your Game Name",
  // ... other fields
  image: "/images/games/your-game-name.jpg",
  // ... other fields
}
```

## 🔧 故障排除

### 图片不显示？
1. 检查文件路径是否正确
2. 确认图片文件存在
3. 检查文件权限
4. 查看浏览器控制台错误信息

### 图片加载失败？
- 系统会自动显示 🎮 占位符
- 检查图片格式是否支持
- 确认图片文件没有损坏

## 📝 注意事项

1. **版权问题**: 确保使用的图片有合法使用权
2. **性能优化**: 大图片会影响页面加载速度
3. **响应式**: 图片会自动适配不同设备尺寸
4. **缓存**: 浏览器会缓存图片，修改后可能需要强制刷新

## 🎨 图片优化建议

### 在线工具
- [TinyPNG](https://tinypng.com/) - PNG/JPG压缩
- [Squoosh](https://squoosh.app/) - 在线图片优化
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - SVG优化

### 命令行工具
```bash
# 使用ImageMagick调整尺寸
convert input.jpg -resize 400x300^ -gravity center -extent 400x300 output.jpg

# 使用FFmpeg转换格式
ffmpeg -i input.jpg -q:v 85 output.webp
``` 